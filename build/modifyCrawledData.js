'use strict';

var fse = require('fs-extra');
var path = require('path');

var wikibooksDir = path.join(__dirname, 'wikibooks');
var exportDir = path.join(__dirname, 'export');

// console.log(temp);

var exportToJson = function exportToJson(number) {
	var fileDir = path.join(wikibooksDir, number + '.txt');

	return fse.readFile(fileDir, function (error, data) {
		if (error) {
			console.warn('Error reading file: ', fileDir);
		}
		var strData = data.toString('utf-8');
		var splitData = strData.split('\n');

		var title = splitData.shift();
		var content = splitData.join('\n');

		var exportJson = {
			title: title,
			content: content
		};

		// console.log(exportJson);
		var strJson = JSON.stringify(exportJson, null, 2);

		console.info('Processing file: ', fileDir);

		return fse.writeFile(path.join(exportDir, number + '.json'), strJson, function (err) {
			if (err) {
				console.warn('Could not write file: ', err);
			}
		});
	});
};

var promises = [];

for (var i = 1; i < 440; i++) {
	promises.push(exportToJson(i));
}

var run = function run() {
	return Promise.all(promises);
};

run();