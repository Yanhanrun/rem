const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
   message.channel.send("AYYYYYYY");


  // let playerOneChannel = message.guild.channels.find(`name`, "player-one");
  // let playerTwoChannel = message.guild.channels.find(`name`, "player-two");

//   message.channel.send('What tag would you like to see? This will await will be cancelled in 30 seconds. It will finish when you provide a message that goes through the filter the first time.')
// .then(() => {
//   message.channel.awaitMessages(response => response.content === ('hi', 'test'), {
//     max: 1,
//     time: 30000,
//     errors: ['time'],
//   })
//   .then((collected) => {
//       message.channel.send(`The collected message was: ${collected.first().content}`);
//     })
//     .catch(() => {
//       message.channel.send('There was no collected message that passed the filter within the time limit!');
//     });
// });

//   var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b-a});
}

  module.exports.help = {
    name: "ayy"
  }