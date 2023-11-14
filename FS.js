const fs = require('fs');

// create a file

fs.writeFile('example.txt', "this is an example", (err) => {
    if (err)
        console.log(err);
    else
        console.log("file successfully created");

    // read a file
    fs.readFile('example.txt', 'utf8', (err, file) => {
        if (err)
            console.log(err)
        else
            console.log(file);
    });
});

// fs.rename('example.txt', 'example2.txt', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('successfully renamed the file');
// });

// fs.appendFile('example2.txt', 'some data being appended', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('data successfully appended');
// })

fs.unlink('example.txt', (err) => {
    if (err)
        console.log(err);
    else
        console.log('successfully deleted');
})