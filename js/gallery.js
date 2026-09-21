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
        <p class="card-meta">${timeText || ""}</p>
      `;

      card.appendChild(info);
      
      // Album Check
      if (item.album) {
        card.classList.add("albumItem");
        card.dataset.album = item.album;
      } else {
        card.classList.add("StandardItem");
      }

      gallery.appendChild(card);
    });
    // Filtering
    const albumSelect = document.getElementById('album-sort');

    if (albumSelect)
      albumSelect.addEventListener("change", (e) => {
        const selectedAlbum = e.target.value;
        const cards = gallery.querySelectorAll(".gallery-item");
        
        // Update URL
        const url = new URL(window.location);
        if (selectedAlbum === "allalbums") {
          url.searchParamas.delete("album");
        } else {
          url.searchParamas.set("album", selectedAlbum);
        }
        window.history.pushState({}, "", url);
          
        // Filter Cards
        cards.forEach((card) => {
          const cardAlbum = card.dataset.album;

          if (selectedAlbum === "allalbums" || (cardAlbum && cardAlbum.split(",").includes(selectedAlbum))) {
            card.style.display = ""; // Shows item
          } else {
            card.style.display = "none"; // Hides item
          }
      });
    });
    const urlParams = new URLSearchParams(window.location.search);
    const albumParam = urlParams.get("album");

    if (albumParam) {
      albumSelect.value = albumParam;
      albumSelect.dispatchEvent(new Event("change"));
    }   
  })
  .catch((err) => console.error(err));
});

      
      
        
          
