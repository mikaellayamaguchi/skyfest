function menu() {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav.style.display === 'none' || mobileNav.style.display === '') {
        mobileNav.style.display = 'flex'; // Show the mobile nav
    } else {
        mobileNav.style.display = 'none'; // Hide the mobile nav
    }
}

// You only need one openModal function
function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg"); // Correct ID here
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt; // Use the alt attribute for caption
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}


// Close modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}