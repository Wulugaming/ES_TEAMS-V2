//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "goodlucknwawulu@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ec33ecf51f928d0a89a1b.jpg";
global.devs = "https://t.me/examsolutionteam";
global.sudo = process.env.SUDO || "2347063859672";
global.owner = process.env.OWNER_NUMBER || "14099551065";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a81247659e996130a88ea.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api.whatsapp.com/send?phone=2347063859672&text=Hello%20Wulu%20save%20up%20as%20(Your%20name?)";
global.scan = "https://api.whatsapp.com/send?phone=2347063859672&text=Hello%20Wulu%20save%20up%20as%20(Your%20name?)";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0lGWGJqS0JjNzRjWjJHU0hBM1BuT2hFRWp5MFdoaFFCODhnbDNoRERGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElONXpuVmFOTUI3R1ZnR0FERWRoeTVoS21BMXJiRVZhU2lOUU94N3pnYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRllSbmJVVXJkMHg1c1YvcnlmZkFLU29OK2d2dHI2cjUwNmRRWGptclhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZeTVqcmd3YytxTHY0UTNRZXJRMzFGV213MUNIZExDcFJzYnhubFpwcXlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBMN3FiYzBEYTlUUzVESS82VGw3a0hFZWs4M2l4OHlIdDZaUVpVSWhpRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtJdlJVdnlRYW1HbEtHc1Bpak16MUtLc2lzU0tFR1UvcVQxbFE4cnhRRHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUg2ZWVCQnd1aWNuV25ONE1aem1GZFRyMmlvRkhudmFkdW1PaVpkeC9WRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnR6SVo4dmhZR3pXVEhkV2hNK1dtWkxZTEEzOGFmNXZIc0IxMU5Hb01Icz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZCUGxGZENuTTVTYnM3ODRXeEQ4R1ZtdXJIZGIwNG5kMWxrU0hxVmkwQnB5MWNHV0hraHN5RERnRlIrNmVhQngrMjFBWU5seHd1RitnQ1VMNzRQZEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI5LCJhZHZTZWNyZXRLZXkiOiJEckl2MnV0MXg2K0RZVEoxN0FNUmxEOWdjU0pzaTN1cEMwdkhpVC96OXVzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0OUdUM1l5OVF3cTdsRUpGOENGR0hnIiwicGhvbmVJZCI6ImZhOWU4YzRkLTQxMzktNDg3Ny04ZmNjLTY2MGExMWQ0YjIxYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJWlBKMkRYMWdId3lRM1NmRXVkQUNGWERYU009In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5WYjI1ZlRGWjZUeWpzRjNZZ2FMQXRSVzk5VT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tmdzVkQUVFTHo3amJnR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imd2NkxsVkM3MFRjMmhSb1lGdlB1S2xPK0tVVGdoV3F1MVBKYmRtbmVxbDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlBHL2VjUW5SZC8vWGdtenptbTlISlVGTEk2TjRhMmpjNEd3blJKdnJEM1puM0V4ZFBBOG43OTJ3WVovd0tIcVdrVi92ZVZGSSs3L2NIdUhWRUxGRURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWU2hITTBPcWVlVHV3NklFRjBsQUpYc2xiVUJEbXhLamEwQWRWZHRNN2djeThjSUxMN3Vna3JTTEdEVXdoUkIvaDZlZ1E2dEp5OWJWYTRxOHdFUERDQT09In0sIm1lIjp7ImlkIjoiMTQwOTk5NTEwNjU6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJQdlAifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTQwOTk5NTEwNjU6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZTCtpNVZRdTlFM05vVWFHQmJ6N2lwVHZpbEU0SVZxcnRUeVczWnAzcXBlIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MjgyMDU3LCJteUFwcFN0YXRlS2V5SWQiOiJBQVFBQU4wZCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 WULU👑",
  author: process.env.PACK_AUTHER || "WULU-V2",
  packname: process.env.PACK_NAME || "WULU-V2",
  botname: process.env.BOT_NAME || "BOT-WULU-𝕍2👑",
  ownername: process.env.OWNER_NAME || "WULU👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ES TEAMS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
