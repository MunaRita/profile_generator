const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let store = [];
rl.question('What do you think of Node.js? ', (answer) => {
  store.push(answer);

  rl.question("What's your name? Nicknames are also acceptable: ", (answer) => {
    store.push(answer);

    rl.question("What's an activity you like doing? ", (answer) => {
      store.push(answer);

      rl.question("What do you listen to while doing that? ", (answer) => {
        store.push(answer);


        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
          store.push(answer);

          rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
            store.push(answer);

            rl.question("What sport is your absolute favourite? ", (answer) => {
              store.push(answer);


              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
                store.push(answer);


                
                console.log(`${store[1]} loves listening to ${store[3]} while ${store[2]}, devouring ${store[5]} for ${store[4]}, prefers ${store[6]} over any other sport, and is amazing at ${store[7]}.`);


                //console.log(`Thank you for your valuable feedback: ${answer}`);
                rl.close();
              });

            });

          });
        });
      });
    });
  });

});