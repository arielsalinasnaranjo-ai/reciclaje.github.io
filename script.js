function calcularImpacto() {
  const kg = document.getElementById("kg").value;

  if (kg === "" || kg <= 0) {
    document.getElementById("resultado").innerText = "Ingresa un valor válido";
    return;
  }

  const ahorroCO2 = kg * 1.5; // estimación simple

  document.getElementById("resultado").innerText =
    `Has reducido aproximadamente ${ahorroCO2.toFixed(2)} kg de CO2 🌱`;
}

function enviarFormulario(e) {
  e.preventDefault();
  alert("Mensaje enviado correctamente ✅");
}
