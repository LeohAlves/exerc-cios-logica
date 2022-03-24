var valortt =parseInt(prompt ("valor total"));
var tp = parseInt(prompt("total de prestaçoes"));
var pagasp =parseInt(prompt ("prestaoes pagas"));
var valorat = valortt / tp
var apagar = (tp - pagasp ) * valorat
var pagou = pagasp * valorat
alert("voce ja pagou R$" +pagou +" ainda deve R$" +apagar )