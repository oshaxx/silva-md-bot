const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(val, defaultOn = true) {
    if (val === undefined || val === null || val === '') return defaultOn;
    return val.toLowerCase() !== 'false';
}

module.exports = {
    SESSION_ID:            process.env.SESSION_ID || "Silva~H4sIAAAAAAAAA5VWy27bRhT9F24zSOZBckgDASo/KkuubVWyJdtFFrQ4kqhIFEMO9Ujgv+i2XRTorkUfX9ZP6LlD2c6iTd04A5Gcy/s499wz/OTlq6wyZ2bnHXzyijJbJ9bQpd0V+PUO68nElB7z0sQm3sF3oc9CJnjERKSYHzAR+0z4uBUxi2ImVchkoJiUEfM5i3HnSxb4THLYKSwdMvqRmgVwFMbM125D4X2mAiZjFpJLuBbi3QPzivp+kY2/kFIg4Q7mEQUTuOZIMGShRFCOR3CIpwHliF8Kh52AM1+xiJMZEpVKwQGjYvA66kB8jWSwRdkIrDCCv5DF0bsHyirJyiyfnhQzszRlsgCAPTx6GYjwhDQIJ0pUEnxYsWSKkkQpqoHFJ4RgQBXFgQsvIpiEDk7J8b4WDAXSLeAM8arWDlUqXQgUJtAMtCt6GZbkSEum6UWK4Boq0FgRCxZRC12CUmgWoQIgSf4BplDAEVYhC/BL+4DPEQP5BLqBUFKrRVMiOhVrB2WVTXOTdlKT28zuXsxEACGlaGJIRbxxfqm54CLCISp6hzjSpxaGjgpAVvCABXjaMEZKshWxe8VxBz3X1Gu9Bxy+0QgdvAxASsWnXhFKwsUg+gFUIWhqCA5JvaYrtWcexy7sgU/sTCUmRlCOghZ3ExMFTZ1YsXY8DokeYKv4DMZe+TjL7/8PI4ndmAc3zaFyAw7HQTMyETjWsBAAAhqywn+tmCNns+UYzffFoy7lXo8clgEAjxioKuLopUBG0rFISL/BUQWNKAAG4EdQif1YS/SUEFGNtVZOZEh6uHaQaWfixhnwEmc0EYLFynVYKt0ALv0nIBNbl1/CSxLVUAwpXkMTAoTIRgOJpnFBOy4Q582IKtdc4aSS6EH6RyNFnff32VKCRAwaQF+6aiXKDQhjklsJKEUAI4Ydki6igKSgkA5MAsEMClM1vBEIAEWeQqK5dJ0hdYld1ZQBXkKTMDUkkASwT+0BeTqpdyBwWZppVtkysdkqd8/gykvS9cCMS2Md2bzJ2eiuNzw/FjZ5tR1Vdn7b9Qf15ei+l2xbveF02G5fr9d1aFbjtwCxKFdjU1UmPYXnVbk7x00yNRWAfce83GxtQ2MKB73wJllZ2eu8LharJH3k+ONmMh6v6twOdvn4iC7QpgP+/NhYC52uqJd1npTjWbY2R7PE4skkWVTmqUJTGni0ZW2e1P1olVLzO52hjs6GXWS+dKTIYOjFvo4i6atY+AdCfVW93pDXpChe58bCNE/I2Pvrh+//wPoN60esX7F+xvoF60+s37F+gvXC+YSScsWjIFCRdl7p8cNTMRQ7NTbJFsjeOzozSZyct08udpN15bfbh61p62ja8p6Lf2Ry0yVzeTzZpIezk4vzy3mnv/123OfzTV/fzo67H29UfxkGaaue1bez67f/4AQeZqvw1Hazq29WPJ1c13ffHHW6m16Z1sFJeflhI8fz4SA8FvNlOBrGW11kh7w1/9i937xaj4tX6fL2Q2dx3e1sLvLSziZ8Y9tXd/PpW4qWmnU2Np8HK4qtPOtHVWLXb4r72fLuhHePea7l++19+/b85kYuP05PIVe7m8p8ncz7I9Oxsd+5WnfenAU8md6tR2rxYTEalGF/ZxZjdREebxDsccYX+zMnc8yjttLtJDNONPf9+682N3kTGTn8PrvYq/C/fbO4o0aSuJFMxM0hTSoWNnLnu3OITlWBE5YOdggaHWICMu07WYv3XwLCqQl9AkkOZSCFgOyQSwy5dF8BMJV0SmC6ikViJ6tyiaSq5X2GlMpVTSPSySerL3+z4AON/oQihVgklW09j95VtjSVTZYFBELrAIeWDxF2Vr1yVZwm1QxO1XIh5gOao12rKAYWh9J+kr0W/TvMIu/hb+qz5pOTCgAA",
    // PREFIX supports comma-separated list: ".,!,/,?"
    // Use "any" to accept any leading symbol, or "" / "none" for no prefix
    PREFIX:                process.env.PREFIX || ".",
    BOT_NAME:              process.env.BOT_NAME || "TrapHouse",
    OWNER_NUMBER:          process.env.OWNER_NUMBER || "94782722212",
    OWNER_NAME:            process.env.OWNER_NAME || "OshaZx",
    DESCRIPTION:           process.env.DESCRIPTION || "𝔱𝔯𝔞𝔭𝔥𝔬𝔲𝔰𝔢",
    ALIVE_IMG:             process.env.ALIVE_IMG || "https://files.catbox.moe/8havgz.PNG",
    LIVE_MSG:              process.env.LIVE_MSG || "TRAP JUMPIN'🔋",
    MODE:                  process.env.MODE || "both",
    AUTO_STATUS_SEEN:      toBool(process.env.AUTO_STATUS_SEEN,      true),
    AUTO_STATUS_REACT:     toBool(process.env.AUTO_STATUS_REACT,     true),
    AUTO_STATUS_REPLY:     toBool(process.env.AUTO_STATUS_REPLY,     false),
    AUTO_STATUS_MSG:       process.env.AUTO_STATUS_MSG || "Seen by TrapHouse",
    CUSTOM_REACT_EMOJIS:   process.env.CUSTOM_REACT_EMOJIS || "❤️,🔥,💯,😍,👏,💙,🙌",
    Status_Saver:          process.env.Status_Saver  || process.env.STATUS_SAVER  || 'false',
    STATUS_REPLY:          process.env.STATUS_REPLY  || 'false',
    STATUS_MSG:            process.env.STATUS_MSG    || 'TRAPHOUSE SUCCESSFULLY VIEWED YOUR STATUS',
    READ_MESSAGE:          toBool(process.env.READ_MESSAGE,          false),
    AUTO_REACT_NEWSLETTER:   toBool(process.env.AUTO_REACT_NEWSLETTER,   true),
    ANTI_BAD:              toBool(process.env.ANTI_BAD,              false),
    ALWAYS_ONLINE:         toBool(process.env.ALWAYS_ONLINE,         true),
    AUTO_TYPING:           toBool(process.env.AUTO_TYPING,           true),
    AUTO_RECORDING:        toBool(process.env.AUTO_RECORDING,        false),
    DELETE_LINKS:          toBool(process.env.DELETE_LINKS,          false),
    ANTIDELETE_GROUP:      toBool(process.env.ANTIDELETE_GROUP,      true),
    ANTIDELETE_PRIVATE:    toBool(process.env.ANTIDELETE_PRIVATE,    true),
    ANTILINK:              toBool(process.env.ANTILINK,               false),
    ANTIVV:                toBool(process.env.ANTIVV,                 true),
    DEBUG:                 toBool(process.env.DEBUG,                 false),
    THEME:                 (process.env.THEME || 'traphouse').toLowerCase().trim(),
    GREETING:              process.env.GREETING || '',
    APP_URL:               process.env.APP_URL || '',
};
