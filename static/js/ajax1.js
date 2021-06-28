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
    // xhr.open('GET', 'static/txt/sample2.txt', true);

    console.log('READYSTATE', xhr.readyState);
    
    // optional - used for loaders (!)
    xhr.onprogress = function () {
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function (){
        console.log('READYSTATE', xhr.readyState);
        if(this.status == 200){
            // console.log(this.responseText);
            document.getElementById('text').innerHTML = this.responseText;
        } else if(this.status == 404){
            document.getElementById('text').innerHTML = 'Not found...';
        }
    }

    xhr.onerror = function () {
        console.log('ERROR ... ');
    }

    // the old way
    // xhr.onreadystatechange = function (){
    //     console.log('READYSTATE', xhr.readyState);
    //     if(this.readyState == 4 && this.status == 200){
    //         console.log(this.responseText);
    //     }
    // }

    // sends request
    xhr.send();
}

