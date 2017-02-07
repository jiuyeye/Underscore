var _ = require('underscore');
_.each([1, 2, 3], function(num){
  console.log("underscore.js says " + num);
});
_.map([1, 2, 3], function(num){ console.log("underscore.js says " + num * 3); });
// [3, 6, 9]
_.map({one : 1, two : 2, three : 3}, function(num, key){ console.log("underscore.js says " + num * 3); });
// [3, 6, 9]