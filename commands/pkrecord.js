const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");


module.exports.run = async (bot, message, args) => {
    let pkRecord = JSON.parse(fs.readFileSync("./pkrecord.json", "utf8"));
    //let autopkRecord = JSON.parse(fs.readFileSync("./autopkrecord.json", "utf8"));//test for auto elo

    //
    // let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    // if(!rUser) return message.reply("Couldn't find user.");
    //message.channel.send(playerOnehp);

    let rAuthor = message.guild.member(message.author);

    if(!pkRecord[rAuthor.id]) pkRecord[rAuthor.id] = {
      wins: 0,
      loss: 0,
      elo: 1200
    };

    // let a = pkRecord[0][rAuthor.id].wins;
    // message.channel.send(`a: ${a}`);

    //test for auto Elo
    // if(!autopkRecord[rAuthor.id]) autopkRecord = {
    //   author: rAuthor.id,
    //   wins: 0,
    //   loss: 0,
    //   elo: 1200
    // };
    //end of test for auto Elo

    // if(!pkRecord[rUser.id]) pkRecord[rUser.id] = {
    //   wins: 0,
    //   loss: 0
    // };

    //rAuthor
    let wins = pkRecord[rAuthor.id].wins;
    let loss = pkRecord[rAuthor.id].loss;
    let elo = pkRecord[rAuthor.id].elo;


    // let totalWinElo = pkRecord[rAuthor.id].totalWinElo;
    // let totalLoseElo = pkRecord[rAuthor.id].totalLoseElo;
    //let total = pkRecord[rAuthor.id].total;

    // if(rUser){ //if got mention user
    //   let wins2 = pkRecord[rUser.id].wins;
    //   let loss2 = pkRecord[rUser.id].loss;
    // }


    let pkEmbed = new Discord.RichEmbed()
    .setColor("#15f153")
    .addField("Your PK Record: ", `[${wins}W, ${loss}L] Elo: ${elo} `, true)
    message.channel.send(pkEmbed);

    //IF HAVE ERROR DELETE THIS BLOCK
    pkRecord = JSON.stringify(pkRecord, null, 2);
    fs.writeFile("./pkrecord.json", pkRecord, (err) => {
      if (err) console.log(err);
    });
    //**********************

    //test write to auto elo json
    // autopkRecord = JSON.stringify(autopkRecord, null, 2);
    // fs.appendFile("./autopkrecord.json", autopkRecord, (err) => {
    //   if (err) console.log(err);
    // });
    //end of test write to auto elo json
  }

module.exports.help = {
  name: "pkrecord"
}
