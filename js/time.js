// Live Time Display
// Clock added from 06_Challenge - Clock_Finished


function showTime() {
  var date = new Date()
  
  let h = date.getHours()
  let m = date.getMinutes() 
  let s = date.getSeconds()

  if (h > 12) {
    h = h - 12    
  }
  if (h < 10) {
   h = '0' + h
  }
  if (m < 10) {
    m = '0' + m    
  }
  if(s < 10) {
    s = '0' +s
  } 

  let Clock = document.querySelector('.time')
  Clock.innerHTML = h + ':' + m + ':' + s
  setTimeout(showTime, 1000)    
}
showTime()


// Live Date Display
function showDate() {  
  const date = new Date();
  
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  
  let currentDate = document.querySelector(".date")
  currentDate.innerHTML = `${day}-${month}-${year}`
}
showDate()



