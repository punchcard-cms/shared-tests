const utils = require('../_utils');

module.exports = {
  name: 'Range Selector',
  description: 'Select a range',
  validation: {
    validation: utils.validation,
  },
  inputs: {
    rangeSelector: {
      validation: {
        function: 'validation',
        on: 'blur',
      },
      label: 'Select a range',
      type: 'range',
      settings: {
        empty: true,
        min: 1,
        max: 5,
      },
    },
  },
  html: '<label for="{{rangeSelector.id}}">{{rangeSelector.label}}</label><input type="{{rangeSelector.type}}" id="{{rangeSelector.id}}" name="{{rangeSelector.name}}" min="{{rangeSelector.settings.min}}" max="{{rangeSelector.settings.max}}"  value="{{rangeSelector.value}}"/>',
};
