const menuIcon = document.querySelector("#menu-icon");
const contactButton = document.querySelector("#contact");
const transformMore = document.querySelector("#transform-more");
const standOutMore = document.querySelector("#stand-out-more");
const footerLinks = document.querySelectorAll("footer a")
const fbIcon = document.querySelector("#fb-icon");
const igIcon = document.querySelector("#ig-icon");
const twitterIcon = document.querySelector("#twitter-icon");
const pinterestIcon = document.querySelector("#pinterest-icon");


// Handle Menu 
menuIcon.addEventListener("click", function () {
    const menuModal = document.querySelector(".menu");
    if (!menuModal.classList.contains("open")) {
        menuModal.classList.add("open");
    } else {
        menuModal.classList.remove("open")
    }
});

// Handle Contact Button
contactButton.addEventListener("mouseover", function () {
    contactButton.style.background = "hsl(0, 0%, 100%, 0.4)";
    contactButton.style.color = "inherit";
});
contactButton.addEventListener("mouseout", function () {
    contactButton.style.background = "hsl(0, 0%, 100%, 1)";
    contactButton.style.color = "hsl(212, 27%, 19%)";
})

// Handle Learn More 
transformMore.onmouseover = () => transformMore.classList.add("hover");
transformMore.onmouseout = () => transformMore.classList.remove("hover");
standOutMore.onmouseover = () => standOutMore.classList.add("hover");
standOutMore.onmouseout = () => standOutMore.classList.remove("hover");

// Handle Footer
footerLinks.forEach(item => {
    item.onmouseover = () => item.style.color = "white";
    item.onmouseout = () => item.style.color = "hsl(168, 34%, 41%)";
});

fbIcon.onmouseover = () => fbIcon.src = "./images/icon-facebook-white.svg";
fbIcon.onmouseout = () => fbIcon.src = "./images/icon-facebook.svg";
igIcon.onmouseover = () => igIcon.src = "./images/icon-instagram-white.svg";
igIcon.onmouseout = () => igIcon.src = "./images/icon-instagram.svg";
twitterIcon.onmouseover = () => twitterIcon.src = "./images/icon-twitter-white.svg";
twitterIcon.onmouseout = () => twitterIcon.src = "./images/icon-twitter.svg";
pinterestIcon.onmouseover = () => pinterestIcon.src = "./images/icon-pinterest-white.svg";
pinterestIcon.onmouseout = () => pinterestIcon.src = "./images/icon-pinterest.svg";