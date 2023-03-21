import 'reveal.js/dist/reveal.css'
// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
import '/css/custom.scss'
import Reveal from 'reveal.js'
import {addClassToId, removeClassToId} from "./script/trigger.js";


const deck = new Reveal()
deck.initialize({
  hash: true,
  slideNumber: true,
  parallaxBackgroundImage: 'background.jpg',
  parallaxBackgroundSize: '2647px 1080px',
  // autoSlide: 5000,
  loop: true
})

deck.addEventListener('slide-majoritaire', function () {
  setTimeout(function () {
    addClassToId("fromage", "zoom-animate")
  }, 1000);
  setTimeout(function () {
    removeClassToId("fromage", "zoom-animate")
    addClassToId("lait", "zoom-animate")
  }, 2000);
  setTimeout(function () {
    removeClassToId("lait", "zoom-animate")
  }, 3000);
}, false);

deck.addEventListener('slide-organisateur', function () {
  setTimeout(function () {
    addClassToId("gemel", "zoom-animate")
  }, 1000);
  setTimeout(function () {
    removeClassToId("gemel", "zoom-animate")
    addClassToId("arvidadeco", "zoom-animate")
  }, 2000);
  setTimeout(function () {
    removeClassToId("arvidadeco", "zoom-animate")
  }, 3000);
}, false);