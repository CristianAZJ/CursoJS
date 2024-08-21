document.addEventListener('DOMContentLoaded', () => {
    const toggleFormBtn = document.querySelector('.btn-success');
    const taskForm = document.getElementById('formulario');
    const addTaskBtn = taskForm.querySelector('.btn-primary');
    const taskInput = document.getElementById('nuevaTarea');
    const taskTableBody = document.getElementById('cuerpo-tabla');

    // Listado de tareas iniciales basado en la información de prueba
    var tareas = [
        { tarea: "Pintar la fachada de la casa" },
        { tarea: "Comprar comida para el perro" },
        { tarea: "Pagar la tarjeta de crédito" }
    ];

    // Renderizar las tareas iniciales al cargar la página
    renderTasks();

    // Mostrar/ocultar el formulario al hacer clic en el botón "Agregar tarea"
    toggleFormBtn.addEventListener('click', () => {
        taskForm.style.display = taskForm.style.display === 'none' ? 'block' : 'none';
    });

    // Prevenir el comportamiento por defecto del Enter en el input de texto
    // Me inspire y agregue esto 
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            agregarTarea();
        }
    });
    // Agregar una nueva tarea a la lista
    addTaskBtn.addEventListener('click', () => {
        agregarTarea();
    });
    // Función para agregar una nueva tarea
    function agregarTarea() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            tareas.push({ tarea: taskText }); // Agregar tarea al arreglo
            renderTasks(); // Actualizar la tabla de tareas
            taskInput.value = ''; // Limpiar el input
            taskForm.style.display = 'none'; // Ocultar el formulario
        }
    }

    // Función para eliminar una tarea
    function deleteTask(index) {
        tareas.splice(index, 1);
        renderTasks();
    }

    // Función para renderizar las tareas en la tabla
    function renderTasks() {
        taskTableBody.innerHTML = '';
        tareas.forEach((taskObj, index) => {
            const row = document.createElement('tr');
            const taskCell = document.createElement('td');
            taskCell.textContent = taskObj.tarea;
            const actionCell = document.createElement('td');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Finalizar';
            deleteBtn.classList.add('btn', 'btn-danger');
            deleteBtn.addEventListener('click', () => deleteTask(index));
            actionCell.appendChild(deleteBtn);
            row.appendChild(taskCell);
            row.appendChild(actionCell);
            taskTableBody.appendChild(row);
        });
    }
});
