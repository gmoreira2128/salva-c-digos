function VerificaLogin(){

    document.getElementById('botao-Login').addEventListener('click', () => {

        const email = document.getElementById('email-login').value;    
        const password = document.getElementById('password-login').value;

        const Diferenteemail = "exemple@gmail.com";
        const Diferentepassword = "password123";

        document.getElementById('mensage-sucess').innerHTML = " ";
        document.getElementById('mensage-fail').innerHTML = " ";

        document.getElementById('mensage-sucess').style.color = "white"; 

        if(email === Diferenteemail && password === Diferentepassword){
            document.getElementById('mensage-sucess').innerHTML = "Login Realizado com sucesso";
        }   else{
            document.getElementById('mensage-fail').innerHTML = "Login ou Senha Invalidas";
                }
    });
}

VerificaLogin();