document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

});
function login(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  user_confirmation=confirm('Login attempted with:\nEmail: ' + email + '\nPassword: ' + password);
  if(user_confirmation){
    window.location.href=`spotify.html`;
  }
  else{
    alert(`your cann't login`)
    window.location.href=`#`;
  }
  }
  
