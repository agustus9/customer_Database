console.log('loaded javascript')

const data = customers.results
let allPeopleContainer = document.getElementById('staff')

console.log(`You have ${data.length} people!!!`)

function createPersonDOMManipulation(person) {
  // let person = data[i];
  // let pictures = person.picture;
  console.log(customers.results[i].email)
  // create box to store person
  let personContainer = document.createElement('div')
  personContainer.className = 'person '

  // image tag
  let image = document.createElement('img')
  image.src = customers.results[i].picture.large
  personContainer.appendChild(image)

  // name
  let name = document.createElement('h5')
  let firstName = customers.results[i].name.first
  let lastName = customers.results[i].name.last
  name.innerHTML = `${firstName} ${lastName}`
  personContainer.appendChild(name)

  //email
  let email = document.createElement('p')
  email.innerHTML = customers.results[i].email
  personContainer.appendChild(email)

  // address
  let address = document.createElement('address')
  let line1 = document.createElement('p')
  let line2 = document.createElement('p')
  let phoneNumber = document.createElement('p')

  line1.innerHTML = `${customers.results[i].location.street}`
  line2.innerHTML = `${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[
    i
  ].location.postcode}`
  phoneNumber.innerHTML = `${customers.results[i].cell}`

  address.appendChild(line1)
  address.appendChild(line2)
  address.appendChild(phoneNumber)

  personContainer.appendChild(address)

  // SSN Number:
  let ssn = document.createElement('p')
  ssn.innerHTML = `${customers.results[i].id.value}`
  ssn.className += 'blur'
  personContainer.appendChild(ssn)

  // add to DOM
  allPeopleContainer.appendChild(personContainer)
}

function createPersonWithLiteral(person) {
  let personHTML = `<div class="person">
      <img src="${person.picture.large}" alt="someone!">
      <h5>${person.name.first} ${person.name.last}</h5>
      <p>${person.email}</p>
      <address>
        <p> ${person.location.street}</p>
        <p>${person.location.city}, ${person.location.state}, ${person.location.postcode}</p>
        <p>${person.cell}</p>
      </address>
      <p class="blur">${person.id.value}</p>
  </div>`

  allPeopleContainer.innerHTML += personHTML
}

// loop over the data
// create html for each person
// add that html to the DOM

// createPersonWithLiteral(customers.results[0]);
//
// createPersonWithLiteral(customers.results[1]);
//
// createPersonWithLiteral(customers.results[2]);
//
// createPersonWithLiteral(customers.results[3]);
//
// createPersonWithLiteral(customers.results[4]);
//
// createPersonWithLiteral(customers.results[5]);
//
// createPersonWithLiteral(customers.results[6]);

for (var i = 0; i < data.length; i++) {
  createPersonWithLiteral(data[i])
}
