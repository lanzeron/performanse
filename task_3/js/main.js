(function() {
    "use strict";
    $.ajax({
        url: 'http://',
        success: function(response) {
            var res = JSON.parse(response);
            $('#ajax').text(res);
        }
    });
})();