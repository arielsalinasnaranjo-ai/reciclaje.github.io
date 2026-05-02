function calcularImpacto() {
  let kg = document.getElementById('kg').value;
  let ahorro = kg * 2; // ejemplo simple
  document.getElementById('resultado').innerText =
    `Has ahorrado aproximadamente ${ahorro} kg de CO2`;
}
