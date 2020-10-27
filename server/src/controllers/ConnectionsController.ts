import {Request, Response}  from 'express'
import db from '../database/connection';

export default class ConnectionsController {
    // Listando conexões salvas
    async index(request: Request, response: Response){
        const totalConnections = await db('connections').count('* as total');

        const {total} = totalConnections[0];

        return response.json({total})
    }  

    // Criando uma conexão
    async create(request: Request, response: Response){
        const {point_id} = request.body;

        await db('connections').insert({
          point_id,
        })

        return response.status(201).send();
    }
}
