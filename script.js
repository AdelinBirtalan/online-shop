const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

function toggleCollapse(id) {
    const content = document.getElementById(id);
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  }

  function toggleCollapse(activeId) {

    const sections = document.querySelectorAll('.collapse-content');
    sections.forEach(section => {
      if (section.id === activeId) {

        section.style.display = section.style.display === 'block' ? 'none' : 'block';
      } else {

        section.style.display = 'none';
      }
    });
  }

  

  

  
  


