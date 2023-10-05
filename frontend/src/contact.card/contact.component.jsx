import React from 'react';
import Button from '../Button/Button.components';
import PhoneNumber from '../Phone_Number/Phone_Number.components';
import './contact.styles.css';


const Contact = (props) => {
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
      .catch(error => {
        console.error('Error:', error);
      });
  };
  
  

  return (
    <div className="names">
      <li className='numbers_for_contacts'>
        {props.description}
        <PhoneNumber
          phoneNumbers={props.phoneNumbers}
          setPhoneNumbers={props.setPhoneNumbers}
        />
        <Button buttonType="delete" onClick={onClick}>
          Delete
        </Button>
      </li>
    </div>
  );
};

export default Contact;