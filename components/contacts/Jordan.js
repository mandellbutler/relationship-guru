import Contact from "../contact.js"

const Jordan = new Contact (
    1,
    "jordan",
    "jacobs",
    "Brother",
    "January 23, 1993",
    "",
    "Black",
    ["Headphones", "Gucci Socks", "Handguns", "Pokemon"],
    [],
    {
        "src": "src=../assets/images/contact.jpg",
        "alt": "alt=graphic image of annonymous user"
    }
)

Jordan.buildContactElement();

export default Jordan;