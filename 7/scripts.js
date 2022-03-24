var n = prompt("digite seu nome");
var st = parseInt( prompt ("digite seu salario fixo"));
var td = parseInt( prompt ("digite seu total de vendas"));
var sf = td * 0.15 + st;
alert("o senhor(a) " + n + "salario fixo R$" + st + " recebeu esse mes R$"  + sf );