const utils = require('../_utils');

module.exports = {
  name: 'Email',
  description: 'Make sure email is good to go',
  validation: {
    validation: utils.validation,
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
    text: {
      validation: {
        function: 'validation',
        on: 'blur',
      },
      label: 'Text',
      placeholder: 'Text',
      type: 'text',
      settings: {
        empty: false,
      },
    },
  },
  html: '<label for="{{email.id}}">{{email.label}}<input type="{{email.type}}" id="{{email.id}}" name="{{email.name}}" value="{{email.value}}" placeholder="{{email.placeholder}}" /></label><label for="{{text.id}}">{{text.label}}<input type="{{text.type}}" id="{{text.id}}" name="{{text.name}}" value="{{text.value}}" placeholder="{{text.placeholder}}" /></label>',
};
