/**
 *  @fileoverview Punchcard Shared Fixtures
 *
 *  @author  Scott Nath
 *
 */
const files = require('./files');
const utils = require('./_utils');

module.exports = {
  files,
  script: utils.script,
  validation: utils.validation,
};
