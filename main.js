function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if(hora >= 0 && hora < 12){
        // BOM DIA
        img.src = './assets/manha.jpg';
        document.body.style.backgroundColor = 'red';
    } else if(hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = './assets/tarde.jpg';
        document.body.style.backgroundColor = 'pink';
    } else {
        // BOA NOITE
        img.src = './assets/noite.jpg';
        document.body.style.backgroundColor = 'black';
    }
}