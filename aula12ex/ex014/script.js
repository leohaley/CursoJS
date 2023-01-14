function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //comando abaixo puxa a hora do sistema(pc)
    //var hora = data.getHours()
    var hora = 5
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#f3deb8'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#f19f4c'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#1e7cbc'
    }
}