
exports.up = function(knex) {
  return knex.schema
  .createTable('projects',tbl=>{
      tbl.increments('id');
      tbl.string('project_name',128).notNullable();
      tbl.string('project_description');
      tbl.boolean('completed').notNullable().defaultTo(false)
  })
   .createTable('resources',tbl=>{
       tbl.increments('id');
       tbl.string('resource_name').notNullable();
       tbl.unique('resource_name');
       tbl.string('description');
   }) 
  .createTable('tasks',tbl=>{
      tbl.increments('id');
      tbl.string('task_description').notNullable();
      tbl.string('task_notes');
      tbl.boolean('completed').notNullable().defaultTo(false)
      tbl.integer('project_id')
      .notNullable()
      .unsigned()
      .references('projects.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
  .createTable('project_resources',tbl=>{
      tbl.integer('project_id')
        .notNullable()
        .unsigned()
        .references('projects.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('resource_id')
        .notNullable()
        .unsigned()
        .references('resources.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      tbl.primary(['project_id','resource_id'])  
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
