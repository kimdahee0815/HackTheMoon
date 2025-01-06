document.getElementById('theme-switch').addEventListener('click', function() {
  if(document.body.classList.contains('theme-dark')){
    console.log('theme-dark')
    return "src/site/_includes/layouts/lightthemeindex.njk";
  }else if(document.body.classList.contains('theme-light')){
    console.log('theme-light')
    return "src/site/_includes/layouts/index.njk";
  }
})
