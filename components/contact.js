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

    displayIdea = function (type) {
        //to display idea for gift
        if (type.toLowerCase() === "gift") {
            let giftIdea = this.giftIdeas[
                Math.floor(Math.random() * this.giftIdeas.length)
            ];
            return giftIdea;
        //to display idea for date
        } else if (type.toLowerCase() === "date") {
            let dateIdea = this.dateIdeas[
                Math.floor(Math.random() * this.dateIdeas.length)
              ];
            return dateIdea;
        } else {
            console.log("Invalid Input!")
        }
    }


    announceEvent = function (eventName, eventDate) {
        //Format first letter in names to caps
        const firstName = this.firstName;
        const capFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        const partName = "partner"
        const capPart = partName.charAt(0).toUpperCase() + partName.slice(1);
        const today = new Date (); //using javascript date object to get current date
        const defualtDate = "September 23"

        //get user input & use dates from known Holidays
        if (eventName === "Birthday") {
            eventDate = this.birthdate
        } else if (eventName === "Christmas") {
            eventDate = "December 25";
        } else if (eventName === "Valentine's Day") {
            eventDate = "February 14";
        } else if (eventName === "New Year's Eve") {
            eventDate = "December 31";
        } else if (eventName === "Halloween") {
            eventDate = "October 31";
        } else if (eventName === "Juneteenth") {
            eventDate = "June 19";
        // } else if (eventName === "Anniversary") {
        //     eventDate = this.anniversary;
        } else {
            eventDate = eventDate;
        }
       //if user leaves event date blank
        if (!eventDate) {
            eventDate = defualtDate;
        }
        //if user leaves event name blank
        if (!eventName) {
            console.log("Event Name Required!")
        }
    
        //create javascript object
        const date = new Date(eventDate)
        //get day month and year
        const eventDay = date.getDate();
        //months are an begin with index of zero
        const eventMonth = date.getMonth() + 1; //add one to make adjustment
        let newEventYear = today.getFullYear();
        if ((today.getMonth() > (eventMonth - 1)) || ((today.getMonth() == (eventMonth - 1)) && (today.getDate() >= eventDay))){
            newEventYear = newEventYear + 1;
        }
        ;
        //convert into numeric value
        const eventToConvert = eventMonth + " " + eventDay + "," + " " + newEventYear;
        //make new javscript object
        const newDate = new Date(eventToConvert);
        const day = 1000 * 60 * 60 * 24;
        const daysTilEvent = Math.ceil((newDate.getTime() - today.getTime())/day);
    
        //BUILD ALERT ELEMENTS
        const event = document.getElementById(`${this.firstName}-alert`);
        const alertEl =  document.createElement("div");

        alertEl.setAttribute("id", `${this.firstName}-alertContainer`);
        
        //Begin displaying alerts within 30 days of event
        (daysTilEvent > 30) 
        ? alertEl.classList = "hidden" 
        : alertEl.classList = "eventAlerts"

        if (eventName === "Valentine's Day") {
            if (daysTilEvent === 1) {
                alertEl.innerHTML = `
            ${eventName} is <span id="tilValentineAlert" class="daysTilAlerts">tomorrow</span>!
            `} else if (daysTilEvent === 365) {
                alertEl.classList = "eventAlerts"
                alertEl.innerHTML = `
            <span id="tilValentineAlert" class="daysTilAlerts">Happy ${eventName}</span>!
            `} else { 
                alertEl.innerHTML = `
            <There are ${daysTilEvent} days until <span id="tilValentineAlert" class="daysTilAlerts">${eventName}</span>!
            `
            }
        } else if (eventName === "Birthday") {
            if (daysTilEvent === 1) {
                alertEl.innerHTML = `
                Tomorrow is <span id="tilAnniversaryAlert" class="daysTilAlerts">tomorrow</span>!
                `
            } else if (daysTilEvent === 365) {
                alertEl.classList = "eventAlerts"
                alertEl.innerHTML = `
                Be sure to wish ${capFirst} a very <span id="tilBdayAlert" class="daysTilAlerts">Happy ${eventName}</span>!
                `
            } else {
                alertEl.innerHTML = `
                There are <span id="tilBdayAlert" class="daysTilAlerts">${daysTilEvent}</span> days until ${capFirst}'s ${eventName}!
                `
            }
                
        } else if (eventName === "Anniversary") {
            if (daysTilEvent === 1) {
                alertEl.innerHTML = `
                ${capFirst} & ${capPart}'s ${eventName} is <span id="tilAnniversaryAlert" class="daysTilAlerts">tomorrow</span>!
                `
            } else if (daysTilEvent === 365) {
                alertEl.classList = "eventAlerts"
                alertEl.innerHTML = `
                Be sure to wish ${capFirst} & ${capPart} a very <span id="tilAnniversaryAlert" class="daysTilAlerts">Happy ${eventName}</span>!
                `
            } else {
                alertEl.innerHTML = `
                There are <span id="tilAnniversaryAlert" class="daysTilAlerts">${daysTilEvent}</span> days until ${capFirst} and ${capPart}'s ${eventName}!
                `
            }
            
        } else {
            if (daysTilEvent === 1) {
                alertEl.innerHTML = `
                ${eventName} is <span class="daysTilAlerts">tomorrow!</span>
                `
            } else if (daysTilEvent === 365) {
                alertEl.classList = "eventAlerts"
                alertEl.innerHTML = `
                ${eventName} is <span class="daysTilAlerts">today</span>!!!
                `
            } else {
                alertEl.innerHTML = `
                There are <span class="daysTilAlerts">${daysTilEvent}</span> days until ${eventName}!
                `
            }
        }
            
        event.append(alertEl);

    }

    buildContactElement = function () {
        //Format first letter in names to caps
        let firstStr = this.firstName;
        let capFirst = firstStr.charAt(0).toUpperCase() + firstStr.slice(1);
        let lastStr = this.lastName;
        let capLast = lastStr.charAt(0).toUpperCase() + lastStr.slice(1);

        //==============SELECT MENU
        const selectMenu = document.getElementById("contacts");

        const selectItem = document.createElement("option"); 
        selectItem.setAttribute("value", `${this.firstName}`);
        selectItem.setAttribute("id", `${this.firstName}-selectItem`);

        //adds each contact's name as an option to the select menu
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
                    contactSection.append(eachCard);
                })
            } else if (item === `${this.firstName}`) {
                cardsDisplayed.forEach((eachCard) => {
                    eachCard.setAttribute("class", "contacts-hidden");
                    contactSection.append(eachCard);
                    
                })
                const selectedCard = document.getElementById(`${this.firstName}-card`);
                selectedCard.className = "contact-cards";
                contactSection.append(selectedCard);

            } else if (item === "none") {
                cardsDisplayed.forEach((eachCard) => {
                    eachCard.setAttribute("class", "contacts-hidden");
                    contactSection.append(eachCard);
                    
                })
            }
        })


        //==============CONTACT'S CARD
        const contactSection = document.getElementById("contactSection");
        const contactCard = document.createElement("div");
        contactCard.setAttribute("id", `${this.firstName}-card`);
        contactCard.setAttribute("class", `contacts-hidden`);

        const contactInfoSec  = document.createElement("section");
        contactInfoSec.setAttribute("id", `${this.firstName}-info`);
        contactInfoSec.setAttribute("class", `infoSections`);

        const contactImgContainer  = document.createElement("div");
        contactImgContainer.setAttribute("id", `${this.firstName}-imageContainer`);
        contactImgContainer.setAttribute("class", "containers");
        contactImgContainer.innerHTML = `
        <img ${this.image.src} ${this.image.alt} class="contact-images">
        `

        const contactInfoContainer  = document.createElement("div");
        contactInfoContainer.setAttribute("id", `${this.firstName}-infoContainer`);
        contactInfoContainer.setAttribute("class", "info-containers");
        contactInfoContainer.innerHTML = `
        <ul id="${this.firstName}-infoList" class="infoLists">
        <h3 id="${this.firstName}-title" class="contact-titles">${capFirst} ${capLast}</h3>
        <li>Relation: ${this.relation}</li>
        <li>Birthday: ${this.displayBirthday()}</li>
        <li>Age: ${this.setAge()}</li>
        <li>Favorite Color: ${this.favoriteColor}</li>
        </ul>
        `

        const closeContactEl = document.createElement("div");
        closeContactEl.setAttribute("id", `close-${this.firstName}`);
        closeContactEl.setAttribute("class", "close-buttons");
        closeContactEl.innerHTML = `x`;

        //event listener for close element
        closeContactEl.addEventListener("click", () => {
            const contactCard = document.getElementById(`${this.firstName}-card`);
            contactCard.setAttribute("class", "contacts-hidden");
            contactSection.append(contactCard);

        })

        
        const giftDisplay = document.createElement("li");
        giftDisplay.setAttribute("id", `${this.firstName}-giftIdeas`);
        if (this.giftIdeas.length === 0) {
            giftDisplay.classList = "hidden"
        } else {
            giftDisplay.classList = "giftIdeas"
        }

        giftDisplay.innerHTML = `
        Gift Idea: ${this.displayIdea("gift")}
        `

        const dateDisplay = document.createElement("li");
        dateDisplay.setAttribute("id", `${this.firstName}-dateIdeas`);
        if (this.dateIdeas.length === 0) {
            dateDisplay.classList = "hidden"
        } else {
            dateDisplay.classList = "dateIdeas"
        }

        dateDisplay.innerHTML = `
        Date Idea: ${this.displayIdea("date")}
        `

        const contactAlertSec  = document.createElement("section");
        contactAlertSec.setAttribute("id", `${this.firstName}-alert`);
        contactAlertSec.setAttribute("class", `alertSections`);

        //populates the select menu with <option> contact's name </option>
        selectMenu.append(selectItem); 
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