function initMap() {
  const myLatLng = { lat: 54.971829446, lng: -1.608997564 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Eternity Restaurant",
  });
}