let latitude = 47.61675107589269 ,longitude =  -122.15885581035742 ;



//initializing map box
mapboxgl.accessToken = "pk.eyJ1IjoibmF2MTI2IiwiYSI6ImNsOGlzZmc2bjFhdDYzdXF4MjY0YXY3YmoifQ.1i1nExgBi1iD72zCXiuuPA"
var map = new mapboxgl.Map({
    container:"map",
    style: "mapbox://styles/mapbox/streets-v11",
    center:[longitude,latitude],
    zoom: 18
    

})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{enableHighAccuracy: true},
        trackUserLocation: true
    })
)
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    "top-left"
)