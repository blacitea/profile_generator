const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

rl.question('What is your name? ', (answer) => {
  profile.name = answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    profile.activity = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      profile.song = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        profile.favouriteMeal = answer;
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          profile.foodForMeal = answer;
          rl.question('Which sport is your absolute favourite?', (answer) => {
            profile.sport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              profile.superPower = answer;
              console.log(`${profile.name} loves listening to ${profile.song} while ${profile.activity}, devouring ${profile.foodForMeal} for ${profile.favouriteMeal}, prefers ${profile.sport} over any other sport, and is amazing at ${profile.superPower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
//rl.close();

// rl.question('What\'s an activity you like doing?? ', (answer) => {
//   profile.activity = answer;
// });