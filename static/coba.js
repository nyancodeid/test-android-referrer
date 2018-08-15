var Events = {
    onDeviceReady: function() {
        function ok (value) { alert('OK: ' + value) }
        function fail (error) { alert('ERR: ' + value) }

        var prefs = plugins.appPreferences;
        
        prefs.fetch (ok, fail, 'referrer');
    }
}

document.addEventListener("deviceready", Events.onDeviceReady);

