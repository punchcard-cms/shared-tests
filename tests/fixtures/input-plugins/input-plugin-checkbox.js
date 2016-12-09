const utils = require('../_utils');

module.exports = {
  name: 'Checkbox Selector',
  description: 'Select items',
  validation: {
    validation: utils.validation,
  },
  inputs: {
    checkboxSelector: {
      validation: {
        function: 'validation',
        on: 'blur',
      },
      label: 'Select items',
      type: 'checkbox',
      options: [
        { label: 'red',
          value: 'red',
        },
        { label: 'blue',
          value: 'blue',
        },
        { label: 'green',
          value: 'green',
        },
        { label: 'yellow',
          value: 'yellow',
        },
      ],
      settings: {
        empty: false,
      },
    },
  },
  html: `{% if checkboxSelector.options.length > 1 %}<fieldset id="{{checkboxSelector.id}}"><legend>{{checkboxSelector.label}}</legend>{% endif %}
    {% for option in checkboxSelector.options %}<label for="{{checkboxSelector.id}}--{{loop.index}}">
    <input type="{{checkboxSelector.type}}" name="{{checkboxSelector.name}}" id="{{checkboxSelector.id}}--{{loop.index}}" value="{{option.value}}" {% if option.value == checkboxSelector.value %}checked{% endif %}>{{option.label}}</label>{% endfor %}
    {% if checkboxSelector.options.length > 1 %}</fieldset>{% endif %}`,
};
