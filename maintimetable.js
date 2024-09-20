const buttons = document.querySelectorAll('.button');

function handleButtonClick(event) {
    event.preventDefault(); 
    const url = event.currentTarget.getAttribute('href');
    window.location.href = url;}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
