
exports.seed = function(knex, Promise) {
  
      return knex('resources').insert([
        {resource_name: 'scalpel', description: 'a scalpel'},
        {resource_name: 'shiv', description: 'a crude stabbing implement'},
        {resource_name: 'chain', description: ''},
        {resource_name: 'desire', description: ''}
        
      ]);
    
};
