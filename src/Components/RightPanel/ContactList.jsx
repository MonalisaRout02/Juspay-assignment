import "../../App.css";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { useContext } from "react";
import ProfileActivity from "../../../public/assets/ProfileActivity.svg";
import ContactItem from "./ContactItem";

const contacts = [
  { id: 1, img: {ProfileActivity}, name: "Natali Craig" },
  { id: 2, img:  {ProfileActivity}, name: "Drew Cano" },
  { id: 3, img:  {ProfileActivity}, name: "Orlando Diggs" },
  { id: 4, img:  {ProfileActivity}, name: "Andi Lane" },
  { id: 5, img:  {ProfileActivity}, name: "Kate Morrison" },
  { id: 6, img:  {ProfileActivity}, name: "Koray Okumus" },
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
