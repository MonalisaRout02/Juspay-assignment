import "../../App.css";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";

import ContactItem from "./ContactItem";

const contacts = [
  { id: 1, img: "/public/assets/ProfileActivity.svg", name: "Natali Craig" },
  { id: 2, img: "/public/assets/ProfileActivity.svg", name: "Drew Cano" },
  { id: 3, img: "/public/assets/ProfileActivity.svg", name: "Orlando Diggs" },
  { id: 4, img: "/public/assets/ProfileActivity.svg", name: "Andi Lane" },
  { id: 5, img: "/public/assets/ProfileActivity.svg", name: "Kate Morrison" },
  { id: 6, img: "/public/assets/ProfileActivity.svg", name: "Koray Okumus" },
];

const ContactList = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <section className="contact-list">
      <h2 className={`h2 ${theme}`}>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
