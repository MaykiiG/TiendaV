const form = document.getElementById("login-form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir que el formulario se envíe

  const username = form.elements["username"].value;
  const password = form.elements["password"].value;

  // Validar los campos del formulario
  if (username === "" || password === "") {
    alert("Por favor, completa todos los campos.");
  } else {
    // Enviar los datos del formulario al servidor
    console.log("Usuario:", username);
    console.log("Contraseña:", password);
  }
});