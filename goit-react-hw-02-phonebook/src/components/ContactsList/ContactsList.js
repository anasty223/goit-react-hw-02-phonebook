const ContactsList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, text }) => (
      <li key={id}>
        <p>{text}</p>
        <button> удалить</button>
      </li>
    ))}
  </ul>
);
export default ContactsList;
