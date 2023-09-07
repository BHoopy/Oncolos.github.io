/*CMD
  command: minerM3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Mi
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("balance")
let M = Libs.ResourcesLib.userRes("M13")
let hired = Libs.ResourcesLib.userRes("hired");
let hourly = M.value() * 14
let daily = 24 * hourly

//Max value: 100
//let secs_in_hour = 1 * 60

res.growth.add({
  value: hourly,
interval : 1*60*60*1
})
