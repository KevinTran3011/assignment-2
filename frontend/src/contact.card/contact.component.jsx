import React from 'react';
import Button from '../Button/Button.components';
import PhoneNumber from '../Phone_Number/Phone_Number.components';
import './contact.styles.css';


const Contact = (props) => {
  const onClick = () => {
    props.setNumbers((Numbers) =>
      Numbers.filter((item) => item.id !== props.id)
    );
  };

  return (
    <div className="names">
      <li>
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