document.addEventListener('DOMContentLoaded', function() {
  /* Make the social buttons clickable */
  [].forEach.call(document.querySelectorAll('.container > .title > .inline > img'), function(element) {
    element.addEventListener('click', function () {
      window.open(element.getAttribute('data-url'), '_blank')
    });
  });

  /* Dynamically set the opacity of the 'body' element to fade it in after loading the fonts */
  WebFont.load({
    custom: { families: [ "Source Sans Pro", "Damion" ] },
    active: function() {
      let opacity = 0;
      const fadeIntensity = 0.01;
      const t = window.setInterval(function() {
        if (opacity >= 1) window.clearInterval(t);
        opacity += fadeIntensity;
        document.querySelector('body').style.opacity = opacity;
      });
    }
  });
});
