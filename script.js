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
function handleMenu (e) {
    const menuModal = document.querySelector(".menu");
    if (e.type === "click" || e.key === "Enter") {
        if (!menuModal.classList.contains("open")) {
            menuModal.classList.add("open");
        } else {
            menuModal.classList.remove("open");
        }
    } else if (e.key === "Escape") {
        menuModal.classList.remove("open");
    }
}

menuIcon.addEventListener("click", handleMenu);
menuIcon.addEventListener("keyup", handleMenu);

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
transformMore.onfocus = () => transformMore.classList.add("hover");
transformMore.onblur = () => transformMore.classList.remove("hover");
standOutMore.onfocus = () => standOutMore.classList.add("hover");
standOutMore.onblur = () => standOutMore.classList.remove("hover");

// Handle Footer
footerLinks.forEach(item => {
    item.onmouseover = () => item.style.color = "white";
    item.onmouseout = () => item.style.color = "hsl(168, 34%, 41%)";
    item.onfocus = () => item.style.color = "white";
    item.onblur = () => item.style.color = "hsl(168, 34%, 41%)";
});

fbIcon.onmouseover = () => fbIcon.src = "./images/icon-facebook-white.svg";
fbIcon.onmouseout = () => fbIcon.src = "./images/icon-facebook.svg";
igIcon.onmouseover = () => igIcon.src = "./images/icon-instagram-white.svg";
igIcon.onmouseout = () => igIcon.src = "./images/icon-instagram.svg";
twitterIcon.onmouseover = () => twitterIcon.src = "./images/icon-twitter-white.svg";
twitterIcon.onmouseout = () => twitterIcon.src = "./images/icon-twitter.svg";
pinterestIcon.onmouseover = () => pinterestIcon.src = "./images/icon-pinterest-white.svg";
pinterestIcon.onmouseout = () => pinterestIcon.src = "./images/icon-pinterest.svg";
fbIcon.parentElement.onfocus = () => fbIcon.src = "./images/icon-facebook-white.svg";
fbIcon.parentElement.onblur = () => fbIcon.src = "./images/icon-facebook.svg";
igIcon.parentElement.onfocus = () => igIcon.src = "./images/icon-instagram-white.svg";
igIcon.parentElement.onblur = () => igIcon.src = "./images/icon-instagram.svg";
twitterIcon.parentElement.onfocus = () => twitterIcon.src = "./images/icon-twitter-white.svg";
twitterIcon.parentElement.onblur = () => twitterIcon.src = "./images/icon-twitter.svg";
pinterestIcon.parentElement.onfocus = () => pinterestIcon.src = "./images/icon-pinterest-white.svg";
pinterestIcon.parentElement.onblur = () => pinterestIcon.src = "./images/icon-pinterest.svg";