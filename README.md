
- 👋 Hi, I’m @Hazelava
- 👀 I’m interested in coding, building websites, and creating small games
- 🌱 I’m currently learning computer science and different fields to fit in one parallely i am learning diiferent programming language , cybersecurity as well
- 💞️ I’m looking to collaborate on "I’m looking to collaborate on web development projects, coding challenges, and creating fun small games."
- 📫 How to reach me , you can reach me through github 
- 😄 Pronouns: she
- ⚡ Fun fact:  I love blending creativity and code to build interactive websites and small games!

<!---
Hazelava/Hazelava is a ✨ special ✨ repository because its `README.md` "WASTE MANAGEMENT WESITE" appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->

WASTE MANAGEMENT SYSTEM WEBSITE

HTML 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Waste Collection Service</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Waste Collection Service</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#alerts">Alerts</a></li>
                <li><a href="#monitor">Monitor Bin Status</a></li>
                <li><a href="#routes">Track Collection Routes</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    </header>

    <!-- Home Section -->
    <section id="home">
        <h2>Welcome to the Waste Collection Service</h2>
        <p>Your one-stop solution for efficient and timely waste management.</p>
        <div class="image-gallery">
            <img src="images/waste-management1.jpg" alt="Waste management">
            <img src="images/waste-management2.jpg" alt="Waste collection">
            <img src="images/waste-management3.jpg" alt="Recycling">
        </div>
    </section>

    <!-- Alerts Section -->
    <section id="alerts">
        <h2>View Alerts</h2>
        <div id="alert-message"></div>
    </section>

    <!-- Monitor Bin Status Section -->
    <section id="monitor">
        <h2>Monitor Bin Status</h2>
        <p>Select your location to monitor the status of bins:</p>
        <select id="bin-location" onchange="updateBinStatus()">
            <option value="">Select Location</option>
            <option value="downtown">Downtown</option>
            <option value="suburbs">Suburbs</option>
            <option value="industrial">Industrial Area</option>
        </select>
        <p id="bin-status"></p>
    </section>

    <!-- Track Collection Routes Section -->
    <section id="routes">
        <h2>Track Collection Routes</h2>
        <div id="map"></div> <!-- Google Map for tracking -->
    </section>

    <!-- Contact Section -->
    <section id="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to <a href="mailto:support@wastecollection.com">email us</a>.</p>
    </section>

    <footer>
        <p>&copy; 2024 Waste Collection Service. All rights reserved.</p>
    </footer>

    <!-- JavaScript -->
    <script src="script.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
</body>
</html>


CSS

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}

header {
    background-color: #28a745;
    color: white;
    padding: 10px;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

section {
    padding: 20px;
    text-align: center;
}

.image-gallery {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.image-gallery img {
    width: 200px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

#map {
    width: 100%;
    height: 400px;
    margin: 20px 0;
}

footer {
    background-color: #28a745;
    color: white;
    padding: 10px;
    text-align: center;
}

select {
    padding: 10px;
    margin-top: 10px;
}

#bin-status {
    margin-top: 10px;
    font-weight: bold;
}

JAVASCRIPT

// Function to display bin status based on location
function updateBinStatus() {
    const location = document.getElementById('bin-location').value;
    const binStatusElement = document.getElementById('bin-status');

    let statusMessage = '';

    switch(location) {
        case 'downtown':
            statusMessage = 'Downtown bins are 75% full.';
            break;
        case 'suburbs':
            statusMessage = 'Suburban bins are 50% full.';
            break;
        case 'industrial':
            statusMessage = 'Industrial bins are 90% full. Immediate attention required!';
            break;
        default:
            statusMessage = 'Please select a location to view bin status.';
    }

    binStatusElement.textContent = statusMessage;
}

// Function to show alert messages
function showAlertMessage() {
    const alertMessageElement = document.getElementById('alert-message');
    alertMessageElement.innerHTML = '<strong>Next collection:</strong> Monday, 9 AM. <br><em>No other alerts at the moment.</em>';
}

// Google Maps initialization for tracking collection routes
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: 37.7749, lng: -122.4194 }  // Example coordinates (San Francisco)
    });

    const marker = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map: map,
        title: 'Collection Truck'
    });
}

// Display the alert message when the page loads
document.addEventListener('DOMContentLoaded', showAlertMessage);

