const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let color = 'black';
let lineWidth = 2;
let drawHistory = []; // Arreglo para almacenar el historial de trazos

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    clearCanvas(); // Limpiar al redimensionar
}

// Guardar el estado actual del canvas
function saveState() {
    drawHistory.push(canvas.toDataURL()); // Guardar el estado como una imagen base64
}

// Cargar el último estado del historial
function restoreState() {
    const img = new Image();
    const lastState = drawHistory[drawHistory.length - 1];
    if (lastState) {
        img.src = lastState;
        img.onload = function() {
            clearCanvas();
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    }
}

// Función para deshacer el último trazo
function undoLast() {
    if (drawHistory.length > 0) {
        drawHistory.pop(); // Eliminar el último estado
        restoreState(); // Restaurar el estado anterior
    }
}

function getEventPosition(e) {
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches ? e.touches[0] : e; // Obtener la posición del toque o del mouse
    return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
    };
}

// Comenzar a dibujar (mouse y táctil)
function startDrawing(e) {
    isDrawing = true;
    const { x, y } = getEventPosition(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    saveState(); // Guardar el estado del canvas antes de empezar a dibujar
}

// Continuar dibujando (mouse y táctil)
function draw(e) {
    if (!isDrawing) return;
    const { x, y } = getEventPosition(e);
    ctx.lineTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.stroke();
}

// Terminar de dibujar (mouse y táctil)
function stopDrawing() {
    isDrawing = false;
    ctx.closePath();
}

// Selección de color
function setColor(newColor) {
    color = newColor;
}

// Borrador
function setEraser() {
    color = 'white'; // O el color del fondo
}

// Guardar dibujo
function saveDrawing() {
    const link = document.createElement('a');
    link.download = 'dibujo.png';
    link.href = canvas.toDataURL();
    link.click();
}

// Limpiar el canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Cambiar el grosor del trazo
function setLineWidth(width) {
    lineWidth = width;
}

// Eventos de mouse
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Eventos táctiles
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startDrawing(e);
});
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    draw(e);
});
canvas.addEventListener('touchend', stopDrawing);

// Ajustar canvas al cargar la página
window.addEventListener('load', resizeCanvas);
// Ajustar canvas al redimensionar la ventana
window.addEventListener('resize', resizeCanvas);
