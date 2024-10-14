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
        const botao = $(this);
        event.preventDefault()
        $(this).find('i').addClass('d-none');
        $(this).find('span').removeClass('d-none');
        

        $.ajax(endpoint).done(function (resposta){
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro}, ${cidade}, ${estado}`;
            
            console.log(endereco);

            $('#endereco').val(endereco);

            $(botao).find('i').removeClass('d-none');
            $(botao).find('span').addClass('d-none');
        })

    })
})