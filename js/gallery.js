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
      
      // Date and Time for Lightbox
      if (item.date) img.dataset.date = item.date;
      if (item.time) img.dataset.time = item.time;

      card.appendChild(img);

      // Text Under Image
      const info = document.createElement("div");
      info.classList.add("card-info");

      let timeText = "";
      if (item.date && item.time) {
        timeText = `${item.date} | ${item.time}`;
      } else if (item.date) {
        timeText = item.date;
      }

      info.innerHTML = `
        <p class="card-title">${item.alt || ""}</p>
        ${time.text}
      `;

      card.AppendChild(info);
      
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

      
      
        
          
