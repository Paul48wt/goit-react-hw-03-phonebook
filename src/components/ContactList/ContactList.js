export const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <ul>
      {visibleContacts.map(item => (
        <li key={item.id} className="contactListItem">
          {item.name}: {item.number}
          <button type="submit" onClick={() => onDeleteContact(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
