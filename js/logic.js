function openMenu() {
  document.getElementById("menu").style.width = "35vw";
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
shows.addEventListener('click', function(event){
  showsinfo.style.display = 'block';
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
news.addEventListener('click', function(event){
  showsinfo.style.display = 'none';
  newsinfo.style.display = 'block';
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
  console.log(firstVideo);
  firstVideo[0].src='https://www.youtube.com/embed/MP_RpBE1iD0';
  secondVideo[0].src='https://www.youtube.com/embed/svubKscTmz4';
  thirdVideo[0].src='https://www.youtube.com/embed/uq58pA5BkWs';
  fourthVideo[0].src='https://www.youtube.com/embed/v7_DWESVjTI';
  document.getElementById('icons').style.display = 'none';
  document.getElementById('follow').style.display = 'none';
  musicinfo.style.display = 'none';
  photosinfo.style.display = 'none';
  subscribeinfo.style.display = 'none';
  membersinfo.style.display = 'none';
  connectinfo.style.display = 'none';
})

var music = document.getElementById('four');
music.addEventListener('click', function(event){
  showsinfo.style.display = 'none';
  newsinfo.style.display = 'none';
  videosinfo.style.display = 'none';
  musicinfo.style.display = 'block';
  photosinfo.style.display = 'none';
  subscribeinfo.style.display = 'none';
  membersinfo.style.display = 'none';
  connectinfo.style.display = 'none';
  document.getElementById('icons').style.display = 'none';
  document.getElementById('follow').style.display = 'none';
})

var photos = document.getElementById('five');
photos.addEventListener('click', function(event){
  showsinfo.style.display = 'none';
  newsinfo.style.display = 'none';
  videosinfo.style.display = 'none';
  musicinfo.style.display = 'none';
  photosinfo.style.display = 'block';
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