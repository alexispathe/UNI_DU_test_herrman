const getQuestions =()=>{
    const container = document.querySelector('.container');
    // En esta funcion vamos a devolver todas las preguntas para mostrarlas en la pagina
    const preguntas = [
        {
            question :'Cuando un buen amigo, pareja o familiar acude a mí porque tiene un problema...',
            options :[
                'No me preocupo si el problema no es considerablemente grave',
                'Le escribo una lista con las posibles soluciones',
                'Abrazo a esa persona y lo siento mucho por ella',
                'Me invento un plan para ayudarla'
            ]
        },
        {
            question :'En el momento de estudiar antes de hacer un examen...',
            options :[
                'Disfruto mucho haciendo ejercicios para prepararme el examen',
                'Elaboro un plan de estudio, compaginando descanso con horas de concentración',
                'Me pongo muy nervioso/a y siento mucha ansiedad, sobre todo el día antes',
                'Busco apuntes divertidos, hago dibujos para acordarme y elaboro técnicas para recordar nombres y fechas',
            ]
        },
        {
            question :'En una pareja lo que busco es...',
            options :[
                'Una persona con la que compartir conocimientos y sabiduría',
                'Busco a alguien compatible con mi personalidad, agradable y que yo considere atractivo/a',
                'Amor y pasión, me gusta sentir muchas emociones en mi relación de pareja',
                'Alguien con quien compartir aventuras y nuevas experiencias',
            ]
        },
        {
            question :'Cuando tengo una discusión familiar...',
            options :[
               ' No me involucro demasiado, solamente observo cómo se comportan los demás',
                'Analizo cómo se porta cada miembro de la familia e intento actuar en consecuencia',
                'Me pongo a llorar, no soporto ver como mi familia se pelea, son personas que quiero mucho',
                'Busco la mejor manera de calmar el ambiente y me invento alguna dinámica o juego si hace falta'
            ]
        },
        {
            question :'Cuando tengo un presentimiento o una corazonada...',
            options :[
                'No suelo tener ese tipo de sensaciones',
                'Pienso por qué lo siento e intento buscar la explicación más razonable de dicho presentimiento',
                'Me alegro mucho, me encanta sentir cómo mi mente me intenta decir algo',
                'Sigo esa corazonada, no suelo equivocarme nunca',
            ]
        },
        {
            question :'Mi trabajo ideal sería...',
            options :[
                'Profesor/a de matemáticas, física o empresario/a',
                'Administrativo/a, contable o gerente',
                'Psicólogo/a, periodista o trabajador/a social',
                'Arquitecto, compositor/a, escritor/a, poeta o diseñador/a'
            ]
        }
       
    ];
    // Crearemos una etiqueta contenedora para mostrar las preguntas
    const questionContainer = document.createElement('form');
    questionContainer.className = 'questionContainer';
    // Crearemos una etiqueta select para guardar las opciones 
    const question = document.createElement('section');
    
    
    preguntas.map((pregunta, i)=>{
        const h1 = document.createElement('h1')
        h1.textContent = pregunta.question;
        question.append(h1);
        // Crearemos una etiqueta contenedora para cada opcion de respuesta
        pregunta.options.map((option, j)=>{
        const optionContainer = document.createElement('option');
        optionContainer.className = 'option';
        // Creamos un parrafo para mostrar la pregunta 
        const p = document.createElement('p');
        // console.log(option)
        p.textContent = `${j+1}- ${option}`;
            optionContainer.append(p);
            question.append(optionContainer);
        })
        questionContainer.append(question)
    })
    container.append(questionContainer);
    handleClick();
    
}
const handleClick =()=>{
    const options = document.querySelectorAll('.option');
    options.forEach((option, i)=>{
        option.addEventListener('click',()=>{
            console.log(i+1)
        });
    })
}
getQuestions();