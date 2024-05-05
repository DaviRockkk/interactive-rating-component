const rating = document.querySelectorAll('.numbers');
const mainCard = document.querySelector('.rating');
const thanksCard = document.querySelector('.thanks');
const resultValue = document.getElementById('value');

let activeRatingNumber;

function selectRating(number) {
  const selectedRatingNumber = rating[number - 1];
  selectedRatingNumber.classList.add('numbers--active');

  if(activeRatingNumber) {
    const activeRating = rating[activeRatingNumber - 1];
    activeRating.classList.remove('numbers--active');
  }

  activeRatingNumber = number;
}

function submit() {
  if(!activeRatingNumber) return;
  mainCard.classList.add('hidden');
  thanksCard.classList.remove('hidden');
  resultValue.textContent = activeRatingNumber;
}