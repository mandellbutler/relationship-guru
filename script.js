const header = document.getElementById("site-header");
const main = document.getElementById("site-main");
const footer = document.getElementById("site-footer");
//CREATING ELEMENTS
const navContainer = document.createElement("div");
const navBar = document.createElement("nav");
const descriptionContainer = document.createElement("div");
const titleElement = document.createElement("h1");
const descriptionEl = document.createElement("p");
const mainContainer = document.createElement("div");
const imageSection = document.createElement("section");
const mainImg = document.createElement("img");
const mainP = document.createElement("p");
const selectSection = document.createElement("section");
const selectLabel = document.createElement("label");
const mainSelect = document.createElement("select");
const contactSection = document.createElement("section");
const articleContainer = document.createElement("div");
const footerContent = document.createElement("div");

//BUILDING ELEMENTS
navContainer.setAttribute("id", "navContainer");
navContainer.setAttribute("class", "containers");
navBar.setAttribute("id", "navbar");
descriptionContainer.setAttribute("id", "descriptionContainer");
titleElement.setAttribute("id", "siteTitle");
descriptionEl.setAttribute("id", "site-description");
descriptionEl.setAttribute("style", "padding: .5em;");

mainContainer.setAttribute("id", "mainContainer");
mainContainer.setAttribute("class", "containers");
imageSection.setAttribute("id", "imageSection")
mainImg.setAttribute("src", "./assets/images/relationship.jpg");
mainImg.setAttribute("alt", "jazzy kissy face emoji");
selectSection.setAttribute("id", "selectSection");
selectLabel.setAttribute("for", "contacts");
mainSelect.setAttribute("name", "contacts");
mainSelect.setAttribute("id", "contacts");
contactSection.setAttribute("id", "contactSection");

articleContainer.setAttribute("id", "articleContainer");
articleContainer.setAttribute("class", "containers");
footerContent.setAttribute("id", "footer-content");
footerContent.setAttribute("class", "darkElements");




navBar.innerHTML = `
<a href="#">Home</a>
<a href="#">About</a>
<a href="#">Contacts</a>
<a href="#">Login</a>
`;
titleElement.innerText = "Building Lasting Relationships!";
descriptionEl.innerText = "lorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus."
mainP.innerText = `
orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
orenLorem ipsum dolor
`;

selectLabel.innerText = "Connect With Your Loved Ones Now:"
mainSelect.innerHTML = `
<option value="none">--Choose Contact--</option>
<option value="all">All</option>
`


articleContainer.innerHTML = `
<section id="featuredSection">
    <article id="featured">
        <div id="featured-content">
            <h2 id="featured-title">Title</h2>
            <p> By: Author</p>
            <p> Date: September 11, 2022</p>
            <p> LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
                orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
                orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
                orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
            </p>
            <p> LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
                orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
                orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
                orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
            </p>
        </div>
    </article>
</section>
<section id ="archivedSection">
    <div id="archived">
        <article class="archived-articles">
            <div class="archived-images">
                <img src="/assets/images/article.png" alt="pop art article image" class="articleImages">
            </div>
            <div class="archived-containers">
                <h2>Title</h2>
                <div class="archContent">
                    <p>
                        LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel 
                        <span id="showLess" style="display: none"> esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
                            orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
                            orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
                            orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
                        </span>
                    </p>
                    <button id="toggle"></button>
                </div>
            </div>
        </article>
        <article class="archived-articles">
            <div class="archived-images">
                <img src="/assets/images/article.png" alt="pop art article image" class="articleImages">
            </div>
            <div class="archived-container">
                <h2>Another Placeholder</h2>
                <p>LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
                orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
                orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
                orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
                </p>
            </div>
        </article>
    </div>
</section>
`


//===================================
footerContent.innerHTML =`
<ul class="darkElements">
<li class="darkElements">Terms of Use</li>
<li class="darkElements">Careers</li>
<li class="darkElements">Another Placeholder</li>
</ul>
`


//PLACING ELEMENTS
header.append(navContainer);
header.append(descriptionContainer);
descriptionContainer.append(titleElement);
descriptionContainer.append(descriptionEl);
navContainer.append(navBar);
main.append(mainContainer);
mainContainer.append(imageSection);
imageSection.append(mainImg);
imageSection.append(mainP);
mainContainer.append(selectSection);
selectSection.append(selectLabel);
selectSection.append(mainSelect);
mainContainer.append(contactSection);
main.append(articleContainer);
footer.append(footerContent);

const toggler = document.getElementById("toggle");
const showLess = document.getElementById("showLess");


toggler.innerHTML = "Show More";

toggler.addEventListener("click",  () => {
    console.log("Event: ", toggler.innerHTML)

    if (showLess.style.display === "none") {
        showLess.style.display = "flex";
        toggler.innerHTML = "Show Less";
    } else if (showLess.style.display === "flex") {
        showLess.style.display = "none"
        toggler.innerHTML = "Show More";
    }
    
    
})