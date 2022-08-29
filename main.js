// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//define like button states
//value of empty heart is full heart and vice versa
const likeStates = {
  [EMPTY_HEART]: FULL_HEART,
  [FULL_HEART]: EMPTY_HEART
};

//color states of like button
//vice versa of empty heart

const heartColors = {
  '': 'red',
  'red': ''
};

//eventlistener
document.addEventListener('DOMCONTENTLOADED', () => {
  const likeBtn = document.querySelectorALL('.like-glyph');
  for (const btn of likeBtn){
    Btn.addEventListener('click', likePost);
  }
})
// Create a function that change the color
function likePost(event){
  const heart = event.target; //get the tag (element) with the like hearts

  // Invoke mimicServerCall() when empty heart is clicked
  mimicServerCall()
  .then( (serverMessage) => {
    alert(serverMessage); //alert the message from the server

    // Change the color of the hearts
    heart.innerText = likeStates[heart.innerText]; //change the heart displayed
    heart.style.color = heartColors[heart.style.color]; //change background color of liked heart and vice versa
  })
  .catch( (error) => {
    document.getElementById('modal').removeAttribute('.hidden'); //grab and display error div
    const errorPage = document.getElementById('modal-message'); //grab error paragraph
    errorPage.textContent = error.message; //show error message from the server
    setTimeout( () => { //set timeout for the error being displayed. The error to disappear after 3 seconds
      document.getElementById('modal').hidden = true
    }, 3000);
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
