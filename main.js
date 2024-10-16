document.addEventListener('DOMContentLoaded', function () {
            const nome = document.querySelector('#nome');
            const username = document.querySelector('#username');
            const avatar = document.querySelector('#avatar');
            const repos = document.querySelector('#repos');
            const seguidores = document.querySelector('#seguidores');
            const seguindo = document.querySelector('#seguindo');
            const link = document.querySelector('#link');

            fetch('https://api.github.com/users/senagab')
                .then(function(res) {
                    return res.json();
                })
                .then(function(json) {
                    nome.innerText = json.name;
                    username.innerText = json.login;
                    avatar.src = json.avatar_url;
                    seguidores.innerText = json.followers;
                    seguindo.innerText = json.following;
                    repos.innerText = json.public_repos;
                    link.href = json.html_url;
                })
                .catch(function (erro) {
                    alert("ocorreu um erro ao buscar o endereço, tente novamente mais tarde.")
                })
                .finally(function (){
                    console.log("terminou")
                })
        })