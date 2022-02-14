import Contact from "../contact.js"

const Carol = new Contact (
    4,
    "carol",
    "jacobs",
    "wife",
    "June 23, 1986",
    "",
    "Royale Blue",
    ["Bonnets", "Gucci Socks", "Nail Polish", "Sporting Goods"],
    [],
    {
        "src": "src=../assets/images/contact.jpg",
        "alt": "alt=graphic image of annonymous user"
    }
)

Carol.buildContactElement();
Carol.announceEvent("Birthday");
Carol.announceEvent("Valentine's Day");
Carol.announceEvent("Anniversary", "March 3, 1992");

export default Carol;