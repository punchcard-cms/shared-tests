import test from 'ava';

import fixtures from './fixtures';
import shared from '../';

test('Plugin Test Export', t => {
  t.is(typeof shared.plugins, 'function', 'Submodule `plugins` exists and is a function');
  t.is(typeof shared.utils, 'object', 'Submodule `utils` exists and is an object');
  t.is(typeof shared.utils.build, 'function', '`build` exists and is a function');
  t.is(typeof fixtures.files, 'function', '`files` exists and is a function');
});
