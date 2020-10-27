import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.date('date').notNullable();
        table.time('horario').notNullable();
        table.string('state').notNullable();
        table.string('observacao').notNullable();
        table.string('latitude').notNullable();
        table.string('longitude').notNullable();
        table.string('image').notNullable();
    });

}

export async function down(knex: Knex){
    return knex.schema.dropTable('points');
}