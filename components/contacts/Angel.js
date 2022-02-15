import Contact from "../contact.js"

const Angel = new Contact (
    7,
    "angel",
    "silverstein",
    "stylist",
    "September 23, 1978",
    "",
    "Earth Tones",
    [],
    [],
    {
        "src": "src=assets/images/contact.jpg",
        "alt": "alt=graphic image of annonymous user"
    }
)

Angel.buildContactElement();
Angel.announceEvent("Birthday");
Angel.announceEvent("Engagement Party", "March 28");
Angel.addGifts("iPhone", "Volleyball", "Perfume", "Pokemon", "New Diary", "Bikini")

export default Angel;