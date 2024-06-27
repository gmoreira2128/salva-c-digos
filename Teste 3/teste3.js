document.getElementById('btn-Sign-up').addEventListener('click', function() {
    let cadastro = document.querySelector('.cad');
    if (cadastro.style.display === 'none' || cadastro.style.display === '') {
        cadastro.style.display = 'flex'; // Mostra a div de cadastro
        cadastro.style.flexDirection = 'column'; // Organiza os elementos em coluna
        cadastro.style.alignItems = 'center'; // Centraliza os elementos na div
        cadastro.style.left = '1100px';
        cadastro.style.width = '400px';
        cadastro.style.height = '500px';
    } else {
        cadastro.style.display = 'none'; // Esconde a div de cadastro
    }
});

document.getElementById('btn-Sign-in').addEventListener('click', function(){
    let Input = document.querySelector('.Log .input');
    let Login = document.querySelector('.Log');
    if(Login.style.display == 'none' || Login.style.display == ''){
        Login.style.display = 'flex';
        Login.style.flexDirection = 'column';
        Login.style.alignItems = 'center';
        Login.style.left = '1100px'
        Login.style.width = '400px';
        Login.style.height = '500px';
        Login.style.padding = '30px';
        Login.style.position = 'absolute';
    } else{
        Login.style.display = 'none';
    }
});