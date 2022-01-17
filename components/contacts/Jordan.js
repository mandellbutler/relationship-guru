import Contact from "../contact.js"

const Jordan = new Contact (
    1,
    "jordan",
    "jacobs",
    "Brother",
    "January 18, 1993",
    "",
    "Black",
    ["Headphones", "Gucci Socks", "A Handgun", "Pokemon"],
    [],
    {
        "src": "src=../assets/images/contact.jpg",
        "alt": "alt=graphic image of annonymous user"
    }
)

Jordan.buildContactElement();
Jordan.announceEvent();

export default Jordan;