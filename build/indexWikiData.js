'use strict';

var fse = require('fs-extra');
var path = require('path');
var es = require('elasticsearch');

var esHandler = new es.Client({
	host: 'http://ec2-18-221-242-218.us-east-2.compute.amazonaws.com:9200',
	log: 'trace'
});

var exportDir = path.join(__dirname, '..', 'export');

var run = function run() {
	var promises = [];

	for (var i = 2; i < 440; i++) {
		promises.push(readFileAndIndex(i));
	}

	return Promise.all(promises);
};

var readFileAndIndex = function readFileAndIndex(number) {
	var fileDir = path.join(exportDir, number + '.json');
	return fse.readFile(fileDir, function (error, data) {
		if (error) {
			console.warn('Error reading file: ', fileDir);
		}

		var strData = data.toString('utf-8');
		var objData = JSON.parse(strData);

		return addIndex(objData, number);
	});
};

var addIndex = function addIndex(body, index) {
	return esHandler.index({
		index: 'wiki',
		type: 'items',
		body: body
	}, function (error, response, status) {
		if (error) {
			console.warn('Error adding data to index: ', error);
		}
		if (response.created) {
			console.info('Successfully created Index: ', index);
		}
	});
};

run();