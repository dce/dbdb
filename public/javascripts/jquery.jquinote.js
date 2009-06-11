(function($) {
  $.fn.jQuinote = function() {
    return this.each(function() {
      container = $(this);
      slides    = $("#slides", container);
      slideList = $("#slides>li", container);

      $('body').append('<div class="lightbox"><iframe src="spinner.html" /></div>').click(function() {
        $('div.lightbox').fadeOut().find("iframe").attr("src", "spinner.html");
      });

      slides.css({ "width": slideList.size() * container.width() });

      slides.current = (location.hash == "") ? 0 : location.hash.substr(1);

      slides.next = function() {
        if (this.current < slideList.size() - 1) {
          this.current++;
          this.update();
        }
      };

      slides.prev = function() {
        if (this.current > 0) {
          this.current--;
          this.update();
        }
      };

      slides.update = function() {
        this.animate({ marginLeft: -1 * this.current * container.width() });
      };

      slides.update();

      option_code = '<div class="options">' +
          '<a href="#" class="next">&rarr;</a>' +
          '<a href="#" class="prev">&larr;</a>' +
        '</div>';

      slideList.append(option_code);

      $("li:first a.prev", slides).addClass("disabled");
      $("li:last  a.next", slides).addClass("disabled");

      $("a.prev", container).click(function() {
        slides.prev();
        return false;
      });

      $("a.next", container).click(function() {
        slides.next();
        return false;
      });

      $("body").keydown(function(key) {
        switch(key.which) {
        case 37:
        case 38:
          slides.prev();
          break;
        case 39:
        case 40:
          slides.next();
          break;
        }
      });

      $("div.executable", container).each(function() {
        codeBlock = $(this);

        applyButton = $('<a href="#" class="apply-js">DO IT</a>').click(function() {
          code  = $(this).parents("div.code");
          frame = frames[frames.length - 1];

          frame.eval($("pre",code).text());
          frame.eval('$("#notice").fadeIn().find("span").text("' + code.attr("title") + '");');
          return false;
        });

        codeBlock.append(applyButton);
      });

      $("span.url", container).each(function() {
        url = $(this).hide().text();

        showButton = $('<a href="' + url + '">site</a>').click(function() {
          $("div.lightbox").show().find("iframe").attr("src", $(this).attr("href"));
          return false;
        });

        $(this).parents("li").find(".options").append(showButton);
      });
    });
  };
})(jQuery);