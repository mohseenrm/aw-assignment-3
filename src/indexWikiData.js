const fse = require('fs-extra');
const path = require('path');
const es = require('elasticsearch');

const esHandler = new es.Client({
	host: 'http://ec2-18-221-242-218.us-east-2.compute.amazonaws.com:9200',
	log: 'trace'
});

const exportDir = path.join(
	__dirname,
	'..',
	'export'
);

const run = () => {
	let promises = [];

	for(let i = 2; i < 440; i++){
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
