function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Elemento ou seletor invalido');
    }
} /*Função que ao ser chamada emite o som desejado atravéz do "idAudio", o "seletorAudio" é um
parâmetro utilizado para o programa saber que som deve emitir (idAudio)*/

const listaDeTeclas = document.querySelectorAll('.tecla'); /*Uma lista de teclas é armazenada na variavel
"listaDeTeclas" acessando o documento com o querySelectorAll + a class utilizada para identificação*/

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i]; //Atribuindo à variavel "tecla" um valor da variavel "listaDeTeclas"
    const instrumento = tecla.classList[1]; //Atribuindo na variavel instrumento a primeira classe do obejeto
    const idAudio = `#som_${instrumento}` //Template string

    tecla.onclick = function () { //Função Anônima para conseguir executar a função "tocaSom()" apenas depois do usuário interagir
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) { //propriedade caso alguma tecla esteja apertada "onkeydown" adicionar uma class
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
