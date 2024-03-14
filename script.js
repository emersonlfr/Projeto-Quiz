const perguntas = [
  {
    pergunta: "Qual é o país mais populoso do mundo?",
    respostas: [
      "Índia",
      "China",
      "Estados Unidos"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o rio mais longo do mundo?",
    respostas: [
      "Nilo",
      "Amazonas",
      "Yangtzé"
    ],
    correta: 1
  },
  {
    pergunta: "Quantos continentes existem?",
    respostas: [
      "5",
      "6",
      "7"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a montanha mais alta do mundo?",
    respostas: [
      "Monte Everest",
      "Monte Kilimanjaro",
      "Monte McKinley"
    ],
    correta: 0
  },
  {
    pergunta: "Em que ano foi a primeira viagem à lua?",
    respostas: [
      "1965",
      "1969",
      "1972"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o maior oceano do mundo?",
    respostas: [
      "Oceano Atlântico",
      "Oceano Índico",
      "Oceano Pacífico"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a cidade mais populosa do mundo?",
    respostas: [
      "Pequim",
      "Tóquio",
      "Mumbai"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o deserto mais extenso do mundo?",
    respostas: [
      "Deserto do Saara",
      "Deserto de Gobi",
      "Deserto da Arábia"
    ],
    correta: 0
  },
  {
    pergunta: "Quantos países fazem fronteira com o Brasil?",
    respostas: [
      "9",
      "10",
      "11"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a língua mais falada no mundo?",
    respostas: [
      "Inglês",
      "Mandarim",
      "Espanhol"
    ],
    correta: 1
  }
];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }