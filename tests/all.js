import test from 'ava';
import types from '../';

test('Plugin Test Export', t => {
  t.is(typeof types.plugins, 'function', 'Submodule `plugins` exists and is a function');
});
