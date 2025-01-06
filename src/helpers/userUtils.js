// Put your computations here.

function userComputed(data) {
  return {
    theme: Window.localStorage.getItem('site-theme')
  };
}

exports.userComputed = userComputed;
