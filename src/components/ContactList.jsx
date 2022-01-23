import React from "react";

export const ContactList = ({ contacts, onClick }) => (
  <div>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button onClick={() => onClick(id)}>Delete</button>
      </li>
    ))}
  </div>
);
