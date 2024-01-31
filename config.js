const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Yola, Adamawa, Nigeria"
global.mongodb= process.env.MONGODB_URI || ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 





global.disablepm = process.env.DISABLE_PM || "false",
global.userImages = process.env.USER_IMAGES|| "text",
global.style = process.env.STYLE || "5",  // put '1' to "5" here to check bot styles




global.devs = "2347041511909" // Developer Conatact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347041511909";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  //style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7-qr",
  caption:process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "BOT01",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  sessionName:process.env.SESSION_ID|| "SUHAIL_18_52_01_31_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib0I5ckU3TnBaNHhqRVNHdTVkbDV1ZTVWNEZobWFTTmVLN2ZWRGtmT1dIQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk45MEs5RjZmR3ZvTGlzbllYRUFrYUpkUEFHWnZNWm5tMGtaR2UreUwwVjQ9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU0dndjdEV3B5MCtWZ3paRFhuL01JY0hvNXA3SU1IQkE0Z2ZTT2s1Y05tOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInJWSVJiWVJOTG9aNC95RXkxUU8zdU4ycitzRnpsbzgzbGpCdXRLbU5BVms9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSU8rUGVSeFNPeFpIQloyajk1TzRoWmNJZmwzZUthWXFRZGJ5Z29WTXhXND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlJBY3pUbUJybGwxTmt3REpHNG5TbXhreStvN1Y4NmhFNCtIMVNPRExPa3M9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJVQ25yVWIwVWFpbVZ5U0FPQmg0azQ3dU8wNFRKcWpZTFFRK0c0ZnFpelVnPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibEY4UC9XKzFiT1hNTjRXZkFPaXhVYTZJVVpKSkxRTEJtVlpDNUpqdTAwWT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI1dUorRVcveCtzQ3FQZ3k5V29NUWhmZVdGMnFJcGpnSGp2Yzd1REg4aEdMZjZhWVZiVmc2VUd0WC9QcmNnUXRoTU1TOEl1bmhzdWJMdlp6ZVpmeU9EZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjMxLFwiYWR2U2VjcmV0S2V5XCI6XCJabWNiby96WktPekwxbktIa1RybXRuaXZUSlFiVDhHdklYSUk4ODFIWUhJPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjM0NzA0MTUxMTkwOUBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCJCNEJEMzdEM0ZGNEUyMUFDRjBFNTMwMjQ4NDlGREIwRlwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzA2NzI3MTI3fV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiRmlGX1pmak9SbjJscDdGSEZXbXMyQVwiLFwicGhvbmVJZFwiOlwiODgzYmExMWYtN2Y2Ny00OWY4LWExOWQtY2FjYmZkMGZlNGJlXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIwS1hMRmJFWE1lam96c2l1ZmZFVXR4R1NuVHc9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlhlUmprMENhdjJHVWcxMzJYaWk5OEVLWlc0az1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDUG5qanFvSEVNMnQ2cTBHR0FJZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkZuc2hIMFMvMkVyRXd2b1RITHpnbXZuUDR0NlRQcFZNZkhPMTZ6ODhwaTQ9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJGZ3Q1M1JOYWxuWHc5VTRnNjZyRXcxVTRBQkNYem5QY25kaUpkNDdyUlEvM1RlTU03WEtRSW9BUkRqaHNLdmZZcEY4SExYNU1tdGlKN01GNXF3SUxCUT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIlBZZnZCT1dnSlFOSEpyWDViYWlhNGpnV3JicUtxQ1dsRzYyZlUrOE5td3BxTU1vZmRPSXRmRXpabm1zalhoMXZzdytvZG51Sis4NzJmNjQxSWo1UkNBPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzQ3MDQxNTExOTA5OjRAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTQ1NDg3OTU3MDc4MjA0OjRAbGlkXCIsXCJuYW1lXCI6XCJZYXhlZWVkIEFiYmFcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyMzQ3MDQxNTExOTA5OjRAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCUlo3SVI5RXY5aEt4TUw2RXh5ODRKcjV6K0xla3o2VlRIeHp0ZXMvUEtZdVwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDY3MjcxMjEsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBSVJTXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVJTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN3NEYlI5Z3lJZmV3ejdIVTU2SDVtM1BLUnV6MTU3M2kvZlpTcm9KOGxUOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTY3MzcwNzQ1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDY3MjY5ODY0OTFcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
 
 
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
