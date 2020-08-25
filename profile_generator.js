const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What do you think of Node.js? ', (node) => {
  
  rl.question('What\s your name? Nicknames are also acceptable :)', (name) => {
    
    rl.question('What\s an activity you like doing?', (activity) => {
      
      
      rl.question('What do you listen to while doing that?', (music) => {
        
        
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.', (meal) => {
          
          
          rl.question('What\s your favourite thing to eat for that meal?', (food) => {
            
            rl.question('Which sport is your absolute favourite?', (sport) => {
              
              
              rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
                
                //feedback
                // console.log(`Thank you for your valuable feedback: ${answer1}`);
                // console.log(`Thank you for your valuable feedback: ${answer2}`);
                // console.log(`Thank you for your valuable feedback: ${answer3}`);
                // console.log(`Thank you for your valuable feedback: ${answer4}`);
                // console.log(`Thank you for your valuable feedback: ${answer5}`);
                // console.log(`Thank you for your valuable feedback: ${answer6}`);
                // console.log(`Thank you for your valuable feedback: ${answer7}`);
                // console.log(`Thank you for your valuable feedback: ${answer8}`);

                console.log(`${name} enjoys the sound of ${music},\n when doing ${activity}, and ${name} loves eating ${food} for ${meal},\n ${name} prefers ${sport} over any other sport, and their secret superpower is...\n ${superpower}. And finally what does ${name} think of node? Node is ${node}.`);
                console.log(`Enjoy the rest of your day!`);

                rl.close();
              });
            });
          });
        });
      });
    });
  });
});


























// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.question('What\s your name? Nicknames are also acceptable :)'), (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     // TODO: Log the answer in a database

//     rl.question('What\s an activity you like doing?)', (answer) => {
//       console.log(`Thank you for your valuable feedback: ${answer}`);
//       // TODO: Log the answer in a database

//       rl.question('What do you listen to while doing that?'), (answer) => {
//         console.log(`Thank you for your valuable feedback: ${answer}`);
//         // TODO: Log the answer in a database

//         rl.question('Which meal is your favourite (eg: dinner, brunch, etc.'), (answer) => {
//           console.log(`Thank you for your valuable feedback: ${answer}`);
//           // TODO: Log the answer in a database

//           rl.question('What\s your favourite thing to eat for that meal?'), (answer) => {
//             console.log(`Thank you for your valuable feedback: ${answer}`);
//             // TODO: Log the answer in a database

//             rl.question('Which sport is your absolute favourite?'), (answer) => {
//               console.log(`Thank you for your valuable feedback: ${answer}`);
//               // TODO: Log the answer in a database

//               rl.question('What is your superpower? In a few words, tell us what you are amazing at!'), (answer) => {
//                 // TODO: Log the answer in a database
//                     console.log(`Thank you for your valuable feedback: ${answer}`);

//                     rl.close();

//                   });
//                 });
//               });
//             });
//           });

