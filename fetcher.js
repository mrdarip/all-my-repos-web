console.log('fetcher.js');

fetch("https://github.com/mrdarip?tab=repositories").then(response => {
    console.log('fetcher.js response');
    return response.text();
    }).then(text => {
        console.log('fetcher.js text');
        console.log(text);
    });