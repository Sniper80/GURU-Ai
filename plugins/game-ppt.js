//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let poin = 300
  let reseqv = `✳️ Select حجر/ورقه/مقص\n\nExample : *${usedPrefix + command}* ورقه\n`
  if (!text) throw reseqv
  var astro = Math.random()

  if (astro < 0.34) {
    astro = 'حجر'
  } else if (astro > 0.34 && astro < 0.67) {
    astro = 'مقص'
  } else {
    astro = 'ورقه'
  }

  if (text == astro) {
    global.db.data.users[m.sender].exp += 100
    m.reply(`▢ *A tie*\n\n‣ You : ${text}\n‣ SNIPER : ${astro}\n\n🎁 Points (±)100 XP`)
  } else if (text == 'حجر') {
    if (astro == 'مقص') {
      global.db.data.users[m.sender].exp += 300
      m.reply(`▢ *Won* 🎊\n\n‣ You : ${text}\n‣ SNIPER : ${astro}\n\n🎁 Points *+${poin} XP*`)
    } else {
      global.db.data.users[m.sender].exp -= 300
      m.reply(`▢ *lost*\n\n‣ You : ${text}\n‣ SNIPER : ${astro}\n\n Points *-${poin} XP*`)
    }
  } else if (text == 'مقص') {
    if (astro == 'ورقه') {
      global.db.data.users[m.sender].exp += 300
      m.reply(`▢ *won* 🎊\n\n‣ You : ${text}\n‣ SNIPER : ${astro}\n\n🎁 Points *+${poin} XP*`)
    } else {
      global.db.data.users[m.sender].exp -= 300
      m.reply(`▢ *lost*\n\n‣ You : ${text}\n‣ SNIPER : ${astro}\n\nPoints *-${poin} XP*`)
    }
  } else if (text == 'ورقه') {
    if (astro == 'حجر') {
      global.db.data.users[m.sender].exp += 300
      m.reply(`▢ *won* 🎊\n\n‣ You : ${text}\n‣ SNIPER : ${astro}\n\n🎁 Points *+${poin} XP*`)
    } else {
      global.db.data.users[m.sender].exp -= 300
      m.reply(`▢ *You lost*\n\n‣ You : ${text}\n‣ SNIPER : ${astro}\n\nPoints *-${poin} XP*`)
    }
  } else {
    throw reseqv
  }
}
handler.help = ['ppt <حجر/ورقه/مقص>']
handler.tags = ['game']
handler.command = ['ppt']
handler.register = false

export default handler
