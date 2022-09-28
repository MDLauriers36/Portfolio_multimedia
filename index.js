let isModalOpen = false;
let contrastToggle = false;
let section = document.querySelector("body");
console.log(section);

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += "dark-theme";
    document.querySelector('#animation1').classList.add('filter');
    document.querySelector('#animation2').classList.add('filter');
    document.querySelector('#animation3').classList.add('filter');   
    document.querySelector(".filter").style.filter = "none";
    section.style.backgroundImage = 'linear-gradient(to right, #212738,#000000);';
  }
  else {
    document.body.classList.remove("dark-theme");
    document.querySelector('#animation1').classList.remove('filter');
    document.querySelector('#animation2').classList.remove('filter');
    document.querySelector('#animation3').classList.remove('filter'); 
    document.querySelector(".filter").style.filter = "invert(1)";
  }
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }

  isModalOpen = true;
  document.body.classList += " modal--open";
}

