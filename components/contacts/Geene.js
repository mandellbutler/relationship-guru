import Contact from "../contact.js"

const Geene = new Contact (
    3,
    "geene",
    "banks",
    "Agent",
    "March 23, 1957",
    "",
    "Blue",
    ["Books", "Cologne", "Kitchenware", "Football Cards"],
    [],
    {
        "src": "src=assets/images/contact.jpg",
        "alt": "alt=graphic image of annonymous user"
    }
)

Geene.buildContactElement();
Geene.announceEvent("Birthday");

export default Geene;