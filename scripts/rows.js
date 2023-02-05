let gameField = document.querySelector('.gameField')
let winner = document.querySelector('.winner')
let startBtn = document.querySelector('.startBtn')
let modalWindow = document.querySelector('.modalWindow')

let colorCount = 0

let field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

function startGame() {
    gameField.style.display = 'flex'
    gameField.innerHTML = ''
    winner.innerHTML = ''
    startBtn.style.display = 'none'
    modalWindow.style.display = 'none'

    field = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    for (let i = 0; i < field.length; i++){
        for (let j = 0; j < field[i].length; j++){
            gameField.innerHTML += '<div class="cell" onclick="insertToken(this.id)" id='+i+','+j+'>\n' +
                                        '<div class="forToken" id='+i+j+'></div>' +
                                    '</div>'

        }
    }

    deleteBorder()
}

function deleteBorder() {
    for (let k = 0; k < field.length; k++){
        for (let l = 0; l < field[k].length; l++){
            if (k == 0 || k == field.length-1){
                document.getElementById(''+k+','+l+'').style.borderTop = '0'
                document.getElementById(''+k+','+l+'').style.borderBottom = '0'
            }

            if (l == 0 || l == field[k].length-1){
                document.getElementById(''+k+','+l+'').style.borderLeft = '0'
                document.getElementById(''+k+','+l+'').style.borderRight = '0'
            }
        }
    }

    insertToken()
}

function insertToken(id) {
    let numberBefore = id.split(",")[0]
    let numberAfter = id.split(",")[1]

    let column = document.getElementById(numberBefore+numberAfter)

    if (!column.classList.contains('cross') && !column.classList.contains('circle')){
        colorCount++

        if (colorCount % 2){
            column.classList.add('cross')
            field[numberBefore][numberAfter] = 'cross'
            console.log(field)
        }
        else{
            column.classList.add('circle')
            field[numberBefore][numberAfter] = 'circle'
            console.log(field)
        }
    }

    checkTheVictory()
}

function checkTheVictory() {
    for (let v = 0; v < field.length; v++){
        for (let m = 2; m < field[v].length; m++){
            if (field[v][m] != 0){
                if (field[v][m] == field[v][m-1] && field[v][m-1] == field[v][m-2]){
                    if(field[v][m] == 'cross'){
                        crossWin()
                        return
                    }
                    else{
                        circleWin()
                        return
                    }
                }
            }
        }
    }

    for (let q = 2; q < field.length; q++){
        for (let r = 0; r < field[q].length; r++){
            if (field[q][r] != 0){
                if (field[q][r] == field[q-1][r] && field[q-1][r] == field[q-2][r]){
                    if(field[q][r] == 'cross'){
                        crossWin()
                        return
                    }
                    else{
                        circleWin()
                        return
                    }
                }
            }
        }
    }

    for (let t = 2; t < field.length; t++){
        for (let u = 2; u < field[t].length; u++){
            if (field[t][u] != 0){
                if (field[t][u] == field[t-1][u-1] && field[t-1][u-1] == field[t-2][u-2]){
                    if(field[t][u] == 'cross'){
                        crossWin()
                        return
                    }
                    else{
                        circleWin()
                        return
                    }
                }
            }
        }
    }

    for (let k = field.length-3; k >= 0; k--){
        for (let p = 2; p < field[k].length; p++){
            if (field[k][p] != 0){
                if (field[k][p] == field[k+1][p-1] && field[k+1][p-1] == field[k+2][p-2]){
                    if(field[k][p] == 'cross'){
                        crossWin()
                        return
                    }
                    else{
                        circleWin()
                        return
                    }
                }
            }
        }
    }

    let countZero = 0
    for (let h = 0; h < field.length; h++){
        for (let g = 0; g < field[h].length; g++){
            if (field[h][g] != 0){
                countZero += 1
                console.log(countZero)
            }
        }
    }
    if (countZero == 9){
        drawGame()
    }
}
function crossWin() {
    modalWindow.style.display = 'flex'
    winner.style.color = 'red'
    winner.innerHTML = 'Крестики победили' + winner.innerHTML
}

function circleWin() {
    modalWindow.style.display = 'flex'
    winner.style.color = 'blue'
    winner.innerHTML = 'Нолики победили' + winner.innerHTML
}

function drawGame(){
    modalWindow.style.display = 'flex'
    winner.style.color = 'purple'
    winner.innerHTML = 'Ничья' + winner.innerHTML
}