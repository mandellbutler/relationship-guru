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
        // const contactSection = document.getElementById("contactSection");
        // const contactCard = document.createElement("div");
        // const contactImageSec  = document.createElement("section");
        // const contactInfoSec  = document.createElement("section");
        // const contactAlertSec  = document.createElement("section");

        // contactCard.setAttribute("id", `${this.firstName}-card`);
        // contactImageSec.setAttribute("id", `${this.firstName}-image`);
        // contactInfoSec.setAttribute("id", `${this.firstName}-info`);
        // contactAlertSec.setAttribute("id", `${this.firstName}-alert`);

        // contactCard.innerHTML = `
        // <h1>This Is A Contact's Card</h1>
        // <p>It has an image</p>
        // `
        // contactImageSec.innerHTML = `
        // !!!Image!!!
        // `
        // contactInfoSec.innerHTML = `
        // <h2>Contact Info Section</h2>
        // <p>It tells their relation to you,</p>
        // <p>Their Age,</p>
        // <p>Favorite Color(s),</p>
        // <p>Gift Suggestions,</p>
        // <p>Quality Time Suggestions,</p>
        // `

        // contactAlertSec.innerHTML = `
        // <p>and Alerts You of a Special Event!</p>
        // `

        // contactSection.append(contactCard);
    }


}