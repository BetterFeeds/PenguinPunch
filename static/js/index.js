function alignSocial() {
  $(".social-buttons")
    .css({ "marginLeft": $(window).width() - 
      ($(".small-text").width() + $(".big-text").width()) - 190 });
}

alignSocial();
setTimeout(alignSocial, 100);
setTimeout(alignSocial, 1000);
$(window).resize(alignSocial);

console.log("Why are you reading this?");
