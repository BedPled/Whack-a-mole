let squares = document.getElementsByClassName('square')
let countScore = 0;
let scoreText = document.getElementById('score')
let asd = null
let index
//
// const onClick = () => {
//     console.log(this)
// }
//
//
// for (let i = 0; i < squares.length; i++) {
//     squares[i].addEventListener('click', onClick)
// }

let button = document.querySelector("button");
let interval = null
button.addEventListener("click", function() {

    if (button.textContent === 'начать игру') {
        countScore = 0
        scoreText.textContent = countScore
        interval = setInterval(() => {
            // обработка нажатия на крота
            addMole()
        }, 1000)
        button.textContent = 'стоп'

        setTimeout(function (){
            clearInterval(interval)
            button.textContent = 'начать игру'
        }, 30000)
    } else {
        clearInterval(interval)
        button.textContent = 'начать игру'
    }

});


function getRandomIndex() {
    return Math.floor(Math.random() * 9 + 1);
}

function addScore () {
    countScore++
    console.log("countScore")
    scoreText.textContent = countScore
    // remove
    document.getElementById('crot').remove()
    document.getElementById(index).removeEventListener("click", addScore)
}

function addMole () {
    index = getRandomIndex()

    document.getElementById(index).insertAdjacentHTML("beforeend",
        '<div class="crot" id="crot"> </div>')

    let crot = document.getElementById('crot');

    document.getElementById(index).addEventListener("click", addScore)

    asd = setTimeout( () => {
        // обработка нажатия на крота

            document.getElementById(index).removeEventListener("click", addScore)

            if (document.getElementById('crot') != null) {
                document.getElementById('crot').remove()
            }
            clearTimeout(asd)
    }, 800)





}






