const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(val, defaultOn = true) {
    if (val === undefined || val === null || val === '') return defaultOn;
    return val.toLowerCase() !== 'false';
}

module.exports = {
    SESSION_ID:            process.env.SESSION_ID || "Silva~H4sIAAAAAAAAA5VWy3IaRxT9l9mqy3T3TM9DVa4KIIQQksAgYlkpLwamgUEwM54HCLn0F9kmi1Rll1QeX5ZPyLk9SPIicRS7ugT9uPf2edzms5WkcaH7em8df7ayPN6GpaaP5T7DX6tVzec6t5gVhWVoHX/ncCa5zYKABT4LJHNcJlzBfEzbTDgOE75gjmSeolUfq4p5HLNM0gbXZ4JjL8L42IsYwguYh1UusQMbXIotOSblx0dmZdV0Hc++UpBAJsopHMrCTSDbZUrUyRVDSgfLHuI7AROoBFVKiUXuMkqKGmybuTjOPeYhgKASBEoQktNxifu4NpMCFUv18ZHKCuM8ThadbKk3Og/XwG+IqddhSLcXgYe0lMJhLpWFr8hBECGLcs0CEJPKYQ6KwjfCRiibYJK4nlA4ZtMVbKorYESNFKjfNeEwC2gkCPKdVyEpbWkYCQyjShJs0kYIG/kFsQukEQ55qGKbsAtqzM1n7KZKbfCPzbgi/QnoRqYY5TNfmi1PsQySRbxIdNSLdFLG5f7VOiRqAqLVZr6RnqDbY4i6YIFF1C6CA2Z2nVoK3FERgJwR+gC6vppt9OkR4IzQV04dBpgbsF2c46/DMcBRSuHUzIImyhyQsohI4IoZMoRvmKP0qFAAHD8wwpTcP0Tg9b3AKImciFFGGILorwMaS8kvoBzmT26++1+iFK4Ri1E5igVdpDeiTNAtDvBKsgkkeZCCyzyqKjA6JRtJOI58DNzNVchnsHfdGXCUDI+zhiG0EfU6ZVJQVZOAzMhqpEpYoNOQn8n9hmanxodLYyeSM6HnudRjcCiQhmcJACXtF7V71HNDIM2oZzTDssq/Chq1QseQ4xr2iEzE92uto2xBVMHSHpqKYjY34BAgsIvAaXiMwDYnScaq1qSqIUYcsgsMJw73Im9jgaOrgn/INqiVS44nC7p1ByYg6JKmM1KrCYxZqSJUQqJ2avmgLRIWVBWBjKZHTRJbFfOJG2ioF1nHAh9zvYiLMg/LOE1ojjqtFUbbsZ7lujSas7qxOxj0+6F/brfi4WlaXUbT0QWfOkdi0p0cTbvjqXfJ442Ss7eAMcvTmS4KHZ0hcprvL/ElXOgC0H5kVqLvy1rNlA59xZrHeVFOkipbp2H0JPWnxXA2S6ukHO+TWZs+gKhj/jKtyxIduyA2qyTMZ8t4q9vLsMTMPFwX+vmGOteIWOaVfu7z7TQi+k/PvGv/un2LyjdGFjE2WoHj+T6oCIRzLJxvijc7ihpm2ZtEl9iahLTZ+uuH7//A+A3jR4xfMX7G+AXjT4zfMX7C7rWJif7Ebe4rZfueiUrTj8+XodyRLsN4jeqtdl+HQXjZ7fRO2tvC6XZbnUWzvWhaL5d/0nLNkh6czHdRa9m5uhyseqP7d7MRX+1G3oflyfnDjT3auCpqVsvqw3Ly9h+CUH3D1ftCf3t3t/aa2ZXwW5d8upXe3aB1NDi9uZl47xrpw9nZoN+9EfvRqtE7by5G5f5i3NEPZw+35ye7yafr9Xm56k2S4PRqO7/1bxfNt5Qt0tt4pr9MVoX5bigbybjTCoNq35rKy05jqNbNi0WjuH+fDqLG9uK+tWneyE2ztRQF7/PTXX/8bnix1HbmtKqb/OhkGvuuaHy6bcxvO4U+2SHZk8vXh+cnNsojWunrPNamdx74+y+a67pJjBxxX0IcmvG/dBBlfmTQ825cTG5GjyTHurWB695Gry29FO7hScMqvVmO6Tb0K8o1v1skp3i1j8nPwnNMgzDvHz0l1A/p3YW7snVYztN8g6KKzTRGSXlakUV6yTz9SsWIgCeX/gubOsQ6LMrmi/Wu440uynCToWl4nsJz4qMnmV3DPM3OwmKJoPZmLVZj8tG+mWXjEm/TwclWk/61Vu+tx78BzmZV95wKAAA=",
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
