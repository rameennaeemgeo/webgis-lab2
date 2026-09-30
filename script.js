  var lastFocus = null;
  function showPopup(id) {
    var el = document.getElementById(id);
    lastFocus = document.activeElement;
    el.classList.add('open');
    var btn = el.querySelector('.ok');
    if (btn) btn.focus();
  }
  function closePopup(id) {
    document.getElementById(id).classList.remove('open');
    if (lastFocus) lastFocus.focus();
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.overlay.open').forEach(function (o) { closePopup(o.id); });
    }
  });
