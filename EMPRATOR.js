//===============EMPRATOR============//
const Discord = require("discord.js");
const EMPRATOR = new Discord.Client();
//===============EMPRATOR============//
EMPRATOR.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `STREAMING BY DEV RAYAN | KP UP`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    EMPRATOR.user.setActivity(STREAMING, {      
    type: "STREAMING", 
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
