// @codekit-prepend "/../node_modules/jquery/dist/jquery.js";
// @codekit-prepend "/../node_modules/foundation-sites/dist/js/foundation.js";
// @codekit-prepend "/../node_modules/motion-ui/dist/motion-ui.js";
// @codekit-prepend "/../node_modules/what-input/dist/what-input.js";
// @codekit-prepend "/../node_modules/aos/dist/aos.js";


$(document).ready(function() {

// 1. Foundation
// -------------

Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';

$(document).foundation();


// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({
    offset: 64,
    easing: 'ease-in-out-quart',
    duration: 600
  });
});

$(function() {
  window.addEventListener('load', AOS.refresh);
});


  });

