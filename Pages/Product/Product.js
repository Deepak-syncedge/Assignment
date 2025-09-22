const button = document.querySelectorAll('.addtocart');

button.forEach(button => {
    button.addEventListener('click', function() {
    alert('Added to cart!');
    console.log('Button clicked');
    }
    )
});