// associar os elementos html a variaveis
const daysTag = document.querySelector('.days')
const currentDate = document.querySelector('.current-date')
const prevNextIcon = document.querySelectorAll('#prev, #next')

// gerar nova data: ano e mês
let date = new Date()
let currYear = date.getFullYear()
let currMonth = date.getMonth()

// armazenar nome completo dos meses numa array
const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novenbro',
  'Dezembro'
]

// array to store selected dates
let selectedDates = []

const renderCalendar = () => {
  // associar primeiro dia do mês
  const firstDayofMonth = new Date(currYear, currMonth, 1).getDay()
  // associar última data do mês
  const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate()
  // associar o último dia do mês
  const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay()
  // associar última data do mês anterior
  const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate()

  let liTag = ''
  for (let i = firstDayofMonth; i > 0; i--) {
    // criar tags <li> de dias de meses anteriores
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    // criar um tag <li> para os dias corretes do mês
    // adding active class to li if the current day, month, and year matched
    const isSelected = selectedDates.some(
      (date) => date.year === currYear && date.month === currMonth && date.day === i
    )
    const isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? 'active'
        : ''
    liTag += `<li class="${isToday} ${isSelected ? 'selected' : ''}">${i}</li>`
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    // criar uma tag <li> para os primeiros dias do mês seguinte
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}` // passing current mon and yr as currentDate text
  daysTag.innerHTML = liTag

  // Add click event listener to each date element
  const dateElements = document.querySelectorAll('.days li')
  dateElements.forEach((dateEl) => {
    dateEl.addEventListener('click', () => {
      const day = parseInt(dateEl.innerText)
      const isSelected = selectedDates.some(
        (date) => date.year === currYear && date.month === currMonth && date.day === day
      )
      if (isSelected) {
        selectedDates = selectedDates.filter(
          (date) => date.year !== currYear || date.month !== currMonth || date.day !== day
        )
        dateEl.classList.remove('selected')
      } else {
        selectedDates.push({
          year: currYear,
          month: currMonth,
          day
        })
        dateEl.classList.add('selected')
      }
      displaySelectedDates()
    })
  })

  function displaySelectedDates() {
    const selectedDatesList = document.querySelector('.selected-dates')
    if (selectedDatesList) {
      let selectedDatesHTML = ''
      console.log(selectedDatesHTML)
      selectedDates.forEach((date) => {
        selectedDatesHTML += `<li>${date.day}/${date.month}/${date.year}</li>`
      })
      selectedDatesList.innerHTML = selectedDatesHTML
    }
  }
}

renderCalendar()
prevNextIcon.forEach((icon) => {
  // associar os ícones id='prev' e id='next'
  icon.addEventListener('click', () => {
    // adicionar click event e ambos os ícones
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1
    if (currMonth < 0 || currMonth > 11) {
      // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth, new Date().getDate())
      currYear = date.getFullYear() // updating current year with new date year
      currMonth = date.getMonth() // updating current month with new date month
    } else {
      date = new Date() // pass the current date as date value
    }
    renderCalendar() // calling renderCalendar function
  })
})
