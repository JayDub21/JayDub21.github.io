const header = document.querySelector("header");
const nav__link = document.querySelector(".nav__link");
const sectionOne = document.querySelector(".nameTag");
const sectionTwo = document.querySelector(".homeIntro");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//          Query Selectors
//=========================================
//         navabar + nameTag
//         Class Switch - ON
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

// const sectionOneOptionsOn = {
//   rootMargin: "-135px 0px 0px 0px"
// };

// const sectionOneObserverOn = new IntersectionObserver(
//   (entries, sectionOneObserverOn) => {
//     entries.forEach(entry => {
//       if (!entry.isIntersecting) {
//         header.classList.add("nav-scrolled");
//       }
//     });
//   },
//   sectionOneOptionsOn
// );

// sectionOneObserverOn.observe(sectionOne);

//=========================================
//       navabar + nameTag
//          Class Switch - OFF
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

// const sectionOneOptionsOff = {
//   rootMargin: "0px 0px -8px 0px"
// };

// const sectionOneObserverOff = new IntersectionObserver(
//   (entries, sectionOneObserverOff) => {
//     entries.forEach(entry => {
//       if (!entry.isIntersecting) {
//         header.classList.remove("nav-scrolled");
//       }
//     });
//   },
//   sectionOneOptionsOff
// );

// sectionOneObserverOff.observe(sectionOne);

//=========================================
//       header + homeIntro
//          Class Switch
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

const headerOptions = {
  rootMargin: "-120px 0px 0px 0px"
};

const headerObserver = new IntersectionObserver((entries, headerObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
}, headerOptions);

headerObserver.observe(sectionTwo);

//=========================================
//      nav__link + homeIntro
//          Class Switch
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

const nav__linkOptions = {
  rootMargin: "-120px 0px 0px 0px"
};

const nav__linkObserver = new IntersectionObserver(
  (entries, nav__linkObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        nav__link.classList.add("nav-scrolled");
      } else {
        nav__link.classList.remove("nav-scrolled");
      }
    });
  },
  nav__linkOptions
);

nav__linkObserver.observe(sectionTwo);

//=========================================
//       Appear On Scroll
//            Observer
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

//=========================================
//            Copy to Clipboard
//               After Clicked
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

// copyEmail = () => {
//     const copyText = document.getElementById("email");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     document.execCommand("copy");
//     alert("Copied: " + copyText.value);
// };

// copyPhone = () => {
//     const copyPhone = document.getElementById("phone");
//     copyText.select();
//     copText.setSelectionRange(0, 99999);
//     document.execCommand("copy");
//     alert("Copied: " + copyPhone.value);
// };

//=========================================
//   Smooth-Scroll-To About After Click
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

window.aboutScroll = function(target) {
  var scrollContainer = target;
  do {
    //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
    //find the top of target relatively to the container
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while ((target = target.offsetParent));

  scroll = function(c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + ((b - a) / 30) * i;
    setTimeout(function() {
      scroll(c, a, b, i);
    }, 20);
  };
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

//============================================
//   Smooth-Scroll-To Portfolio After Click
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

window.portfolioScroll = function(target) {
  var scrollContainer = target;
  do {
    //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
    //find the top of target relatively to the container
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while ((target = target.offsetParent));

  scroll = function(c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + ((b - a) / 30) * i;
    setTimeout(function() {
      scroll(c, a, b, i);
    }, 20);
  };
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

//=========================================
//   Smooth-Scroll-To Top After Click
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

window.topScroll = function(target) {
  var scrollContainer = target;
  do {
    //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
    //find the top of target relatively to the container
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while ((target = target.offsetParent));

  scroll = function(c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + ((b - a) / 30) * i;
    setTimeout(function() {
      scroll(c, a, b, i);
    }, 20);
  };
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};
