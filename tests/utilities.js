import test from 'ava';

import utils from '../lib/utils';

// fixtures
import single from './fixtures/input-plugins/input-plugin-single';
import checkbox from './fixtures/input-plugins/input-plugin-checkbox';
import range from './fixtures/input-plugins/input-plugin-range';
import radio from './fixtures/input-plugins/input-plugin-radio';

//////////////////////////////
// Utils: Build
//////////////////////////////
test('Build validation from one plugin', t => {

  const plugins = [single, checkbox, range, radio];
  const validation = utils.build('validation', plugins);
  console.log(validation);
  t.pass();
});
