const header = document.getElementById("site-header");


//Create Elements
const navBar = document.createElement("nav");


navBar.setAttribute("id", "navBar");



navBar.innerHTML = `
<ul><p>Navigation Area</p>
<li>Home</li>
<li>About</li>
<li>Contact Us</li>
</ul>
`;



header.append(navBar);