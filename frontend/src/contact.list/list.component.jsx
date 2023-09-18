import React, { useState } from "react";
import "./list.styles.css";
import Contact from "../contact.card/contact.component"; // Import the Contact component here
import Add_box from "../search_box/add_box.component";
import Button from "../Button/Button.components";

const List = (props) => {
  const [newContact, setNewContact] = useState('');

  const onChangeHandler = (event) => {
    setNewContact(event.target.value);
  }

  const onClickHandler = () => {
    if (newContact.trim() === '') {
      return; 
    }

    props.setNumbers(Numbers => [
      ...Numbers,
      {
        id: Numbers.length + 1,
        description: newContact
      }
    ]);

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
            phoneNumbers={props.phoneNumbers} // Pass phoneNumbers
            setPhoneNumbers={props.setPhoneNumbers} // Pass setPhoneNumbers
          />
        ))}
      </ul>
    </div>
  );
};

export default List;

