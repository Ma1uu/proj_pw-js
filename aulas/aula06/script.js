let proximoId = 1

function adicionarLinha(){
    //Entrada de valores do formulário
   const A = document.getElementById('A').value;
   const B = document.getElementById('B').value;
   const C = document.getElementById('C').value;

delta = B*B - 4*A*C;
if (delta < 0) {
    alert("A equação não tem solução real!")
}
   
else if(delta === 0){
    X1 = (-B + Math.sqrt(delta)) / (2*A);
}
   
else if (delta > 0){
    X1 = (-B + Math.sqrt(delta)) / (2*A);
    X2 =  (-B - Math.sqrt(delta)) / (2*A);
}


   if (A === '' ||  B === '' || C === '')
       alert("preencha todos os valores do Formulario!")
else{
//criar tabela
var tabela = document.getElementById('tabeladados');
var linha = tabela.insertRow(proximoId);
var celula1 = linha.insertCell(0);
var celula2 = linha.insertCell(1);
var celula3 = linha.insertCell(2);

//Cria uma linha na tabela se não existir
const tabela = document.getElementById("tabelaDados") .getElementsByTagName('tbody') [0];

//Inserindo uma nova linha
const novalinha = tabela.insertRow();

//inserindo os valores da linha
const celId = novaLinha.insertCell(0);
const celA = novaLinha.insertCell(1);
const celB = novaLinha.insertCell(2);
const celC = novaLinha.insertCell(3);
const celX1 = novaLinha.insertCell(4);
const celX2 = novaLinha.insertCell(5);

//inserindo os valores dentro da celulas
celId.innerHTML = proximoId;
celA.innerHTML = A;
celB.innerHTML = B;
celC.innerHTML = C;
celX1.innerHTML = X1;
celX2.innerHTML = X2;
 
proximoId++

//limpar formulario
document.getElementById("linhaform").reset();
    }
}    