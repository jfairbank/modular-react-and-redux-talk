import * as A from '../actionTypes';
import contactReducer from './contactReducer';
import createContact from '../utils/createContact';

const INITIAL_STATE = [
  createContact('Jeremy Fairbank', 'jeremy@example.com'),
  createContact('Emily Fairbank', 'emily@example.com'),
];

export default function contactsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case A.UPDATE_CONTACT_FIELD:
    case A.EDIT_CONTACT:
      return state.map((contact) => {
        if (contact.id === action.id) {
          return contactReducer(contact, action);
        }

        return contact;
      });

    case A.ADD_CONTACT:
      return [...state, contactReducer(null, action)];

    default:
      return state;
  }
}
