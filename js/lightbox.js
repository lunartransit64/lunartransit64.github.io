// Open Lightbox
document.addEventListener("click", function(event) {
  // DEBUG
  console.log(event.target);

  // Find correct Image from click
  const isImg = event.target.tagName === "IMG";
  const isNotLightbox = event.target.id !== "lightbox-img";
  const isInMainContent = event.target.closest(".main-content");
  
  // If click is on an image
  if (isImg && isInMainContent && isNotLightbox) {
    console.log(event.target.src);
    
    // Show the Lightbox
    document.getElementById("lightbox").style.display = "block";

    // Show clicked image as Lightbox image.
    document.getElementById("lightbox-img").src = event.target.src;

    // Show Alt text as description
    document.getElementById("lightbox-txt").textContent = event.target.alt;
  }

  // Open image in new tab if lightbox is already rendered
  if (event.target.id === "lightbox-img") {
    window.open(event.target.src, '_blank');
  }

  // Close if Lightbox background is clicked
  if (event.target.id === "lightbox-bg")  {
    CloseLightbox();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    CloseLightbox();
  }
});

// Close Lightbox
function CloseLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
