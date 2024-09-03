function View() {
    document.getElementById('btn').innerHTML = 'You are looking at it';

    setTimeout(function() {
        btn.innerHTML = 'View Portfolio';
      }, 3000);
    }

function Vieww() {
    document.getElementById('btn1').innerHTML = 'Under Construction';

    setTimeout(function() {
        btn1.innerHTML = 'View on Github';
      }, 3000);
    }

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
  
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');  // Toggle the hidden class to show or hide the menu
  });
  