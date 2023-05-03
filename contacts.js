const fs = require("fs/promises");
// const fs = require('fs').promises;
// const path = require("path");
const path = require('node:path');

const contactsPath = path.join(__dirname, "db/contacts.json");

// TODO: задокументувати кожну функцію
async function listContacts() {
  try {
    const responce = await fs.readFile(contactsPath);
    const contactsList = JSON.parse(responce);;
    // console.log(contactsList);
    return contactsList;
  } catch (error) {
    console.log(error.message);
  }
};

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = { listContacts, getContactById, removeContact, addContact };