import Contact from "../contact.js";

const Kyle = new Contact (
    2,
    "kyle",
    "joseph",
    "Cousin",
    "February 15, 1983",
    "",
    "Powder Blue",
    ["Dinner Set", "Jogging Suit", "Art Supplies", "Tennis Balls"],
    [],
    {
        "src": "src=assets/images/contact.jpg",
        "alt": "alt=graphic image of annonymous user"
    }
)

Kyle.buildContactElement();
Kyle.announceEvent("Birthday");
Kyle.announceEvent("Graduation Day", "March 1");
Kyle.announceEvent("Engagement", "February 13");

export default Kyle;