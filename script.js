// Add event listener to buttons
document.querySelectorAll('.service button').forEach(button => {
button.addEventListener('click', () => {
    //show project details
    const service = botton.parentNode;
    const details = service.querySelector('.details');
    if(details){
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
         }
    });
});

// Add event listener to contact form
document.querySelector('#contact form').addEventListener('submit', event =>{
    event.preventDefault();
    //Send message
    const name = document.querySelector
})