import React from 'react';
import { Input, Button } from 'react-bootstrap';
import {
  bindActionCreators, combineReducers, createStore
} from 'redux';
import { connect, Provider } from 'react-redux';
import { render } from 'react-dom';
import styles from './styles.scss';
import contactsData from './data/users.json';

let id = 3;

// Actions
export const editContact = (contact) => ({
  contact,
  type: 'EDIT_CONTACT'
});
export const saveContact = (contact) => ({
  contact,
  type: 'SAVE_CONTACT'
});
export const cancelEdit = () => ({
  type: 'CANCEL_EDIT'
});
export const changeField = (fieldName, value) => ({
  fieldName,
  value,
  type: 'CHANGE_FIELD'
});
export const addContact = () => ({
  id: id++,
  type: 'ADD_CONTACT'
});

// Reducer
function currentContactReducer(state = null, action) {
  switch (action.type) {
    case 'EDIT_CONTACT':
      return {
        ...action.contact,
        isNew: false,
      };

    case 'SAVE_CONTACT':
    case 'CANCEL_EDIT':
      return null;

    case 'CHANGE_FIELD':
      return {
        ...state,
        [action.fieldName]: action.value
      };

    case 'ADD_CONTACT':
      return {
        id: action.id,
        isNew: true,
      };

    default:
      return state;
  }
}

const INITIAL_CONTACTS = contactsData.slice(0, 2);

function contactsReducer(state = INITIAL_CONTACTS, action) {
  switch (action.type) {
    case 'SAVE_CONTACT':
      if (action.contact.isNew) {
        return state.concat(action.contact);
      }

      return state.map(contact => {
        if (contact.id === action.contact.id) {
          return action.contact;
        }
        return contact;
      });

    default:
      return state;
  }
}

const reducer = combineReducers({
  currentContact: currentContactReducer,
  contacts: contactsReducer,
});

const store = createStore(reducer);

// Components
const EditContact = ({
  isNew, name, email,
  onSave, onCancel, onChangeField
}) => (
  <div>
    <h2>
      {isNew ?
        <strong>Adding New Contact:</strong> :

        <span>
          <strong>Editing:</strong>
          {' '}
          {name}
        </span>
      }
    </h2>

    <Input
      type="text"
      name="name"
      value={name}
      onChange={e => onChangeField('name', e.target.value)}
    />

    <Input
      type="text"
      name="email"
      value={email}
      onChange={e => onChangeField('email', e.target.value)}
    />

    <Button bsStyle="primary" onClick={onSave}>
      Save
    </Button>
    {' '}
    <Button onClick={onCancel}>
      Cancel
    </Button>
  </div>
);

const Contact = ({
  name, email, onEdit
}) => (
  <dl className={styles.contact}>
    <dt>{name}</dt>
    <dd>{email}</dd>

    <Button onClick={onEdit}>
      Edit
    </Button>
  </dl>
);

const ContactList = ({
  contacts, onEditContact, onAddContact
}) => (
  <div>
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        {...contact}
        onEdit={() => onEditContact(contact)}
      />
    ))}

    <Button onClick={onAddContact} bsStyle="primary">
      + Add New Contact
    </Button>
  </div>
);

const ContactManager = ({
  contacts, currentContact,
  onEditContact, onSaveContact, onCancelEdit,
  onChangeField, onAddContact,
}) => (
  currentContact ?
    <EditContact
      {...currentContact}
      onSave={() => onSaveContact(currentContact)}
      onCancel={onCancelEdit}
      onChangeField={onChangeField}
    /> :

    <ContactList
      contacts={contacts}
      onEditContact={onEditContact}
      onAddContact={onAddContact}
    />
);

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onEditContact: editContact,
    onSaveContact: saveContact,
    onCancelEdit: cancelEdit,
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
