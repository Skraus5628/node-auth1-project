exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {username: 'testuser1', password: 'abc123'},
        {username: 'testuser2', password: 'abc1234'},
        {username: 'testuser3', password: 'abc1234'}
      ]);
    });
};