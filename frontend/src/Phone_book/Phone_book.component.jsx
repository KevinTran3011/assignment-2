import React, { useState } from "react";
import "./Phone_book.styles.css";
import List from "../contact.list/list.component";
import Button from "../Button/Button.components";

const PhoneBook = () => {
  const [Numbers, setNumbers] = useState([
    { id: 1, description: "elysia" },
    { id: 2, description: "kevin kaslana" },
    { id: 3, description: "su" },
  ]);

  const [phoneNumbers, setPhoneNumbers] = useState([]);
  return (
    <div className="phoneBook">
      <List Numbers={Numbers} setNumbers={setNumbers} 
      phoneNumbers={phoneNumbers} setPhoneNumbers={setPhoneNumbers} />
      
      {/* <Button buttonType="stats">View Stats</Button> */}
    </div>
  );
};

export default PhoneBook;
