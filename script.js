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
