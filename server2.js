// If you didn't want to run in 24/7 you can remove it.
const http = require('http');
const express = require('express');
const Discord = require("discord.js");
const client = new Discord.Client();

//const user = require('');
const app = express();
/* Canvas */
const Canvas = require('canvas');

/* FileSync */
const fs = require("fs")
var owner = "193127888646701056"
let prefix = "!v! "; // Please change YOURPREFIX to your prefix. (Example: . ! - ; >)
let sprefix = "!v!";
let economy_prefix = "m$";
let hm = "Here you go :3";
let botver = "1.04"
let bot_name = "Mittz";

/*global Set, Map*/
app.use(express.static('public'));
app.listen(process.env.PORT);
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200); // Here, you can send a response to the website. Example i choosed 200, that means the server was fine, working normally.
  
  // So, if change to 500, response will send a status with 500, that means i'm currently dead, you need to repair my coding/server.
});
// If you didn't want to run in 24/7 you can remove it.

let profiles = JSON.parse(fs.readFileSync(__dirname+"/profiles.json"));
let datafile = JSON.parse(fs.readFileSync(__dirname+"/data.json"));


// Message edit event
client.on("messageUpdate", async(oldMessage, newMessage, message) => {
  // First let's also check that the content has actually changed
  if(oldMessage.content === newMessage.content){
    return;
  }
  // Get the log channel
  var logchannel = client.channels.fetch("464255108184539136"); // Replace CHANNEL_ID with your channel id.
  // Log embed
  let logembed = new Discord.RichEmbed()
  .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
  .setThumbnail(oldMessage.author.avatarURL)
  .setColor("RED")
  .setDescription("Message Edited")
  .addField("Before", oldMessage.content, true)
  .addField("After", newMessage.content, true)
  .setTimestamp()
  // Send the embed
  message.send(logembed)
})

// Message deletion event
client.on("messageDelete", async message => {
  // Get the log channel again
  var logchannel = client.channels.get("📣-news-📣"); // Replace CHANNEL_ID with your channel id.
  // Log embed
  let logembed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
  .setColor("RED")
  .setDescription(":wastebasket: Message Deleted")
  .addField("Message", message.content, true)
  .setTimestamp()
  // Let's send the embed
  logchannel.send(logembed)   })

client.on("channelCreate", async (channel, message) => {
	var logs = channel.fetch(c => c.name === '📣-news-📣'); // Replace YOURCHANNEL_NAME with your channel name.
	if (!logs) return console.log("Can't find logs channel.");
	const cembed = new Discord.MessageEmbed()
		.setTitle("Channel Created")
		.setColor("RANDOM")
		.setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just created!`)
		.setTimestamp(new Date());
	logs.send(cembed)   });




client.on("channelDelete", async (channel,message) => {
	var logs = channel.fetch(c => c.name === '#📣-news-📣'); // Replace YOURCHANNEL_NAME with your channel name.
	if (!logs) return console.log("Can't find logs channel.");
	const cembed = new Discord.MessageEmbed()
		.setTitle("Channel Deleted")
		.setColor("RANDOM")
		.setDescription(`A **${channel.type} channel**, by the name of **${channel.name}**, was just deleted!`)
		.setTimestamp(new Date())
	message.send(cembed)
});


client.on("message", (message) => {
  if (message.content == prefix+'stats') {
    message.channel.send(`I am in ${client.guilds.cache.size} servers!`); 
	}
  
  if (message.content === prefix+'avatar') {
    var member= message.mentions.members.first();
      let embed = new Discord.RichEmbed()
        .setImage(message.member.avatarURL)
      .setColor('#275BF0')
    message.channel.send(embed)
  }
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong!").then(msg => {
      msg.edit(`Pong! ${msg.createdTimestamp - message.createdTimestamp}ms round-trip, ${Math.round(client.ping)}ms API heartbeat!`);   
    });   
  }
  
  
  if (message.content==(prefix + "help")||message.content==(prefix + "commands")) {
    message.channel.send("This command is under developement currently.").then(msg => {    
    }); 
  }
 
  
if (message.content==("Mittz")|| message.content==("mittz")) {
  message.channel.send("My prefix is !v! ").then(msg => {});   
  }   
  
  
  
if (message.content==(prefix + "homepage")) {
  const embed = new Discord.MessageEmbed()
  .setTitle("Visit homepage")
  .setAuthor("Mittens Homepage", "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2F8bitpc%20vaporwave%20blue%20cat.png?v=1594354853240")
  .setColor(0x00AE86)
  .setDescription("This is the homepage for all of the projects made by the same creator of this very bot!")
  .setFooter("Created by Orago", "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664")
  .setImage("https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664")
  .setThumbnail("https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Finbreadspread.png?v=1594354874436")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://mittens.glitch.com")
message.channel.send(embed);
}
  var args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + "profile")) {  
  const user = getUserFromMention(args[1]);
  if (args[1]) {
		if (!user) {
			return message.reply('Please use a proper mention if you want to see someone else\'s avatar.');
		}
		var person = user;
	} else
var person = message.author;
  const embed = new Discord.MessageEmbed()
  .setTitle(person.username)
  .setAuthor("Mittz Bot", "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2F8bitpc%20vaporwave%20blue%20cat.png?v=1594354853240")
  .setColor(0x00AE86)
  .setDescription("ID: "+person.id+" ")
  .setFooter("Created by Orago", "https://cdn.glitch.com/65f81ac1-5972-4a88-a61a-62585d79cfc0%2Fboxie-2048px.png?v=1594354728664")
  .setImage(person.avatarURL("png",false,32))
  .setThumbnail("")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  //.setURL("#")
message.channel.send(embed);
}
  

if (message.content.startsWith(prefix+"takerole")) {
  const args = message.content.split(' ').slice(2); // All arguments behind the command name with the prefix
const role = args.join(' '); // Amount of messages which should be deleted
if (!role) return message.reply('You haven\'t given a role to add!'); // Checks if the `amount` parameter is given
if (!isNaN(role)) return message.reply('There is no such role to possibly remove'); // Checks if the `amount` parameter is a number. If not, the command throws an error
if (role == 'furry') {message.reply('you removed the '+role+' role from yourself.');message.member.roles.remove('731017303889805373');} // Checks if the `amount` integer is bigger than 100
else if (role == 'gamer') {message.reply('you removed the '+role+' role from yourself.');message.member.roles.remove('462002042148356096');} // Checks if the `amount` integer is smaller than 1
else if (role == 'coder') {message.reply('you removed the '+role+' role from yourself.');message.member.roles.remove('731062415214510130');} // Checks if the `amount` integer is smaller than 1

  else message.reply('There is no such role');
  }
if (message.content.startsWith(prefix+"giverole")) {
  const args = message.content.split(' ').slice(2); // All arguments behind the command name with the prefix
const role = args.join(' '); // Amount of messages which should be deleted
if (!role) return message.reply('You haven\'t given a role to remove!'); // Checks if the `amount` parameter is given
if (!isNaN(role)) return message.reply('Not a real role!'); // Checks if the `amount` parameter is a number. If not, the command throws an error
if (role == 'furry') {message.reply('you gave yourself the '+role+' role.');message.member.roles.add('731017303889805373');} // Checks if the `amount` integer is bigger than 100
else if (role == 'gamer') {message.reply('you gave yourself the '+role+' role.');message.member.roles.add('462002042148356096');} // Checks if the `amount` integer is smaller than 1
else if (role == 'coder') {message.reply('you gave yourself the '+role+' role.');message.member.roles.add('731062415214510130');} // Checks if the `amount` integer is smaller than 1
  else message.reply('There is no such role');
  }  
  
  if (message.content.startsWith(prefix+"cat")) {
  let meow =  fetch('http://aws.random.cat/meow')
        .then(res => res.json())
        .then(json => json.file);

    // anthony#8577
    let embed = new Discord.MessageEmbed()
        .setAuthor(message.member.user.tag, message.member.user.avatarURL)
        .setColor(0xdd9323)
        .setImage(meow);

    message.channel.send(embed);
  }
//Owner Commands
if (message.member.roles.cache.find(r => r.name === "🐅 - Moderator")||message.member.roles.cache.find(r => r.name === "🐆 - Server Moderator")||message.member.roles.cache.find(r => r.name === "🐯 - Administrator")){
if (message.content.startsWith(prefix+"clear")) {
  const args = message.content.split(' ').slice(2); // All arguments behind the command name with the prefix
const amount = args.join(' '); // Amount of messages which should be deleted
if (!amount) return message.reply('You haven\'t given an amount of messages which should be deleted!'); // Checks if the `amount` parameter is given
if (isNaN(amount)) return message.reply('The amount parameter isn`t a number!'); // Checks if the `amount` parameter is a number. If not, the command throws an error
if (amount > 100) return message.reply('You can`t delete more than 100 messages at once!'); // Checks if the `amount` integer is bigger than 100
if (amount < 1) return message.reply('You have to delete at least 1 message!'); // Checks if the `amount` integer is smaller than 1
 message.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
    message.channel.bulkDelete(messages); // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
  if(amount > 1){message.channel.send(":white_check_mark: "+amount+" messages have been deleted")} else {message.channel.send(":white_check_mark: 1 message has been deleted")};
});}
  
if (!message.guild) return;
  if (message.content.startsWith(prefix + 'kick')) {
    const user = message.mentions.users.first();
    if (user) {
      if (user=="578319500475105341") {return message.reply("sad cat noises 3:")};
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to kick this member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to kick!');
      }
    }
  
  
  
  var notify = prefix+'notify-all';
  if (message.guild && message.content.startsWith(notify)) {
  let text = message.content.slice(notify.length); // cuts off the /private partmessage.guild.members.fetch()
     message.guild.members.cache.send(text)
  .then(member.send(text))
  .catch(console.error);
  }
  
  var args = message.content.split(" ").slice(1);
  if (message.content.startsWith(sprefix + "setstatus")) {
    var gamestr = args.join(" ").replace("playing ", "");
      client.user.setPresence({ game: { name: gamestr, type: 0 } });
        message.channel.send("**The game was set to **" + gamestr); // do not modify gamestr, or your      
    }
  
  }//else if (message.content.startsWith(prefix)) {message.channel.send("You don't have access to use this")}
  //End of all commands
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}



/* Functions */
var functions = {
  sti: (string) => {
    return string.replace(/[^0-9]/g, "");
  }
}

/* Command Cooldowns */
let workcooldown = new Set();
let crimecooldown = new Set();
let fishcooldown = new Set();

/* All The Bot's Commands */
var commands = {
 help: {
   usage: "help",
   description: "Learn how the bot works!",
   category: "profile",
   aliases:["cmds","commands"],
   run: (message) => {
     let embed = new Discord.MessageEmbed()
     embed.setAuthor("Mittz Economy", client.user.avatarURL)
     embed.addField("📇 **Profile Commands**","`"+economy_prefix+"setup` - Setup your profile\n`"+economy_prefix+"profile` - View your profile\n`"+economy_prefix+"get (user)` - Get another user's profile\n`"+economy_prefix+"edit` - Edit your profile")
     embed.addField("💵 **Get Experience**", "`"+economy_prefix+"work` - Gain from 1xp to 300xp every 10 minutes\n`"+economy_prefix+"gamble (xp)` - 1/2 chance of doubling xp\n`"+economy_prefix+"crime` - 1/5 chance of getting up to 1200xp. Or loosing it.\n`"+economy_prefix+"fish` - Go fishing, and try to sell the fish for more than you pay for casting!\n`Every Message` - Gain 10xp for every message every 30 seconds")
     embed.addField("🛒 **Buy Stuff**","`"+economy_prefix+"shop` - Buy something from the shop.")
     embed.setColor("RANDOM")
     embed.setFooter("Mittz Bot")
     message.channel.send(embed)
   }
 },
 shop: {
   usage: "shop",
   description: "Buy something for xps!",
   category: "shop",
   aliases:[],
   run: (message) => {
     if (!profiles.profiles.includes(message.author.id)) return message.channel.send("<:warning:579387552453099561> **Whoops!** Please create your profile first: `+setup`")
     let embed = new Discord.MessageEmbed()
     embed.setAuthor("XP Shop","https://cdn2.iconfinder.com/data/icons/actions-states-vol-1-colored/48/JD-13-512.png")
     embed.setTitle("Send the item you want to buy's ID to this channel:")
     embed.addField(":one: Custom Profile Text Color","Cost: 1000xp")
     embed.addField(":two: Turt Badge On Profile","Cost: 2500xp")
     embed.addField(":three: MLG Profile Background","Cost: 3500xp")
     embed.addField(":four: Rainbow Profile Background","Cost: 5000xp")
     embed.addField(":five: Rich Icon On Profile","Cost: 10000xp")
     embed.setColor("GREEN")
     embed.setFooter("To cancel, say anything else.")
     message.channel.send(embed)
     let filter = (m) => m.author.id === message.author.id;
     let collector = message.channel.createMessageCollector(filter, { time: 60000 });
     collector.on('collect', m => {
        if (m.content==="1") {
          collector.stop()
          if (datafile.xp[message.author.id]<1000) return message.channel.send("<:warning:579387552453099561> **Whoops!** You don't have enough money to buy this.")
          message.channel.send("<:Info:536983515292499968> Please send the hex color including the # to this channel. To cancel, type `cancel`.")
          let collector2 = message.channel.createMessageCollector(filter);
          collector2.on('collect', msg => {
            if (msg.content==="cancel") {
              message.channel.send("<:GreenTick:449951413913780255> **Cancelled. You have not been charged.**")
              collector2.stop()
            } else if (msg.content.startsWith('#')) {
              datafile.xp[message.author.id]=datafile.xp[message.author.id]-1000
              profiles.color[message.author.id]=msg.content
              fs.writeFileSync("data.json", JSON.stringify(datafile));
              fs.writeFileSync("profiles.json", JSON.stringify(profiles));
              commands["profile"].run(message)
              collector2.stop()
            } else {
              collector2.stop()
              message.channel.send("<:warning:579387552453099561> **Whoops!** Something went wrong. Please try again.")
            }
          })
        } else if (m.content==="2") {
          collector.stop()
          if (datafile.xp[message.author.id]<2500) return message.channel.send("<:warning:579387552453099561> **Whoops!** You don't have enough money to buy this.")
          if (profiles.badges[message.author.id].includes("turt")) return message.channel.send("<:warning:579387552453099561> **Whoops!** You already have this badge")
          profiles.badges[message.author.id].push("turt")
          datafile.xp[message.author.id]=datafile.xp[message.author.id]-2500
          fs.writeFileSync("profiles.json", JSON.stringify(profiles));
          fs.writeFileSync("data.json", JSON.stringify(datafile));
          commands["profile"].run(message)
        } else if (m.content==="3") {
          collector.stop()
          if (datafile.xp[message.author.id]<3500) return message.channel.send("<:warning:579387552453099561> **Whoops!** You don't have enough money to buy this.")
          profiles.background[message.author.id]="https://vignette.wikia.nocookie.net/youtube/images/c/c8/Euphoric%2B_447d95e276a5b1dd56cac5e4a5d82b6c.jpg/revision/latest?cb=20150316195509"
          datafile.xp[message.author.id]=datafile.xp[message.author.id]-3500
          fs.writeFileSync("profiles.json", JSON.stringify(profiles));
          fs.writeFileSync("data.json", JSON.stringify(datafile));
          commands["profile"].run(message)
        } else if (m.content==="4") {
          collector.stop()
          if (datafile.xp[message.author.id]<5000) return message.channel.send("<:warning:579387552453099561> **Whoops!** You don't have enough money to buy this.")
          profiles.background[message.author.id]="https://rockymountainflag.com/wp-content/uploads/2017/03/lgbt.jpg"
          datafile.xp[message.author.id]=datafile.xp[message.author.id]-5000
          fs.writeFileSync("profiles.json", JSON.stringify(profiles));
          fs.writeFileSync("data.json", JSON.stringify(datafile));
          commands["profile"].run(message)
        } else if (m.content==="5") {
          collector.stop()
          if (datafile.xp[message.author.id]<10000) return message.channel.send("<:warning:579387552453099561> **Whoops!** You don't have enough money to buy this.")
          if (profiles.badges[message.author.id].includes("rich")) return message.channel.send("<:warning:579387552453099561> **Whoops!** You already have this badge")
          profiles.badges[message.author.id].push("rich")
          datafile.xp[message.author.id]=datafile.xp[message.author.id]-10000
          fs.writeFileSync("profiles.json", JSON.stringify(profiles));
          fs.writeFileSync("data.json", JSON.stringify(datafile));
          commands["profile"].run(message)
        } else {
          message.channel.send("<:warning:579387552453099561> **Whoops!** You need to say a number from 1-5. Please try again. You have not lost any experience.")
          collector.stop()
        }
     })
   }
 },
 fish: {
   usage: "fish",
   description: "Fish for some xp!",
   category: "gain",
   aliases:[],
   run: (message) => {
     if (!profiles.profiles.includes(message.author.id)) return message.channel.send("<:warning:579387552453099561> **Whoops!** Please create your profile first: `+setup`")
     if (!fishcooldown.has(message.author.id)) {
       let catches = ["🦀","🐟","🐠","🐡"]
       let sell = Math.floor(Math.random()*30)
       let change = sell-15
       message.channel.send("<a:loading:588180824227184652> You cast your line!")
       setTimeout(()=>{
         let fish = catches[Math.floor(Math.random()*catches.length)];
         message.channel.send("🎣 You caught a " + fish + "! You payed 15xp for casting.")
         datafile.xp[message.author.id]=datafile.xp[message.author.id]+change
         message.channel.send("💰 You sold " + fish + " for " + sell + "xp!")
         fs.writeFileSync("data.json", JSON.stringify(datafile));
       }, 3000)
       fishcooldown.add(message.author.id);
        setTimeout(() => {
          fishcooldown.delete(message.author.id);
        }, 10000);
     } else {
       message.channel.send("Please wait 10 seconds before fishing again!")
     }
   }
 },
 crime: {
   usage: "crime",
   description: "Commit a crime",
   category: "gain",
   aliases:[],
   run: (message) => {
     if (!profiles.profiles.includes(message.author.id)) return message.channel.send("<:warning:579387552453099561> **Whoops!** Please create your profile first: `+setup`")
     let crimes = ["rob a bank", "steal a bread loaf", "find money on the ground", "hack discord", "steal a carpet","steal your friend's chair","dab","hit the whip"]
     if (!crimecooldown.has(message.author.id)) {
       let crime = crimes[Math.floor(Math.random()*crimes.length)];
       let money = Math.floor(Math.random()*1200)
       let odds = Math.floor(Math.random()*3)
       if (odds === 1) {
         datafile.xp[message.author.id]=datafile.xp[message.author.id]+money
         fs.writeFileSync("data.json", JSON.stringify(datafile));
         const canvas = Canvas.createCanvas(700, 250);
         const ctx = canvas.getContext('2d');
         Canvas.loadImage('https://cdn2.iconfinder.com/data/icons/actions-states-vol-1-colored/48/JD-13-512.png').then((icon) => {
             ctx.drawImage(icon, 20, 50, 150, 150);
             ctx.font = '30px sans-serif';
             ctx.fillStyle = '#FFD700';
             ctx.fillText(`You ${crime}\nand earn ${money}xp! Good Job!`, 175, 100);
             //const attachment = new Discord.Attachment(canvas.toBuffer(), 'profile.png');
             message.channel.send(new Discord.MessageAttachment(canvas.toBuffer(), 'profile.png') ).catch(console.error);
         })
       } else {
         datafile.xp[message.author.id]=datafile.xp[message.author.id]-money
         fs.writeFileSync("data.json", JSON.stringify(datafile));
         const canvas = Canvas.createCanvas(700, 250);
         const ctx = canvas.getContext('2d');
         Canvas.loadImage('https://cdn2.iconfinder.com/data/icons/actions-states-vol-1-colored/48/JD-13-512.png').then((icon) => {
             ctx.drawImage(icon, 20, 50, 150, 150);
             ctx.font = '30px sans-serif';
             ctx.fillStyle = '#f96854';
             ctx.fillText(`You tried to\n${crime}\nand failed. You lost ${money}xp.`, 175, 100);
             //const attachment = new Discord.Attachment(canvas.toBuffer(), 'profile.png');
             message.channel.send(new Discord.MessageAttachment(canvas.toBuffer(), 'profile.png') ).catch(console.error);
         })
       }
       crimecooldown.add(message.author.id);
        setTimeout(() => {
          crimecooldown.delete(message.author.id);
        }, 600000);
     } else {
       message.channel.send("You can only commit a crime every 10 minutes!")
     }
   }
 },
 gamble: {
   usage: "gamble (amount of xps)",
   description: "Gamble ur xps",
   category: "gain",
   aliases:[],
   run: (message) => {
     if (!profiles.profiles.includes(message.author.id)) return message.channel.send("<:warning:579387552453099561> **Whoops!** Please create your profile first: `+setup`")
     let args = parseInt(message.content.substring(8),10)
     if (!args || args==="") return message.channel.send("<:warning:579387552453099561> **Whoops!** Please include how much money to gamble.")
     if(args>datafile.xp[message.author.id]) return message.channel.send("<:warning:579387552453099561> **Whoops!** You can't gamble more than you have! You have " + datafile.xp[message.author.id] + "xp and tried to gamble " + args + "xp!")
     if(args<0) return message.channel.send("<:warning:579387552453099561> **Whoops!** You can't gamble less than 0!")
     let odds = Math.floor(Math.random()*2)
     if (odds===1) {
       datafile.xp[message.author.id]=Math.floor(datafile.xp[message.author.id]+args)
       fs.writeFileSync("data.json", JSON.stringify(datafile));
       const canvas = Canvas.createCanvas(700, 250);
       const ctx = canvas.getContext('2d');
       Canvas.loadImage('https://cdn0.iconfinder.com/data/icons/sport-achievment-badges/128/sport_badges-02-512.png').then((icon) => {
           ctx.drawImage(icon, 20, 50, 150, 150);
           ctx.font = '50px sans-serif';
           ctx.fillStyle = '#FFD700';
           ctx.fillText(`You Won! +${args}xp!`, 175, 135);
           const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'profile.png');
           message.channel.send(attachment);
       })
     } else {
       datafile.xp[message.author.id]=Math.floor(datafile.xp[message.author.id]-args)
       fs.writeFileSync("data.json", JSON.stringify(datafile));
       const canvas = Canvas.createCanvas(700, 250);
       const ctx = canvas.getContext('2d');
       Canvas.loadImage('https://cdn.glitch.com/85f76f83-44e1-4054-be57-0c6655e1314e%2Fx-button.png?v=1561648644518').then((icon) => {
           ctx.drawImage(icon, 20, 50, 150, 150);
           ctx.font = '50px sans-serif';
           ctx.fillStyle = '#f96854';
           ctx.fillText(`You Lost! -${args}xp!`, 175, 135);
           const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'profile.png');
           message.channel.send(attachment);
       })
     }
   }
 },
 work: {
   usage: "work",
   description: "Work for some XPS!",
   category: "gain",
   aliases:[],
   run: (message) => {
     if (!profiles.profiles.includes(message.author.id)) return message.channel.send("<:warning:579387552453099561> **Whoops!** Please create your profile first: `+setup`")
     let jobs = ["Discord Bot Coder","Discord Employee","Youtuber With 1 Subscriber","Bathroom Cleaner","Meter Maid","Hamburgaler","Trash Diver","Wumpus Petter","Emoji Maker","Instagram Follower","Minecraft Server Owner","Dog Groomer","TV","Bad Product Designer"]
     if (!workcooldown.has(message.author.id)) {
       let job = jobs[Math.floor(Math.random()*jobs.length)];
       let money = Math.floor(Math.random()*300)
       datafile.xp[message.author.id]=datafile.xp[message.author.id]+money
       fs.writeFileSync("data.json", JSON.stringify(datafile));
       const canvas = Canvas.createCanvas(700, 250);
       const ctx = canvas.getContext('2d');
       Canvas.loadImage('https://cdn2.iconfinder.com/data/icons/actions-states-vol-1-colored/48/JD-13-512.png').then((icon) => {
           ctx.drawImage(icon, 20, 50, 150, 150);
           ctx.font = '30px sans-serif';
           ctx.fillStyle = '#ffffff';
           ctx.fillText(`You work as a\n${job}\nand earn ${money}xp! Good Job!`, 175, 100);
           const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'profile.png');
           message.channel.send(attachment);
       })
       workcooldown.add(message.author.id);
        setTimeout(() => {
          workcooldown.delete(message.author.id);
        }, 600000);
     } else {
       message.channel.send("You can only work every 10 minutes!")
     }
   }
 },
 edit: {
   usage: "edit",
   description: "Edit your profile",
   category: "profile",
   aliases:[],
   run: (message) => {
     if (!profiles.profiles.includes(message.author.id)) return message.channel.send("<:warning:579387552453099561> **Whoops!** Please create your profile first: `+setup`")
     if (!message.content.startsWith(economy_prefix+"edit bio") && !message.content.startsWith(economy_prefix+"edit background")) {
       const canvas = Canvas.createCanvas(700, 250);
       const ctx = canvas.getContext('2d');
       Canvas.loadImage('https://convertingcolors.com/plain-2C2F33.svg').then((background) => {
         ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
         Canvas.loadImage('https://cdn3.iconfinder.com/data/icons/flat-circle-content/512/circle-edit-line-2-512.png').then((icon) => {
               ctx.drawImage(icon, 20, 50, 150, 150);
               ctx.font = '30px sans-serif';
               ctx.fillStyle = '#ffffff';
               ctx.fillText(`\n`+economy_prefix+`edit desc: edit your description\n\n`+economy_prefix+`edit back: edit your background`, 165, 60);
               const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'profile.png');
               message.channel.send(attachment);
           })
       })
     } else if (message.content.startsWith(economy_prefix+"edit bio")) {
       const filter = (m) => m.author.id === message.author.id;
       message.channel.send("📝 Send your desired description to this channel!")
       const collector = message.channel.createMessageCollector(filter);
       collector.on('collect', m => {
         profiles.description[message.author.id]=m.content
         fs.writeFileSync("profiles.json", JSON.stringify(profiles));
         commands["profile"].run(message)
         collector.stop()
       });
       collector.on('end', collected => console.log(`Collected ${collected.size} items`));
     } else if (message.content.startsWith(economy_prefix+'edit background')) {
       let attachment = new Discord.MessageAttachment('https://cdn.glitch.com/ecec1dd0-4cb5-43ec-8d0f-c30d2f009ea3%2Fchoosebackground.png', 'profile.png');
       message.channel.send('📝 Send your desired background\'s number to this channel!', attachment);
       const filter = (m) => m.author.id === message.author.id;
       const collector = message.channel.createMessageCollector(filter);
       collector.on('collect', m => {
         let backgrounds = ["1","2","3","4"]
         if (!backgrounds.includes(m.content)) {
           message.channel.send("Cancelled: Please say a number from 1 to 4.")
           collector.stop()
         } else {
           let backlinks = {"1":"https://convertingcolors.com/plain-2C2F33.svg","2":"https://colorswatches.info/7289da.png","3":"https://i2.wp.com/onlyvectorbackgrounds.com/wp-content/uploads/2018/10/Abstract-Geometric-Background-Green.jpg?fit=1191%2C842","4":"https://cdn.glitch.com/85f76f83-44e1-4054-be57-0c6655e1314e%2FUntitled.png?v=1561568852068"}
           profiles.background[message.author.id]=backlinks[m.content]
           fs.writeFileSync("profiles.json", JSON.stringify(profiles));
           commands["profile"].run(message)
           collector.stop()
         }
       });
       collector.on('end', collected => console.log(`Collected ${collected.size} items`));
     }
   }
 },
setup: {
   usage: "setup",
   description: "Setup your profile",
   category: "profile",
   aliases:[],
   run: (message) => {
     if (profiles.profiles.includes(message.author.id)) return message.channel.send("<:warning:579387552453099561> **Whoops!** You already have a profile!")
     message.channel.send("**<:connect:593211341808861204> Beep Boop Beep! We're setting up your profile!**").then(msg=>{
       profiles.background[message.author.id] = "https://convertingcolors.com/plain-2C2F33.svg"
       profiles.description[message.author.id] = 'No Description Set'
       profiles.color[message.author.id] = "#ffffff"
       profiles.profiles.push(message.author.id)
       profiles.badges[message.author.id]=[]
       datafile.xp[message.author.id]=0
       fs.writeFileSync("profiles.json", JSON.stringify(profiles));
       fs.writeFileSync("data.json", JSON.stringify(datafile));
       setTimeout(()=>{
         msg.edit("<a:acheck:587844986868072458> **Your profile has been added.** View all commands with `+help`.")
         commands["profile"].run(message)
       },1500)
     })
   }
 },
 get: {
   usage: "get (user)",
   description: "View someone else's profile",
   category: "profile",
   aliases:[],
   run: (message) => {
     var args = message.content.split(" ").slice(1);
     let id = getUserFromMention(args[1]);
     if (!profiles.profiles.includes(id)) return message.channel.send("<:warning:579387552453099561> **Whoops!** I could not find that user. Make sure they have setup a profile!")
     if (!client.users.find("id", id)) return message.channel.send("<:warning:579387552453099561> **Whoops!** I could not find that user. Make sure they have setup a profile!")
     let user = client.users.find("id", id)
     const canvas = Canvas.createCanvas(700, 250);
       const ctx = canvas.getContext('2d');
       Canvas.loadImage(profiles.background[id]).then((background) => {
         ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
           Canvas.loadImage(user.avatarURL).then((icon) => {
             Canvas.loadImage('https://cdn2.iconfinder.com/data/icons/actions-states-vol-1-colored/48/JD-13-512.png').then((xp) => {
               Canvas.loadImage('https://www.stickpng.com/assets/images/585e4beacb11b227491c3399.png').then((lb) => {
                 Canvas.loadImage('https://cdn.discordapp.com/emojis/593843383991271425.png').then((turt) => {
                   Canvas.loadImage('https://discordapp.com/assets/ccebe0b729ff7530c5e37dbbd9f9938c.svg').then((rich) => {
                      let leaderboard = datafile.xp
                      const ordered = {};
                      Object.keys(leaderboard).sort().forEach(function(key) {
                         ordered[key] = leaderboard[key];
                      });
                     ctx.drawImage(icon, 30, 45, 150, 150);
                     ctx.drawImage(xp, 225, 90, 50, 50);
                     ctx.drawImage(lb, 40, 205, 30, 30);
                     if (profiles.badges[id].includes("turt")) {
                       ctx.drawImage(turt, 250, 147, 55, 40);
                     }
                     if (profiles.badges[id].includes("rich")) {
                       ctx.drawImage(rich, 320, 147, 40, 40);
                     }
                     ctx.font = '40px sans-serif';
                     ctx.fillStyle = profiles.color[id];
                     ctx.fillText(`${user.tag}`, 240, 90);
                     ctx.font = '25px sans-serif';
                     ctx.fillText(`${datafile.xp[id]}xp`, 270, 128);
                     ctx.fillText(`Bio: ${profiles.description[id]}`, 77, 229);
                     const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'profile.png');
                     message.channel.send(`Here is ${user.tag}'s profile!`, attachment);
                   })
                 })
               })
             })
           })
       })
   }
 },
 profile: {
   usage: "profile",
   description: "View your own profile.",
   category: "profile",
   aliases:["bal","xp","balance","money"],
   run: (message) => {
     if(profiles.profiles.includes(message.author.id)) {
       const canvas = Canvas.createCanvas(700, 250);
       const ctx = canvas.getContext('2d');
       Canvas.loadImage(profiles.background[message.author.id]).then((background) => {
         ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
           Canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg' })).then((icon) => {
             Canvas.loadImage('https://cdn2.iconfinder.com/data/icons/actions-states-vol-1-colored/48/JD-13-512.png').then((xp) => {
               Canvas.loadImage('https://www.stickpng.com/assets/images/585e4beacb11b227491c3399.png').then((lb) => {
                 Canvas.loadImage('https://cdn.discordapp.com/emojis/593843383991271425.png').then((turt) => {
                   Canvas.loadImage('https://discordapp.com/assets/ccebe0b729ff7530c5e37dbbd9f9938c.svg').then((rich) => {
                      let leaderboard = datafile.xp
                      const ordered = {};
                      Object.keys(leaderboard).sort().forEach(function(key) {
                         ordered[key] = leaderboard[key];
                      });
                     ctx.drawImage(icon, 30, 45, 150, 150);
                     ctx.drawImage(xp, 225, 90, 50, 50);
                     ctx.drawImage(lb, 40, 205, 30, 30);
                     if (profiles.badges[message.author.id].includes("turt")) {
                       ctx.drawImage(turt, 250, 147, 55, 40);
                     }
                     if (profiles.badges[message.author.id].includes("rich")) {
                       ctx.drawImage(rich, 320, 147, 40, 40);
                     }
                     ctx.font = '40px sans-serif';
                     ctx.fillStyle = profiles.color[message.author.id];
                     ctx.fillText(`${message.author.tag}`, 240, 90);
                     ctx.font = '25px sans-serif';
                     ctx.fillText(`${datafile.xp[message.author.id]}xp`, 270, 128);
                     ctx.fillText(`Bio: ${profiles.description[message.author.id]}`, 77, 229);
                     const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'profile.png');
                     message.channel.send(`Here is your profile, ${message.author.tag}!`, attachment);
                   })
                 })
               })
             })
           })
       })
     } else {
       const canvas = Canvas.createCanvas(700, 250);
       const ctx = canvas.getContext('2d');
       Canvas.loadImage('https://convertingcolors.com/plain-2C2F33.svg').then((background) => {
         ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
         Canvas.loadImage('https://yokoent.com/images/warning-png-icon-3.png').then((icon) => {
               ctx.drawImage(icon, 20, 50, 150, 150);
               ctx.font = '40px sans-serif';
               ctx.fillStyle = '#ffffff';
               ctx.fillText(`You don't have a profile!\nRun +setup`, 190, 110);
               const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'profile.png');
               message.channel.send(attachment);
           })
       })
     }
   }
 },
}
const cooldown = new Set();
client.on("message", async (message) => {
 if(message.author.bot) return;
  if (profiles.profiles.includes(message.author.id)) {
    if (!cooldown.has(message.author.id)) {
    datafile.xp[message.author.id]=datafile.xp[message.author.id]+10
    fs.writeFileSync("data.json", JSON.stringify(datafile));
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, 30000);
  }
  }
 if(message.content.toLowerCase().startsWith(economy_prefix)) {
   for(let i in commands) {
     if(message.content.toLowerCase().split(" ")[0].slice(economy_prefix.length) === i || commands[i].aliases.includes(message.content.toLowerCase().split(" ")[0].slice(1))) {
       commands[i].run(message)
       console.log(`${message.author.tag} used the ${commands[i].usage} command in ${message.guild.name}`)
     }
   }
 }
})


client.on("ready", async () => {

  client.user.setPresence({ activity: { name: '!v! commands',type: "STREAMING",url:"https://www.youtube.com/watch?v=P4i-VYcrEuc"}, status: 'idle'})
});

client.login(process.env.main_token);