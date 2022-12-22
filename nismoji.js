function convert(){
let query = document.querySelector(".in").value;
let hex =query.codePointAt(0).toString(16);
let emo = String.fromCodePoint("0x" + hex);
document.querySelector(".emoji").innerHTML = emo;
document.querySelector(".hex").value= "\\U000"+hex.toUpperCase();
document.querySelector(".child").style.display="block";
}

function copy(){
 let sele = document.querySelector(".hex");
 sele.select();
    document.execCommand("copy");
}
