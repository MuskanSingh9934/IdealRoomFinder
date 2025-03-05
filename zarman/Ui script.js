// Function to handle the location selection
function getLocation() {
    const selectedLocation = document.getElementById('location').value;
    const locationResult = document.getElementById('location-result');
  
    // Adding a fade-in effect for location result
    locationResult.classList.add('fade-in');
    locationResult.innerHTML = `🌍 You have selected: <strong>${selectedLocation}</strong>`;
  }
  
  // Login and Signup functions with a smoother UI interaction
  function login() {
    const loginBtn = document.querySelector('.auth-buttons button:nth-child(1)');
    
    // Animate the login button with a small bounce effect
    loginBtn.classList.add('bounce');
    
    setTimeout(() => {
      alert("You clicked Login!");
      loginBtn.classList.remove('bounce'); // Remove the bounce effect after alert
    }, 500);
  }
  
  function signup() {
    const signupBtn = document.querySelector('.auth-buttons button:nth-child(2)');
    
    // Animate the signup button with a slight shake effect
    signupBtn.classList.add('shake');
    
    setTimeout(() => {
      alert("You clicked Signup!");
      signupBtn.classList.remove('shake'); // Remove the shake effect after alert
    }, 500);
  }
  
