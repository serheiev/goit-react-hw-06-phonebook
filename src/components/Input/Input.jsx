import PropTypes from 'prop-types';

export const Input = ({
  type,
  title,
  placeholder,
  onChange,
  name,
  pattern,
  value,
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      name={name}
      pattern={pattern}
      title={title}
      required
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  value: PropTypes.string,
};
