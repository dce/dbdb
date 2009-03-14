$(document).ready(function() {
  $(".db-list a").click(function() {
    link = $(this);
    $.ajax({url: $(this).attr("href"),
      success: function(src) {
        link.parents("dt").after(src);
        link.unbind('click').click(function() {
          $(this).parents("dt").next("dd").toggle();
          return false;
        });
      }
    });
    return false;
  });
});