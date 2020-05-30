
exports.seed = function(knex,Promise) {
 
      return knex('projects').insert([
        {project_name: 'Gravitys Union', project_description: 'You let the wrong one in', completed:true},
        {project_name: 'Murmaider', project_description: 'We brings metals the the fishes', completed:false}
        
      ]);
    
};
