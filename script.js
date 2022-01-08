const header = document.getElementById("site-header");
const main = document.getElementById("site-main");
const footer = document.getElementById("site-footer");
//Create Elements
const navContainer = document.createElement("div");
const navBar = document.createElement("nav");
const descriptionContainer = document.createElement("div");
const descriptionEl = document.createElement("p");
const titleElement = document.createElement("h1");
const mainContent = document.createElement("div");
const article = document.createElement("article");
const footerContent = document.createElement("div");

navContainer.setAttribute("id", "navContainer");
navContainer.setAttribute("class", "containers");
navBar.setAttribute("id", "navbar");
descriptionContainer.setAttribute("id", "descriptionContainer");
descriptionContainer.setAttribute("class", "containers");
descriptionEl.setAttribute("id", "site-description");

titleElement.setAttribute("id", "siteTitle");
mainContent.setAttribute("id", "main-content");
article.setAttribute("id", "article-content");
footerContent.setAttribute("id", "footer-content");




navBar.innerHTML = `
<a href="#">Home</a>
<a href="#">About</a>
<a href="#">Contacts</a>
<a href="#">Login</a>
`;
titleElement.innerHTML = "Building Lasting Relationships!";
descriptionEl.innerHTML = "lorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus."
mainContent.innerHTML = `<p>Main Content Area</p>`;
article.innerHTML = `
<ul><p>Article Area</p>
<li>Featured Article
<h2>Title</h2>
<p>orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.<p>
</li>
<li>Archive:
<h2>Title</h2>
<p>orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.<p>
</li>
<li>Another Placeholder</li>
</ul>
`
footerContent.innerHTML =`
<ul><p>Footer Content Area</p>
<li>Terms of Use</li>
<li>Careers</li>
<li>Another Placeholder</li>
</ul>
`


//Placing Elements
header.append(navContainer);
header.append(descriptionContainer);
descriptionContainer.append(titleElement);
descriptionContainer.append(descriptionEl);
navContainer.append(navBar);
main.append(mainContent);
main.append(article);
footer.append(footerContent);