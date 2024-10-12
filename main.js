document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        // ajax - asynchronous javascript and xml
        event.preventDefault()
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        // console.log(endpoint);

        xhttp.open('GET', endpoint);
        xhttp.send();
    })
})