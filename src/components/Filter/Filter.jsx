import { useDispatch } from 'react-redux';
import { Input } from 'components/Input/Input';
import { setFilter } from 'redux/contacts/filter-slice';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const handleInput = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <Input
      placeholder="name in contacts"
      type="text"
      onChange={handleInput}
      title=""
      name="search"
      pattern=""
    />
  );
};
