const fse = require('fs-extra');
const path = require('path');

const wikibooksDir = path.join(
	__dirname,
	'wikibooks'
);
const exportDir = path.join(
	__dirname,
	'export'
);

// console.log(temp);

const exportToJson = (number) => {
	const fileDir = path.join(
		wikibooksDir,
		`${number}.txt`
	);

	return fse.readFile(fileDir, (error, data) => {
		if(error) { console.warn('Error reading file: ', fileDir); }
		const strData = data.toString('utf-8');
		let splitData = strData.split('\n');
		
		const title = splitData.shift();
		const content = splitData.join('\n');
	
		const exportJson = {
			title,
			content,
		};
	
		// console.log(exportJson);
		const strJson = JSON.stringify(
			exportJson,
			null,
			2
		);

		console.info('Processing file: ', fileDir);

		return fse.writeFile(
			path.join(exportDir, `${number}.json`),
			strJson,
			(err) => { if(err) { console.warn('Could not write file: ', err); } }
		);
	});
};

let promises = [];

for (let i = 1; i < 440; i++){
	promises.push(exportToJson(i));
}

return Promise.all(promises);
