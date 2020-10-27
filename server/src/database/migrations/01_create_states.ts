import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable("states", table => {
        table.increments('id').primary();
        table.string('state').notNullable();


        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
   
    });

}

export async function down(knex: Knex) {
    return knex.schema.dropTable('states');
}