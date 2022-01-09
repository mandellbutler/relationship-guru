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
}