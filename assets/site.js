/* Copilăria Digitală — the only script on the site. Every page works without it.
   It does two things: it remembers what a parent typed into the pledge, in their own
   browser and nowhere else, and it holds YouTube off the page until it is asked for. */
(function () {
  'use strict';

  /* ---- the pledge, kept in this browser and nowhere else ---- */

  var form = document.querySelector('[data-pledge]');
  if (form) {
    var KEY = 'copilariadigitala.angajament';
    var fields = form.querySelectorAll('input, textarea');
    var status = form.querySelector('[data-pledge-status]');

    var read = function () {
      try {
        return JSON.parse(localStorage.getItem(KEY) || '{}');
      } catch (e) {
        return {};
      }
    };

    var write = function () {
      var state = {};
      Array.prototype.forEach.call(fields, function (el) {
        if (!el.name) return;
        state[el.name] = el.type === 'checkbox' ? el.checked : el.value;
      });
      try {
        localStorage.setItem(KEY, JSON.stringify(state));
      } catch (e) {
        /* private window, or storage full — the form still works, it just won't persist */
        return;
      }
      if (status) status.textContent = status.getAttribute('data-saved-label') || '';
    };

    var saved = read();
    Array.prototype.forEach.call(fields, function (el) {
      if (!el.name || !(el.name in saved)) return;
      if (el.type === 'checkbox') el.checked = !!saved[el.name];
      else el.value = saved[el.name];
    });

    form.addEventListener('input', write);
    form.addEventListener('change', write);

    var clear = form.querySelector('[data-pledge-clear]');
    if (clear) {
      clear.hidden = false;
      clear.addEventListener('click', function () {
        Array.prototype.forEach.call(fields, function (el) {
          if (el.type === 'checkbox') el.checked = false;
          else el.value = '';
        });
        try {
          localStorage.removeItem(KEY);
        } catch (e) {
          /* nothing to clear */
        }
        if (status) status.textContent = '';
      });
    }

    var print = form.querySelector('[data-pledge-print]');
    if (print) {
      print.hidden = false;
      print.addEventListener('click', function () {
        window.print();
      });
    }
  }

  /* ---- video facade: nothing reaches YouTube until the visitor taps ---- */

  var facades = document.querySelectorAll('[data-video]');
  Array.prototype.forEach.call(facades, function (facade) {
    var id = facade.getAttribute('data-video');
    if (!id) return;
    var button = facade.querySelector('[data-video-play]');
    if (!button) return;
    button.hidden = false;
    button.addEventListener('click', function () {
      var frame = document.createElement('iframe');
      frame.src =
        'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1';
      frame.title = facade.getAttribute('data-video-title') || 'Video';
      frame.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture';
      frame.allowFullscreen = true;
      facade.textContent = '';
      facade.appendChild(frame);
    });
  });
})();
