import { ContactsItem } from 'components/ContactItem/ContactsItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedContacts,
  selectedFilter,
} from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-slice';

export const Contacts = () => {
  const contacts = useSelector(selectedContacts);
  const filter = useSelector(selectedFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(el =>
    el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactsItem
          name={contact.name}
          number={contact.number}
          id={contact.id}
          key={contact.id}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};
