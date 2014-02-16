'use strict';

angular.module('ng.picturefill', [])
  .directive('pictureFill', function () {
    return {
      controller: 'PictureFillCtrl',
      link: function (scope, elem, attrs) {
        elem.attr('data-picture', '');
      }
    };
  })
  .directive('pfSrc', function () {
    return {
      link: function (scope, elem, attrs) {
        elem.attr('data-src', attrs.pfSrc);
      }
    };
  })
  .controller('PictureFillCtrl', function ($timeout) {
    $timeout(picturefill);
  })
  .filter('trimExt', function () {
    return function (text) {
      if (text) {
        return text.slice(0, text.lastIndexOf('.')) || text;
      }
    };
  });