document.addEventListener('DOMContentLoaded', init)

function init () {
  console.log('loaded ok')
  var trackboard = []
  var trackA = []
  var trackB = []
  var countTurn = 1
  var Player = 'A'
  var allSquares = document.querySelectorAll('.box')
  // var restart = document.getElementById('reset')

  for (var i = 0; i < allSquares.length; i++) {
    allSquares[i].addEventListener('click', function () {
      if (Player === 'A') {
        this.innerHTML = '<img src = "tick.png">'
        trackA.push(this.getAttribute('id'))
        console.log('trackA - ' + trackA)
        console.log(this.innerHTML)
        if (countTurn > 4) {
          winlogic(Player)
        }
        switchplayer()
      } else {
        this.innerHTML = '<img src = "cross.png">'
        trackB.push(this.getAttribute('id'))
        console.log(this.innerHTML)
        if (countTurn > 4) {
          winlogic(Player)
        }
        switchplayer()
      }
      trackboard.push(this.getAttribute('id'))
      console.log('trackboard - ' + trackboard)
      console.log('count turn -' + countTurn)

      countTurn = countTurn + 1
      if (countTurn === 10) {
        alert ('ok ok no win no lose')
      }
    })
  }

  //
  // function isSqEmpty () {
  //   for (var x = 0; x < trackboard.length; x++) {
  //     if (this.getAttribute('id') == trackboard[x]) {
  //       return true

  function switchplayer () {
    if (Player === 'B') {
      Player = 'A'
    } else {
      Player = 'B'
    }
  }

  function winlogic (playerwin) {
    console.log('start playerwin function')
    var score = 0
    var playertocompar = []
    var win = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']]

    if (playerwin === 'A') {
      playertocompar = trackA.sort()
    } else {
      playertocompar = trackB.sort()
    }
    console.log('track passed in' + playertocompar)
    for (var wincount = 0; wincount < win.length; wincount++) {
      score = 0
      for (var x = 0; x < playertocompar.length; x++) {
        console.log('winning combi' + win[wincount][0] + win[wincount][1] + win[wincount][2])
        if (win[wincount][0] === playertocompar[x] || win[wincount][1] === playertocompar[x] || win[wincount][2] === playertocompar[x]) {
          score = score + 1
        }
        if (score === 3) {
          alert('Player ' + Player + ' wins')
          myFunction()
        }
      }
    }
  }
}
  function myFunction() {
    document.getElementById('reset').reset()
  }








// ======================================================================
  // function gameDraw() {
  // }
//   var playerTurn = 'a'
//   var one = document.getElementById('box1')
//   one.addEventListener('click', mark1)
//   var two = document.getElementById('box2')
//   two.addEventListener('click', mark2)
//   var three = document.getElementById('box3')
//   three.addEventListener('click', mark3)
//   var four = document.getElementById('box4')
//   four.addEventListener('click', mark4)
//   var five = document.getElementById('box5')
//   five.addEventListener('click', mark5)
//   var six = document.getElementById('box6')
//   six.addEventListener('click', mark6)
//   var seven = document.getElementById('box7')
//   seven.addEventListener('click', mark7)
//   var eight = document.getElementById('box8')
//   eight.addEventListener('click', mark8)
//   var nine = document.getElementById('box9')
//   nine.addEventListener('click', mark9)
//
//   function mark1 () {
//     var pic = document.querySelector('#box1Image')
//     if (playerTurn = 'a') {
//       pic.src = 'tick.png'
//     } else {
//       pic.src = 'cross.png'
//     }
//   }
//   function mark2 () {
//     var pic = document.querySelector('#box2Image')
//     pic.src = 'tick.png'
//   }
//   function mark3 () {
//     var pic = document.querySelector('#box3Image')
//     pic.src = 'tick.png'
//   }
//   function mark4 () {
//     var pic = document.querySelector('#box4Image')
//     pic.src = 'tick.png'
//   }
//   function mark5 () {
//     var pic = document.querySelector('#box5Image')
//     pic.src = 'tick.png'
//   }
//   function mark6 () {
//     var pic = document.querySelector('#box6Image')
//     pic.src = 'tick.png'
//   }
//   function mark7 () {
//     var pic = document.querySelector('#box7Image')
//     pic.src = 'tick.png'
//   }
//   function mark8 () {
//     var pic = document.querySelector('#box8Image')
//     pic.src = 'tick.png'
//   }
//   function mark9 () {
//     var pic = document.querySelector('#box9Image')
//     pic.src = 'tick.png'
//   }
//
//   for (var x = 2; x < 11; x++) {
//     if (x % 2 === 0) {
//       playerTurn = 'a'
//     } else {
//       playerTurn = 'b'
//     }
//   console.log(playerTurn)
//   }
// }
