function init() {
    console.log ('inside inist');
    const Montpellier = {
        lat: 43.6112422,
        lng: 3.8767337
    }

    const zoomLevel = 13;

    const map = L.map('map').setView([Montpellier.lat, Montpellier.lng], zoomLevel,);
  
    const mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZmFyYWhjIiwiYSI6ImNsMWM0cGZxczA0OG8zYnA0ZHpzdXhiYTMifQ.ZINDKgmjhmEtrJwDvBYkSA'
});

mainLayer.addTo(map);

var redIcon = L.icon({
    iconUrl: './img/pin.png',
    
    iconSize:     [45, 45], // size of the icon
    iconAnchor:   [22, 45], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

var blueIcon = L.icon({
    iconUrl: './img/bluepin.png',
    
    iconSize:     [45, 45], // size of the icon
    iconAnchor:   [22, 45], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

var marker = L.marker ([43.603534, 3.878918], {icon:redIcon}).addTo(map);
marker.bindPopup("<style> h5 {font-weight:bold;}</style>Vous trouverez 5 bornes de recharge ici </br><img src='./img/gare.jpeg'</br><h5>Gare de Montpellier Saint Roch</h5><h6>Pl. Auguste Gibert, 34000 Montpellier</h6>");
var marker = L.marker ([43.637496, 3.873805], {icon:redIcon}).addTo(map);
marker.bindPopup("Vous trouverez 5 bornes de recharge ici </br><img src='./img/ombrière_zoo.pneg.jpeg'</br><h6>1000 Av. du Val de Montferrand, 34000 Montpellier</h6> ");
var marker = L.marker ([43.584750, 3.955913], {icon:redIcon}).addTo(map);
marker.bindPopup("<style> h5 {font-weight:bold;}</style>Vous trouverez 5 bornes de recharge ici</br><img src='./img/ombrière_aéroport.jpeg'</br> <h5>Aéroport de Montpellier</h5><h6>D172, 34130 Mauguio</h6>");
var marker = L.marker ([43.602692, 3.921461], {icon:redIcon}).addTo(map);
marker.bindPopup("<style> h5 {font-weight:bold;}</style>Vous trouverez 5 bornes de recharge ici</br><img src='./img/ombrière odysseum.jpeg'</br> <h5> Odysséum</h5><h6>2 Pl. de Lisbonne, 34000 Montpellier</h6>");
var marker = L.marker ([43.615931, 1.486998], {icon:blueIcon}).addTo(map);
marker.bindPopup("<style> p {color:blue;}; h5 {font-weight:bold};</style>Vous trouverez 5 bornes de recharge ici</br><h6>31 Av. des Arènes, 31130 Balma</h6> <p>(en voie de développement)</p>");
var marker = L.marker ([43.617930, 1.374573], {icon:blueIcon}).addTo(map);
marker.bindPopup("<style> p {color:blue;}</style>Vous trouverez 5 bornes de recharge ici</br><h5>Aéroport de Toulouse-Blagnac</h5><h6>31703 Blagnac</h6> <p>(en voie de développement)</p>");
L.control.scale().addTo(map);

document.getElementById('bluepin').addEventListener("click", function(){
    map.setView([43.601304, 1.439037], zoomLevel)
});

document.getElementById('mainpin').addEventListener("click", function(){
    map.setView([Montpellier.lat, Montpellier.lng], zoomLevel)
});



}