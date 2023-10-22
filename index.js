const burgerIcon = document.getElementById("burger-menu");
const crossIconContainer = document.getElementById("cross-icon-container");
const crossIcon = document.querySelector(".cross-icon");
const overlay = document.getElementById("overlay");
const contentBlur = document.getElementById("content-blur");

const mobileNavMenuContainer = document.getElementById(
  "mobile-nav-menu-container"
);
const mobileNav = document.getElementById("mobile-nav");
const mobileNavMenus = document.querySelectorAll(".mobile-nav-menu");

burgerIcon.addEventListener("click", () => {
  burgerIcon.style.display = "none";
  crossIconContainer.style.display = "block";

  overlay.style.display = "block"; //
  overlay.style.position = "fixed";
  overlay.style.background = "#6070FF";
  overlay.style.mixBlendMode = " multiply";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backdropFilter = "blur(10px)";
  overlay.style.zIndex = "3";
  overlay.style.visibility = "visible";

  crossIconContainer.style.justifyContent = "flex-end";
  crossIconContainer.style.display = "flex";
  crossIconContainer.style.alignItems = "center";
  crossIconContainer.style.flexShrink = "0";
  crossIconContainer.style.width = " 375px";
  crossIconContainer.style.height = " 48px";
  crossIconContainer.style.padding = "  4px 24px 4px 311px";

  // Show the cross icon
  crossIcon.style.display = "flex";
  crossIcon.style.padding = "8px";
  crossIcon.style.alignItems = "flex-start";
  crossIcon.style.borderRadius = "8px";

  // Show the mobile navigation menu container and position it below the cross icon
  mobileNavMenuContainer.style.display = "inline-flex ";
  // Use CSS to position the mobile navigation menu container below the cross icon
  mobileNavMenuContainer.style.top = "10%"; // Position it below the cross icon
  mobileNavMenuContainer.style.marginTop = "10px"; // Adjust the top margin as needed
  mobileNavMenuContainer.style.maxWidth = "100%"; // Limit its width
});

crossIcon.addEventListener("click", () => {
  burgerIcon.style.display = "block";

  crossIconContainer.style.display = "none";
  crossIcon.style.display = "none";
  mobileNavMenuContainer.style.display = "none";
  overlay.style.display = "none";
});
