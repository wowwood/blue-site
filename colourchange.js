function colourchange(e) {
    if (e.style.webkitAnimationName !== 'colourchange') {
      e.style.webkitAnimationName = 'colourchange';
      e.style.webkitAnimationDuration = '4s';

      // make sure to reset the name after 4 seconds, otherwise another call to colorchange wont have any effect
      setTimeout(function () {
        e.style.webkitAnimationName = '';
      }, 4000);
    }
  }