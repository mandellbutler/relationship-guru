//STEP 1: GRAB HTML ELEMENTS TO USE AS ANCHORS
const header = document.getElementById("site-header");
const main = document.getElementById("site-main");
const footer = document.getElementById("site-footer");
//====================CREATING ELEMENTS=================//

//STEP 2: CREATE FUNCTIONS TO CREATE AND BUILD ELEMENTS

//======HEADER======//
function buildHeader () {
    //NavBar
    const navContainer = document.getElementById("navContainer");
    const navBar = document.createElement("nav");
    navBar.setAttribute("id", "navbar");
    navBar.innerHTML = `
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#selectSection">Contacts</a>
    <a href="#">Login</a>
    `;

    //Description
    const descriptionContainer = document.getElementById("descriptionContainer");

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
    descriptionContainer.append(titleElement);
    descriptionContainer.append(descriptionEl);
    navContainer.append(navBar);

    
}

//======MAIN======//
function buildMain () {
    const mainContainer = document.createElement("div");
    mainContainer.setAttribute("id", "mainContainer");
    mainContainer.setAttribute("class", "containers");
    //Image Section
    const imageSection = document.createElement("section");
    imageSection.setAttribute("id", "imageSection")

    const mainImg = document.createElement("img");
    mainImg.setAttribute("src", "./assets/images/relationship.jpg");
    mainImg.setAttribute("alt", "jazzy kissy face emoji");

    const mainP = document.createElement("p");
    mainP.innerText = `
    orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. \
    Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam \
    repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
    orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. \
    Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam \
    repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
    orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. \
    Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam \
    repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
    orenLorem ipsum dolor
    `;

    //Select Section
    const selectSection = document.createElement("section");
    selectSection.setAttribute("id", "selectSection");

    const selectLabel = document.createElement("label");
    selectLabel.setAttribute("for", "contacts");
    selectLabel.innerText = "Connect With Your Loved Ones Now:"
    
    const mainSelect = document.createElement("select");
    mainSelect.setAttribute("name", "contacts");
    mainSelect.setAttribute("id", "contacts");
    mainSelect.innerHTML = `
    <option value="none">--Choose Contact--</option>
    <option value="all">All</option>
    `

    //Contact Section
    const contactSection = document.createElement("section");
    contactSection.setAttribute("id", "contactSection");

    

    //Article Area
    const articleContainer = document.createElement("div");
    articleContainer.setAttribute("id", "articleContainer");
    articleContainer.setAttribute("class", "containers");

    const featuredArticle = {
        title: "Essential Tools for Better Communication",
        author: "James Cordell",
        date: "Septemeber 11, 2022",
        content: `<p> LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
            orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
            orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
            orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
        </p>
        <p> LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
            orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
            orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
            orenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam dolore ut necessitatibus.
        </p>`
    }

    const archivedArray = [
        {
            name: "artOne",
            src: "/assets/images/article.png",
            alt: "pop art article pic",
            title: "3 Must-Have Gifts for The Holidays:",
            display: "LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel",
            hidden: "esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam\
            dolore ut necessitatibus. LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque \
            architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe \
            aperiam dolore ut necessitatibus. LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas.\
            Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque \
            saepe aperiam dolore ut necessitatibus. LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, \
            quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque \
            saepe aperiam dolore ut necessitatibus."
        },
        {
            name: "artTwo",
            src: "/assets/images/article.png",
            alt: "pop art article pic",
            title: "5 Qualities of a Perfect Mate:",
            display: "LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel",
            hidden: "esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam\
            dolore ut necessitatibus. LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque \
            architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe \
            aperiam dolore ut necessitatibus. LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas.\
            Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque \
            saepe aperiam dolore ut necessitatibus. LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, \
            quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque \
            saepe aperiam dolore ut necessitatibus."
            
        },
        {
            name: "artThree",
            src: "/assets/images/article.png",
            alt: "pop art article pic",
            title: "How to Let Go of a Bad Relationship:",
            display: "LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque architecto vel",
            hidden: "esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe aperiam\
            dolore ut necessitatibus. LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas. Neque \
            architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque saepe \
            aperiam dolore ut necessitatibus. LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quas.\
            Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque \
            saepe aperiam dolore ut necessitatibus. LorenLorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, \
            quas. Neque architecto vel esse odit, labore suscipit dicta exercitationem ullam repellendus aliquam at autem cumque \
            saepe aperiam dolore ut necessitatibus."
            
        }
    ]

    function buildArticle () {
        articleContainer.innerHTML = `
            <section id="featuredSection">
                <article id="featured">
                    <div id="featured-content">
                        <h2 id="featured-title">${featuredArticle.title}</h2>
                        <div id="article-credit">
                            <p> By: ${featuredArticle.author}</p>
                            <p> Date: ${featuredArticle.date}</p>
                        </div>
                        ${featuredArticle.content}
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
    
        archivedArray.forEach((post) => {
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

    //Placing Elements
    main.append(mainContainer);
    mainContainer.append(imageSection);
    imageSection.append(mainImg);
    imageSection.append(mainP);
    mainContainer.append(selectSection);
    selectSection.append(selectLabel);
    selectSection.append(mainSelect);
    mainContainer.append(contactSection);
    buildArticle();
}

//=======FOOTER=======//
function buildFooter () {
    const footerContent = document.createElement("div");
    footerContent.setAttribute("id", "footer-content");
    footerContent.setAttribute("class", "darkElements");
    footerContent.innerHTML =`
    <ul class="darkElements">
    <li class="darkElements">Terms of Use</li>
    <li class="darkElements">Careers</li>
    <li class="darkElements">Another Placeholder</li>
    </ul>
    `
    footer.append(footerContent);

}

//====================INIT FUNCTIONS=================//

//STEP 3: INITIATE FUNCTIONS TO PLACE ELEMENTS ON PAGE
buildHeader();
buildMain();
buildFooter();
