const form = document.getElementById('form-form');
const dinheiroGuardadoInput = document.getElementById('dinheiro-guardado:')
const valorNecessarioInput = document.getElementById('valor-necessário:')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const n1 = parseFloat(dinheiroGuardadoInput.value);
    const n2 = parseFloat(valorNecessarioInput.value);

    const msgErro = `Você ainda precisa de mais `;
    const msgSuccess = `Tá moscando, você já podia estar lá.`;

    if (n2 > n1) {
        alert(msgErro);
    } else {
        alert(msgSuccess);
}
})

console.log(form);