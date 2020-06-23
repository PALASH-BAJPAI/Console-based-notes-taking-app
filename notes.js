const fs = require("fs");
const chalk = require("chalk");

const getNotes = function() {
    return "Your notes are ...."
}

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicate = notes.find((note) =>
        note.title === title)


    if (duplicate.length == 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
    } else {
        console.log("note title taken");
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const keep = notes.filter((note) =>
        note.title !== title
    )
    if (notes.length === keep.length) {
        console.log(chalk.red("No such title exists"));
    } else {
        console.log(chalk.green("Node removed"));
    }
    saveNotes(keep);
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue("YOUR NOTES :-"));
    notes.forEach(element => {
        console.log(element.title + " -> " + element.body);
    });
}

const readNotes = (title) => {
    const notes = loadNotes();
    const ans = notes.find((note) => note.title === title);
    if (ans)
        console.log(chalk.bgWhite.black(ans.title) + "    " + ans.body);
    else
        console.log(chalk.red.inverse("No such title found"));
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
};