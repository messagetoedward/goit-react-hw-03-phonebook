import React from "react";

export const ContactFilter = ({ filter, onSearch }) => (
  <>
    <h2>Contacts</h2>
    <label>
      Find contacts by name{" "}
      <input type="text" value={filter} onChange={onSearch} />
    </label>
  </>
);
