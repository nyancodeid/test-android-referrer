var Events = {
    onDeviceReady: function() {
        function ok (value) { 
            document.getElementById('nyan').innerHTML = value.toString();
        }
        function fail (error) { alert('ERR: ' + value) }

        var prefs = plugins.appPreferences;
        
        prefs.fetch (ok, fail, 'referrer');
    }
}

document.addEventListener("deviceready", Events.onDeviceReady);

