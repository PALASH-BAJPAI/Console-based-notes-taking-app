const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
    command: 'add',
    describe: 'Add down notes',
    builder: {
        title: {
            describe: "add title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "add body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove down notes',
    builder: {
        title: {
            describe: "remove title",
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List down notes',
    handler(argv) {
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder: {
        title: {
            describe: "remove title",
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.readNotes(argv.title);
    }
})

yargs.parse();