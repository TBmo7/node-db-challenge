
exports.seed = function(knex,Promise) {

      return knex('tasks').insert([
        {task_description:'Caged',task_notes:'locked in perpetual motion',completed:true,project_id:1},
        {task_description:'Carving our wounds wide open',task_notes:'you let the wrong one in',completed:false,project_id:1},
        {task_description:'There are no fingerprints',task_notes:'deep underwater',completed:false,project_id:2},
        {task_description:'nothing to tie one to a crime',task_notes:'murmaider',completed:true,project_id:2}
      
      ]);
    
};
