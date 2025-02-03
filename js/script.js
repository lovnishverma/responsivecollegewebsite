// Get the button element
      let scrollTopBtn = document.getElementById("scrollTopBtn");

      // Show the button when scrolling down 200px
      window.onscroll = function () {
        if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          scrollTopBtn.style.display = "block";
        } else {
          scrollTopBtn.style.display = "none";
        }
      };

      // Scroll to top function
      scrollTopBtn.onclick = function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Smooth scrolling to top
        });
      };