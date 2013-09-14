// get the current date time and update the time div
function displayTime(){  
  var now = new Date();
  var displayNow = now.toLocaleDateString()+" "+ now.toLocaleTimeString();
  document.getElementById("time").innerHTML = displayNow; 
}

// invoked by the web page when initially loading to update the time every second 
function updateTime(){
  window.setInterval(displayTime,1000);
}
   
