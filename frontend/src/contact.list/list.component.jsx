import React, { useState } from "react";
import "./list.styles.css";
import Contact from "../contact.card/contact.component";
import Add_box from "../search_box/add_box.component";
import Button from "../Button/Button.components";

const List = (props) => {
  const [newContact, setNewContact] = useState('');
  const [contactPhoneNumbers, setContactPhoneNumbers] = useState({}); 

  const onChangeHandler = (event) => {
    setNewContact(event.target.value);
  }

  const onClickHandler = () => {
    if (newContact.trim() === '') {
      return; 
    }

    const newContactId = props.Numbers.length + 1;
    props.setNumbers((Numbers) => [
      ...Numbers,
      {
        id: newContactId,
        description: newContact
      }
    ]);

    // Initialize an empty array for phone numbers for the new contact
    setContactPhoneNumbers({
      ...contactPhoneNumbers,
      [newContactId]: []
    });

    setNewContact('');
  }

  return (
    <div className="NameList">
      <Add_box onChangeHandler={onChangeHandler} />
      <Button buttonType="add" type="button" onClick={onClickHandler}>
        Add
      </Button>
      <ul className="ContactList">
        {props.Numbers.map((item) => (
          <Contact
            setNumbers={props.setNumbers}
            key={item.id}
            id={item.id}
            description={item.description}
            phoneNumbers={contactPhoneNumbers[item.id] || []} // Pass phone numbers for the specific contact
            setPhoneNumbers={(newPhoneNumbers) => {
              setContactPhoneNumbers({
                ...contactPhoneNumbers,
                [item.id]: newPhoneNumbers
              });
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
