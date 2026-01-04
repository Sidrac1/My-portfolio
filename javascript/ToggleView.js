document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los contenedores de proyectos
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const btn = project.querySelector('.toggleButton');
        const content = project.querySelector('.fullViewContent, .fullView'); // Busca ambas clases por si acaso

        // Escondemos el contenido al inicio
        if (content) {
            content.classList.add('hidden');
        }

        // Asignamos el evento al botón de este proyecto específico
        if (btn && content) {
            btn.addEventListener('click', function() {
                content.classList.toggle('hidden');
                btn.classList.toggle('expanded');
            });
        }
    });
});