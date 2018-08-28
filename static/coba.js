var Events = {
    onDeviceReady: function() {
		var prefs = plugins.appPreferences;
		var referral = null;
		var count = 0;
		var intervalReferrer = setInterval(function() {
			if (referral == null) {
				if (count < 5) {
					prefs.fetch(function(value) { 
						localStorage.setItem('referral', value);			
					}, function(error) {
						alert('Error: ' + error)
					}, 'referrer');
				} else {
					document.getElementById('nyan').innerHTML = "No Referral";

					clearInterval(intervalReferrer);
				}
			} else {
				document.getElementById('nyan').innerHTML = referral;
				
				clearInterval(intervalReferrer);
			}

			count++;
		}, 1000)
    }
}

document.addEventListener("deviceready", Events.onDeviceReady);

