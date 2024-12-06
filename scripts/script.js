var quantidade  = $('div#testemunhos ul').length
var limite      = (quantidade * 336) * -1
var largura     = limite + 336
var view_largura= $('section#testemunha div#testemunha-centro').width()

$('div#testemunhos').css('width', limite*-1)

$('div#teste').html(limite)

$('div#testemunha-direita').click( function() {

    posicaoatual = $('div#testemunhos').position().left
    novaposicao = posicaoatual - view_largura

    if (limite < posicaoatual - view_largura) {
        $('div#testemunhos').animate({left:novaposicao},1000)
    }

    if (limite > (novaposicao - view_largura)) {
        $('div#testemunha-direita ion-icon').css('opacity', 0.5)
        $('div#testemunha-direita ion-icon').css('cursor', 'not-allowed')
    }

    $('div#testemunha-esquerda ion-icon').css('opacity', 1)
    $('div#testemunha-esquerda ion-icon').css('cursor', 'pointer')
})

$('div#testemunha-esquerda').click( function() {
    posicaoatual = $('div#testemunhos').position().left

    if (posicaoatual + view_largura <= 0) {
        novaposicao = posicaoatual + view_largura
        $('div#testemunhos').animate({left:novaposicao}, 1000)
    }

    if(novaposicao == 0) {
        $('div#testemunha-esquerda ion-icon').css('opacity', 0.5)
        $('div#testemunha-esquerda ion-icon').css('cursor', 'not-allowed')
    }

    $('div#testemunha-direita ion-icon').css('opacity', 1)
    $('div#testemunha-direita ion-icon').css('cursor', 'pointer')
})

// CÓDIGOS DE CLIQUES DOS PLANOS DE ASSINATURA

$('div.planos-bottom').click(function() {
    alert('clicou')
})

// CÓDIGO PARA DIRECIONAMENTO DE LINKS

//GitHub
$("ion-icon#github").click(function() {
    window.open("https://github.com/nanic1")
})

//Instagram
$("ion-icon#instagram").click(function() {
    window.open("https://www.instagram.com/p_kurtzz/")
})

//Linkedin
$("ion-icon#linkedin").click(function() {
    window.open("https://www.linkedin.com/in/pedrocastrokurtz/")
})