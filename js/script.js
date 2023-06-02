function updateClock() {
    const clock = document.querySelector(".clock");
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDate();
    const month = now.getMonth() + 1; 
    const year = now.getFullYear();

    // console.log(now);
    console.log(hours.toString().padStart(2,'0'));
    console.log(minutes.toString().padStart(2, '0') + ":");
    console.log(seconds.toString().padStart(2, '0') + ":");
    
    // Format the time
    const timeString = hours.toString()+ ":" + 
                     minutes.toString()+ ":" + 
                     seconds.toString();
    
    // Format the date
    const dateString = day.toString()+ "/" +
                     month.toString()+ "/" +
                     year;
    
    // Update the clock element
    clock.innerHTML = dateString + " " + timeString;
  }
  
  // Call the updateClock function every second
  setInterval(updateClock, 1000);

  // Email Sending Using Email JS API

  const contactForm = document.querySelector('#contact-form'),
        contactMessage = document.querySelector('#user_message');


const sendEmail = (e) =>{
  e.preventDefault();


emailjs.sendForm('', '','#contact-form','7W_Yrnun_eqSClQlm')
  .then(()=>{
    //Show the send Message
    contactMessage.innerHTML = "Message Send Successfully ✔";
    contactMessage.classList.add('text-success');
    setTimeout(()=>{
      contactMessage.innerHTML = ''
    },5000)
    contactForm.reset(); 
  }, () =>{
    contactMessage.innerHTML = "Message Was Unsuccessfully";
    contactMessage.classList.add('text-danger');
    setTimeout(()=>{
      contactMessage.innerHTML = ''
    },5000)
    
  }
  )
}

contactForm.addEventListener('submit',sendEmail());


// Type js API
