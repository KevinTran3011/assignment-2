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

  const onClickHandler = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newContact })
      });
  
      const responseData = await response.text(); // Get the response data as a string
      console.log('Response data:', responseData); // Log the response data
  
      try {
        const parsedData = JSON.parse(responseData); // Try to parse the response data as JSON
        if (parsedData && parsedData.contact) { // Check if the parsed data is valid JSON and contains the created contact data
          props.setNumbers([...props.Numbers, parsedData.contact]); // Use the correct key to access the created contact data

          setContactPhoneNumbers({
            ...contactPhoneNumbers,
            [parsedData.contact.id]: []
          });

          setNewContact('');
        } else {
          console.error('Error creating contact:', parsedData); // Log the error message
        }
      } catch (error) {
        console.error('Error parsing response data:', error); // Log the error message
      }
    } catch (error) {
      console.error('Error creating contact:', error);
    }
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
          description={item.name}
          phoneNumbers={contactPhoneNumbers[item.id] || []}
          Numbers={props.Numbers} // Pass the Numbers prop to Contact
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
