// List.component.jsx
import React, { useState } from "react";
import "./list.styles.css";
import Contact from "../contact.card/contact.component";
import Search_box from "../search_box/search_box.component";
import Button from "../Button/Button.components";

const List = (props) => {
  const [newContact, setNewContact] = useState('');

  const onChangeHandler = (event) => {
    setNewContact(event.target.value);
  }

  const onClickHandler = () => {
    if (newContact.trim() === '') {
      return; // Don't add empty contacts
    }

    props.setNumbers(Numbers => [
      ...Numbers,
      {
        id: Numbers.length + 1,
        description: newContact
      }
    ]);

    setNewContact(''); // Clear the input field after adding
  }

  return (
    <div className="NameList">

        <Search_box onChangeHandler={onChangeHandler} />
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
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
