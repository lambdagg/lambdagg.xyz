const loc = window.location.toString();
if (!loc.includes('/localhost:') && !loc.includes('https://lambdagg.xyz')) window.location = 'https://lambdagg.xyz';

document.addEventListener('DOMContentLoaded', function() {
  /* Hide the noscript div */
  document.getElementById('noscript').remove();

  /* Make the social buttons clickable */
  [].forEach.call(document.querySelectorAll('.container > .title > .inline > svg'), function(element) {
    element.addEventListener('mouseover', function () {
      element.querySelector('#bg').setAttribute('fill', 'white');
    });
    element.addEventListener('mouseout', function () {
      element.querySelector('#bg').setAttribute('fill', '#222');
    });
    element.addEventListener('click', function () {
      window.open(element.getAttribute('data-redirect-url'), '_blank')
    });
  });

  /* Dynamically set the opacity of the 'body' element to fade it in after loading the fonts */
  WebFont.load({
    custom: { families: [ 'Source Sans Pro', 'Damion' ] },
    active: function() {
      let opacity = 0;
      const fadeIntensity = 0.01;
      const t = window.setInterval(function() {
        if (opacity >= 1) window.clearInterval(t);
        opacity += fadeIntensity;
        document.querySelector('.container').style.opacity = opacity;
      });
    }
  });
});
