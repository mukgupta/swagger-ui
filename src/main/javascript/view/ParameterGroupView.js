'use strict';

SwaggerUi.Views.ParameterGroupView = Backbone.View.extend({
  initialize: function(){
    Handlebars.registerHelper('isArray', function(param, opts) {
      if (param.type.toLowerCase() === 'array' || param.allowMultiple) {
        opts.fn(this);
      } else {
        opts.inverse(this);
      }
    });
  },

  render: function() {

    var template = this.template();
    $(this.el).html(template(this.model));

    return this;
  },

  // Return an appropriate template based on if the parameter is a list, readonly, required
  template: function(){
    return Handlebars.templates.parameter_group;
  }
});