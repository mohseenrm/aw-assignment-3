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

const temp = path.join(
	wikibooksDir,
	'1.txt'
);

console.log(temp);
