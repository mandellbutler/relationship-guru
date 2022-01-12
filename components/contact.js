class Contact {
    constructor (
        id,
        firstName,
        lastName,
        relation,
        birthdate,
        age,
        favoriteColor,
        giftIdeas,
        dateIdeas,
        image
    )
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.relation = relation;
        this.birthdate = birthdate;
        this.age = age;
        this.favoriteColor = favoriteColor;
        this.giftIdeas = giftIdeas;
        this.dateIdeas = dateIdeas;
        this.image = image;
    }

    updateFirstName = function (newFirstName) {
        this.firstName = newFirstName;
    };

    updateLastName = function (newLastName) {
        this.lastName = newLastName;
    };

    addGifts = function (newGift) {
        return this.giftIdeas.push(newGift);
        
    };

    setAge = function () {
        let now = new Date();
        let bday = new Date (this.birthdate)
        let timeSince = now - bday;
        let age = Math.floor(timeSince / (1000 * 3600 * 24) / 365)
        return age;
    }

    displayBirthday = function () {
        let birthdate = new Date(this.birthdate);
        let options = { month: "long"};
        let birthMonth = new Intl.DateTimeFormat('en-US', options).format(birthdate)
        
        if ((birthdate.getDate() == 1) || (birthdate.getDate() == 21) || (birthdate.getDate() == 31)) {
            return `${this.firstName}`,"'s Birthday: ", birthMonth + " " + birthdate.getDate() + "st"
        } else if ((birthdate.getDate() == 2) || (birthdate.getDate() == 22)) {
            return `${this.firstName}`,"'s Birthday: ", birthMonth + " " + birthdate.getDate() + "nd"
        } else if ((birthdate.getDate() == 3) || (birthdate.getDate() == 23)) {
            return `${this.firstName}`,"'s Birthday: ", birthMonth + " " + birthdate.getDate() + "rd"
        } else if (((birthdate.getDate() >= 4) && (birthdate.getDate() <= 20)) || ((birthdate.getDate() >= 24) && (birthdate.getDate() <= 30))) {
            return `${this.firstName}`,"'s Birthday: ", birthMonth + " " + birthdate.getDate() + "th"
        } else {
            return "Please enter valid birthdate!"
        }

    }

    displayDateIdea = function () {
        let randomDate = this.dateIdeas[
            Math.floor(Math.random() * this.dateIdeas.length)
          ];
        return randomDate;
    }

    displayGiftIdea = function () {
        let randomGift = this.giftIdeas[
            Math.floor(Math.random() * this.giftIdeas.length)
          ];
        return randomGift;
    }

    announceEvent = function () {
        //Format first letter in names to caps
        let firstStr = this.firstName;
        let capFirst = firstStr.charAt(0).toUpperCase() + firstStr.slice(1);
        
        let today = new Date();

        //CHRISTMAS
        let xmasYear = today.getFullYear();

        if (today.getMonth() == 11 && today.getDate() > 25) {
            xmasYear = xmasYear + 1;
        }
        let xmasDate = new Date(xmasYear, 0, 25);
        let day = 1000 * 60 * 60 * 24;

        let daysTilXmas = Math.ceil((xmasDate.getTime() - today.getTime()) / (day));

        //ANNIVERSARY
        let date = "January 24, 2019";
        let anniversary = new Date(date);
        let anniversaryDay = anniversary.getDate();
        let anniversaryMonth = anniversary.getMonth() + 1;
        let newAnniversaryYear = today.getFullYear();

        if ((today.getMonth() > (anniversaryMonth - 1)) || ((today.getMonth() == (anniversaryMonth - 1)) && (today.getDate() >= anniversaryDay))){
            newAnniversaryYear = newAnniversaryYear + 1;
        }

        let anniversaryToConvert = anniversaryMonth + " " + anniversaryDay + ", " + newAnniversaryYear;
        let newAnniversary = new Date(anniversaryToConvert)
        let daysTilAnniversary = Math.ceil((newAnniversary.getTime() - today.getTime()) / (day));

        //BIRTHDAY
        let birthdate = new Date(this.birthdate)
        let birthDay = birthdate.getDate();
        let birthMonth = (birthdate.getMonth() +1);
        let newBirthYear = today.getFullYear();


        if ((today.getMonth() > (birthMonth - 1)) || ((today.getMonth() == (birthMonth - 1)) && (today.getDate() >= birthDay))){
            newBirthYear = newBirthYear + 1;
        }
        ;

        let bdayToConvert = birthMonth + " " + birthDay + ", " + newBirthYear;
        let newBday = new Date(bdayToConvert);
        let daysTilBirthdate = Math.ceil((newBday.getTime() - today.getTime()) / (day));

        //BUILD ALERT ELEMENTS
        let event = document.getElementById(`${this.firstName}-alert`)
        let alertDiv = document.createElement("div");

        alertDiv.setAttribute("id", `${this.firstName}-alertContainer`);

        event.append(alertDiv);

        //xmas announcement element
        let xmasAnnoucement = document.createElement("p");
        xmasAnnoucement.setAttribute("id", `${this.firstName}-xmasAlert`);
        xmasAnnoucement.setAttribute("class", "eventAlerts");
        xmasAnnoucement.innerHTML = `
        There are <span id="tilXmasAlert" class="daysTilAlerts"> ${daysTilXmas}</span> days until Christmas! Here is a great gift idea for ${capFirst}: ${this.displayGiftIdea()}!
        `

        alertDiv.append(xmasAnnoucement);

        //anniversary announcement element
        let anniversaryAnnoucement = document.createElement("p");
        anniversaryAnnoucement.setAttribute("id", `${this.firstName}-anniversaryAlert`);
        anniversaryAnnoucement.setAttribute("class", "eventAlerts");

        anniversaryAnnoucement.innerHTML = `
        There are <span id="tilAnniversaryAlert" class="daysTilAlerts">${daysTilAnniversary}</span> days until ${capFirst}'s Anniversary!!
        `
        alertDiv.append(anniversaryAnnoucement);
        
        //bday announcement element
        let bdayAnnoucement = document.createElement("p");
        bdayAnnoucement.setAttribute("id", `${this.firstName}-bdayAlert`);
        bdayAnnoucement.setAttribute("class", "eventAlerts");

        bdayAnnoucement.innerHTML =`
        There are <span id="tilBdayAlert" class="daysTilAlerts">${daysTilBirthdate}</span> days until ${capFirst}'s Birthday!!
        `

        alertDiv.append(bdayAnnoucement);

        if ((daysTilXmas <= 45) && (daysTilAnniversary <= 60) && (daysTilBirthdate <= 30)) {
            let announceArray = [xmasAnnoucement, anniversaryAnnoucement, bdayAnnoucement]
            
            announceArray.forEach((item) => {
                alertDiv.append(item)
                return item;
            })
        } else if ((daysTilXmas <= 45) && (daysTilAnniversary <= 60)) {
            let announceArray = [xmasAnnoucement, anniversaryAnnoucement]

            announceArray.forEach((item) => {
                alertDiv.append(item)
                return item;
            })
        } else if ((daysTilXmas <= 45) && (daysTilBirthdate <= 30)) {
            let announceArray = [xmasAnnoucement, bdayAnnoucement]

            announceArray.forEach((item) => {
                alertDiv.append(item)
                return item;
            })
        } else if ((daysTilAnniversary <= 60) && (daysTilBirthdate <= 30)) {
            let announceArray = [anniversaryAnnoucement, bdayAnnoucement]

            announceArray.forEach((item) => {
                alertDiv.append(item)
                return item;
            })
            
        } else if ((daysTilXmas <= 45)) {   
            alertDiv.append(xmasAnnoucement)
        } else if ((daysTilAnniversary <= 60)) {
            alertDiv.append(anniversaryAnnoucement)
        } else if ((daysTilBirthdate <= 30)) {
            alertDiv.append(bdayAnnoucement)
        } else if (daysTilXmas === 365) {
            alertDiv.append(xmasAnnoucement) 
        } else if (daysTilAnniversary === 365) {
            alertDiv.append(anniversaryAnnoucement) 
        } else if (daysTilBirthdate === 365) {
            alertDiv.append(bdayAnnoucement) 
        } else {
            alertDiv.classList = "hidden"
        }
    }

    buildContactElement = function () {
        //Format first letter in names to caps
        let firstStr = this.firstName;
        let capFirst = firstStr.charAt(0).toUpperCase() + firstStr.slice(1);
        let lastStr = this.lastName;
        let capLast = lastStr.charAt(0).toUpperCase() + lastStr.slice(1);

        const selectMenu = document.getElementById("contacts");
        const selectItem = document.createElement("option"); 
        const contactSection = document.getElementById("contactSection");
        const contactCard = document.createElement("div");
        const contactInfoSec  = document.createElement("section");
        const contactInfoContainer  = document.createElement("div");
        const contactImgContainer  = document.createElement("div");
        const closeContactEl = document.createElement("div");
        const contactAlertSec  = document.createElement("section");
        const giftDisplay = document.createElement("li");
        const dateDisplay = document.createElement("li");


        selectItem.setAttribute("value", `${this.firstName}`);
        selectItem.setAttribute("id", `${this.firstName}-selectItem`);
        contactCard.setAttribute("id", `${this.firstName}-card`);
        contactCard.setAttribute("class", `contact-cards`);
        contactInfoSec.setAttribute("id", `${this.firstName}-info`);
        contactInfoSec.setAttribute("class", `infoSections`);
        contactInfoContainer.setAttribute("id", `${this.firstName}-infoContainer`);
        contactInfoContainer.setAttribute("class", "info-containers");
        contactImgContainer.setAttribute("id", `${this.firstName}-imageContainer`);
        contactImgContainer.setAttribute("class", "containers");
        closeContactEl.setAttribute("id", `close-${this.firstName}`);
        closeContactEl.setAttribute("class", "close-buttons");
        contactAlertSec.setAttribute("id", `${this.firstName}-alert`);

        selectItem.innerHTML = `
        ${capFirst}
        `
        //event listener for select items
        selectMenu.addEventListener("change", (event) => {
            const cardsHidden = document.querySelectorAll(".contacts-hidden");
            const cardsDisplayed = document.querySelectorAll(".contact-cards");
            const eachCard = document.getElementById(`${this.firstName}-card`);
            const item = event.target.value;

            if (item === "all") {
                cardsHidden.forEach(() => {
                    eachCard.setAttribute("class", "contact-cards");
                })
            } else if (item === `${this.firstName}`) {
                cardsDisplayed.forEach((eachCard) => {
                    eachCard.setAttribute("class", "contacts-hidden");

                    
                })
                const selectedCard = document.getElementById(`${this.firstName}-card`);
                selectedCard.className = "contact-cards";
                contactContainer.append(selectedCard);

            } else if (item === "none") {
                cardsDisplayed.forEach((eachCard) => {
                    eachCard.setAttribute("class", "contacts-hidden");

                })
            }
        })

        contactImgContainer.innerHTML = `
        <img ${this.image.src} ${this.image.alt} class="contact-images">
        `
        contactInfoContainer.innerHTML = `
        <ul id="${this.firstName}-infoList" class="infoLists">
        <h3 id="${this.firstName}-title" class="contact-titles">${capFirst} ${capLast}</h3>
        <li>Relation: ${this.relation}</li>
        <li>Birthday: ${this.displayBirthday()}</li>
        <li>Age: ${this.setAge()}</li>
        <li>Favorite Color: ${this.favoriteColor}</li>
        </ul>
        `
        closeContactEl.innerHTML = `x`;

        giftDisplay.setAttribute("id", `${this.firstName}-giftIdeas`);
        if (this.giftIdeas.length === 0) {
            giftDisplay.classList = "hidden"
        } else {
            giftDisplay.classList = "giftIdeas"
        }

        dateDisplay.setAttribute("id", `${this.firstName}-dateIdeas`);
        if (this.dateIdeas.length === 0) {
            dateDisplay.classList = "hidden"
        } else {
            dateDisplay.classList = "dateIdeas"
        }

        giftDisplay.innerHTML = `
        Gift Idea: ${this.displayGiftIdea()}
        `
        dateDisplay.innerHTML = `
        Date Idea: ${this.displayDateIdea()}
        `

        selectMenu.append(selectItem); //populates the select menu with <option> contact's name </option>
        contactSection.append(contactCard);
        contactCard.append(contactInfoSec);
        contactInfoSec.append(contactImgContainer);
        contactInfoSec.append(contactInfoContainer);
        contactInfoSec.append(closeContactEl);
        //grabbing the contact's info-list id AFTER it has been created and placed
        //then appending the event announcement onto it.
        document.getElementById(`${this.firstName}-infoList`).append(giftDisplay)
        document.getElementById(`${this.firstName}-infoList`).append(dateDisplay)
        contactCard.append(contactAlertSec);
    }


}

export default Contact;