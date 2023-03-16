const form = document.getElementById("form");
const saldo = document.getElementById("saldo");
const saque = document.getElementById("saque");
const acerto = document.getElementById('saquerealizado');
const erro = document.getElementById('erro');

function sacandoDinheiro(saldo, saque) {
    return saldo >= saque;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let validaForm = sacandoDinheiro(saldo.valueAsNumber, saque.valueAsNumber)
    if(validaForm){
        acerto.style.display = 'block';
        saldo.value = '';
        saque.value = '';
    }
})

saque.addEventListener('keyup', function(e){
    let validaForm = sacandoDinheiro(saldo.valueAsNumber, saque.valueAsNumber)
    if(!validaForm){
        erro.style.display = 'block';
        acerto.style.display='none';
    } else{
        erro.style.display = 'none';
    }
    
})