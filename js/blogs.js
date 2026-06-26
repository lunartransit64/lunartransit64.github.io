const dropdown = document.getElementById('sort-by');
const bloglist = document.querySelector('.linkslist');

dropdown.addEventListener('change', (event) => {
  const value = event.target.value;

  const links = Array.from(bloglist.querySelectorAll('a'));

  links.sort((a, b) => {
    // Find date of text
    const dateA = a.InnerText.split(' - ');
    const dateB = a.InnerText.split(' - ');
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
  links.fromEach(link => {
    bloglist.appendChild(link);
  });
});
