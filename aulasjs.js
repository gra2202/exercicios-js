//DESAFIOS DA SEMANA 2

function soma (x,y){
    return x + y;
}

var valores = soma (1,1) + 5;

var nvar

function adicionavalor(x){
    nvar = x;
    return('O valor da variável nvar agora é ' + nvar);
}

function chata(x,y,z){
    if (x == undefined || y == undefined || z == undefined){
        return ('Preencha todos os valores corretamente!');
    }
    return (x * y * z) + 2; 
}

function indiferente(a,b,c){
    if(a != undefined && b == undefined && c == undefined){
        return a;
    } else if (a != undefined && b != undefined && c == undefined){
        return a + b;
    }else if (a != undefined && b != undefined && c != undefined){
        return (a + b) / c;
    }else if (a == undefined && b == undefined && c == undefined){
        return false;
    }
    return null;
}

var pessoa = {
    nome: 'Livinho', 
    sobrenome: 'funk', 
    sexo: 'indefinido', 
    idade: 24,  
    altura: 1.80, 
    peso: 75, 
    andando: false, 
    caminhouQuantosMetros: 0
}
pessoa.fazerAniversario = function(){
    return pessoa.idade++;
}

pessoa.andar = function(x){
    pessoa.caminhouQuantosMetros = pessoa.caminhouQuantosMetros + x;
    pessoa.andando = true;
    return
}

pessoa.parar = function(){
    pessoa.andando = false;
    return
}

pessoa.nomeCompleto = function(){
    return 'Olá meu nome completo é ' + pessoa.nome + ' ' + pessoa.sobrenome;
}

pessoa.mostrarIdade = function(){
    return 'Olá eu tenho ' + pessoa.idade + ' anos!';
}

pessoa.mostrarPeso = function(){
    return 'Eu peso ' + pessoa.peso + 'kg';
}

pessoa.mostrarAltura = function(){
    return 'Minha altura é ' + pessoa.altura + 'm';
}

pessoa.apresentacao = function(){
    v1 = 'o';
    v2 = 'anos';
    v3 = 'metros';

    if( pessoa.sexo === 'feminino'){
        v1 = 'a';
    }

    if (pessoa.idade === 1){
        v2 = 'ano';
    }

    if(pessoa.caminhouQuantosMetros === 1){
        v3 = 'metro';
    }

    return ('Olá, eu sou ' + v1 + ' ' + pessoa.nome + ' ' + pessoa.sobrenome +', tenho ' + pessoa.idade + ' ' + v2 + ', ' + pessoa.altura + 'm de altura, meu peso é ' + pessoa.peso + 'kg e, só hoje, eu já caminhei ' + pessoa.caminhouQuantosMetros + ' ' + v3 + '!');
}

var isTruthy = function(x){
    if (!!x === true){
        return true;
    } else {
        return false;
    }
    //return !!x;
};

var carro  = {
    marca: 'Tesla',
    modelo: 'SuperS',
    placa: 'xxx-1234',
    ano: 2019,
    cor: 'vermelho',
    quantasPortas: 5,
    assentos: 5,
    quantidadePessoas: 0    
}

carro.mudarCor = function(novaCor){
    carro.cor = novaCor;
}

carro.obterCor = function(){
    return carro.cor;
}

carro.obterModelo = function(){
    return carro.modelo;
}

carro.obterMarca = function(){
    return carro.marca;
}

carro.obterMarcaModelo = function(){
    return 'Esse carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo();
}

carro.entraPessoas = function(nPessoas){
    var lugaresOcupados = carro.quantidadePessoas + nPessoas;
    if(lugaresOcupados === carro.assentos){
        carro.quantidadePessoas = lugaresOcupados;
        return 'O carro está lotado';
    } else if (lugaresOcupados > carro.assentos) {
        var assentosDisponiveis = carro.assentos - carro.quantidadePessoas;
        return 'Só cabem mais ' + assentosDisponiveis + ' pessoas!';
    } else{
        carro.quantidadePessoas = lugaresOcupados;
        return ('Temos ' + carro.quantidadePessoas + ' pessoas no carro');
    }
};

var arrei = ['eu', 5, 10, 15, 'sanduiche'];

function retornaarrei(x){
    return x = arrei;
}

function arreiDois(x,y){
    return x[y];
}

var fruta = ['banana', 'uva', 'grande', 'vermelha', 12];

function book(nomeLivro){
    var todosLivros = {
        livro1 : {
            quatidadePaginas: 200,
            autor: 'Rowling',
            editora: 'Magika'
        },
        livro2 : {
            quatidadePaginas: 300,
            autor: 'Shakespeare',
            editora: 'Sono'
        },
        livro3 : {
            quatidadePaginas: 400,
            autor: 'Martin',
            editora: 'Final Ruim'
        }
    };

    if (!nomeLivro) {
        return todosLivros;
    }
    return todosLivros [nomeLivro];

    //return !nomeLivro ? todosLivros : todosLivros[nomeLivro]; 
    //forma simplificada
}

console.log ("O livro " + 'livro1' + " tem " + book('livro1').quatidadePaginas + " páginas!");


console.log ("O autor do livro " + 'livro1' + " é " + book('livro1').autor);

console.log ("O livro " + 'livro1' + " foi publicado pela editora " + book('livro1').editora);


var campeonato = 'cblol';

console.log(campeonato);

var times = ['Flamengo', 'Vivo Keyd', 'Kabum', 'Team One','Redemption'];

console.log('Times que estão participando do campeonato: ' + times);

function posicaoTimes(colocacao){
    if (colocacao <= 5 && colocacao > 0){
        return 'O time que está em ' + colocacao + 'º lugar é o ' + times[colocacao - 1] + '.';
    } else {
        return "Não temos a informação do time que está nessa posição.";
    }    
}


var contador = 0;
while(contador <= 10){
    var somando = contador + 20;
    contador++;
    console.log(somando);
}

// forma simples de fazer
// var num = 20;
// while (num <= 30){
//     console.log( num++ );
// }


function convertToHex(color) {
    var hexa;
    switch(color){
        case 'red': hexa = 'F1F1F1';
        break;
        case 'blue': hexa = 'BUBUBU';
        break;
        case 'black': hexa = '000000';
        break;
        case 'white': hexa = 'FFFFFF';
        break;
        case 'green': hexa = 'XUXUXU';
        break;
        default: return 'Não temos o equivalente hexadecimal para ' + color;
    }
    return 'O hexadecimal para a cor '+ color +' é '+ hexa +'.';
}


var xuxa = [1, 2, 3, 4, 5]

function addItem(j){
    xuxa.push(j);
    return xuxa;
}
console.log("O segundo elemento do segundo array é "+ xuxa[5][1]);

console.log("O primeiro array tem "+xuxa.length+" itens.");
 
console.log("O segundo array tem "+xuxa[5].length+" itens.");

xuxu=10;

while(xuxu <= 20){
    if (xuxu % 2 === 0){
        console.log(xuxu);
    }
    xuxu++;
}

xuxu=10;
while(xuxu <= 20){
    if (xuxu % 2 === 1){
        console.log(xuxu);
    }
    xuxu++;
}

for (var i = 100; i <= 120; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

for (var i = 111; i <= 125; i++){
    if(i % 2 === 1){
        console.log(i);
    }
}

var first = 5;
var second = 10;

var sum = function calculateSum(x,y){
    return x + y;
}

console.log("A soma de "+ first +" e " + second + " é igual a "+ sum(first,second) +".");

console.log("O nome da função que faz a soma é "+ sum.name +".");

function showName(){
    return "Guilherme";
}

var varShowName = showName();

console.log("A função "+ showName.name +" retorna "+ varShowName +".");


function calculator(operador){

    return function(valorONe,valorTwo){
        var resultado;
        switch (operador){
            case '+':
                resultado = valorONe + valorTwo;
                break;
            case '-':
                resultado = valorONe - valorTwo;
                break;
            case '*':
                resultado = valorONe * valorTwo;
                break;
            case '/':
                resultado = valorONe / valorTwo;
                break;
            case '%':
                resultado = valorONe % valorTwo;
                break;
            default:
                return 'Operação inválida.';
        }        
        console.log("Resultado da operação: "+ valorONe +" "+ operador +" "+  valorTwo +" = "+ resultado +".");       
    } 
}

var sum = calculator('+');
var subtraction = calculator('-');
var multiplication = calculator('*');
var division = calculator('/');
var mod = calculator('%');





