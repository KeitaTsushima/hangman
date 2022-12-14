class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
 
    get getPuzzle() {
         let puzzle = ''
        
        this.word.forEach(letter => {
            this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter: puzzle += '*'
            }
        );
    
        return puzzle
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique =!this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if (this.status !== 'playing') {
            return
        }
    
        if(isUnique) {
            this.guessedLetters.push(guess)
        }
    
        if(isUnique && isBadGuess) {
            this.remainingGuesses--
        }
    
        this.checkStatus()
        // this.showMessage
    }
   
    get showMessage() {
        // wordEl.textContent = `The Word: ${this.getPuzzle}`
        // guessEl.textContent = `Your guess: ${this.guessedLetters}`
    
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else if (this.status === 'finished') {
            return 'Great work! You guessed the word!'
        }
    }

    
    checkStatus() {
    //     let finished = true
    
    //     this.word.forEach(letter => {
    //         if(this.guessedLetters.includes(letter)) {
    
    //         } else {
    //             finished = false
    //         }
    //     })
    
    
    
        // const lettersUnguessed = this.word.filter(letter => {
        //     return !this.guessedLetters.includes(letter)
        // })
        // const finished = lettersUnguessed.length === 0
    
    
    
        const finished = this.word.every(letter => this.guessedLetters.includes(letter) || letter === ' ')
    
        const failed = !this.remainingGuesses
    
        if (finished) {
            this.status = 'finished'
        } else if (failed) {
            this.status = 'failed'
        } else {
            this.status = 'playing'
        }
    }
    
}








