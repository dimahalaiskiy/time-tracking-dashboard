import json from "./data.json"
import icons from "./images/icons.svg"


const dataJsonString = JSON.stringify(json);
const data = JSON.parse(dataJsonString);


const cardsParentEl = document.querySelector('.cards')
const cureentDurationButton = document.querySelector('.form-period')
const dailyButton = document.querySelector('[data-action="daily"]')
const weeklyButton = document.querySelector('[data-action="weekly"]')
const monthlyButton = document.querySelector('[data-action="monthly"]')


function dailyMarkup() { 
   return data.map(( { title , svg, color,  timeframes : { daily: { current, previous} }}) => {
        return `<li class="card ${color}">
        <svg class="icon-svg">
          <use xlink:href="${svg}"></use>
        </svg>
        <h2 class="heading-occupation">${title}</h2>
        <div class="card-option">
          <ul class="card-description">
            <li class="card-text">${title}</li>
            <li class="card-menu">
              <a href="#"></a>
            </li>
          </ul>
          <h2 class="heading-hours">${current}hrs</h2>
          <p class="paragraph-duration">Last day - ${previous}</p>
        </div>
      </li>`
    }).join('')
}

cardsParentEl.insertAdjacentHTML('beforeend', dailyMarkup(data))

function weeklyMarkup() {
  return data.map(( { title , svg, color,  timeframes : { weekly: { current, previous} }}) => {
    return `<li class="card ${color}">
    <svg class="icon-svg">
      <use xlink:href="${svg}"></use>
    </svg>
    <h2 class="heading-occupation">${title}</h2>
    <div class="card-option">
      <ul class="card-description">
        <li class="card-text">${title}</li>
        <li class="card-menu">
          <a href="#"></a>
        </li>
      </ul>
      <h2 class="heading-hours">${current}hrs</h2>
      <p class="paragraph-duration">Last week - ${previous}</p>
    </div>
  </li>`
}).join('')
}

const monthlyMarkup = () => {
  return data.map(( { title , svg, color,  timeframes : { monthly: { current, previous} }}) => {
    return `<li class="card ${color}">
    <svg class="icon-svg">
      <use xlink:href="${svg}""></use>
    </svg>
    <h2 class="heading-occupation">${title}</h2>
    <div class="card-option">
      <ul class="card-description">
        <li class="card-text">${title}</li>
        <li class="card-menu">
          <a href="#"></a>
        </li>
      </ul>
      <h2 class="heading-hours">${current}hrs</h2>
      <p class="paragraph-duration">Last month - ${previous}</p>
    </div>
  </li>`
}).join('')
}

const cureentDurationOnClick = (e) => {
  const isCurrent = cureentDurationButton.querySelector('.is-current')
  if(isCurrent) {
    isCurrent.classList.remove('is-current')
  } 

  switch (e.target.dataset.action) {
    case 'daily':
      deleteNoNeededLi()
      cardsParentEl.insertAdjacentHTML('beforeend', dailyMarkup(data))
      dailyButton.classList.add('is-current')
      break;
    case 'weekly':
      deleteNoNeededLi()
      cardsParentEl.insertAdjacentHTML('beforeend', weeklyMarkup(data))
      weeklyButton.classList.add('is-current')
      break;
    case 'monthly':
      deleteNoNeededLi()
      cardsParentEl.insertAdjacentHTML('beforeend', monthlyMarkup(data))
      monthlyButton.classList.add('is-current')
      break;
  }
}

cureentDurationButton.addEventListener('click', cureentDurationOnClick)
  
function deleteNoNeededLi() {
  cardsParentEl.innerHTML = ""
}
