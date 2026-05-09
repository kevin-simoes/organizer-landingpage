const form = document.getElementById("registration-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const nome = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const perfil = document.getElementById("profile").value;
  const descoberta = document.getElementById("discovery").value;
  const preferencia = document.getElementById("excited").value;
  form.reset();

  res = prompt("Obrigado por se registrar! Você pode compartilhar suas respostas? (Sim/Não)");

  while (res.toLowerCase() !== "sim" && res.toLowerCase() !== "não") {
    alert('Digite apenas "sim" ou "não"');
    
    res = prompt("Deseja compartilhar as respostas?");
  }
  
  if (res.toLowerCase() === "sim") {
    alert("Suas respostas estão compartilhadas no console.log!");
    console.log(nome);
    console.log(email);
    console.log(perfil);
    console.log(descoberta);
    console.log(preferencia);
  } else {
    alert("Suas respostas não serão compartilhadas no console.log.");
  }
});