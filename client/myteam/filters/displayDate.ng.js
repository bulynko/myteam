angular.module("myteam").filter('displayDateDD', function () {
  return function (d) {
    if (!d)
      return "dd-mm-yy";
    else
      return d.format('YYYY-MM-DD dddd');
  }
  
});

angular.module("myteam").filter('displayDateD', function () {
  return function (d) {
    if (!d)
      return "dd-mm-yy";
    else
      return d.format('YYYY-MM-DD');
  }
  
});
