// Put your computations here.

function userComputed(data) {
  return {
    theme: window.localStorage.getItem('site-theme')
  };
}

exports.userComputed = userComputed;
