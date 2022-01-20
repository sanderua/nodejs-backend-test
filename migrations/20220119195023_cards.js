export function up(knex) {
  return knex.schema.createTable('cards', table => {
    // todo: cards table schema
  })
}

export function down(knex) {
  return knex.schema.dropTable('cards')
}
