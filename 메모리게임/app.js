const cards = [
    {
        name: '수달',
        img: 'img/수달.jpg'
    },
    {
        name: '수달',
        img: 'img/수달.jpg'
    },
    {
        name: '족제비',
        img: 'img/족제비.jpg'
    },
    {
        name: '족제비',
        img: 'img/족제비.jpg'
    },
    {
        name: '해달',
        img: 'img/해달.jpg'
    },
    {
        name: '해달',
        img: 'img/해달.jpg'
    },
    {
        name: '두더지',
        img: 'img/e다다다.jpg'
    },
    {
        name: '두더지',
        img: 'img/e다다다.jpg'
    }
]

document.addEventListener("DOMContentLoaded", () => {
    cards.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardChosen = []
    let cardsChosenId = []
    let cardWon = []
    function createBoard(){
        for(let i=0; i<cards.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src', "img/뒷배경.jpg")
            card.setAttribute('data-id',i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }
    function flipcard() {
        let cardId = this.getAttribute('data-id')
        cardChosen.push(cards[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cards[cardId].img)
        if (cardChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if(optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src', 'img/뒷배경.jpg')
            cards[optionTwoId].setAttribute('src', 'img/뒷배경.jpg')
            alert('You have clicked the same image!')
        }else if (cardChosen[0]===cardChosen[1]){
            alert('찾았습니다')
            cards[optionOneId].setAttribute('src', 'img/흰배경.jpg')
            cards[optionTwoId].setAttribute('src', 'img/흰배경.jpg')
            cards[optionOneId].removeEventListener('click', flipcard)
            cards[optionTwoId].removeEventListener('click', flipcard)
            cardWon.push(cardChosen)
        }else {
            cards[optionOneId].setAttribute('src', 'img/뒷배경.jpg')
            cards[optionTwoId].setAttribute('src', 'img/뒷배경.jpg')
            alert('틀렸습니다. 다시도 하십시오')
        }
        cardChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardWon.length
        if (cardWon.length === cards.length/2){
            resultDisplay.textContent = 'ALL Clear!!'
        }
    }
    createBoard();
})