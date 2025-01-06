document.getElementById('theme-switch').addEventListener('click', function() {
  if(document.body.classList.contains('theme-dark')){
    return "layouts/lightthemeindex.njk";
  }else if(document.body.classList.contains('theme-light')){
    return "layouts/index.njk";
  }
})
