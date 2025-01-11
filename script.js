// Save theme using localStorage
function saveTheme(theme) {
    localStorage.setItem('theme', theme);
    alert(`Theme set to ${theme}`);
}

// Save session data
function saveSessionData(key, value) {
    sessionStorage.setItem(key, value);
    alert(`Session data saved: ${key} = ${value}`);
}

// Get user location using Geolocation API
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    document.getElementById('location').innerText =
        `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
