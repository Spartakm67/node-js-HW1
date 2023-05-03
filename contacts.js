const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

// TODO: задокументувати кожну функцію
async function listContacts() {
  // try {
    const data = await fs.readFile(contactsPath);
    const contactsList = JSON.parse(data);;
    // console.log(contactsList);
    return contactsList;
  // } catch (error) {
  //   console.log(error.message);
  // }
};

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find(contact => contact.id === contactId);
  return result || null;
}

async function removeContact(contactId) {
  // ...твій код
}

async function addContact(data) {
  const contactsList = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
    contactsList.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
    return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };