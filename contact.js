console.log("it works");

$(document).ready(function () {
 $('.submit') .click(function (event)  {
  
  console.log('clicked button')


var email = $('.email') .val()
var subject = $('.name') .val()
var message = $('.message') .val()
var statusElement = $('.status')
statusElement.empty()

if(email.length > 5 && email.includes ('@') &&  email.includes('.') ) { 
statusElement.append ('<div> Email is valid </div>')

} else {
    event.preventDefault()
    statusElement.append ('<div> Email is NOT valid </div>')
}

if(subject.length >= 3 ){
    statusElement.append ('<div> name is Valid </div>')
} else {
    event.preventDefault()
    statusElement.append ('<div> name is not Valid </div>')
}

if (message.length >= 20) {
    statusElement.append('<div>Message is valid</div>')
}else {
    event.preventDefault()
    statusElement.append('<div>Message is too short</div>')
}

})

})