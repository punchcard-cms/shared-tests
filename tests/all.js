import test from 'ava';

import fixtures from './fixtures';
import types from '../';

test('Plugin Test Export', t => {
  t.is(typeof types.plugins, 'function', 'Submodule `plugins` exists and is a function');
  t.is(typeof fixtures.files, 'function', '`files` exists and is a function');
});
