      function initMap() {
var styledMapType = new google.maps.StyledMapType([
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
])
        var uluru = {lat: 37.764211, lng: -122.397339};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: 37.773089, lng: -122.39409},
          scrollwheel: false,
                   mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });
        var marker = new google.maps.Marker({
          position: uluru,
                    icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 2
          }
          // map: map,
          // title: 'Hello World!'
        });

        var contentString = '<div id="info-window">' +
        '<h3> Say Hello </h3>'+
        '<p>141 Connecticut Street</p>'+
        '<p>San Francisco, CA </p>'+
        '</div>'

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        infowindow.set("id","infowindow")

        google.maps.event.addListener(marker, 'click', function() {
           infowindow.open(map,marker);
        });
        // infowindow.open(map,marker);

        marker.setMap(map);
        // var options = new google.maps.Marker({
        //   position: uluru,
        //   map: map
        // });
                map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

         infoBubble = new InfoBubble({
      map: map,
      content: contentString,
      // position: new google.maps.LatLng(-32.0, 149.0),
      shadowStyle: 0,
      padding: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      borderRadius: 8,
      arrowSize: 10,
      borderWidth: 1,
      borderColor: '#2c2c2c',
      disableAutoPan: true,
      hideCloseButton: true,
      arrowPosition: 30,
      backgroundClassName: 'transparent',
      arrowStyle: 0,
      minWidth: 400
});

infoBubble.open(map, marker);
      }



$(document).ready(function(){
      // function initMap() {
      //   var uluru = {lat: -25.363, lng: 131.044};
      //   var map = new google.maps.Map(document.getElementById('map'), {
      //     zoom: 4,
      //     center: uluru
      //   });
      //   var marker = new google.maps.Marker({
      //     position: uluru,
      //     map: map
      //   });
      // }




	// $('.left-button > button').click(function() {
	// 	$(".right-button").css('visibility','visible')

	// 	var current = $('.active')
	// 	var prev = $('.active').prev()
	// 	prev.addClass('active')
	// 	current.removeClass('active')
		
	// 	if(prev.is('.card:first')){
	// 		$('.left-button').css('visibility','hidden')	
	// 	}

	// 	$('.left-button > button').prop('disabled', true);
	// 	var left = parseInt($('.cards-inner').css('left'))
	// 	var width = parseInt($('.cards-inner').css('width'))
	// 	var shift = left+width
	// 	$('.cards-inner').animate({left: shift}, {
	// 		duration: 250, 
	// 		queue: false, 
	// 		complete: function(){
	// 			$('.left-button > button').prop('disabled',false)

	// 	}});
	// });

	// $('.right-button > button').click(function() {
	// 	$(".left-button").css('visibility','visible')

	// 	var current = $('.active')
	// 	var next = $('.active').next()
	// 	next.addClass('active')
	// 	current.removeClass('active')
		
	// 	if(next.is('.card:last')){
	// 		$('.right-button').css('visibility','hidden')
	// 	}

	// 	$('.right-button > button').prop('disabled', true);
	// 	var left = parseInt($('.cards-inner').css('left'))
	// 	var width = parseInt($('.cards-inner').css('width'))
	// 	var shift = left-width
	// 	$('.cards-inner').animate({left: shift}, {
	// 		duration: 250, 
	// 		queue: false, 
	// 		complete: function(){
	// 			$('.right-button > button').prop('disabled',false)
	// 	}});
	// });

// carousel = (function(){
//   var box = document.querySelector('.carouselbox');
//   var next = box.querySelector('.next');
//   var prev = box.querySelector('.prev');
//   var items = box.querySelectorAll('.content li');
//   var bullets = document.querySelectorAll('.bullets div');
//   var counter = 0;
//   var amount = items.length;
//   var current = items[0];
//   var currentBullet = bullets[0];
//   box.classList.add('active');
//   function navigate(direction) {
//     current.classList.remove('current');
//     currentBullet.classList.remove('current');
//     counter = counter + direction;
//     if (direction === -1 && counter < 0) { 
//       counter = amount - 1; 
//     }
//     if (direction === 1 && !items[counter]) { 
//       counter = 0;
//     }
//     current = items[counter];
//     current.classList.add('current');
//     currentBullet = bullets[counter];
//     currentBullet.classList.add('current');
//   }
//   next.addEventListener('click', function(ev) {
//     navigate(1);
//   });
//   prev.addEventListener('click', function(ev) {
//     navigate(-1);
//   });
//   navigate(0);
// })();



});