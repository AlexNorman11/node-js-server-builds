const fs = require ('fs');

//reading files

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     console.log(data.toString());

// });

// console.log("last line");


//writing files 


// fs.writeFile('./docs/blog2.txt', "actually utd arent shite",() =>
// {
//     console.log('file written succesfuly')
// });


//directories   

// fs.mkdir('./assets', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('folder created');
// })

//deleting files

// if (fs.existsSync('./assets')) { 
//     fs.unlink('./assets', (err) =>{
//         if (err){
//             console.log(err);
//         }
//        else console.log('file deleted');
//     })
// }