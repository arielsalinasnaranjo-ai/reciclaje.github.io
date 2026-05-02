function calcularImpacto() {
  const kgInput = document.getElementById("kg");
  const resultado = document.getElementById("resultado");

  const kg = parseFloat(kgInput.value);

  if (isNaN(kg) || kg <= 0) {
    resultado.innerText = "⚠️ Ingresa un valor válido mayor a 0";
    resultado.style.color = "#ffcc00";
    return;
  }

  const ahorroCO2 = kg * 1.5;

  resultado.innerText = `🌱 Has reducido ${ahorroCO2.toFixed(2)} kg de CO₂`;
  resultado.style.color = "#a5d6a7";
}

function enviarFormulario(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const msg = document.getElementById("formMsg");

  if (!nombre || !correo || !mensaje) {
    msg.innerText = "⚠️ Todos los campos son obligatorios";
    msg.style.color = "orange";
    return;
  }

  msg.innerText = "✅ Mensaje enviado correctamente";
  msg.style.color = "lightgreen";

  e.target.reset();
}

function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}
