document.addEventListener("DOMContentLoaded", function () {
  var text1 = document.getElementById("text1");

  function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function toggleAnimation() {
      if (isInViewport(text1)) {
          text1.classList.add("animate");
      }
  }

  // Initial check in case "About" section is already in view
  toggleAnimation();

  // Event listener for scroll
  window.addEventListener("scroll", toggleAnimation);
});
