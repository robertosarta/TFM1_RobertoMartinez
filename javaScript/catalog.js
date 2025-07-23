fetch('https://api.sketchfab.com/v3/search?type=models&q=dragon', {
    headers: {
        'Authorization': 'Token 6c0d4578e96b4b10b04fba257249d6a1'
    }
})
    .then(res => res.json())
    .then(data => {
        console.log(data.results);
    });