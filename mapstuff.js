// html stuff


<input type="text" id="my-address">
<button id="getCords" onClick="codeAddress();">Get It</button>
<div>
<p id="lat"></p>
</div>

<div id="long"></div>


// js stuff

function initialize() {
       var address = (document.getElementById('my-address'));
       var autocomplete = new google.maps.places.Autocomplete(address);
       autocomplete.setTypes(['geocode']);
       google.maps.event.addListener(autocomplete, 'place_changed', function() {
           var place = autocomplete.getPlace();
           if (!place.geometry) {
               return;
           }

       var address = '';
       if (place.address_components) {
           address = [
               (place.address_components[0] && place.address_components[0].short_name || ''),
               (place.address_components[1] && place.address_components[1].short_name || ''),
               (place.address_components[2] && place.address_components[2].short_name || '')
               ].join(' ');
       }
     });
}
function codeAddress() {
var lat = '';
var long = '';
   geocoder = new google.maps.Geocoder();
   var address = document.getElementById("my-address").value;
   geocoder.geocode( { 'address': address}, function(results, status) {
     if (status == google.maps.GeocoderStatus.OK) {
       lat= results[0].geometry.location.lat();
     long = results[0].geometry.location.lng();
     };
     }

     else {
       alert("Geocode was not successful for the following reason: " + status);
     }
   });
 }
google.maps.event.addDomListener(window, 'load', initialize);
