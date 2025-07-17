const iframe = document.getElementById('api-frame');
const uid = '6e47b68d13a0413d8fd5fa248a639e8b';

// By default, the latest version of the viewer API will be used.
const client = new Sketchfab(iframe);

// Alternatively, you can request a specific version.
// var client = new Sketchfab( '1.12.1', iframe );

client.init(uid, {
    success: function onSuccess(api) {
        api.start();
        api.addEventListener('viewerready', function () {
            // API is ready to use
            // Insert your code here
            console.log('Viewer is ready');
        });
    },
    error: function onError() {
        console.log('Viewer error');
    }
});
