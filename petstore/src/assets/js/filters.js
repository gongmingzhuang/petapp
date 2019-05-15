// assets/js/filters.js

// 示例过滤器
const fullTime = val => {
  var dateObj = new Date(Number(val))
  var year = dateObj.getFullYear()
  var month =
 dateObj.getMonth() + 1 > 9
   ? (dateObj.getMonth() + 1).toString()
   : '0' + (dateObj.getMonth() + 1).toString()
  var date =
 dateObj.getDate() > 9
   ? dateObj.getDate().toString()
   : '0' + dateObj.getDate().toString()
  var hour =
 dateObj.getHours() > 9
   ? dateObj.getHours().toString()
   : '0' + dateObj.getHours().toString()
  var minutes =
 dateObj.getMinutes() > 9
   ? dateObj.getMinutes().toString()
   : '0' + dateObj.getMinutes().toString()
  return year + '/' + month + '/' + date + ' ' + hour + ':' + minutes
}
module.exports = {
  fullTime
}
