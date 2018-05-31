// Hooking up particle js with the respective divs 

particlesJS.load('left', 'assets/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

particlesJS.load('right', 'assets/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

particlesJS.load('behind-part', 'assets/js/particles behind.json', function() {
  console.log('callback - particles.js config loaded');
});



////////////////////////////////// My code starts from here///////////////////////

var passwordField = document.getElementById('password-field').addEventListener('keydown', buttonClick);

var buttonBool = false;
var btn = document.getElementById('btn');
// btn.style.backgroundColor = 'grey'
// btn.style.color = '#333'  



function buttonClick(e){
  var stringCount = e.target.value;  

  if(stringCount.length >= 3){
    buttonBool = true;
  } else if (stringCount.length < 3) {
    buttonBool = false;
  }

  if (buttonBool == true){
    
    btn.disabled = false

    btn.classList.add('enable-btn')

    if(btn.classList.contains('disable-btn')){
      btn.classList.remove('disable-btn');
    }

  } else{
    
    btn.classList.add('disable-btn')
    if(btn.classList.contains('enable-btn')){
      btn.classList.remove('enable-btn');
    }

  }

}

btn.addEventListener('click', submitForm);

function submitForm(){
  document.querySelector('.left-content').classList.add('animate-left-content');
  document.querySelector('.right-content').classList.add('animate-right-content');
  document.querySelector('.left').classList.add('animate-left');
  document.querySelector('.right').classList.add('animate-right');
  document.querySelector('.mugshot').classList.add('mugshot-animate');
  document.querySelector('.animate-para').classList.add('animating-para');
  
  
}

