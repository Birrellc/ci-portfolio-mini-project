function initMap() {
    // Map options
    var options = {
        zoom: 15,
        center: { lat: 54.971829446, lng: -1.608997564 }
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Listen for click on map
    google.maps.event.addListener(map, 'click', function (event) {
        // Add marker
        addMarker({ coords: event.latLng });
    });


    var marker = new google.maps.Marker({
        position: { lat: 42.4668, lng: -70.9495 },
        map: map,
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });

};
