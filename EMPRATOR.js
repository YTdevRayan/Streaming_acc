//===============EMPRATOR============//
const Discord = require("discord.js");
const EMPRATOR = new Discord.Client();
//===============EMPRATOR============//
EMPRATOR.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `You only live once, so try to live for God.`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    EMPRATOR.user.setActivity(STREAMING, {      
    type: "PLAING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//===============EMPRATOR============//
EMPRATOR.on("ready", () => {
    var join = EMPRATOR.channels.get(""); /// id voice
    if (join) join.join();
  });
//===============EMPRATOR============// 
EMPRATOR.login("");/////TOKEN DANE
//===============EMPRATOR============//
