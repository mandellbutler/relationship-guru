const header = document.getElementById("site-header");
const main = document.getElementById("site-main");
const footer = document.getElementById("site-footer");
//CREATING ELEMENTS
const navContainer = document.createElement("div");
const navBar = document.createElement("nav");
const descriptionContainer = document.createElement("div");
const descriptionSection = document.createElement("section");
const titleElement = document.createElement("h1");
const descriptionEl = document.createElement("p");
const mainContainer = document.createElement("div");
const imageSection = document.createElement("section");
const mainImg = document.createElement("img");
const mainP = document.createElement("p");
const selectSection = document.createElement("section");
const selectLabel = document.createElement("label");
const mainSelect = document.createElement("select");
const articleContainer = document.createElement("div");
const footerContent = document.createElement("div");

//BUILDING ELEMENTS
navContainer.setAttribute("id", "navContainer");
navContainer.setAttribute("class", "containers");
navBar.setAttribute("id", "navbar");
descriptionContainer.setAttribute("id", "descriptionContainer");
descriptionContainer.setAttribute("class", "containers");
descriptionSection.setAttribute("id", "desciptionSection");
titleElement.setAttribute("id", "siteTitle");
descriptionEl.setAttribute("id", "site-description");

mainContainer.setAttribute("id", "mainContainer");
mainContainer.setAttribute("class", "containers");
imageSection.setAttribute("id", "imageSection")
mainImg.setAttribute("src", "#");
mainImg.setAttribute("alt", "jazzy kissy face emoji");
selectSection.setAttribute("id", "selectSection");
selectLabel.setAttribute("for", "contacts");
mainSelect.setAttribute("name", "contacts");

articleContainer.setAttribute("id", "articleContainer");
articleContainer.setAttribute("class", "containers");
footerContent.setAttribute("id", "footer-content");




navBar.innerHTML = `
<a href="#">Home</a>
<a href="#">About</a>
<a href="#">Contacts</a>
<a href="#">Login</a>
`;
titleElement.innerHTML = "Building Lasting Relationships!";
descriptionEl.innerHTML = "lorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus."
mainP.innerHTML = `
orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
orenLorem ipsum dolor
`;

selectLabel.innerHTML = "Connect With Your Loved Ones Now!:"
mainSelect.innerHTML = `
<option value="none">--Choose Contact--</option>
<option value="all">All</option>
`


articleContainer.innerHTML = `
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


//PLACING ELEMENTS
header.append(navContainer);
header.append(descriptionContainer);
descriptionContainer.append(descriptionSection);
descriptionSection.append(titleElement);
descriptionSection.append(descriptionEl);
navContainer.append(navBar);
main.append(mainContainer);
mainContainer.append(imageSection);
imageSection.append(mainImg);
imageSection.append(mainP);
mainContainer.append(selectSection);
selectSection.append(selectLabel);
selectSection.append(mainSelect);
main.append(articleContainer);
footer.append(footerContent);