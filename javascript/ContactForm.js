document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    // Verificamos que el formulario exista para evitar errores en consola
    if (!form) return;

    form.addEventListener("submit", async function(event) {
        event.preventDefault(); 
        
        const data = new FormData(event.target);
        const submitBtn = document.getElementById("submit-btn");

        submitBtn.disabled = true;
        submitBtn.innerText = "Enviando...";

        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            status.style.display = "block";
            if (response.ok) {
                status.innerHTML = "¡Gracias! Tu mensaje ha sido enviado correctamente!"; 
                form.reset(); 
            } else {
                status.innerHTML = "Oops! Hubo un problema al enviar el formulario.";
                status.style.color = "red";
            }
        }).catch(error => {
            status.innerHTML = "Error de conexión. Inténtalo de nuevo.";
            status.style.color = "red";
        }).finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = "Submit";
        });
    });
});