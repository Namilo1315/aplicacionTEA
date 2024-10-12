

const translations = {
    es: {
        
        colores1: "COLORES",
        verde: "VERDE",
        verdeClaro: "VERDE CLARO",
        yo: "YO",
        tu: "TÚ",
        volver: "VOLVER AL INICIO",
        quiero: "QUIERO",
        noquiero: "NO QUIERO",
        megusta: "ME GUSTA",
        nomegusta1: "NO ME GUSTA",
        gracias: "GRACIAS",
        porfavor: "POR FAVOR",
        manzana: "MANZANA",
        banana: "BANANA",
        naranja: "NARANJA",
        frutilla: "FRUTILLA",
        sandia: "SANDÍA",
        mandarina: "MANDARINA",
        uva: "UVAS",
        pera: "PERA",
        el: "ÉL",
        nosotross: "NOSOTROS",
        ellos: "ELLOS",
        hacer: "HACER",
        poner: "PONER",
        ir: "IR",
        es: "ES",
        estar: "ESTAR",
        iralbaño: "IR AL BAÑO",
        alimentos: "ALIMENTOS",
        bebidas: "BEBIDAS",
        masemociones: "MÁS EMOCIONES",
        comoestas: "¿CÓMO ESTÁS?",
        mal: "MAL",
        bien: "BIEN",
        hola: "HOLA",
        buendia: "BUEN DÍA",
        graciass: "GRACIAS",
        chau: "CHAU",
        si: "SÍ",
        no: "NO",
        mas: "MÁS",
        menos: "MENOS",
        soy: "SOY",
        familia: "FAMILIA",
        casa: "CASA",
        calendario: "CALENDARIO",
        objetos: "OBJETOS",
        escuela: "ESCUELA",
        alimentos: "ALIMENTOS",
        numeros1: "NUMEROS1",
    },
    en: {
        
        colores1: "COLORS",
        verde: "GREEN",
        verdeClaro: "LIGHT GREEN",
        yo: "I",
        tu: "YOU",
        volver: "RETURN TO HOME",
        quiero: "I WANT",
        noquiero: "I DON'T WANT",
        megusta: "I LIKE",
        nomegusta1: "I DON'T LIKE",
        gracias: "THANK YOU",
        porfavor: "PLEASE",
        manzana: "APPLE",
        banana: "BANANA",
        naranja: "ORANGE",
        frutilla: "STRAWBERRY",
        sandia: "WATERMELON",
        mandarina: "MANDARIN",
        uva: "GRAPE",
        pera: "PEAR",
        el: "HE",
        nosotross: "WE",
        ellos: "THEY",
        hacer: "TO DO",
        poner: "TO PUT",
        ir: "TO GO",
        es: "IS",
        estar: "TO BE",
        iralbaño: "TO GO TO THE BATHROOM",
        alimentos: "FOOD",
        bebidas: "DRINKS",
        masemociones: "MORE EMOTIONS",
        comoestas: "HOW ARE YOU?",
        mal: "BAD",
        bien: "GOOD",
        hola: "HELLO",
        buendia: "GOOD DAY",
        graciass: "THANK YOU",
        chau: "BYE",
        si: "YES",
        no: "NO",
        mas: "MORE",
        menos: "LESS",
        soy: "I AM",
        familia: "FAMILY",
        casa: "HOUSE",
        calendario: "CALENDAR",
        objetos: "OBJECTS",
        escuela: "SCHOOL",
        alimentos: "FOOD",
        numeros1: "NUMBERS",
    }
};

function setLanguage(lang) {
    const elements = {
        
        colores1: 'colores1',
        verde: 'verde',
        verdeClaro: 'verde-claro',
        yo: 'yo',
        tu: 'tu',
        volver: 'volver',
        quiero: 'quiero',
        noquiero: 'noquiero',
        megusta: 'megusta',
        nomegusta1: 'nomegusta1',
        gracias: 'gracias',
        porfavor: 'porfavor',
        manzana: 'manzana',
        banana: 'banana',
        naranja: 'naranja',
        frutilla: 'frutilla',
        sandia: 'sandia',
        mandarina: 'mandarina',
        uva: 'uva',
        pera: 'pera',
        el: 'el',
        nosotross: 'nosotross',
        ellos: 'ellos',
        hacer: 'hacer',
        poner: 'poner',
        ir: 'ir',
        es: 'es',
        estar: 'estar',
        iralbaño: 'iralbaño',
        alimentos: 'alimentos',
        bebidas: 'bebidas',
        masemociones: 'masemociones',
        comoestas: 'comoestas',
        mal: 'mal',
        bien: 'bien',
        hola: 'hola',
        buendia: 'buendia',
        graciass: 'graciass',
        chau: 'chau',
        si: 'si',
        no: 'no',
        mas: 'mas',
        menos: 'menos',
        soy: 'soy',
        familia: 'familia',
        casa: 'casa',
        calendario: 'calendario',
        objetos: 'objetos',
        escuela: 'escuela',
        alimentos: "alimentos",
        numeros1: "numeros1",
        
    };

    Object.keys(elements).forEach(key => {
        const element = document.getElementById(elements[key]);
        if (element) {
            element.innerText = translations[lang][key] || element.innerText;
        }
    });
}
// Función para reproducir el texto
function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 1;
    utterance.pitch = 1;
    synth.speak(utterance);
}

// Lista de IDs y sus textos correspondientes
const ids = {
    'colores': 'colores',
    'yo1': 'yo',
    'tu1': 'tu',
    'volver': 'volver al inicio',
    'quiero': 'quiero',
    'noquiero': 'no quiero',
    'megusta': 'me gusta',
    'nomegustaa': 'no me gusta',
    'gracias': 'gracias',
    'porfavor': 'por favor',
    'manzana': 'manzana',
    'banana': 'banana',
    'naranja': 'naranja',
    'frutilla': 'frutilla',
    'sandia': 'sandía',
    'mandarina': 'mandarina',
    'uva': 'uvas',
    'pera': 'pera',
    'tu': 'tu',
    'el': 'él',
    'nosotross': 'nosotros',
    'ellos': 'ellos',
    'hacer': 'hacer',
    'poner': 'poner',
    'ir': 'ir',
    'es': 'es',
    'estoy': 'estoy',
    'iralbaño': 'ir al baño',
    'alimentos1': 'alimentos',
    'bebidas': 'bebidas',
    'masemociones': 'mas emociones',
    'comoestass': '¿Cómo estás?',
    'mal': 'mal',
    'bien': 'bien',
    'hola1': 'hola',
    'buendia': 'buen día',
    'graciass': 'gracias',
    'chau': 'chau',
    'si1': 'si',
    'no1': 'no',
    'mas': 'más',
    'menos': 'menos',
    'quieroo': 'quiero',
    'megustaa': 'me gusta',
     'nomegustaa': 'no me gusta',
      'soy': 'soy',
       'familia': 'familia',
        'casa': 'casa',
        'calendario': 'calendario',
        'objetos': 'objetos',
        'escuela4': 'escuela',
        'numeros': 'numeros',
        'lindo': 'lindo',
        'grande': 'grande',
        'pequeño': 'pequeño',
        'animales': 'animales',
        'buenasnoches': 'buenasnoches',
        'feliz': 'feliz',
        'enojado': 'enojado',
        'tengo': 'tengo',
        'teamo': 'teamo',
        'frutas': 'frutas',
        'ropa': 'ropa',
        '+acciones': 'mas acciones',
        'preposiciones': ' mas preposiciones',
        'calendario': 'calendario',
        'objetos': 'objetos',
        'enamorado': 'enamorado',
        'asustado': 'asustado',
        'triste': 'triste',
       
        
}; 


// Asocia el evento 'click' para cada ID en la lista
Object.keys(ids).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', function() {
            speak(ids[id]);
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    
    document.getElementById('speak-button').addEventListener('click', function() {
        console.log("Speak button clicked");
        let text = document.getElementById('text-input').value.trim();
        console.log("Text to speak:", text);
        if (text) {
            let speech = new SpeechSynthesisUtterance(text);
            speech.lang = 'es-ES';
            speech.rate = 1;
            speech.pitch = 1;
            window.speechSynthesis.speak(speech);
        } else {
            alert('Por favor, escribe algo en el cuadro de texto.');
        }
    });

    document.getElementById('clear-button').addEventListener('click', function() {
        console.log("Clear button clicked");
        document.getElementById('text-input').value = '';
    });
});/*
document.addEventListener('DOMContentLoaded', () => {
    const pictogramas = document.querySelectorAll('.pictograma');
    const buttons = document.querySelectorAll('.img-carita');
    const phraseContainer = document.getElementById('phrase-container');
    const textInput = document.getElementById('text-input');
    const speakButton = document.getElementById('speak-button');
    const clearButton = document.getElementById('clear-button');
    const reproducirFraseButton = document.getElementById('reproducir-frase');
    const limpiarFraseButton = document.getElementById('limpiar-frase');

    let phraseList = [];

    pictogramas.forEach(pictograma => {
        pictograma.addEventListener('click', () => {
            const word = pictograma.dataset.word;
            const src = pictograma.src;
            addToPhraseContainer(word, src);
            phraseList.push(word);
        });
    });

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const word = button.innerText.trim();
            addToPhraseContainer(word);
            phraseList.push(word);
        });
    });

    function addToPhraseContainer(text, src) {
        const item = document.createElement('div');
        item.className = 'phrase-item';
        if (src) {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'phrase-img'; // Añadido para el tamaño
            item.appendChild(img);
        }
        const span = document.createElement('span');
        span.innerText = text;
        item.appendChild(span);
        const removeButton = document.createElement('span');
        removeButton.innerHTML = '&times;';
        removeButton.className = 'remove-item';
        removeButton.addEventListener('click', () => {
            item.remove();
            // Remove the text from the list
            const index = phraseList.indexOf(text);
            if (index > -1) {
                phraseList.splice(index, 1);
            }
        });
        item.appendChild(removeButton);
        phraseContainer.appendChild(item);
    }

    speakButton.addEventListener('click', () => {
        const text = textInput.value;
        if (text) {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        }
    });

    clearButton.addEventListener('click', () => {
        textInput.value = '';
    });

    reproducirFraseButton.addEventListener('click', () => {
        // Join phrases from the list instead of the container
        const phrase = phraseList.join(' ');
        const utterance = new SpeechSynthesisUtterance(phrase);
        speechSynthesis.speak(utterance);
    });

    limpiarFraseButton.addEventListener('click', () => {
        phraseContainer.innerHTML = '';
        phraseList = []; // Clear the list as well
    });
});
*/
document.addEventListener('DOMContentLoaded', () => {
    const pictogramas = document.querySelectorAll('.pictograma');
    const pictograma1 = document.querySelectorAll('.pictograma1');
    const buttons = document.querySelectorAll('.img-carita');
    const phraseContainer = document.getElementById('phrase-container');
    const textInput = document.getElementById('text-input');
    const speakButton = document.getElementById('speak-button');
    const clearButton = document.getElementById('clear-button');
    const reproducirFraseButton = document.getElementById('reproducir-frase');
    const limpiarFraseButton = document.getElementById('limpiar-frase');

    // Lista para guardar las palabras o imágenes seleccionadas
    let phraseList = [];

    // Función para agregar pictogramas
    pictogramas.forEach(pictograma => {
        pictograma.addEventListener('click', () => {
            const word = pictograma.dataset.word;
            const src = pictograma.src;
            addToPhraseContainer(word, src);
        });
    });
    pictograma1.forEach(pictograma1 => {
        pictograma1.addEventListener('click', () => {
            const word = pictograma1.dataset.word;
            const src = pictograma1.src;
            addToPhraseContainer(word, src);
        });
    });

    // Función para agregar botones con texto
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const word = button.innerText.trim();
            addToPhraseContainer(word);
        });
    });

    // Función para agregar elementos al contenedor de frases
    function addToPhraseContainer(word, src = null) {
        const item = document.createElement('div');
        item.className = 'phrase-item';

        if (src) {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'phrase-img'; // Para agregar el estilo a la imagen
            item.appendChild(img);
        } else {
            const text = document.createElement('span');
            text.className = 'phrase-text';
            text.innerText = word;
            item.appendChild(text);
        }

        // Botón para eliminar el elemento
        const removeButton = document.createElement('span');
        removeButton.innerHTML = '&times;';
        removeButton.className = 'remove-item';
        item.appendChild(removeButton);

        // Agregar el nuevo ítem al contenedor y a la lista
        phraseContainer.appendChild(item);
        phraseList.push({ word, src });

        // Agregar funcionalidad de eliminación
        removeButton.addEventListener('click', () => {
            item.remove();
            // Eliminar el elemento de phraseList
            const index = phraseList.findIndex(phrase => phrase.word === word && phrase.src === src);
            if (index > -1) {
                phraseList.splice(index, 1); // Eliminar de la lista
            }
        });
    }

    // Funcionalidad para reproducir la frase
    reproducirFraseButton.addEventListener('click', () => {
        const phrase = phraseList.map(phrase => phrase.word).join(' ');
        if (phrase) {
            const utterance = new SpeechSynthesisUtterance(phrase);
            speechSynthesis.speak(utterance);
        }
    });

    // Funcionalidad para limpiar la frase
    limpiarFraseButton.addEventListener('click', () => {
        phraseContainer.innerHTML = ''; // Limpiar el contenedor de la frase
        phraseList = []; // Limpiar la lista también
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const pictogramGrid = document.getElementById('pictogramGrid');
    const searchInput = document.getElementById('searchInput');
    const selectedPictograms = document.getElementById('selectedPictograms');
    const reproducirFraseButton = document.getElementById('reproducir-frase');
    const limpiarFraseButton = document.getElementById('limpiar-frase');

    let phraseList = [];
    let pictograms = [];

    // Cargar pictogramas por categoría
    function loadPictograms(category) {
        fetch(`pictogramas_${category}.json`)
            .then(response => response.json())
            .then(data => {
                pictograms = data;
                renderPictograms(pictograms);
            })
            .catch(error => {
                console.error('Error al cargar los pictogramas:', error);
            });
    }

    // Renderizar pictogramas en la interfaz
    function renderPictograms(pictograms) {
        pictogramGrid.innerHTML = '';
        pictograms.forEach(pictogram => {
            const div = document.createElement('div');
            div.className = 'col-lg-2 col-md-4 col-sm-4 col-xs-6 text-center';
            div.innerHTML = `
                <img src="${pictogram.src}" alt="${pictogram.word}" class="pictograma" data-word="${pictogram.word}" width="100">
                <p class="fw-bold">${pictogram.word.toUpperCase()}</p>
            `;
            pictogramGrid.appendChild(div);
        });
    }

    // Filtrar pictogramas según la búsqueda
    function filterPictograms() {
        const query = searchInput.value.toLowerCase();
        const pictogramas = document.querySelectorAll('.pictograma');
        pictogramas.forEach(pictograma => {
            const word = pictograma.dataset.word.toLowerCase();
            if (word.includes(query)) {
                pictograma.parentElement.style.display = 'block';
            } else {
                pictograma.parentElement.style.display = 'none';
            }
        });
    }

    // Añadir pictogramas al contenedor de frases
    function addToPhraseContainer(word, src = null) {
        const item = document.createElement('div');
        item.className = 'phrase-item d-flex align-items-center m-2';
        
        if (src) {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'phrase-img';
            img.width = 100; // Ajustar tamaño
            item.appendChild(img);
        } else {
            const text = document.createElement('span');
            text.className = 'phrase-text';
            text.innerText = word;
            item.appendChild(text);
        }

        const removeButton = document.createElement('span');
        removeButton.innerHTML = '&times;';
        removeButton.className = 'remove-item btn btn-danger btn-sm ml-2';
        item.appendChild(removeButton);

        selectedPictograms.appendChild(item);
        phraseList.push({ word, src });

        removeButton.addEventListener('click', () => {
            item.remove();
            const index = phraseList.findIndex(phrase => phrase.word === word && phrase.src === src);
            if (index > -1) {
                phraseList.splice(index, 1);
            }
        });
    }

    // Manejar clic en pictogramas
    pictogramGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('pictograma')) {
            const word = event.target.dataset.word;
            const src = event.target.src;
            addToPhraseContainer(word, src);
        }
    });

    // Manejar filtrado
    searchInput.addEventListener('input', filterPictograms);

    // Reproducir frase
    reproducirFraseButton.addEventListener('click', () => {
        const phrase = phraseList.map(phrase => phrase.word).join(' ');
        if (phrase) {
            const utterance = new SpeechSynthesisUtterance(phrase);
            speechSynthesis.speak(utterance);
        }
    });

    // Limpiar frase
    limpiarFraseButton.addEventListener('click', () => {
        selectedPictograms.innerHTML = '';
        phraseList = [];
    });

    // Manejar clic en botones de categoría
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            loadPictograms(category);
        });
    });
});





// Función para manejar la selección de pictogramas y agregarlos al contenedor de frases
function manejarPictogramaSeleccionado(selector, modalId) {
    document.querySelectorAll(selector).forEach(function(pictograma) {
      pictograma.addEventListener('click', function() {
        // Obtener la palabra del pictograma seleccionado
        var word = pictograma.getAttribute('data-word');
        
        // Crear un nuevo elemento para agregar la imagen al contenedor de frases
        var newPictogram = document.createElement('div');
        newPictogram.classList.add('pictograma-selected');
        
        // Crear un nuevo elemento de imagen
        var imgElement = document.createElement('img');
        imgElement.src = pictograma.src;
        imgElement.alt = pictograma.alt;
        imgElement.width = 80; // Mantener el mismo tamaño
        
        // Agregar la imagen al nuevo elemento
        newPictogram.appendChild(imgElement);
        
        // Agregar el nuevo pictograma (imagen) al contenedor de frases
        document.getElementById('phrase-container').appendChild(newPictogram);
        
        // Reproducir el nombre seleccionado usando SpeechSynthesis
        var utterance = new SpeechSynthesisUtterance(word);
        speechSynthesis.speak(utterance);
        
        // Cerrar el modal
        var modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
        modal.hide();
      });
    });
  }
  
  // Función para abrir el modal cuando se hace clic en la categoría
  function abrirModal(linkId, modalId) {
    document.getElementById(linkId).addEventListener('click', function(event) {
      event.preventDefault(); // Evitar comportamiento predeterminado del enlace
      var modal = new bootstrap.Modal(document.getElementById(modalId));
      modal.show(); // Mostrar el modal correspondiente
    });
  }
  
  // Llamadas a las funciones para cada categoría
  manejarPictogramaSeleccionado('.color-pictograma', 'colorModal');
  manejarPictogramaSeleccionado('.emocion-pictograma', 'emocionesModal');
  manejarPictogramaSeleccionado('.numeros-pictograma', 'numerosModal');
  manejarPictogramaSeleccionado('.animales-pictograma', 'animalesModal');
  manejarPictogramaSeleccionado('.preposiciones-pictograma', 'preposicionesModal');
  manejarPictogramaSeleccionado('.preposiciones-pictograma', 'preposicionesModal');
  manejarPictogramaSeleccionado('.frutas-pictograma', 'frutasModal');
  
  abrirModal('colores-link', 'colorModal');
  abrirModal('emociones-link', 'emocionesModal');
  abrirModal('numeros-link', 'numerosModal');
  abrirModal('animales-link', 'animalesModal');
  abrirModal('preposiciones-link', 'preposicionesModal');
  abrirModal('frutas-link', 'frutasModal');
  
  // Puedes seguir añadiendo más categorías de pictogramas utilizando las mismas funciones
  
 
