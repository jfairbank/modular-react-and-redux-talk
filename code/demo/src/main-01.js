import React from 'react';
import { bindActionCreators, combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { Button, Input } from 'react-bootstrap';
import { render } from 'react-dom';
import contactsData from './data/users.json';
import styles from './styles.scss';

let id = 3;

// Actions
const editContact = (contact) => ({ contact, type: 'EDIT_CONTACT' });
const cancelEdit = () => ({ type: 'CANCEL_EDIT' });
const saveContact = (contact) => ({ contact, type: 'SAVE_CONTACT' });
const addContact = () => ({
  contact: { id: id++ },
  type: 'ADD_CONTACT',
});
const changeField = (fieldName, value) => ({
  fieldName,
  value,
  type: 'CHANGE_FIELD',
});

// Reducer
function currentContactReducer(currentContact = null, action) {
  switch (action.type) {
    case 'EDIT_CONTACT':
      return action.contact;

    case 'ADD_CONTACT':
      return {
        ...action.contact,
        isNew: true,
      };

    case 'SAVE_CONTACT':
    case 'CANCEL_EDIT':
      return null;

    case 'CHANGE_FIELD':
      return {
        ...currentContact,
        [action.fieldName]: action.value,
      };
    
    default:
      return currentContact;
  }
}

const INITIAL_CONTACTS = contactsData.slice(0, 2);
function contactsReducer(contacts = INITIAL_CONTACTS, action) {
  switch (action.type) {
    case 'SAVE_CONTACT':
      return contacts.map(contact => {
        if (contact.id === action.contact.id) {
          return {
            ...action.contact,
            isNew: false
          };
        }
        return contact;
      });
    
    case 'ADD_CONTACT':
      return contacts.concat(action.contact);
    
    default:
      return contacts;
  }
}

const reducer = combineReducers({
  currentContact: currentContactReducer,
  contacts: contactsReducer,
});

// Store
const store = createStore(reducer);

// Components
const EditContact = ({
  isNew, name, email, onChangeField, onSave, onCancel,
}) => (
  <div>
    <h2>
      {isNew ?
        <strong>Adding New Contact</strong> :

        <div>
          <strong>Editing:</strong>
          {' '}
          {name}
        </div>
      }
    </h2>
    <Input
      type="text"
      label="Name"
      value={name}
      onChange={e => onChangeField('name', e.target.value)}
    />
    <Input
      type="text"
      label="Email"
      value={email}
      onChange={e => onChangeField('email', e.target.value)}
    />
    <Button bsStyle="primary" onClick={onSave}>Save</Button>
    {' '}
    <Button onClick={onCancel}>Cancel</Button>
  </div>
);

const Contact = ({ name, email, onEdit }) => (
  <dl className={styles.contact}>
    <dt>{name}</dt>
    <dd>{email}</dd>

    <Button onClick={onEdit}>
      Edit
    </Button>
  </dl>
);

const ContactList = ({ contacts, onEditContact, onAddContact }) => (
  <div>
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        {...contact}
        onEdit={() => onEditContact(contact)}
      />
    ))}

    <Button bsStyle="primary" onClick={onAddContact}>
      + Add Contact
    </Button>
  </div>
);

const ContactManager = ({
  contacts,
  currentContact,
  onEditContact,
  onCancelEdit,
  onSaveContact,
  onChangeField,
  onAddContact,
}) => {
  if (currentContact) {
    console.log('currentContact', currentContact);
    return (
      <EditContact
        {...currentContact}
        onChangeField={onChangeField}
        onSave={() => onSaveContact(currentContact)}
        onCancel={onCancelEdit}
      />
    );
  }

  return (
    <ContactList
      contacts={contacts}
      onEditContact={onEditContact}
      onAddContact={onAddContact}
    />
  );
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onEditContact: editContact,
    onCancelEdit: cancelEdit,
    onSaveContact: saveContact,
    onChangeField: changeField,
    onAddContact: addContact,
  }, dispatch);
}

const ConnectedContactManager = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactManager);

const App = () => (
  <ConnectedContactManager/>
);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('container')
);
