'use strict';

var csvImport = angular.module('ngCsvImport', []);

csvImport.directive('ngCsvImport', function() {
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		scope:{
			content:'=?',
			header: '=?',
			headerVisible: '=?',
			separator: '=?',
			separatorVisible: '=?',
			result: '=?',
			encoding: '=?',
			encodingVisible: '=?',
			accept: '=?',
			acceptSize: '=?',
			acceptSizeExceedCallback: '=?',
			callback: '=?',
			mdButtonClass: '@?',
			mdInputClass: '@?',
			mdButtonTitle: '@?',
			mdSvgIcon: '@?',
			uploadButtonLabel: '='
		},