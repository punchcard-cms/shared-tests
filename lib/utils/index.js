'use strict';

/*
 * @fileoverview Common Punchcard utility functions
 */

/**
 * Builds an object out of other input plugins' required functions. Used to combine multiple input plugins into a single input plugin
 *
 * @param  {string} type - the key to find functions from each plugin
 * @param  {array} plugins - an array of imported input-plugin objects
 *
 * @returns {object} contains objects which can be used to build a combined input plugin's object
 */
const build = (type, plugins) => {
  const b = {};

  if (Array.isArray(plugins)) {
    plugins.forEach(plugin => {
      if (typeof plugin[type] === 'object') {
        Object.keys(plugin[type]).forEach(item => {
          if (!b.hasOwnProperty(item)) {
            b[item] = plugin[type][item];
          }
        });
      }
    });
  }

  return b;
};

module.exports = {
  build,
};
