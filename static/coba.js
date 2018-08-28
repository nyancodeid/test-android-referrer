String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

var Events = {
    onDeviceReady: function() {
		var prefs = plugins.appPreferences;
		var referral = null;
		var count = 0;
		var intervalReferrer = setInterval(function() {
			document.getElementById('nyan').innerHTML = "Loading..";

			if (referral == null) {
				if (count < 5) {
					prefs.fetch(function(value) { 
						if (!value.toString().isEmpty()) {
							referral = value;

							if (referral == "NyanDev" || referral == "nyandev") {
								alert('Done, test sukses.');
							}
						}	
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
		}, 1000);
    }
}

document.addEventListener("deviceready", Events.onDeviceReady);

