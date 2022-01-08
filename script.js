const header = document.getElementById("site-header");
const main = document.getElementById("site-main");


//Create Elements
const navBar = document.createElement("nav");
const titleElement = document.createElement("h1");


navBar.setAttribute("id", "navBar");
titleElement.setAttribute("id", "siteTitle");




navBar.innerHTML = `
<ul><p>Navigation Area</p>
<li>Home</li>
<li>About</li>
<li>Contact Us</li>
</ul>
`;
titleElement.innerHTML = "Hello World!";



header.append(navBar);
main.append(titleElement);