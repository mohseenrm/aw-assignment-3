const fse = require('fs-extra');
const path = require('path');
const es = require('elasticsearch');

const esHandler = new es.Client({
	host: 'http://localhost:9200',
	log: 'trace'
});

const exportDir = path.join(
	__dirname,
	'..',
	'export'
);
// test
const run = () => {
	let promises = [];

	for(let i = 1; i < 448; i++){
		promises.push(readFileAndIndex(i));
	}

	return Promise.all(promises);
}

const readFileAndIndex = (number) => {
	const fileDir = path.join(
		exportDir,
		`${number}.json`
	);
	return fse.readFile(
		fileDir,
		(error, data) => {
			if (error) { console.warn('Error reading file: ', fileDir); }

			const strData = data.toString('utf-8');
			const objData = JSON.parse(strData);

			return addIndex(objData, number);
		}
	);
};
// add a index
const addIndex = (body, index) => {
	return esHandler.index(
		{
			index: 'wiki',
			type: 'items',
			body,
		},
		(error, response, status) => {
			if (error) { console.warn('Error adding data to index: ', error); }
			if (response.created) { console.info('Successfully created Index: ', index); }
		}
	);
};

run();
