interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "Jean",
    lastName: "Delatour",
    age: 25,
    location: "Paris",
  };

let student2: Student = {
    firstName: "Lyne",
    lastName: "Rose",
    age: 30,
    location: "Tours",
};

let studentsList = [
    student1,
    student2,
]

var table = document.createElement('table');
var tableBody = document.createElement('tbody');

studentsList.forEach(function(student) {
  var row = document.createElement('tr');
  const nameData = document.createElement('td');
  const locationData = document.createElement('td');
  nameData.textContent = student.firstName;
  locationData.textContent = student.location;
  row.appendChild(nameData);
  row.appendChild(locationData);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
