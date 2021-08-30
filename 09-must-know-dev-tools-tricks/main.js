const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 }
]

function makeGreen() {
  const p = document.querySelector('p')
  p.style.color = '#BADA55'
  p.style.fontSize = '50px'
}

// Regular
console.log('hello')

// Interpolated
console.log('Hello, i am a %s string!', '💥')

// Styled
console.log('%c I am some great text', 'font-size: 50px; background: red;')

// Warning!
console.warn('Oh nooo!')

// Error!
console.error('Shit')

// Info
console.info('Crocodiles eat 3-4 people per year!!')

// Testing
const p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), 'That is wrong!')

// Clearing
console.clear()

// Viewing DOM Elements
console.log(p)
console.dir(p)
console.clear()

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age * 7} years old`)
  console.groupEnd(`${dog.name}`)
})

// Couting
console.count('Wes')
console.count('Wes')
console.count('Doug')
console.count('Wes')
console.count('Doug')
console.count('Doug')
console.count('Wes')

// Timing
console.time('fatching data')
fetch('https://api.github.com/users/d0ugui')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fatching data')
    console.log(data)
  })

console.table(dogs)
