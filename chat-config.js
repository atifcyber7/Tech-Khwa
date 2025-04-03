(function(d, m){
    var kommunicateSettings = {
        "appId": "27170a4ef1c591aa9806fabdef2329de",
        "popupWidget": true,
        "automaticChatOpenOnNavigation": true
    };
    var s = document.createElement("script"); 
    s.type = "text/javascript"; 
    s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0]; 
    h.appendChild(s);
    window.kommunicate = m; 
    m._globals = kommunicateSettings;
})(document, window.kommunicate || {});
