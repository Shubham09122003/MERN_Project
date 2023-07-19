import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const addContact = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={addContact}>
      <div>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </div>
      <div>
        <label htmlFor="">Number:</label>
        <input
          type="text"
          name="number"
          id="number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          value={number}
        />
      </div>

      <button type="submit">Add</button>
    </form>
  );
};

export default ContactForm;
