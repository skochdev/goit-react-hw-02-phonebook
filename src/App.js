import './App.css';
import { Component } from 'react';
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactsList';
import Container from './components/Container';
import FilterContacts from './components/FilterContacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ],
    filter: '',
  };

  checkForDuplicate = name => {
    let { contacts } = this.state;
    let normalizedName = name.toLowerCase();

    return contacts.some(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );
  };

  onAddNewContact = contact => {
    const isDuplicate = this.checkForDuplicate(contact.name);

    if (isDuplicate) {
      alert(`${contact.name} is already in your phonebook`);
    } else {
      this.setState(current => ({
        contacts: [...current.contacts, contact],
      }));
    }
  };

  onFilterChange = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    // filters by name or phone number
    return contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.phone.includes(normalizedFilter)
      );
    });
  };

  handleRemove = id => {
    this.setState(current => ({
      contacts: current.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const {
      getFilteredContacts,
      onAddNewContact,
      onFilterChange,
      handleRemove,
    } = this;
    const { contacts, filter } = this.state;
    const contactsAreNotEmpty = contacts.length;
    const filteredContacts = getFilteredContacts();

    return (
      <div>
        <Container>
          <h1>Phonebook</h1>
          <AddContactForm onAddNewContact={onAddNewContact} />

          <h2>Contacts</h2>
          {contactsAreNotEmpty && (
            <FilterContacts filter={filter} onFilter={onFilterChange} />
          )}
          <ContactList contacts={filteredContacts} onRemove={handleRemove} />
        </Container>
      </div>
    );
  }
}

export default App;
