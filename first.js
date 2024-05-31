const requestURL = 'https://api.github.com/users/supremeashu';

const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.onreadystatechange = function () {

    // console.log(xhr.readyState);
    if (xhr.readyState === 4) {

        const data = JSON.parse(this.responseText)
        document.getElementById("name").innerHTML = data.name;
        document.getElementById("bio").innerHTML = data.bio;
        document.getElementById("followers").innerHTML = data.followers;
        document.getElementById("login").innerHTML = data.login;
        document.getElementById("avatar").src = data.avatar_url;

    }

}

xhr.send();