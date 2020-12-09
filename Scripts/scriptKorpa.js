function kolicinaSardone(){
    let kol = (document.getElementById('komadaSardone')).innerText;
    kol= Number(kol)+1;
   // console.log(kol);

    let novaKol = document.getElementById('komadaSardone');
    novaKol.innerText = kol;
   // console.log(nk);
}

function kolicinaRizling(){
    let kol = (document.getElementById('komadaRizling')).innerText;
    kol= Number(kol)+1;
   // console.log(kol);

    let novaKol = document.getElementById('komadaRizling');
    novaKol.innerText = kol;
   // console.log(nk);
}

function kolicinaPinot(){
    let kol = (document.getElementById('komadaPinot')).innerText;
    kol= Number(kol)+1;
   // console.log(kol);

    let novaKol = document.getElementById('komadaPinot');
    novaKol.innerText = kol;
   // console.log(nk);
}

function kolicinaCabernet(){
    let kol = (document.getElementById('komadaCabernet')).innerText;
    kol= Number(kol)+1;
   // console.log(kol);

    let novaKol = document.getElementById('komadaCabernet');
    novaKol.innerText = kol;
   // console.log(nk);
}


function ukupnaCena1() {
    let ukupna = (document.getElementById("ukupna")).innerText;
    ukupna = Number(ukupna)+960;

    let novaCena = document.getElementById('ukupna');
    novaCena.innerText = ukupna;


}

function ukupnaCena2() {
    let ukupna = (document.getElementById("ukupna")).innerText;
    ukupna = Number(ukupna)+910;

    let novaCena = document.getElementById('ukupna');
    novaCena.innerText = ukupna;


}

function ukupnaCena3() {
    let ukupna = (document.getElementById("ukupna")).innerText;
    ukupna = Number(ukupna)+870;

    let novaCena = document.getElementById('ukupna');
    novaCena.innerText = ukupna;


}

function ukupnaCena4() {
    let ukupna = (document.getElementById("ukupna")).innerText;
    ukupna = Number(ukupna)+910;

    let novaCena = document.getElementById('ukupna');
    novaCena.innerText = ukupna;


}
function obrisiKorpu(){
    let novaKol1 = document.getElementById('komadaSardone');
    novaKol1.innerText = 0;

    let novaKol2 = document.getElementById('komadaRizling');
    novaKol2.innerText = 0;

    let novaKol3 = document.getElementById('komadaPinot');
    novaKol3.innerText = 0;

    let novaKol4 = document.getElementById('komadaCabernet');
    novaKol4.innerText = 0;

    let novaCena = document.getElementById('ukupna');
    novaCena.innerText = 0;
}
function otvoriNovi1(){
    
    var noviProzor = window.open("Prijava.html","newWindow", "width =700,height = 700,top=200,left=200")
    
}
function otvoriNovi(){
    let cena = document.getElementById('ukupna').innerText;
    if (Number(cena)>0) {
    var str1 = 'Cena Vaše porudžbine je '
    var str2 = cena;
    var str3 = str1.concat(str2);
    var str4 = ' RSD. Kliknite OK da biste nastavili narudžbinu.';
    var str5 = str3.concat(str4);
    var alert = window.alert(str5);
    var noviProzor = window.open("Prijava.html","newWindow", "width =700,height = 700,top=200,left=200")
    } else {
        var alert = window.alert("Vaša korpa je prazna.");
    }
}