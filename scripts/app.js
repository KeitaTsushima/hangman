const resetBtn = document.getElementById('reset-btn')
const guessEl = document.getElementById('guess-el')
const wordEl = document.getElementById('word-el')
const chanceEl = document.getElementById('chance-el')
const levelEl = document.getElementsByName('level')
const gamesetting = [{
    words: 1,
    life: 5
},
{
    words: 2,
    life: 4
},
{
    words: 3,
    life: 3
}]
console.log(gamesetting)

let game1

window.addEventListener('keypress', e => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    guessEl.textContent = `Your guess: ${game1.guessedLetters}`
    wordEl.innerHTML = ''
    chanceEl.textContent = game1.showMessage

    game1.getPuzzle.split('').forEach(letter => {
        const letterEl = document.createElement('span')
        letter === ' ' ? letterEl.classList.add('space'):
        letterEl.textContent = letter
        wordEl.appendChild(letterEl)
    });
}

const startGame = async () => {
    console.log(levelEl)

    for (let i = 0; i < levelEl.length; i++){
        if (levelEl[i].checked){
            selectedLevel = levelEl[i].value;
        }
    }
    const level = gamesetting[selectedLevel]

    const puzzle = await getPuzzle(level.words.toString())
    game1 = new Hangman(puzzle, level.life)
    render()
}

resetBtn.addEventListener('click', startGame)

startGame()


// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch(err => {
//     console.log(`Error: ${err}`)
// })


// getLocation().then(myPlace => {
//     return getCountry(myPlace.country)
// }).then(country => {
//     console.log(`I live in ${country.name.common}, whose flag is ${country.flag}!`)
// }).catch(err => {
//     console.log(err)
// })

// getCurrentCountry().then(myCountry => {
//     console.log(`I live in ${myCountry.name.common}, whose flag is ${myCountry.flag}!`)
// }).catch(err => {
//     console.log(`Error: ${err}`)
// })

