$(document).ready(function() {
  $("#options.closed").livequery("click", function() {
    $(this).animate({"top": "0px"}).removeClass("closed").addClass("open");
  });

  $("#options.open").livequery("click", function() {
    $(this).animate({"top": "-70px"}).removeClass("open").addClass("closed");
  });

  $("#options a").click(function() {
    $("#notice").text($(this).text());
  });

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
    return false;
  });

  $("a#version-2").click(function() {
    $(".db-list a").click(function() {
      link = $(this);
      link.parents("dt").after("<dd class=\"spinner\"></dd>").next("dd").hide().slideToggle();
      link.unbind('click').click(function() {
        $(this).parents("dt").next("dd").slideToggle();
        return false;
      });
      $.ajax({url: $(this).attr("href"),
        success: function(src) {
          link.parents("dt").next("dd").replaceWith(src);
        }
      });
      return false;
    });
    return false;
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
      $(this).parents("dt").next("dd").slideToggle();
      return false;
    });
    return false;
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

  $("a#ajax-uploads").click(function() {
    $("input[type=file]").replaceWith('<iframe src="/avatars/new"></iframe>');
    return false;
  });
});

