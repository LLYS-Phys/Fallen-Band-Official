function openMenu() {
  document.getElementById("menu").style.width = "40vw";
  document.getElementById('ham').style.color='transparent';
}

function closeMenu() {
  document.getElementById("menu").style.width = "0";
  document.getElementById('ham').style.color="white";
}

var showsinfo = document.getElementById('shows');
var newsinfo = document.getElementById('news');
var videosinfo = document.getElementById('videos');
var musicinfo = document.getElementById('music');
var photosinfo = document.getElementById('photos');
var subscribeinfo = document.getElementById('subscribe');
var membersinfo = document.getElementById('members');
var connectinfo = document.getElementById('connect');

var shows = document.getElementById('one');
var show = document.getElementsByClassName('event');
shows.addEventListener('click', function(event){
  showsinfo.style.display = 'block';
  show[0].children[0].href="https://www.facebook.com/events/527487998425735/";
  show[1].children[0].href='https://www.facebook.com/events/784626262325279/';
  show[2].children[0].href='https://www.facebook.com/events/502568697193942/';
  show[3].children[0].href='https://www.facebook.com/events/357680541523927';
  show[4].children[0].href='https://www.facebook.com/events/414113389418816/';
  show[5].children[0].href='https://www.facebook.com/events/1795926537158581/';
  newsinfo.style.display = 'none';
  videosinfo.style.display = 'none';
  musicinfo.style.display = 'none';
  photosinfo.style.display = 'none';
  subscribeinfo.style.display = 'none';
  membersinfo.style.display = 'none';
  connectinfo.style.display = 'none';
  document.getElementById('icons').style.display = 'none';
  document.getElementById('follow').style.display = 'none';
})

var news = document.getElementById('two');
var news1 = document.getElementsByClassName('news');
news.addEventListener('click', function(event){
  showsinfo.style.display = 'none';
  newsinfo.style.display = 'block';
  news1[0].children[0].src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1233765783728692&show_text=true&width=500';
  news1[1].children[0].src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1164105070694764&show_text=true&width=500';
  news1[2].children[0].src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1155148154923789&show_text=true&width=500';
  news1[3].children[0].src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1150715685367036&show_text=true&width=500';
  news1[4].children[0].src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1146370955801509&show_text=true&width=500';
  news1[5].children[0].src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1142109149561023&show_text=true&width=500';
  news1[6].children[0].src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1137791049992833&show_text=true&width=500';
  news1[7].children[0].src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1134065613698710&show_text=true&width=500';
  news1[8].children[0].src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1133427693762502&show_text=true&width=500';
  news1[9].children[0].src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1125435667895038&show_text=true&width=500';
  news1[10].children[0].src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1117787275326544&show_text=true&width=500';
  news1[11].children[0].src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1114206879017917&show_text=true&width=500';
  news1[12].children[0].src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1109475376157734&show_text=true&width=500';
  news1[13].children[0].src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F747896135648995&show_text=true&width=500';
  news1[14].children[0].src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F654827781622498&show_text=true&width=500';
  videosinfo.style.display = 'none';
  musicinfo.style.display = 'none';
  photosinfo.style.display = 'none';
  subscribeinfo.style.display = 'none';
  membersinfo.style.display = 'none';
  connectinfo.style.display = 'none';
  document.getElementById('icons').style.display = 'none';
  document.getElementById('follow').style.display = 'none';
})

var videos = document.getElementById('three');
var firstVideo = document.getElementsByClassName('first')
var secondVideo = document.getElementsByClassName('second')
var thirdVideo = document.getElementsByClassName('third')
var fourthVideo = document.getElementsByClassName('fourth')
videos.addEventListener('click', function(event){
  showsinfo.style.display = 'none';
  newsinfo.style.display = 'none';
  videosinfo.style.display = 'block';
  firstVideo[0].src='https://www.youtube.com/embed/MP_RpBE1iD0?wmode=transparent';
  firstVideo[0].style.zIndex='0';
  secondVideo[0].src='https://www.youtube.com/embed/svubKscTmz4?wmode=transparent';
  secondVideo[0].style.zIndex='0';
  thirdVideo[0].src='https://www.youtube.com/embed/uq58pA5BkWs?wmode=transparent';
  thirdVideo[0].style.zIndex='0';
  fourthVideo[0].src='https://www.youtube.com/embed/v7_DWESVjTI?wmode=transparent';
  fourthVideo[0].style.zIndex='0';
  document.getElementById('icons').style.display = 'none';
  document.getElementById('follow').style.display = 'none';
  musicinfo.style.display = 'none';
  photosinfo.style.display = 'none';
  subscribeinfo.style.display = 'none';
  membersinfo.style.display = 'none';
  connectinfo.style.display = 'none';
})

var music = document.getElementById('four');
var track = document.getElementsByClassName('music')
music.addEventListener('click', function(event){
  showsinfo.style.display = 'none';
  newsinfo.style.display = 'none';
  videosinfo.style.display = 'none';
  musicinfo.style.display = 'block';
  track[0].src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1024474744%3Fsecret_token%3Ds-SUAk8mukcsz&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true';
  track[1].src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1004675470&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true';
  track[2].src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1003183111&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true';
  track[3].src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1003178857&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true';
  photosinfo.style.display = 'none';
  subscribeinfo.style.display = 'none';
  membersinfo.style.display = 'none';
  connectinfo.style.display = 'none';
  document.getElementById('icons').style.display = 'none';
  document.getElementById('follow').style.display = 'none';
})

var photos = document.getElementById('five');
var photo = document.getElementsByClassName('photo');
photos.addEventListener('click', function(event){
  showsinfo.style.display = 'none';
  newsinfo.style.display = 'none';
  videosinfo.style.display = 'none';
  musicinfo.style.display = 'none';
  photosinfo.style.display = 'block';
  document.cookie = "SameSite=None; Secure";
  photo[0].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1233765783728692&show_text=false&width=500';
  photo[1].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1164105070694764&show_text=false&width=500';
  photo[2].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1155148154923789&show_text=false&width=500';
  photo[3].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1150715685367036&show_text=false&width=500';
  photo[4].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1146370955801509&show_text=false&width=500';
  photo[5].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1142109149561023&show_text=false&width=500';
  photo[6].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1137791049992833&show_text=false&width=500';
  photo[7].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1134065613698710&show_text=false&width=500';
  photo[8].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1133427693762502&show_text=false&width=500';
  photo[9].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1125435667895038&show_text=false&width=500';
  photo[10].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1117787275326544&show_text=false&width=500';
  photo[11].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1114206879017917&show_text=false&width=500';
  photo[12].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F1109475376157734&show_text=false&width=500';
  photo[13].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fphotos%2Fa.654827778289165%2F829964190775522%2F%3Ftype%3D3%26av%3D650914002013876%26eav%3DAfZO4OaMzhI5-fyHDbY3qVC99UaIboyIRMq6lwb_-V6xljTwV11r5rGcgDo65Z1y42s&show_text=false&width=500';
  photo[14].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fphotos%2Fa.654827778289165%2F829964064108868%2F%3Ftype%3D3%26av%3D650914002013876%26eav%3DAfb12yho_CWQRgnUSCaJAV8jS0VBWr_Yrwg1SX8lzmxzUpCdDgqOAqxJ_y8bCCtz7m0&show_text=false&width=500';
  photo[15].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fphotos%2Fa.654827778289165%2F829964074108867%2F%3Ftype%3D3%26av%3D650914002013876%26eav%3DAfb3bddjQ0cDleqYx3NSJnhBiaIVfzT2A4XuapOf8X9fcrrZ2v8w6_lzNHTfpQMjGAo&show_text=false&width=500';
  photo[16].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fstudyhubbulgaria%2Fphotos%2Fa.2360762794205932%2F2360764290872449%2F%3Ftype%3D3%26av%3D2141246312824249%26eav%3DAfaV2GHp33zu_vtesmcN8SRprrgAaA_GLGw8pLPn0XzstpCho0-QxlsRcmK0KIhMAC4ISrNy29Ad96qymXI7Ms0O&show_text=false&width=500';
  photo[17].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fstudyhubbulgaria%2Fphotos%2Fa.2360762794205932%2F2360765297539015%2F%3Ftype%3D3%26av%3D2141246312824249%26eav%3DAfYQfkxMkJ8rvWMDnlPIUbgN1DyRcSj_FgCWYG_sTjPIAa5L9VIpD_3K_VIkacOaJeUD0eb1lEKlyHjaOfreY7T4&show_text=false&width=500';
  photo[18].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fstudyhubbulgaria%2Fphotos%2Fa.2360762794205932%2F2360765600872318%2F%3Ftype%3D3%26av%3D2141246312824249%26eav%3DAfb1-_sQ0YnKpquUt9_oNLu1645ABBO2y9QGrg4AeZP7N3YU5uSJS_tq53YULGBWNaYeX6TkvMIEIkZKRvwsdYia&show_text=false&width=500';
  photo[19].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fstudyhubbulgaria%2Fphotos%2Fa.2360762794205932%2F2360765977538947%2F%3Ftype%3D3%26av%3D2141246312824249%26eav%3DAfZ74m8S_hwg1N0-GnoSWJJDYpitd-NO9xO7YH2-GRGFpQN94P11lt0t7OuAuaqHz0FJTF0j4xsxyoSNo0Ft_sCn&show_text=false&width=500';
  photo[20].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fstudyhubbulgaria%2Fphotos%2Fa.2360762794205932%2F2360766097538935%2F%3Ftype%3D3%26av%3D2141246312824249%26eav%3DAfaEPK0paFFabTQFIo9_h0ObXEgzqnzVwSKWsLt3m4G2PF2kgUPzxGBxQN0CuAdKLDW2jc6-ycZzwpRFixeIrBgr&show_text=false&width=500';
  photo[21].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fstudyhubbulgaria%2Fphotos%2Fa.2360762794205932%2F2360766200872258%2F%3Ftype%3D3%26av%3D2141246312824249%26eav%3DAfazyCwLQ82BVs6FZdIFhlDesr-CJsk-Iv0k1bd1wz3TQhPcRSKwGx2TFqa7fj7sh9hNqD5HrGea594U9W3iy7zS&show_text=false&width=500';
  photo[22].src = 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F747896135648995&show_text=false';
  photo[23].src = "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFallenBandBulgaria%2Fposts%2F654827781622498&show_text=false&width=500";
  subscribeinfo.style.display = 'none';
  membersinfo.style.display = 'none';
  connectinfo.style.display = 'none';
  document.getElementById('icons').style.display = 'none';
  document.getElementById('follow').style.display = 'none';
})

var subscribe = document.getElementById('six');
subscribe.addEventListener('click', function(event){
  showsinfo.style.display = 'none';
  newsinfo.style.display = 'none';
  videosinfo.style.display = 'none';
  musicinfo.style.display = 'none';
  photosinfo.style.display = 'none';
  subscribeinfo.style.display = 'block';
  membersinfo.style.display = 'none';
  connectinfo.style.display = 'none';
  document.getElementById('icons').style.display = 'none';
  document.getElementById('follow').style.display = 'none';
})
var submit = document.getElementById('send');
submit.addEventListener('click', function(){
  let fName = document.getElementById('fname').value;
  let eMail = document.getElementById('mail').value;
  let data = fName + " - " + eMail;
  console.log(data);
  fans.push(data);
  alert("Thank you for subscribing!");
});
let fans = [];

var members = document.getElementById('seven');
members.addEventListener('click', function(event){
  showsinfo.style.display = 'none';
  newsinfo.style.display = 'none';
  videosinfo.style.display = 'none';
  musicinfo.style.display = 'none';
  photosinfo.style.display = 'none';
  subscribeinfo.style.display = 'none';
  membersinfo.style.display = 'block';
  connectinfo.style.display = 'none';
  document.getElementById('icons').style.display = 'none';
  document.getElementById('follow').style.display = 'none';
})

var connect = document.getElementById('eight');
connect.addEventListener('click', function(event){
  showsinfo.style.display = 'none';
  newsinfo.style.display = 'none';
  videosinfo.style.display = 'none';
  musicinfo.style.display = 'none';
  photosinfo.style.display = 'none';
  subscribeinfo.style.display = 'none';
  membersinfo.style.display = 'none';
  connectinfo.style.display = 'block';
  document.getElementById('icons').style.display = 'none';
  document.getElementById('follow').style.display = 'none';
})

function closeTab(){
  for(i=0; i<8; i++){
    document.getElementsByClassName('tab')[i].style.display = 'none';
    document.getElementById('icons').style.display = 'block';
    document.getElementById('follow').style.display = 'inherit'
  }
}