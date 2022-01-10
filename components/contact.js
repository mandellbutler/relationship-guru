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

    buildContactElement = function () {
        const contactSection = document.getElementById("contactSection");
        const contactCard = document.createElement("div");
        const contactInfoSec  = document.createElement("section");
        const contactInfoContainer  = document.createElement("div");
        const contactImgContainer  = document.createElement("div");
        const contactAlertSec  = document.createElement("section");

        contactCard.setAttribute("id", `${this.firstName}-card`);
        contactCard.setAttribute("class", `contact-cards`);
        contactInfoSec.setAttribute("id", `${this.firstName}-infoSection`);
        contactInfoSec.setAttribute("class", `infoSections`);
        contactInfoContainer.setAttribute("id", "contact-infoContainer");
        contactInfoContainer.setAttribute("class", "containers");
        contactImgContainer.setAttribute("id", "contact-imageContainer");
        contactImgContainer.setAttribute("class", "containers");
        contactAlertSec.setAttribute("id", `${this.firstName}-alert`);

        contactCard.innerHTML = `
        <h1>This Is A Contact's Card</h1>
        `
        contactImgContainer.innerHTML = `
        <h2>(a) It Has an Image Section</h2>
        <img ${this.image.src} ${this.image.alt}>
        `
        contactInfoContainer.innerHTML = `
        <h2>(b) It Has a Contact Info Section</h2>
        <ul id="contact-infoList">
        <h3>Which Lists:</h3>
        <h3 id="${this.firstName}-title">${this.firstName}</h3>
        <li>Relation: ${this.relation}</li>
        <li>Birthday: ${this.displayBirthday()}</li>
        <li>Age: ${this.setAge()}</li>
        <li>Favorite Color: ${this.favoriteColor}</li>
        <li>Suggested Gift: ${this.displayGiftIdea}</li>
        <li>Suggested Date: ${this.displayDateIdea}</li>
        </ul>
        `

        contactAlertSec.innerHTML = `
        <h2>(c) It Has an Alert Section</h2>
        <p>!!!Xmas Alert!!!</p>
        <p>!!!Bday Alert!!!</p>
        <p>!!!Anniversary Alert!!!</p>
        <p>!!!Valentine's Day Alert!!!</p>

        `

        contactSection.append(contactCard);
        contactCard.append(contactInfoSec);
        contactInfoSec.append(contactImgContainer);
        contactInfoSec.append(contactInfoContainer)
        contactCard.append(contactAlertSec);
    }


}

export default Contact;