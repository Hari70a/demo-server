module.exports = function() {
  var faker = require("faker");
  var _ = require("lodash");
  return {
    posts: _.times(100, function(n) {
      return {
        id: n + 1,
        title: faker.name.title(),
        author: faker.name.findName()
      };
    })
  };
};
