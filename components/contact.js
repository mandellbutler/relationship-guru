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
}