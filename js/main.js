// class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector(`#hamburger-menu`);
document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
})



// Gallery
const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");

    function openModal(imgSrc, title, desc) {
      modal.style.display = "flex";
      modalImg.src = imgSrc;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;
    }

    function closeModal() {
      modal.style.display = "none";
    }

    // Close modal if click outside content
    window.onclick = function(e) {
      if (e.target === modal) {
        closeModal();
      }
    }
