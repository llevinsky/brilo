// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        navLinks.forEach(otherLink => {
            otherLink.classList.remove('active');
        });

        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});


function showProducts(category) {
    // Get all elements with the class 'all-bags'
    const allBags = document.querySelectorAll('.all-bags');

    // Loop through each element and set its display property to 'none'
    allBags.forEach(function (bag) {
        bag.style.display = 'none';
    });

    // Show products based on the selected category
    const selectedBags = document.querySelectorAll('.' + category);
    selectedBags.forEach(function (bag) {
        bag.style.display = 'block';
    });
}

function setActiveButton(button) {
    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.btn-secondary');
    buttons.forEach(function (btn) {
        btn.classList.remove('active-btn');
    });

    // Add 'active' class to the clicked button
    button.classList.add('active-btn');
}

// Event listeners for each button
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-secondary');
    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            setActiveButton(btn);
        });
    });
});

function allBags() {
    // Show all bags
    showProducts('all-bags');
}

function paperBags() {
    // Show only paper bags
    showProducts('paper-bag');
}

function fabricBags() {
    // Show only fabric bags
    showProducts('fabric-bag');
}

function plasticBags() {
    // Show only plastic bags
    showProducts('plastic-bag');
}