document.getElementById('button1').addEventListener('click', getName);
document.getElementById('getForm').addEventListener('submit', getName);
document.getElementById('postForm').addEventListener('submit', postName);

function getName(e){
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let name = document.getElementById('name1').value
    xhr.open('GET', `../process?name=${name}`, true);

    xhr.onloadstart = function(){
        console.log('READYSTATE', xhr.readyState);
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
        console.log('READYSTATE', xhr.readyState);
        console.log('progress...');
        document.getElementById('respond').innerHTML = 'In process...';
    }

    xhr.onload = function(){
        console.log(this.responseText);
        document.getElementById('respond').innerHTML = this.responseText;
    }

    xhr.send(params);
}
