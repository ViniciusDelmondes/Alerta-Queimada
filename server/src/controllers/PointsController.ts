import { Request, Response } from 'express';
import db from '../database/connection';
import knex from 'knex';

export default class UsersController {

    async index(request: Request, response: Response) {
        const filters = request.query;

        const state = filters.state as string;

        if (!state) {
            return response.status(400).json({
                error: 'Missing filter to search professionals'
            })
        }

        const states = await db('states')

            .where('states.state', '=', state)
            .join('points', 'states.point_id', '=', 'points.id')
            .select(['states.*', 'points.*'])

            const serializedPoints = states.map(state => {
                return {
                    ...state,
                    image_url: `http://192.168.15.6:3333/uploads/${state.image}`
                }
            })

            return response.json(serializedPoints)
    }

    async create(request: Request, response: Response) {
        const {
            name,
            email,
            date,
            horario,
            observacao, 
            state,
            latitude,
            longitude,
        } = request.body;

        const trx = await db.transaction()

        try {
            const insertedPointsIds = await trx('points').insert({
                name,
                email,
                date,
                horario,
                state,
                observacao,
                latitude,
                longitude,
                image: request.file.filename
            });

            const point_id = insertedPointsIds[0];

            const insertedAreasIds = await trx('states').insert({
                state,
                point_id,
            });

            await trx.commit();

            return response.status(201).send();

        } catch (err) {
            //Serve para desfazer qualquer alteração no banco no memento do try
            await trx.rollback();

            return response.status(400).json({
                error: 'Unexpected error while creating new point'
            })
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const point = await knex('points').where('id', id).first();

        if (!point) {
            return response.status(400).json({ message: 'Point not found' })
        }
    }
}
