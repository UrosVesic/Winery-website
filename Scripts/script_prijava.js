const form = document.getElementById('forma');
const imePrezime = document.getElementById('imePrezime');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const greska = document.getElementById('greska');
form.addEventListener('submit', (e) => {
    
    let messages = [];

    if(!(imePrezime.value.includes(' '))){
        messages.push('Morate uneti i ime i prezime\n');
    }

    if(password.value.length<6){
        messages.push('Šifra mora imati najmanje 6 karaktera\n');
    }
    if(password.value != password2.value){
        messages.push('Šifre se ne poklapaju\n');
    }
    
    
    if(messages.length > 0){
        e.preventDefault();
        greska.innerText = messages.join("");
    } 
    else{
        var alert = window.alert('Uspesno ste se prijavili')
        var openedWindow = window;
        openedWindow.close();
    }
});

function zatvori(){
    var openedWindow = window;
    openedWindow.close();
}


