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


- [Example 2 - JSON File](static/js/ajax2.js)

```js
document.getElementById('button2').addEventListener('click', loadUsers);
function loadUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'static/json/users.json', true);
    xhr.onload = function () {
        if(xhr.status == 200){
            // if you wand to get inside the json you need to wrap the whole thing with JSON.parse
            let users = JSON.parse(this.responseText);
            let output = '';
            for (let user in users){
                output += '<ul>' +
                '<li>ID: '+users[user].id+'</li>' +
                '<li>Name: '+users[user].name+'</li>' +
                '<li>Email: '+users[user].email+'</li>' +
                '</ul>';
            }
            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();
}
```


- [Example 3 - External API](static/js/ajax3.js)

```js
document.getElementById('button1').addEventListener('click', loadUsers);
function loadUsers(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);
    xhr.onload = function(){
        if(this.status == 200){
            let users = JSON.parse(this.responseText);
            let output = '';
            for (let i in users){
                output += '<div class="user">' +
                    '<img src="'+users[i].avatar_url+'" width="70" height="70">' +
                    '<ul>'+
                    '<li>ID: '+users[i].id + '</li>' +
                    '<li>Login: '+users[i].login + '</li>' +
                    '</ul>'+
                    '</div>';
            }
            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();
}
```


- [Example 4 - AJAX & Forms](static/js/ajax4.js)

```js
document.getElementById('getForm').addEventListener('submit', getName);
document.getElementById('postForm').addEventListener('submit', postName);

function getName(e){
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let name = document.getElementById('name1').value
    xhr.open('GET', `../process?name=${name}`, true);
    xhr.onloadstart = function(){
        console.log('progress...');
        document.getElementById('respondGet').innerHTML = 'In process...';
    }
    xhr.onload = function(){
        console.log(this.responseText);
        document.getElementById('respondGet').innerHTML = this.responseText;
    }
    xhr.send();
}


function postName(e){
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let name = document.getElementById('name2').value
    let params = `name=${name}`
    xhr.open('POST', `../process`, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onloadstart = function(){
        console.log('progress...');
        document.getElementById('respond').innerHTML = 'In process...';
    }
    xhr.onload = function(){
        console.log(this.responseText);
        document.getElementById('respond').innerHTML = this.responseText;
    }
    xhr.send(params);
}
```

## Credits

- [AJAX Crash Course (Vanilla JavaScript)](https://www.youtube.com/watch?v=82hnvUYY6QA&ab_channel=TraversyMedia)
- [w3schools - AJAX Introduction](https://www.w3schools.com/js/js_ajax_intro.asp)
- [Mac: Cmd+Shift+R - hard refresh](https://stackoverflow.com/questions/41144565/flask-does-not-see-change-in-js-file)















