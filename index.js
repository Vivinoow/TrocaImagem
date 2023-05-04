var botao = document.getElementById('clique');
botao.onclick = function(){
    if(botao.value === 'troca'){
        pers1.src = 'aaa.jpg';
        botao.value = 'Retornar';
        botao.innerHTML = '(Voltar)';
    }else{
        pers1.src = 'download.jpg';
        botao.value = 'troca';
        botao.innerHTML = '(Trocar)';
    }
}