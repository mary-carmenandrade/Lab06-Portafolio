// Cuando el formulario se envíe con éxito, muestra el mensaje de confirmación
document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Aquí deberías agregar la lógica para enviar el formulario al servidor
    // Una vez que el formulario se envíe con éxito, muestra el mensaje de confirmación
    const confirmationMessage = document.querySelector('.confirmation-message');
    confirmationMessage.style.display = 'block';
});
