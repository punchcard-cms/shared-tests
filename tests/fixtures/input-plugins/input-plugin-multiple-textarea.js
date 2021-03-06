const utils = require('../_utils');

module.exports = {
  name: 'Text Blocks',
  description: 'Add blocks of text that are very long',
  validation: {
    validation: utils.validation,
  },
  inputs: {
    codeSnippet: {
      validation: {
        function: 'validation',
        on: 'blur',
      },
      label: 'Code Snippet',
      type: 'textarea',
      settings: {
        empty: false,
      },
    },
    haiku: {
      validation: {
        function: 'validation',
        on: 'blur',
      },
      label: 'Haiku',
      type: 'textarea',
      settings: {
        empty: false,
      },
    },
  },
  html: '<label for="{{codeSnippet.id}}">{{codeSnippet.label}}<textarea type="{{codeSnippet.type}}" id="{{codeSnippet.id}}" name="{{codeSnippet.name}}">{{codeSnippet.value}}</textarea></label><label for="{{haiku.id}}">{{haiku.label}}<textarea type="{{haiku.type}}" id="{{haiku.id}}" name="{{haiku.name}}">{{haiku.value}}</textarea></label>',
};
