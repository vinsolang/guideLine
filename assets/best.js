function toggleDropdown() {
    const list = document.getElementById("dropdownList");
    list.classList.toggle("open");
  }

  // Optional: Close dropdown on outside click
  window.addEventListener("click", function(e) {
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(e.target)) {
      document.getElementById("dropdownList").classList.remove("open");
    }
  });