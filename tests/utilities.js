import test from 'ava';

import utils from '../lib/utils';
import futils from './fixtures/_utils';

// fixtures
import single from './fixtures/input-plugins/input-plugin-single';
import checkbox from './fixtures/input-plugins/input-plugin-checkbox';
import range from './fixtures/input-plugins/input-plugin-range';
import radio from './fixtures/input-plugins/input-plugin-radio';

//////////////////////////////
// Utils: Build
//////////////////////////////
test('Build validation for plugin', t => {
  const plugins = [single, checkbox, range, radio];
  const validation = utils.build('validation', plugins);

  t.deepEqual(validation.validation, futils.validation, 'should get validation function');
});

test('Build script(s) for plugin', t => {
  const plugins = [single];
  const scripts = utils.build('scripts', plugins);

  t.deepEqual(scripts.script, futils.script, 'should get script function');
});
