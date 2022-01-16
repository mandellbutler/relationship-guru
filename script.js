const header = document.getElementById("site-header");
const main = document.getElementById("site-main");
const footer = document.getElementById("site-footer");
//====================CREATING ELEMENTS=================//

//======HEADER======//
function buildHeader () {
    //NavBar
    const navContainer = document.createElement("div");
    navContainer.setAttribute("id", "navContainer");
    navContainer.setAttribute("class", "containers");
    
    const navBar = document.createElement("nav");
    navBar.setAttribute("id", "navbar");
    navBar.innerHTML = `
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contacts</a>
    <a href="#">Login</a>
    `;

    //Description
    const descriptionContainer = document.createElement("div");
    descriptionContainer.setAttribute("id", "descriptionContainer");

    const titleElement = document.createElement("h1");
    titleElement.setAttribute("id", "siteTitle");
    titleElement.innerText = "Building Lasting Relationships!";

    const descriptionEl = document.createElement("p");
    descriptionEl.setAttribute("id", "site-description");
    descriptionEl.setAttribute("style", "padding: .5em;");
    descriptionEl.innerText = "lorenLorem ipsum dolor sit amet consectetur adipisicing elit. \
    Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam \
    repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus."

    



    //Placing Elements
    header.append(navContainer);
    header.append(descriptionContainer);
    descriptionContainer.append(titleElement);
    descriptionContainer.append(descriptionEl);
    navContainer.append(navBar);

    
}


//======MAIN======//
const mainContainer = document.createElement("div");
//Image Section
const imageSection = document.createElement("section");
const mainImg = document.createElement("img");
const mainP = document.createElement("p");

//Select Section
const selectSection = document.createElement("section");
const selectLabel = document.createElement("label");
const mainSelect = document.createElement("select");

//Contact Section
const contactSection = document.createElement("section");

//Article Area
const articleContainer = document.createElement("div");
const articleArray = [
    {
        name: "artOne",
        src: "/assets/images/article.png",
        alt: "pop art article pic",
        title: "This Is Article 1",
        display: "LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel",
        hidden: "esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus. \
        orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.\
        orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.\
        orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus."
    },
    {
        name: "artTwo",
        src: "/assets/images/article.png",
        alt: "pop art article pic",
        title: "This Is Article 2",
        display: "LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel",
        hidden: "esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus. \
        orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.\
        orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.\
        orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus."
        
    },
    {
        name: "artThree",
        src: "/assets/images/article.png",
        alt: "pop art article pic",
        title: "This Is Article 3",
        display: "LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel",
        hidden: "esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus. \
        orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.\
        orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.\
        orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus."
        
    }
]

//=======FOOTER=======//
const footerContent = document.createElement("div");


//====================BUILDING ELEMENTS=================//
// //navbar
// navContainer.setAttribute("id", "navContainer");
// navContainer.setAttribute("class", "containers");
// navBar.setAttribute("id", "navbar");
// descriptionContainer.setAttribute("id", "descriptionContainer");
// titleElement.setAttribute("id", "siteTitle");
// descriptionEl.setAttribute("id", "site-description");
// descriptionEl.setAttribute("style", "padding: .5em;");

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




// navBar.innerHTML = `
// <a href="#">Home</a>
// <a href="#">About</a>
// <a href="#">Contacts</a>
// <a href="#">Login</a>
// `;
// titleElement.innerText = "Building Lasting Relationships!";
// descriptionEl.innerText = "lorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus."
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

function buildArticle () {
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
            <div>
                <h2>You may also like:</h2>
            </div>
            <div id="archived"></div>
        </section>
    `
    main.append(articleContainer);
    const archived = document.getElementById("archived");

    articleArray.forEach((post) => {
        const article = document.createElement("article");
        const imgDiv = document.createElement("div");
        const archivedDiv = document.createElement("div");
        const archivedCont = document.createElement("div");
        const content = document.createElement("p");
        const button = document.createElement("button");

        imgDiv.setAttribute("class", "archived-images");
        article.setAttribute("class", "archived-articles");
        archivedDiv.setAttribute("class", "archived-containers");
        archivedCont.setAttribute("class", "archived-content");
        button.setAttribute("id", `${post.name}-toggle`);

        article.innerHTML = `
        <div class="archived-images">
            <img src="${post.src}" alt="${post.alt}" class="articleImages">
        </div>
        `

        archivedDiv.innerHTML = `
        <h3>${post.title}</h3>
        `

        content.innerHTML = `
            ${post.display}<span id="${post.name}-showLess" style="display: none;">
            ${post.hidden}
            </span>
        `

        button.innerHTML = "Show More";

        archived.append(article);
        article.append(archivedDiv)
        archivedDiv.append(archivedCont);
        //once the content has been placed...
        archivedCont.append(content);
        //place the button with intial "show more" text...
        archivedCont.append(button);
        //then place event listener on the button element
        const showLess = document.getElementById(`${post.name}-showLess`);

        button.addEventListener("click",  (event) => {
            console.log("Show Less: ", showLess)
            if (showLess.style.display === "none") {
                showLess.style.display = "flex";
                event.target.innerHTML = "Show Less";
            } else if (showLess.style.display === "flex") {
                showLess.style.display = "none"
                event.target.innerHTML = "Show More";
            }
            
        })
    })

}



//===================================
footerContent.innerHTML =`
<ul class="darkElements">
<li class="darkElements">Terms of Use</li>
<li class="darkElements">Careers</li>
<li class="darkElements">Another Placeholder</li>
</ul>
`


//PLACING ELEMENTS
// header.append(navContainer);
// header.append(descriptionContainer);
// descriptionContainer.append(titleElement);
// descriptionContainer.append(descriptionEl);
// navContainer.append(navBar);
buildHeader();
main.append(mainContainer);
mainContainer.append(imageSection);
imageSection.append(mainImg);
imageSection.append(mainP);
mainContainer.append(selectSection);
selectSection.append(selectLabel);
selectSection.append(mainSelect);
mainContainer.append(contactSection);
// main.append(articleContainer);
buildArticle();
footer.append(footerContent);

