// document.addEventListener("DOMContentLoaded", function () {
//   const calculateButton = document.getElementById("calculate");
//   const birthdateInput = document.getElementById("birthdate");
//   const resultDiv = document.getElementById("result");

//   calculateButton.addEventListener("click", calculateAge);

//   function calculateAge() {
//     const birthdate = new Date(birthdateInput.value);
//     const currentDate = new Date();

//     if (isNaN(birthdate.getTime())) {
//       resultDiv.innerHTML = "Please enter a valid birthdate.";
//     } else {
//       const ageInMilliseconds = currentDate - birthdate;
//       const ageInYears = Math.floor(
//         ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
//       );
//       resultDiv.innerHTML = `Your age is approximately ${ageInYears} years.`;
//     }
//   }
// });

let userInput = document.getElementById("birthdate");
userInput.max = new Date().toISOString().split("T")[0];
// toISOString(): This method converts the Date object into a string in
// ISO 8601 format,
//     which is a standard date and time format.
// The resulting string will look like "YYYY-MM-DDTHH:mm:ss.sssZ",
//     where "T" separates the date and time components.
//     .split("T"): This splits the ISO 8601 string into an array by the "T"
// character, effectively separating the date and time components.The[0]
// index of the resulting array contains the date part.
document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate");
  const birthdateInput = document.getElementById("birthdate");
  const resultDiv = document.getElementById("result");
  // to store the birthdate in localstorage
  const storedBirthdate = localStorage.getItem("birthdate");
  if (storedBirthdate) {
    birthdateInput.value = storedBirthdate;
  }

  calculateButton.addEventListener("click", calculateAge);

  function calculateAge() {
    const date = new Date(birthdateInput.value);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - date;
    const ageDate = new Date(ageInMilliseconds);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (isNaN(date.getTime())) {
      resultDiv.innerHTML = "Please enter a valid birthdate.";
    } else {
      resultDiv.innerHTML = `Your age is approximately "${age}" years.`;
      localStorage.setItem("birthdate", birthdateInput.value);
    }
  }
});
