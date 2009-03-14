$(document).ready(function() {
  $("a#version-1").click(function() {
    $(".db-list a").click(function() {
      link = $(this);
      $.ajax({url: $(this).attr("href"),
        success: function(src) {
          link.parents("dt").after(src);
          link.unbind('click').click(function() {
            $(this).parents("dt").next("dd").toggle();
            return false;
          })
        }
      });
      return false;
    });
  });

  $("a#version-2").click(function() {
    $(".db-list a").click(function() {
      link = $(this);
      link.parents("dt").after("<dd class=\"spinner\"></dd>");
      link.unbind('click').click(function() {
        $(this).parents("dt").next("dd").toggle();
        return false;
      });
      $.ajax({url: $(this).attr("href"),
        success: function(src) {
          link.parents("dt").next("dd").replaceWith(src);
        }
      });
      return false;
    });
  });
});

