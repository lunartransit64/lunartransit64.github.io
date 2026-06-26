const dropdown = document.getElementById('sort-by');
const bloglist = document.querySelector('.linklist');

dropdown.addEventListener('change', (event) => {
  const value = event.target.value;

  const links = Array.from(bloglist.querySelectorAll('a'));

  links.sort((a, b) => {
    // Find date of text
    const dateA = a.innerText.split(' - ')[1];
    const dateB = a.innerText.split(' - ')[1];
    const JdateA = convertToDate(dateA);
    const JdateB = convertToDate(dateB);

    // Sort through Dates
    if (value === 'newtoold') {
      return JdateB - JdateA;
    } else {
      return JdateA - JdateB;
    }
  });

  // Show on page
  links.forEach(link => {
    bloglist.appendChild(link);
  });
});
