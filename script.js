function toggleMenu(){
  document.getElementById('nav').classList.toggle('active');
}

function calcular(){
  let kg = document.getElementById('kg').value;
  let resultado = document.getElementById('resultado');

  if(kg > 0){
    resultado.innerText = `Estimación: ${kg * 0.8} kg valorizables.`;
  } else {
    resultado.innerText = 'Ingrese un valor válido';
  }
}

function enviar(e){
  e.preventDefault();
  alert('Solicitud enviada correctamente');
}
