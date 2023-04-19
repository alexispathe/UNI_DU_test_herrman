import {preguntas} from './questionsDB.js'; //Devolvemos las preguntas
const getQuestions = () => {
    const container = document.querySelector('.container');
    // En esta funcion vamos a devolver todas las preguntas para mostrarlas en la pagina
   
    // Llamamos a la  etiqueta contenedora de las preguntas
    const question = document.querySelector('.question-container');
    // Creamos el boton de submit para que se envien los datos
    const btnSubmit = document.createElement('button');
    btnSubmit.className = "btn-submit btn btn-success w-100";
    btnSubmit.textContent = "Ver resultado"
    preguntas.map((pregunta, i) => {
        const div = document.createElement('div');
        div.className = 'div';
       
        // Crearemos un b para guardar el titulo de la pregunta 
        const b = document.createElement('b');
        b.textContent = `${i+1} - ${pregunta.question}`;
        div.append(b);
        pregunta.options.map((option, j) => {
             // Esta etiqueta servira para almacenar cada pregunta 
        const formCheck = document.createElement('div');
        formCheck.className = 'form-check';
            // Crearemos un input para almacenar las opciones
            const input = document.createElement('input');
            input.className = 'form-check-input';
            input.type = "radio";
            input.value = j + 1;
            input.name = `question-${i}`
            // Crearemos un label para guardar el nombre de la opcion
            const label = document.createElement('label');
            label.textContent = option;
            label.className = 'form-check-label';
            formCheck.append(input);
            formCheck.append(label);
            div.append(formCheck)
        })
        question.append(div)

    })
    question.append(btnSubmit)
    container.append(question)

    handleClick(preguntas.length);

}
const handleClick = (num) => {
    /* Con esta funcion vamos a capturar las respuestas y hacer la suma correspondiente*/

    const btnClick = document.querySelector('.btn-submit');
    btnClick.addEventListener('click', () => {
        let value = 0; //Esta constante permitira guardar cada valor de la respuesta
        for (let i = 0; i < num; i++) {
            document.getElementsByName(`question-${i}`).forEach((r, i) => {
                if (r.checked) {
                    value += parseInt(r.value);
                }
            })
        }
        result(value);
    });
}
const createAnswer=(description)=>{
    const result = document.querySelector('.result');
    result.classList = 'result alert alert-primary text-center';
    result.textContent = description;
}
const result = (valor) => {
    /*Esta funcion permitira hacer la validacion para saber que Cuadrante predomina la persona*/
    
   
    if (valor > 0 && valor <= 6) {
         createAnswer('Resultado: Cuadrante predominante A (Lógico-matemático)')
    } else if (valor >= 6 && valor <= 12) {
        createAnswer('Resultado: Cuadrante predominante B (Organizado-Analista)')
    } else if (valor >= 12 && valor <= 18) {
        createAnswer('Resultado: Cuadrante predominante C (Emocional-Sensitivo)')
    } else if (valor >= 18 && valor <= 24) {
        createAnswer('Resultado: Cuadrante predominante D (Intuitivo-Imaginativo)')
    }else{
        alert("Seleccione alguna respuesta")
    }
    document.body.scrollIntoView({
        behavior: "smooth",
      });

}
getQuestions();