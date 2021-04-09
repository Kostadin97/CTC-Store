export const activeClassHelper = (user, location) => {
  let homeNav = document.getElementById("nav-home");
  let createNav = document.getElementById("nav-create");
  let myproductsNav = document.getElementById("nav-myproducts");
  let favouritesNav = document.getElementById("nav-favourites");
  let loginBtn = document.getElementById("login-btn");
  let registerBtn = document.getElementById("register-btn");
  if (user) {
    if (
      location === "/" ||
      location === "/categories/all" ||
      location === "/categories/Shoes" ||
      location === "/categories/Clothes" ||
      location === "/categories/Technologies"
    ) {
      homeNav.classList.add("active");
    } else {
      homeNav.classList.remove("active");
    }
    if (location === "/create") {
      createNav.classList.add("active");
    } else {
      createNav.classList.remove("active");
    }
    if (location === "/my-products") {
      myproductsNav.classList.add("active");
    } else {
      myproductsNav.classList.remove("active");
    }
    if (location === "/favourites") {
      favouritesNav.classList.add("active");
    } else {
      favouritesNav.classList.remove("active");
    }
  } else {
    if (location === "/") {
      homeNav.classList.add("active");
    } else {
      homeNav.classList.remove("active");
    }
    if (location === "/login") {
      loginBtn.classList.add("active");
    } else {
      loginBtn.classList.remove("active");
    }
    if (location === "/register") {
      registerBtn.classList.add("active");
    } else {
      registerBtn.classList.remove("active");
    }
  }
};

export const activeCategoryHelper = (location) => {
  let all = document.getElementById("all-category");
  let clothes = document.getElementById("clothes-category");
  let shoes = document.getElementById("shoes-category");
  let technologies = document.getElementById("technologies-category");

  if (location === "/" || location === "/categories/all") {
    all.classList.add("category-active");
  } else {
    all.classList.remove("category-active");
  }

  if (location === "/categories/Clothes") {
    clothes.classList.add("category-active");
  } else {
    clothes.classList.remove("category-active");
  }

  if (location === "/categories/Shoes") {
    shoes.classList.add("category-active");
  } else {
    shoes.classList.remove("category-active");
  }

  if (location === "/categories/Technologies") {
    technologies.classList.add("category-active");
  } else {
    technologies.classList.remove("category-active");
  }
};
