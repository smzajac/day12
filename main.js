let container = document.querySelector(".container");


// let name = customers.results[0].name.first + " " + customers.results[0].name.last;
// let picture = customers.results[0].picture.large;
// let phone = customers.results[0].phone;
// let email = customers.results[0].email;
// let streetName = customers.results[0].location.street;
// let cityStZip = customers.results[0].location.city + ", "+ customers.results[0].location.state + " " + customers.results[0].location.postcode;

for (i = 0; i<customers.results.length; i++){

let person = document.createElement("div");
let name = customers.results[i].name.first + " " + customers.results[i].name.last;
let picture = customers.results[i].picture.large;
let phone = customers.results[i].phone;
let email = customers.results[i].email;
let streetName = customers.results[i].location.street;
let cityStZip = customers.results[i].location.city + ", "+ customers.results[i].location.state + " " + customers.results[i].location.postcode;

person.innerHTML = `
<div class = "bio">
<img class="picture" src="${picture}">
<h3 class="personName"><span>${name}</span></h3>
<div class="personEmail">${email}</div>
<br>
<div class="smallerFont">
<div class="personStreetName">${streetName}</div>
<div class="personCityZip">${cityStZip}</div>
<div class="personPhone">${phone}</div>
</div>
<br>
<div class="ssn">SSN</div>
</div>
`;

container.appendChild(person);
};

// container.appendChild(person);


// console.log(person);

console.log(customers);


// test
// <div>
// test
// </div>
