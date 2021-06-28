// create an event listener
console.log('hello');
document.getElementById('button').addEventListener('click', loadText);

function loadText(){
    // console.log('button clicked');

    // Create XHR Object
    var xhr = new XMLHttpRequest();
    // open - type, url/file, async
    console.log(xhr);
    xhr.open('GET', 'static/txt/sample.txt', true);

    xhr.onload = function (){
        if(this.status == 200){
            console.log(this.responseText);
        }
    }

    // sends request
    xhr.send();
}

