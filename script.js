const dayInput = document.querySelector('.dayinput')
const monthInput = document.querySelector('.monthinput')
const yearInput = document.querySelector('.yearinput')
const dayResult = document.querySelector('.day')
const monthResult = document.querySelector('.month')
const yearResult = document.querySelector('.year')
const submit = document.querySelector('.submit')
const response1 = document.querySelector('.response1')
const response2 = document.querySelector('.response2')
const response3 = document.querySelector('.response3')

submit.addEventListener('click', Result)

const today = new Date();



const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();
const numberOfMonth = 12;


function Result() {
    const myYear = yearInput.value
    const myMonth = monthInput.value
    const myDay = dayInput.value
    function getDaysInMonth(yr, mth) {
        return new Date(yr, mth, 0).getDate();
    }

    const numberOfDay = getDaysInMonth(myYear, myMonth)


    if (myYear === '') {
        response3.textContent = 'This field is required'
    }
    else {
        if (myYear > year) {
            response3.textContent = 'Enter a valid year'
            yearResult.textContent = '--'
            monthResult.textContent = '--'
            dayResult.textContent = '--'
        }
        else {
            const actualYear = year - myYear
            yearResult.textContent = actualYear
            yearInput.value = ''
            response3.textContent = ''
        }
    }
    if (myMonth === '') {
        response2.textContent = 'This field is required'
    }
    else {
        if (myMonth > numberOfMonth) {
            response2.textContent = 'Enter a valid month'
            yearResult.textContent = '--'
            monthResult.textContent = '--'
            dayResult.textContent = '--'
        }
        else {
            const actualMonth = month - myMonth
            const monthValue = parseFloat(actualMonth)
            const absMonth = Math.abs(monthValue)
            monthResult.textContent = absMonth
            monthInput.value = ''
            response2.textContent = ''
        }
    }
    if (myDay === '') {
        response1.textContent = 'This field is required'
    }
    else {
        if (myDay > numberOfDay) {
            response1.textContent = 'Enter a valid day'
            yearResult.textContent = '--'
            monthResult.textContent = '--'
            dayResult.textContent = '--'
        }
        else {
            const actualDay = day - myDay
            const dayValue = parseFloat(actualDay)
            const absDay = Math.abs(dayValue)
            dayResult.textContent = absDay
            dayInput.value = ''
            response1.textContent = ''
        }

    }







}