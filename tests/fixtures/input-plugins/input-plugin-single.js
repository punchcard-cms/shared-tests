const utils = require('../_utils');

module.exports = {
  name: 'Email',
  description: 'Make sure email is good to go',
  validation: {
    validation: utils.validation,
  },
  scripts: {
    script: utils.script,
  },
  inputs: {
    email: {
      validation: {
        function: 'validation',
        on: 'blur',
      },
      label: 'Email',
      placeholder: 'Email',
      type: 'text',
      settings: {
        empty: false,
      },
    },
  },
  html: '<label for="{{email.id}}">{{email.label}}<input type="{{email.type}}" id="{{email.id}}" name="{{email.name}}" value="{{email.value}}" placeholder="{{email.placeholder}}" /></label>',
};
