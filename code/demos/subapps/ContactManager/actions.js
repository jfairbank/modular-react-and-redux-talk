import * as A from './actionTypes';

export const updateContactField = (id, fieldName, fieldValue) => ({
  id,
  fieldName,
  fieldValue,
  type: A.UPDATE_CONTACT_FIELD,
});

export const addContact = (contact) => ({
  contact,
  type: A.ADD_CONTACT,
});

export const editContact = (id) => ({
  id,
  type: A.EDIT_CONTACT,
});
