import React, { useState } from 'react';
import './Phone_Number.styles.css';
import Button from '../Button/Button.components';

const PhoneNumber = ({ contactId, phoneNumbers, setPhoneNumbers }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [newPhoneNumberType, setNewPhoneNumberType] = useState('');
  const [confirmedPhoneNumbers, setConfirmedPhoneNumbers] = useState([]);

  const addPhoneNumber = () => {
    // Create a new phone number in the backend
    fetch(`http://localhost:5000/api/contacts/${contactId}/phones`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newPhoneNumberType,
        phoneNumber: newPhoneNumber,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPhoneNumbers([...phoneNumbers, data.phone]);
        setNewPhoneNumber('');
        setNewPhoneNumberType('');
        setShowAddForm(false); // Hide the add form after adding a number
      })
      .catch((error) => {
        console.error('Error creating phone number:', error);
      });
  };

  const deleteNumber = (id) => {
    console.log('phoneNumbers:', phoneNumbers); // Log the phoneNumbers state to the console
    const phoneNumberToDelete = phoneNumbers.find((item) => item.id === id);
    console.log('phoneNumberToDelete:', phoneNumberToDelete); // Log the phone number to be deleted to the console
    if (phoneNumberToDelete) {
      // Assuming you want to delete a specific phone number by ID on the backend.
      fetch(`http://localhost:5000/api/contacts/${contactId}/phones/${phoneNumberToDelete.id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            setPhoneNumbers((prevPhoneNumbers) =>
              prevPhoneNumbers.filter((item) => item.id !== id)
            );
          } else {
            throw new Error('Failed to delete phone number');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      console.error(`Phone number with ID ${id} not found`);
    }
  };

  const updatePhoneNumber = (index, value, type) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index] = { ...newPhoneNumbers[index], [type]: value };
    setPhoneNumbers(newPhoneNumbers);
  };

  const confirmNumber = (index) => {
    const confirmedPhoneNumber = phoneNumbers[index];
    setConfirmedPhoneNumbers([...confirmedPhoneNumbers, confirmedPhoneNumber]);
  };

  return (
    <div className='contact_number'>
      <ul>
        {phoneNumbers.map((phoneNumber, index) => (
          <li className='number_list' key={phoneNumber.id}>
            <input
              type="text"
              placeholder='Type of number'
              value={phoneNumber.name}
              onChange={(e) => updatePhoneNumber(index, e.target.value, 'name')}
            />

            <input
              type="text"
              value={phoneNumber.phoneNumber}
              onChange={(e) =>
                updatePhoneNumber(index, e.target.value, 'phoneNumber')
              }
              placeholder='Ex: 2345645645'
            />

            <Button buttonType="delete" onClick={() => deleteNumber(phoneNumber.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
      {!showAddForm && (
        <Button buttonType="add" onClick={() => setShowAddForm(true)}>
          Add Phone Number
        </Button>
      )}
      {showAddForm && (
        <div className='addPhoneNumber'>
          <input
            type="text"
            placeholder='Type of number'
            value={newPhoneNumberType}
            onChange={(e) => setNewPhoneNumberType(e.target.value)}
          />
          <input
            type="text"
            placeholder='Ex: 2345645645'
            value={newPhoneNumber}
            onChange={(e) => setNewPhoneNumber(e.target.value)}
          />
          <Button buttonType="add" onClick={addPhoneNumber}>
            Confirm
          </Button>
          <Button buttonType="delete" onClick={() => setShowAddForm(false)}>
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
};

export default PhoneNumber;
