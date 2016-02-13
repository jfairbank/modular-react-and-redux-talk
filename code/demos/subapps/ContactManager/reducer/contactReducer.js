import * as A from '../actionTypes';
import createContact from '../utils/createContact';

export default function contactReducer(state, action) {
  switch (action.type) {
    case A.UPDATE_CONTACT_FIELD:
      return { ...state, [action.fieldName]: action.fieldValue };

    case A.ADD_CONTACT:
      const { name, email } = action.contact;
      return createContact(name, email);

    case A.EDIT_CONTACT:
      return { ...state, editing: true };

    default:
      return state;
  }
}
