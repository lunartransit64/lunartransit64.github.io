// Open Lightbox
document.addEventListener("click", function(event) {
  // DEBUG
  console.log(event.target);

  // Find correct Image
  const isImg = event.target.tagName === "IMG";
  const isNotLightbox = event.target.id !== "lightbox-img";
  const isInMainContent = event.target.closest(".main-content");
  
  // If click is on an image
  if isImg && isInMainContent && isNotLightbox {
    console.log(event.target.src);
    
    // Show the Lightbox
    document.getElementById("lightbox").style.display = "block";

    // Show clicked image as Lightbox image.
    document.getElementById("lightbox-img").src = event.target.src;

    // Show Alt text as description
    document.getElementById("lightbox-txt").textContent = event.target.alt;
  }
});

// Close Lightbox
function CloseLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
