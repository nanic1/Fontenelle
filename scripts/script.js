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

// CÓDIGOS DE ANIMAÇÃO

$('div#testemunhos ul:eq(0)').css('opacity', 0)
$('div#testemunhos ul:eq(0)').css('opacity', 1)
$('div#testemunhos ul:eq(0)').css('opacity', 2)

$('section#domingo-perfeito').waypoint( function(direcao) {
    if ( direcao == 'down') {
        $('div.folha1').removeClass('animate__animated animate__fadeOutUp')
        $('div.folha3').removeClass('animate__animated animate__fadeOutUp')
        $('div.camarao').removeClass('animate__animated animate__fadeOutUp animate__slow')
        $('div.tomate').removeClass('animate__animated animate__fadeOutUp animate__slow')
        $('div.queijo').removeClass('animate__animated animate__fadeOutUp animate_slower')
        $('div.folha2').removeClass('animate__animated animate__fadeOutUp animate_slower')

        $('div.folha1').addClass('animate__animated animate__fadeInUp')
        $('div.folha3').addClass('animate__animated animate__fadeInUp')
        $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow')
        $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slow')
        $('div.queijo').addClass('animate__animated animate__fadeInUp animate_slower')
        $('div.folha2').addClass('animate__animated animate__fadeInUp animate_slower')
    }

    if ( direcao == "up") {
        $('div.folha1').addClass('animate__animated animate__fadeOutUp')
        $('div.folha3').addClass('animate__animated animate__fadeOutUp')
        $('div.camarao').addClass('animate__animated animate__fadeOutUp animate__slow')
        $('div.tomate').addClass('animate__animated animate__fadeOutUp animate__slow')
        $('div.queijo').addClass('animate__animated animate__fadeOutUp animate_slower')
        $('div.folha2').addClass('animate__animated animate__fadeOutUp animate_slower')
    }

}, {
    offset:'450px;'
})


$('section#pizza').waypoint( function(direcao) {
    if (direcao == 'down') {
        $('section#pizza p').removeClass('animate__animated animate__fadeOutUp')
        $('section#pizza div.pizza-opcoes').removeClass('animate__animated animate__fadeOutUp animate_slow')

        $('section#pizza p').addClass('animate__animated animate__fadeInUp')
        $('section#pizza div.pizza-opcoes').addClass('animate__animated animate__fadeInUp animate_slow')
    }
    if (direcao == 'up') {
        $('section#pizza p').addClass('animate__animated animate__fadeOutUp')
        $('section#pizza div.pizza-opcoes').addClass('animate__animated animate__fadeOutUp animate_slow')
    }
}, {
    offset: '450px;'
})

$('section#testemunha').waypoint( function(direcao) {
    if (direcao == 'down') {
        $('div#testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeOutUp animate__slower')
        $('div#testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeOutUp animate__slow')
        $('div#testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeOutUp animate__slower')

        $('div#testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower')
        $('div#testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow')
        $('div#testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower')
    }
    if (direcao == 'up') {
        $('div#testemunhos ul:eq(0)').addClass('animate__animated animate__fadeOutUp animate__slower')
        $('div#testemunhos ul:eq(1)').addClass('animate__animated animate__fadeOutUp animate__slow')
        $('div#testemunhos ul:eq(2)').addClass('animate__animated animate__fadeOutUp animate__slower')
    }
}, {
    offset: '400px;'
})

$('div#transicao-testemunha-plano').waypoint( function(direcao) {
    if (direcao == "down") {
        $('div#decoracao1').removeClass('animate__animated animate__fadeOutLeft animate__slow')
        $('div#decoracao2').removeClass('animate__animated animate__fadeOut animate__slow')
        $('div#decoracao3').removeClass('animate__animated animate__fadeOutRight animate__slow')

        $('div#decoracao1').addClass('animate__animated animate__fadeInLeft animate__slow')
        $('div#decoracao2').addClass('animate__animated animate__fadeIn animate__slow')
        $('div#decoracao3').addClass('animate__animated animate__fadeInRight animate__slow')
    }
    if (direcao == 'up') {
        $('div#decoracao1').addClass('animate__animated animate__fadeOutLeft animate__slow')
        $('div#decoracao2').addClass('animate__animated animate__fadeOut animate__slow')
        $('div#decoracao3').addClass('animate__animated animate__fadeOutRight animate__slow')
    }
}, {
    offset: '800px;'
})

$('section#plano-principal').waypoint( function(direcao){
    if (direcao == 'down') {
        $('div.planos:eq(0)').removeClass('animate__animated animate__fadeOutLeft animate__slower')
        $('div.planos:eq(1)').removeClass('animate__animated animate__fadeOutUp animate__slow')
        $('div.planos:eq(2)').removeClass('animate__animated animate__fadeOutRight animate__slower')

        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slower')
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow')
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate__slower')
    }
    if (direcao == 'up') {
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeOutLeft animate__slower')
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeOutUp animate__slow')
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeOutRight animate__slower')
    }
}, {
    offset: '450px;'
})

$('footer').waypoint( function(direcao) {
    if (direcao == 'down') {
        $('div#info').removeClass('animate__animated animate__fadeOut animate__slow')
        
        $('div#info').addClass('animate__animated animate__fadeIn animate__slow')
    }
    if (direcao == 'up') {
        $('div#info').addClass('animate__animated animate__fadeOut animate__slow')
    }
}, {
    offset: '650px;'
})