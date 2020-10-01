function initMap() {

    var eldonSquare = {lat: -25.344, lng: 131.036};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: eldonSquare});
    var marker = new google.maps.Marker({position: eldonSquare, map: map});
}
