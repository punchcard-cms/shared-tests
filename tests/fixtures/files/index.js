const _ = require('lodash');
const path = require('path');
const fs = require('fs');

const all = [
  path.join(__dirname, '../../', 'all.js'),
  path.join(__dirname, '../../', 'input-plugin-tests.js'),
  path.join(__dirname, '../../../', 'index.js'),
  path.join(__dirname, '../images', 'punchcard-image.svg'),
  path.join(__dirname, '../images', 'punchcard-404.svg'),
];

/*
 * Raw File Fixture
 *
 * @returns {array} - An array file objects as one receives from a multi-upload form
 */
const raw = () => {
  const files = _.cloneDeep(all);
  const items = [];
  let counter = 0;
  let random;
  do {
    random = Math.round(Math.random() * (files.length - 1));

    const type = path.extname(files[random]) === '.js' ? 'document/javascript' : 'image/svg';

    items.push({
      fieldName: `file-upload--file-${counter}`,
      originalFilename: path.basename(files[random]),
      path: files[random],
      headers: {
        'content-disposition': `form-data; name="file-upload--file-${counter}"; filename="${path.basename(files[random])}"`,
        'content-type': type,
      },
      size: fs.statSync(files[random]).size,
      name: path.basename(files[random]),
      type,
    });

    files.splice(random, 1);
    counter++;
  } while (files.length > 0 && Math.random() > 0.5);


  return items;
};


module.exports = raw;
