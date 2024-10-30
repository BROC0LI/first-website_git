const input = document.getElementById('input-js');


function addButton (){
 console.log(input.value);
}

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addButton(); // Call addButton when Enter is pressed
        input.value = ''; // Optionally clear the input after submitting
    }
});

