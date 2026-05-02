function calcularImpacto() {
  let kg = document.getElementById('kg').value;

  if (!kg || kg <= 0) {
    document.getElementById('resultado').innerText = "Ingresa un valor válido";
    return;
  }

  let ahorro = (kg * 2.5).toFixed(2);

  document.getElementById('resultado').innerText =
    `🌱 Has evitado aproximadamente ${ahorro} kg de CO2`;
}

function enviarFormulario(e) {
  e.preventDefault();
  alert("Mensaje enviado correctamente 🌱");
}
