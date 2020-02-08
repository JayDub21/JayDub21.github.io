const header = document.querySelector("header");
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
//     rootMargin: "-135px 0px 0px 0px"
// };

// const sectionOneObserverOn = new IntersectionObserver((
//     entries,
//     sectionOneObserverOn
// ) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             header.classList.add("nav-scrolled");
//         }
//     });
// },
//     sectionOneOptionsOn);

// sectionOneObserverOn.observe(sectionOne);

//=========================================
//       navabar + nameTag 
//          Class Switch - OFF
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

// const sectionOneOptionsOff = {
//     rootMargin: "0px 0px -8px 0px"
// };

// const sectionOneObserverOff = new IntersectionObserver((
//     entries,
//     sectionOneObserverOff
// ) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             header.classList.remove("nav-scrolled");
//         }
//     });
// },
//     sectionOneOptionsOff);

// sectionOneObserverOff.observe(sectionOne);


//=========================================
//       navabar + homeIntro 
//          Class Switch  
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

// const sectionTwoOptions = {
//     rootMargin: "-120px 0px 0px 0px"
// };

// const sectionTwoObserver = new IntersectionObserver((
//     entries,
//     sectionTwoObserver
// ) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             header.classList.add("nav-scrolled");
//         } else {
//             header.classList.remove("nav-scrolled");
//         }
//     });
// },
//     sectionTwoOptions);

// sectionTwoObserver.observe(sectionTwo);


//=========================================
//       Appear On Scroll 
//            Observer  
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
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