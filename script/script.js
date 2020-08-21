$(document).ready(function () {
    addMenu();
    navScroll()
    addImage();


});

function addImage() {
  var parallaxDiv = $(".parallax");
  var divCount = [];
  var index = 0;

  parallaxDiv.each(function () {
    $(this).addClass("img-" + [index]);
    divCount.push(index);
    index++;
  });

  for (i = 0; i < divCount.length; i++) {
    var image = $(".img-" + [i]);
    image.attr(
      "style",
      "background: url(./images/img" +
        [i] +
        ".jpg); background-size: cover; background-attachment: fixed; height: 100vh; background-repeat: no-repeat; width: 100%; padding: 0px; margin: 0px; background-position: center;"
    );
  }
}

function addMenu() {
  var navItems = [
    { item: "Intro", href: "#intro" },
    { item: "Speaking", href: "#speaking" },
    { item: "Commercial", href: "#commercial" },
    { item: "About", href: "#about" },
    { item: "Contact", href: "#contact" },
  ];

  for (i = 0; i < navItems.length; i++) {
    liEl = $("<li>").addClass("nav-item")
    $('#navId').append(liEl)
    aLink = $("<a>").addClass("nav-link");
    aLink.text(navItems[i].item)
    aLink.attr('href', navItems[i].href)
    liEl.append(aLink)
  }
}

function navScroll() {
    $( window ).on( "load", function() {
        mainNav();
        $(window).scroll(function() {
            mainNav();
        });
        function mainNav() {
            var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            if (top > 40) $('.navbar-fixed-top').stop().animate({
                "opacity": '1',
                "top": '0'
            });
            else $('.navbar-fixed-top').stop().animate({
                "top": '-70',
                "opacity": '0'
            });
    
        }
         });
}


