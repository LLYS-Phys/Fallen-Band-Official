function openMenu() {
  document.getElementById("menu").style.width = "25vw";
  document.getElementById('ham').style.color='transparent';
}

function closeMenu() {
  document.getElementById("menu").style.width = "0";
  document.getElementById('ham').style.color="white";
}

function smart(){
  if(document.getElementById("menu").style.width < "25vw"){
    openMenu();
  }
  else if(document.getElementById("menu").style.width >= "25vw"){
    closeMenu();
  }
}

//var opt = document.getElementById('menu').children;
//if(opt[1].selected = true){
//  document.getElementById('shows').style.display = 'block';
//}
//else{document.getElementById('shows').style.display = 'none'}

//if(document.getElementById('one').clicked = true){
//  document.getElementById('shows').style.display = 'block';
//}
//else{  document.getElementById('shows').style.display = 'none';}