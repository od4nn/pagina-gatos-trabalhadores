// Jornada de programador

let botao = document.getElementById('criar');

function calcularPontoIdade(idade){
    if (idade  < 18) return 5; //iniciante
    if (idade < 26) return 7; //junior/pleno
    if (idade < 32) return 9; //experiente
    if (idade < 45) return 10; //senior
    return 8; //velho demais
}

function calcularPontoExperiencia(experiencia){
    if (experiencia <= 3) return 2;
    if (experiencia <= 6) return 5;
    if (experiencia <= 9) return 8;
    return 10; 
}

function calcularPontoEnergia(energia){
    if (energia <= 3) return 3;
    if (energia <= 5) return 5;
    if (energia <= 8) return 8;
    return 10;
}

function definirGatoPorMedia(media){
    let gato = {imagem: '', descricao: ''}

    switch (media) {
        case 1:
            gato.imagem = './gatos/gatocrianca.jpg';
            gato.descricao = 'Gato Criança: Ainda tem muuuito o que aprender.';
            break;
        case 2:
            gato.imagem = './gatos/gatoliveira.jpg';
            gato.descricao = 'Gato Serio: Esta um pouco longe de chegar onde quer.';
            break;
        case 3:
            gato.imagem = './gatos/gatoaprendendo.jpg';
            gato.descricao = 'Gato Aprendiz: Está no caminho certo, continue!';
            break;
        case 4:
            gato.imagem = './gatos/gatotelefone.jpg';
            gato.descricao = 'Gato Telefonista: Já sabe o que quer e está no caminho para chegar lá.';
            break;
        case 5:
            gato.imagem = './gatos/gatojunior.jpg';
            gato.descricao = 'Gato Junior: Já tem um bom conhecimento e está no caminho para se tornar um pleno!';
            break;
        case 6:
            gato.imagem = './gatos/dann.jpeg';
            gato.descricao = 'Gato Enterrado: Ficou preso na imensidão de coisas para aprender! Deveria parar de comer bolacha na cama.';
            break;
        case 7: 
            gato.imagem = './gatos/david4k.jpeg';
            gato.descricao = 'Gato Teixeira: Está longe de ser um iniciante! Está sempre pronto para aprender algo novo.';
            break;
        case 8:
            gato.imagem = './gatos/gatoidoso.jpg';
            gato.descricao = 'Gato Idoso: Velho demais! Você com certeza sabe muita coisa.';
            break;
        case 9: 
            gato.imagem = './gatos/gatochad.jpg';
            gato.descricao = 'Gato Pleno: Você tem um vasto conhecimento na sua área, parabéns!';
            break;
        case 10:
            gato.imagem = './gatos/gatosenior.jpg';
            gato.descricao = 'Gato Senior: Você é o pináculo de conhecimento e onde todos na sua área almejam chegar um dia!';
            break;
    }

    return gato;
}

function exibirModal(nome, media, gato){
    document.getElementById('nome-personagem').innerText = nome;
    document.getElementById('gato-escolhido').src = gato.imagem;

    document.getElementById('nivel-personagem').innerText = `Nivel: ${media}`;
    document.getElementById('descricao-gato').innerText = gato.descricao;

    document.getElementById('overlay').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('overlay').style.display = 'none';
}

const callback = function(event){
    event.preventDefault();

    console.log('CLIQUEI');
    let nome = document.getElementById('nome').value;
    let idade = Number(document.getElementById('idade').value);
    let experiencia = Number(document.getElementById('experiencia').value);
    let energia = Number(document.getElementById('energia').value);

    let ponto1;
    let ponto2;
    let ponto3;
    let mediaCalculada;


    if(idade < 1 || idade > 99){
        window.alert('Informe uma idade válida!')
        return;
    }

    //calcula experiencia

    if(experiencia < 1 || experiencia > 10){
        window.alert('Informe uma experiência de 1 a 10!')
        return;
    }

    //calcula energia

    if(energia < 1 || energia > 10){
        window.alert('Informe uma disposição de 1 a 10!')
        return;
    }

    ponto1 = calcularPontoIdade(idade);
    ponto2 = calcularPontoExperiencia(experiencia);
    ponto3 = calcularPontoEnergia(energia);

    mediaCalculada = Math.round((ponto1 + ponto2 + ponto3) / 3);

    //mostrar media no campo 

    let gatoSorteado = definirGatoPorMedia(mediaCalculada);

    exibirModal(nome, mediaCalculada, gatoSorteado);
}

botao.onclick = callback;


document.getElementById('fechar-modal').addEventListener('click', fecharModal);