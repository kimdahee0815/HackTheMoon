// Put your computations here.

function userComputed(data) {
  return {
    theme: new Window().localStorage.getItem('site-theme')
  };
}

exports.userComputed = userComputed;
