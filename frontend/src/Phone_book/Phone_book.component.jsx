import React, { useState, useEffect } from "react";
import "./Phone_book.styles.css";
import List from "../contact.list/list.component";
import Button from "../Button/Button.components";


  const PhoneBook = () => {
    const [Numbers, setNumbers] = useState([]);
    const [phoneNumbers, setPhoneNumbers] = useState([]);
  
    useEffect(() => {
      // Use an async function for data fetching
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/contacts/");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setNumbers(data);
        } catch (error) {
          console.error("Error while fetching contacts:", error);
        }
      };
  
      fetchData(); 
  
      
    }, []);
  return (
    <div className="phoneBook">
      <List Numbers={Numbers} setNumbers={setNumbers} 
      phoneNumbers={phoneNumbers} setPhoneNumbers={setPhoneNumbers} />
      
    </div>
  );
};

export default PhoneBook;
