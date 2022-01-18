import Contact from "../contact.js"

const Carol = new Contact (
    4,
    "carol",
    "jacobs",
    "Sister",
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

Carol.renderContact();
// Carol.buildContactElement();
// Carol.announceEvent();

export default Carol;