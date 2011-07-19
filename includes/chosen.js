(function ($) {

  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
      $('select').each(function () {
        $(this).addClass('chzn-select');
      });
      $(".chzn-select").chosen();
    }
  };

}(jQuery));