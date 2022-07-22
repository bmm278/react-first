const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let arr=[];
let count =0;
function flipCard() {
  
  // 剛剛沒配對成功的話，就把牌蓋起來
  if (lockBoard) return;
  
  // 避免翻同一張牌當做第二張
  if (this === firstCard) return;
  
  this.classList.add('flip');
  
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this; // this => the clicked card
    return;
  }
  count++
  console.log(count);
  secondCard = this;
  
  checkForMatch();
}

function checkForMatch() {
  // 如果牌組配對成功 => isMatch
  // 就不可以再點擊那組牌 => disableCards()
  // 配對錯誤就把該牌組蓋起來 => unflipCards()
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  
  isMatch ? disableCards() : unflipCards();
  
}

function disableCards() {
  // 移除監聽事件，釋放記憶體
  let totalMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    
  arr.push(firstCard.dataset.framework)
  // console.log(arr);
  if(arr.length===6){
    setTimeout(checkwin, 500);
  }
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  // 把牌蓋起來
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();


cards.forEach(card => card.addEventListener('click', flipCard));





function checkwin() {
  if(count <10){
    alert(`翻盤次數為${count} 次數小於10次、獲得100點`)
  } 
  if(10<=count&&count<20){
    alert(`翻盤次數為${count} 次數小於20次、獲得50點`)
  } 
  if(20<=count){
    alert(`翻盤次數為${count} 次數大於20次、獲得10點`)
  } 
  
    
}
// function win(){
//   if(hasFlippedCard, lockBoard = true){
//     alert('YOU WIN')
//   }
// }