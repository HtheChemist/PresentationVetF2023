import 'reveal.js/dist/reveal.css'
import '/css/custom.scss'
import Reveal from 'reveal.js'
import {addClassToId, removeClassToId} from "./script/trigger.js";


const deck = new Reveal()
deck.initialize({
  hash: true,
  slideNumber: true,
  parallaxBackgroundImage: 'background.jpg',
  parallaxBackgroundSize: '2647px 1080px',
  autoSlide: 5000,
  loop: true
})

deck.addEventListener('slide-majoritaire', function () {
  setTimeout(function () {
    addClassToId("fromage", "zoom-animate-left")
  }, 1000);
  setTimeout(function () {
    addClassToId("lait", "zoom-animate-right")
  }, 2000);
  setTimeout(function () {
    removeClassToId("fromage", "zoom-animate-left")
    removeClassToId("lait", "zoom-animate-right")
  }, 7000);
}, false);

// deck.addEventListener('slide-organisateur', function () {
//   setTimeout(function () {
//     addClassToId("gemel", "zoom-animate")
//   }, 10);
//   setTimeout(function () {
//     addClassToId("arvidadeco", "zoom-animate")
//   }, 2000);
//   setTimeout(function () {
//     removeClassToId("arvidadeco", "zoom-animate")
//     removeClassToId("gemel", "zoom-animate")
//   }, 5000);
// }, false);