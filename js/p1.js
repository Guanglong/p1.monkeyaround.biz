function displayTime(){  
  var now = new Date();
  var displayNow = now.toLocaleDateString()+" "+ now.toLocaleTimeString();
  document.getElementById("time").innerHTML = displayNow; 
}

function updateTime(){
  window.setInterval(displayTime,1000);
}
   
