const getQuestions = () => {
    const container = document.querySelector('.container');
    // En esta funcion vamos a devolver todas las preguntas para mostrarlas en la pagina
    const preguntas = [
        {
            question: 'Cuando un buen amigo, pareja o familiar acude a mí porque tiene un problema...',
            options: [
                'No me preocupo si el problema no es considerablemente grave',
                'Le escribo una lista con las posibles soluciones',
                'Abrazo a esa persona y lo siento mucho por ella',
                'Me invento un plan para ayudarla'
            ]
        },
        {
            question: 'En el momento de estudiar antes de hacer un examen...',
            options: [
                'Disfruto mucho haciendo ejercicios para prepararme el examen',
                'Elaboro un plan de estudio, compaginando descanso con horas de concentración',
                'Me pongo muy nervioso/a y siento mucha ansiedad, sobre todo el día antes',
                'Busco apuntes divertidos, hago dibujos para acordarme y elaboro técnicas para recordar nombres y fechas',
            ]
        },
        {
            question: 'En una pareja lo que busco es...',
            options: [
                'Una persona con la que compartir conocimientos y sabiduría',
                'Busco a alguien compatible con mi personalidad, agradable y que yo considere atractivo/a',
                'Amor y pasión, me gusta sentir muchas emociones en mi relación de pareja',
                'Alguien con quien compartir aventuras y nuevas experiencias',
            ]
        },
        {
            question: 'Cuando tengo una discusión familiar...',
            options: [
                ' No me involucro demasiado, solamente observo cómo se comportan los demás',
                'Analizo cómo se porta cada miembro de la familia e intento actuar en consecuencia',
                'Me pongo a llorar, no soporto ver como mi familia se pelea, son personas que quiero mucho',
                'Busco la mejor manera de calmar el ambiente y me invento alguna dinámica o juego si hace falta'
            ]
        },
        {
            question: 'Cuando tengo un presentimiento o una corazonada...',
            options: [
                'No suelo tener ese tipo de sensaciones',
                'Pienso por qué lo siento e intento buscar la explicación más razonable de dicho presentimiento',
                'Me alegro mucho, me encanta sentir cómo mi mente me intenta decir algo',
                'Sigo esa corazonada, no suelo equivocarme nunca',
            ]
        },
        {
            question: 'Mi trabajo ideal sería...',
            options: [
                'Profesor/a de matemáticas, física o empresario/a',
                'Administrativo/a, contable o gerente',
                'Psicólogo/a, periodista o trabajador/a social',
                'Arquitecto, compositor/a, escritor/a, poeta o diseñador/a'
            ]
        }

    ];
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