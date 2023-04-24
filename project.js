var mapOptions = {
    center: [30.6187, -96.3365],
    zoom: 15
 }

 var map = new L.map('map', mapOptions);

 var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

 map.addLayer(layer);

 const loginButton = document.getElementById('login-button');
 const loginPopup = document.getElementById('login-popup');
 const closeButton = document.querySelector('.popup-close');
 const loginForm = document.getElementById('login-form');
 
 // Open the login popup when the login button is clicked
 loginButton.addEventListener('click', () => {
   loginPopup.style.display = 'block';
 });
 
 // Close the login popup when the close button is clicked
 closeButton.addEventListener('click', () => {
   loginPopup.style.display = 'none';
 });
 
 // Handle form submission
 loginForm.addEventListener('submit', (e) => {
   e.preventDefault();
   
   // Get the username and password from the form
   const username = loginForm.querySelector('#username').value;
   const password = loginForm.querySelector('#password').value;
   
   // You can now process the login data and submit it to the server using AJAX or fetch()
   
   // Close the popup
   loginPopup.style.display = 'none';
 });
 