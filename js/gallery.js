document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");

  if (!gallery) return;

  fetch("/assets/gallery/gallery.json")
    .then((response) => {
      if (!response.ok) { 
        throw new Error('Failed to load gallery.json!');
      }
      return response.json();
  })
  .then((items) => {
    items.forEach((item) => {
      // Create Card
      const card = document.createElement("div");
      card.classList.add("gallery-item");

      // Add Image
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt || "";
      img.loading = "lazy";

      if (item.class) {
        img.classList.add(item.class);
      }
      
      card.appendChild(img);
      
      // Album Check
      if (item.album) {
        card.classList.add("albumItem");
        card.dataset.album = item.album;
      } else {
        card.classList.add("StandardItem");
      }

      gallery.appendChild(card);
    });
  })
  .catch((err) => console.error(err));
});

      
      
        
          
