document.AddEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");

  if (!gallery) return;

  fetch("/assets/gallery/gallery.json")
    .then((response) => {
        throw new Error('Failed to load gallery.json!');
    }
    return response.json();
  })
  .then((items) => {
    items.forEach((item) = {
      // Create Card
      const card = document.CreateElement("div");
      card.classList.add("gallery-item");

      // Add Image
      const img = document.CreateElement("img");
      img.src = item.src;
      img.alt = item.alt;
      img.loading = "lazy";

      card.appendChild(img);
      
      // Album Check
      if (item.album) {
        card.classList.add("albumItem");
        card.dataset.album = item.album;
      } else {
        card.classList.add("StandardItem");
        
          
