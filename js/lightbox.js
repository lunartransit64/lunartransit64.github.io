// Open Lightbox
document.addEventListener("click", function(event) {
  // If click is on an image
  if (event.target.TagName === "IMG" && event.target.id !== "lightbox-img") {
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
