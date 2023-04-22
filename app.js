
const yargs = require('yargs');
const {hideBin} = require('yargs/helpers')
const contacts = require('./db')

const invokeAction = async ({action, id, name, email, phone}) => {
switch (action) {
    case "list":
        const allContacts = await contacts.getAll();
        console.log(allContacts);
      break;

    case "get":
        const contactById = await contacts.getById(id)
        console.log(contactById);
      break;

    case "add":
        const addNewContact = await contacts.addContact({name, email, phone})
        console.log(addNewContact);
      break;

    case "remove":
        const removeContact = await contacts.removeContact(id)
        console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id: "qd76Jtbfd9eWJHrssH" });
//invokeAction({ action: 'add', name: "Evgeni"});
// invokeAction({action: 'remove', id: 'JYiOQ2DosWoFjvL_aQU4e'})

const arr = hideBin(process.argv)
const {argv} = yargs(arr)
 invokeAction(argv)