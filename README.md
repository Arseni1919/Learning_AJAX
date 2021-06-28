# Learning AJAX

## About

AJAX is a developer's dream, because you can:

- Read data from a web server - after the page has loaded
- Update a web page without reloading the page
- Send data to a web server - in the background

## Example List

- [Example 1 - Text File](static/js/ajax1.js)

```js
document.getElementById('button').addEventListener('click', loadText);

function loadText(){
    // Create XHR Object
    var xhr = new XMLHttpRequest();
    // open - type, url/file, async
    console.log(xhr);
    xhr.open('GET', 'static/txt/sample.txt', true);

    // optional - used for loaders (!)
    xhr.onprogress = function () {
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function (){
        console.log('READYSTATE', xhr.readyState);
        if(this.status == 200){
            document.getElementById('text').innerHTML = this.responseText;
        } else if(this.status == 404){
            document.getElementById('text').innerHTML = 'Not found...';
        }
    }

    xhr.onerror = function () {
        console.log('ERROR ... ');
    }

    // sends request
    xhr.send();
}
```

## Credits

- [AJAX Crash Course (Vanilla JavaScript)](https://www.youtube.com/watch?v=82hnvUYY6QA&ab_channel=TraversyMedia)
- [w3schools - AJAX Introduction](https://www.w3schools.com/js/js_ajax_intro.asp)
- [Mac: Cmd+Shift+R - hard refresh](https://stackoverflow.com/questions/41144565/flask-does-not-see-change-in-js-file)















