const questions = [
  'O que aprendemos Hoje ?',
  'O que me deixou aborrecido ? E o que eu poderia fazer para melhorar ?',
  'O que me deixou feliz hoje ?',
  'Quantas pessoas ajudei hoje ?'
]

const ask = (index = 0) => {
  process.stdout.write('\n' + questions[index] + ' -->')
}

ask()

const answers = []
process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`
  Bacana seu nome!!))

  O que voce aprendeu Hoje foi:
  ${answers[0]}

  o que te aborreceu e voce poderia melhorar:
  ${answers[1]}

  Você ajudou ${answers[3]} pessoas hoje!!!

`)
})
