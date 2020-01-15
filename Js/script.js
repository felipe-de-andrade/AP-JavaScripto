let board = document.getElementById('board');
let buttonAdd = document.getElementById('add');
let inputAdd = document.getElementById('novaTarefa');
let listaTarefas = [];
if(localStorage.getItem('listaTarefas')){
     listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
} else {
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
}


mostarNaTela(listaTarefas);


buttonAdd.onclick = function(){
    let valorDigitado = inputAdd.value;
    listaTarefas.push(valorDigitado);
    let tarefa = document.createElement('div');
    //div
    tarefa.setAttribute('class','tarefas');

    let titulo = document.createElement('div');
    titulo.setAttribute('class','col-md-8');
    titulo.textContent = valorDigitado;

    let buttonCheck = document.createElement('div');
    buttonCheck.setAttribute('class','col-md-2');

    let iconCheck = document.createElement('span');
    iconCheck.setAttribute('id','icon');
    iconCheck.setAttribute('class','iconify');
    iconCheck.setAttribute('data-icon','emojione:check-box-with-check');

    buttonCheck.appendChild(iconCheck);

    tarefa.appendChild(titulo);
    tarefa.appendChild(buttonCheck);

    board.appendChild(tarefa);

    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
}

function mostarNaTela(listaTarefas){
    for(let item of listaTarefas){
        gerarTarefa(item);
    }
}

function gerarTarefa(valorDigitado){
    let tarefa = document.createElement('div');
    //div
    tarefa.setAttribute('class','tarefas');

    let titulo = document.createElement('div');
    titulo.setAttribute('class','col-md-8');
    titulo.textContent = valorDigitado;

    let buttonCheck = document.createElement('div');
    buttonCheck.setAttribute('class','col-md-2');

    let iconCheck = document.createElement('span');
    iconCheck.setAttribute('id','icon');
    iconCheck.setAttribute('class','iconify');
    iconCheck.setAttribute('data-icon','emojione:check-box-with-check');

    buttonCheck.appendChild(iconCheck);

    tarefa.appendChild(titulo);
    tarefa.appendChild(buttonCheck);

    board.appendChild(tarefa);
}