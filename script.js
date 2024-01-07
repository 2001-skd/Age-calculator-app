let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let arrow = document.getElementById("arrow");

arrow.addEventListener("click", function() {
  calculateAge();
});

function calculateAge() {
  const userDay = day.value;
  const userMonth = month.value;
  const userYear = year.value;
  const yearlength = userYear.length;

  
  const userDob = `${userMonth}-${userDay}-${userYear}`; 
  const todayDate = new Date();
  const date = new Date(userDob);

  const datediff = todayDate.getTime() - date.getTime();

  const totalDays = Math.abs(Math.floor(datediff/(1000*60*60*24)));
  const totalMonth = Math.abs(Math.floor(datediff/(1000*60*60*24*30.4375)));
  const totalYear = Math.abs(Math.floor(datediff/(1000*60*60*24*365.25)));

  if(userDay < 1 || userDay > 31 || userMonth < 1 || userMonth > 12 || yearlength !== 4){
    if(userDay < 1 || userDay > 31){
      alert("Your Day should be between 1 and 31");
    }
    else if(userMonth < 1 || userMonth > 12){
      alert("Your Month should be between 1 and 12");
    }

    else if(userYear.length !== 4){
      alert("Your Year should be in the correct format (e.g., 0000)");
    }
    else {
      alert("Please enter valid Date, Month, and Year");
    }

  }

  else{
    document.getElementById("years").innerHTML = totalYear;
    document.getElementById("months").innerHTML = totalMonth;
    document.getElementById("days").innerHTML = totalDays;
  }
}
