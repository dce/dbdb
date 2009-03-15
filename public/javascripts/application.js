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

  jQuery.fn.loadContentInOrder = function() {
    link = this;
    if (this.size() > 0) {
      $.ajax({url: this.attr("href"),
        success: function(src) {
          display = link.parents("dt").next("dd").replaceWith(src).css("display");
          link.parents("dt").next("dd").css("display", display)
            .next("dt").find("a").loadContentInOrder();
        }
      });
    }
  };

  $("a#version-3").click(function() {
    $(".db-list a").each(function() {
      $(this).parents("dt").after("<dd class=\"spinner\"></dd>").next("dd").hide();
    });

    $(".db-list a:first").each(function() {
      $(this).loadContentInOrder();
    });

    $(".db-list a").click(function() {
      $(this).parents("dt").next("dd").toggle();
      return false;
    });
  });

  jQuery.fn.loadBagfactor = function() {
    img = this;
    if (img.size() > 0) {
      $.ajax({url: this.parents("dd").prev("dt").find("a").attr("href"),
        data: { format: "json" }, dataType: "json",
        success: function(db) {
          img.replaceWith(db.bagfactor);
          $("img.spinner:first").loadBagfactor();
        }
      });
    }
  };

  $("img.spinner:first").each(function() {
    $(this).loadBagfactor();
  });
});

