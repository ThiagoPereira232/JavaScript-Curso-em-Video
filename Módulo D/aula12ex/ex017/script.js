function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'image/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = 'image/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // Boa noite
        img.src = 'image/noite.png'
        document.body.style.background = '#515154'
    }
}