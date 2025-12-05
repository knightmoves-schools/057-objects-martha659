
const school = {
  name: "Riverdale High",
  averageClassSize: 25,
  mascot: "Bulldog"
};


document.getElementById("result").innerHTML =
  `${school.name} has an average class size of ${school.averageClassSize} and their mascot is a ${school.mascot}.`;