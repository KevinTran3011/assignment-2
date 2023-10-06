import React, { useState, useEffect } from 'react';
import Button from '../Button/Button.components';
import PhoneNumber from '../Phone_Number/Phone_Number.components';
import './contact.styles.css';

const Contact = (props) => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
//fetching all the contact numbers corresponding to the contact ID 
  useEffect(() => {
    const contactId = parseInt(props.id); // Convert props.id to an integer
    fetch(`http://localhost:5000/api/contacts/${contactId}/phones`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPhoneNumbers(data);
      })
      .catch((error) => {
        console.error('Error while fetching phone numbers:', error);
      });
  }, [props.id]);

  //DELETE  function of the each contact cards
  const onClick = () => {
    const contactId = parseInt(props.id); // Convert props.id to an integer
    fetch(`http://localhost:5000/api/contacts/${contactId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Check if the response status is 200 OK
          return response.json();
        } else {
          throw new Error('Failed to delete contact');
        }
      })
      .then(() => {
        props.setNumbers(props.Numbers.filter((item) => item.id !== props.id));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="names">
      <li className="numbers_for_contacts">
        {props.description}
        <PhoneNumber
          contactId={props.id}
          phoneNumbers={phoneNumbers} // Use phoneNumbers state for phone numbers
          setPhoneNumbers={setPhoneNumbers} // Pass the setter function
          contactName={props.contactName} // Pass contactName as a prop
        />
        <Button buttonType="delete" onClick={onClick}>
          Delete
        </Button>
      </li>
    </div>
  );
};

export default Contact;
