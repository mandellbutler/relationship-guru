import Contact from "../contact.js"

const Lisa = new Contact (
    5,
    "lisa",
    "jackson",
    "Agent",
    "March 23, 1978",
    "",
    "Silver",
    ["Kit Kats", "Canon Camera", "Photography Books", "Cook Books"],
    [],
    {
        "src": "src=assets/images/contact.jpg",
        "alt": "alt=graphic image of annonymous user"
    }
)

Lisa.buildContactElement();
Lisa.announceEvent("Anniversary", "March 13");


export default Lisa;