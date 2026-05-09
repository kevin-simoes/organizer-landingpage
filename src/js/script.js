const form = document.getElementById("registration-form");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const nome = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const perfil = document.getElementById("profile").value;
  const descoberta = document.getElementById("discovery").value;
  const preferencia = document.getElementById("excited").value;

  if (nome.trim().length < 3) {
    alert("Digite um nome válido.");
    return;
  }

  if (preferencia.trim().length < 5) {
    alert("Digite no mínimo 5 letras.");
    return;
  }

  let res = prompt(
    "Obrigado por se registrar! Você pode compartilhar suas respostas? (Sim/Não)"
  );

  while (
    res !== null &&
    res.toLowerCase() !== "sim" &&
    res.toLowerCase() !== "não"
  ) {

    alert('Digite apenas "sim" ou "não".');

    res = prompt(
      "Deseja compartilhar as respostas?"
    );
  }

  if (res !== null && res.toLowerCase() === "sim") {

    alert(
      "Suas respostas estão compartilhadas no console.log!"
    );

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Perfil:", perfil);
    console.log("Conheceu por:", descoberta);
    console.log("Mais empolgado com:", preferencia);

  } else {

    alert(
      "Suas respostas não serão compartilhadas no console.log."
    );
  }

  form.reset();

});