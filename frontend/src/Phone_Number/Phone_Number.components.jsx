import React from 'react';
import './Phone_Number.styles.css';
import Button from '../Button/Button.components';

const PhoneNumber = ({ phoneNumbers, setPhoneNumbers }) => {
  const addPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, '']);
  };

  const deleteNumber = (index) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers.splice(index, 1);
    setPhoneNumbers(newPhoneNumbers);
  };

  const updatePhoneNumber = (index, value) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index] = value;
    setPhoneNumbers(newPhoneNumbers);
  };

  const confirmNumber = (index) => {
    console.log(`Confirmed phone number: ${phoneNumbers[index]}`);
  };

  return (
    <div className='contact_number'>
      <ul>
        {phoneNumbers.map((phoneNumber, index) => (
          <li className = 'number_list' key={index}>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => updatePhoneNumber(index, e.target.value)}
            />
            <Button buttonType="delete" onClick={() => deleteNumber(index)}>
              Delete
            </Button>
            <Button buttonType="add" onClick={() => confirmNumber(index)}>
              Confirm
            </Button>
          </li>
        ))}
      </ul>
      <Button buttonType="add" onClick={addPhoneNumber}>
        Add Phone Number
      </Button>
    </div>
  );
};

export default PhoneNumber;
