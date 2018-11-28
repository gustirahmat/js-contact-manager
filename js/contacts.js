/* 
Activity: Contact Manager
*/

// TODO: Complete the program
var menu = ['Quit', 'List contacts', 'Add a contact'],
    contacts = {
        firstName: ['John', 'Jane'],
        lastName: ['Smith', 'Doe'],

        showContacts: function () {
            var printContacts = [] ;
            for (var i = 0; i < this.firstName.length; i++) {
                printContacts.push('Last name: ' + this.lastName[i] + ', first name: ' + this.firstName[i]);
            }
            return printContacts;
        }
};

alert('Welcome to your contacts manager!');
console.log('Welcome to your contacts manager!');

function showMenu() {
    for (var i = 0; i < menu.length; i++) {
        console.log(i + ': ' + menu[i]);
    }
}

showMenu();

var selected = prompt('Please choose the menu below: \n 1: ' + menu[1] + '\n 2: ' + menu[2] + '\n 0: ' + menu[0]);
while (selected != 0) {
    if (selected === '1') {
        console.log("Here's the list of all your contacts:");

        for (var i = 0; i < contacts.showContacts().length; i++) {
            console.log(contacts.showContacts()[i]);
        }

        showMenu();

        selected = prompt('Please choose the menu below: \n 1: ' + menu[1] + '\n 2: ' + menu[2] + '\n 0: ' + menu[0]);
    } else if (selected === '2') {
        var newFirstName = prompt('Please enter new first name');
        contacts.firstName.push(newFirstName);

        var newLastName = prompt('Please enter new last name');
        contacts.lastName.push(newLastName);
        console.log('Contact added');

        showMenu();

        selected = prompt('Please choose the menu below: \n 1: ' + menu[1] + '\n 2: ' + menu[2] + '\n 0: ' + menu[0]);
    } else {
        showMenu();

        selected = prompt('Please choose the menu below: \n 1: ' + menu[1] + '\n 2: ' + menu[2] + '\n 0: ' + menu[0]);
    }
}