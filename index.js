// Initialize and add the map
function initMap() {
  // The location of vjti
  const vjti = { lat: 19.022250, lng:72.856130 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: vjti,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: vjti,
    map: map,
  });
}

    