  $(document).ready(function () {
    $(".sb-loading").animate(
      {
        opacity: 1,
      },
      {
        duration: 500,
      }
    );
    setTimeout(function () {
      $(".sb-preloader-number").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 1000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
          }
        );
      });
      $(".sb-bar").animate(
        {
          height: "100%",
        },
        {
          duration: 1000,
          complete: function () {
            $(".sb-preloader").addClass("sb-hidden");
          },
        }
      );
    }, 400);
  });