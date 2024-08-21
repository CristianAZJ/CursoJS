// Configuración del gráfico de radar para la sección de habilidades
var ctx = document.getElementById('skillsChart').getContext('2d');
var skillsChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['.NET Development', 'SQL', 'Entity Framework', 'RESTful APIs', 'Microservices'],
        datasets: [{
            label: 'Nivel de Competencia',
            data: [90, 85, 80, 75, 70],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            r: { 
                suggestedMin: 0, 
                suggestedMax: 100, 
                ticks: {
                    beginAtZero: true,
                    stepSize: 10, 
                }
            }
        },
        elements: {
            line: {
                borderWidth: 3
            }
        }
    }
});




// Validación básica del formulario de contacto con SweetAlert
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, complete todos los campos.',
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado',
            text: `Gracias, ${name}. Nos pondremos en contacto contigo pronto.`,
        });
    }
});
