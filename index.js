  document.addEventListener("DOMContentLoaded", function() {
    const paragraphElement = document.getElementById('text');
    paragraphElement.innerHTML = 'This is really cool!';
    console.log("The DOM has loaded");
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  ); 
