let id = 0;

export default function createContact(name, email) {
  return {
    name,
    email,
    id: ++id,
    editing: false,
  };
}
