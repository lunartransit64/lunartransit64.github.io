const dropdown = document.getElementById('sort-by');
const bloglist = document.querySelector('.linklist');

dropdown.addEventListener('change', (event) => {
  const value = event.target.value;

  const links = Array.from(bloglist.querySelectorAll('a'));

  links.sort((a, b) => {
    // Alphabetical Sorting
    if (value === "atoz" || value === "ztoa") {
      // Find Title
      const titleA = a.innerText.split(' - ')[0].toLowerCase();
      const titleB = b.innerText.split(' - ')[0].toLowerCase();

      if (value === "atoz") {
        return titleA.localeCompare(titleB); // A to Z
      } else {
        return titleB.localeCompare(titleA); // Z to A
      }
    }
    
    // Date Sorting
    // Find date of text
    const dateA = a.innerText.split(' - ')[1];
    const dateB = b.innerText.split(' - ')[1];
    const JdateA = convertToDate(dateA);
    const JdateB = convertToDate(dateB);

    // Sort through Dates
    if (value === 'newtoold') {
      return JdateB - JdateA; // New to Old
    } else {
      return JdateA - JdateB; // Old to New
    }
  });

  // Show on page
  links.forEach(link => {
    bloglist.appendChild(link);
  });
});

function convertToDate(dateString) {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month -1, day);
}
