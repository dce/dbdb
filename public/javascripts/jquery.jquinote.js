(function($) {
  $.fn.jQuinote = function() {
    return this.each(function() {
      container = $(this);
      slides    = $("#slides", container);
      slideList = $("#slides>li", container);

      $('body').append('<div class="lightbox"><iframe /></div>').click(function() {
        $('div.lightbox').fadeOut();
      });

      slides.css({ "width": slideList.size() * container.width() });

      slides.current = 0;

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

      option_code = '<div class="options">' +
          '<a href="#" class="next">&rarr;</a>' +
          '<a href="#" class="prev">&larr;</a>' +
        '</div>';

      slideList.append(option_code);

      $("li:first a.prev", slides).addClass("disabled");
      $("li:last  a.next", slides).addClass("disabled");

      $("a.prev", container).click(function() {
        slides.prev();
      });

      $("a.next", container).click(function() {
        slides.next();
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
          codeBlock = $(this).parents("li").find("div.code").fadeOut();
          frames[frames.length - 1].eval($("pre", codeBlock).text());
          return false;
        });

        codeButton = $('<a href="#">code</a>').click(function() {
          $(this).parents("li").find("div.code").fadeIn();
        });

        codeBlock.append(applyButton);
        codeBlock.parents("li").find(".options").append(codeButton);
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