// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn-buscar-cep').addEventListener('click', function() {
//         // ajax - asynchronous javascript and xml
//         event.preventDefault()
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;
//         // console.log(endpoint);

//         xhttp.open('GET', endpoint);
//         xhttp.send();
//     })
// })

$(document).ready(function () {
    $('#btn-buscar-cep').click(function () {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        event.preventDefault()

        $.ajax(endpoint).done(function (resposta){
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro}, ${cidade}, ${estado}`;
            
            console.log(endereco);

            $('#endereco').val(endereco);
        })

    })
})