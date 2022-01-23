import React from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./components/ContactForm";
import { ContactFilter } from "./components/ContactFilter";
import { ContactList } from "./components/ContactList";

export class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (data) => {
    if (
      this.state.contacts.some(({ name }) =>
        name.toLowerCase().includes(data.name.toLowerCase())
      )
    ) {
      return alert(`${data.name} already exists`);
    }
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };

  filterContacts = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const lowCaseFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowCaseFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <ContactForm onAdd={this.addContact} />
        <ContactFilter filter={filter} onSearch={this.filterContacts} />
        <div>
          <p>Total Contacts:{contacts.length}</p>
        </div>
        <ContactList contacts={filteredContacts} onClick={this.deleteContact} />
      </div>
    );
  }
}
