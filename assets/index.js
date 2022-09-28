let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
    document.querySelector('#animation1').classList.add('filter');
    document.querySelector('#animation2').classList.add('filter');
    document.querySelector('#animation3').classList.add('filter');   
    document.querySelector(".filter").style.filter = "none";
  }
  else {
    document.body.classList.remove("dark-theme");
    document.querySelector('#animation1').classList.remove('filter');
    document.querySelector('#animation2').classList.remove('filter');
    document.querySelector('#animation3').classList.remove('filter'); 
    document.querySelector(".filter").style.filter = "invert(1)";
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_80ih0if",
      "template_d9refyl",
      event.target,
      "user_K1PoFs8pB2YVWStDxrUls"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on email@email.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }

  isModalOpen = true;
  document.body.classList += " modal--open";
}

