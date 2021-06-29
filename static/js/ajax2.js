document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);
console.log('inside ajax2');

function loadUser() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'static/json/user.json', true);

    xhr.onload = function () {
        // console.log('inside onload');
        if(xhr.status == 200){

            // console.log(xhr.responseText);

            // if you wand to get inside the json you need to wrap the whole thing with JSON.parse
            let user = JSON.parse(this.responseText);
            console.log(user.name);

            let output = '';
            output += '<ul>' +
                '<li>ID: '+user.id+'</li>' +
                '<li>Name: '+user.name+'</li>' +
                '<li>Email: '+user.email+'</li>' +
                '</ul>';
            document.getElementById('user').innerHTML = output;
        }
    }

    xhr.send();
}

function loadUsers() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'static/json/users.json', true);

    xhr.onload = function () {
        // console.log('inside onload');
        if(xhr.status == 200){

            // console.log(xhr.responseText);

            // if you wand to get inside the json you need to wrap the whole thing with JSON.parse
            let users = JSON.parse(this.responseText);
            // console.log(users.name);

            let output = '';
            for (let user in users){
                // console.log(user)
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
