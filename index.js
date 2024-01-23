;(function (doc) {
  // 获取日期dom
  const dateDom = doc.querySelector('.time-date')
  // 获取时分秒dom
  const hourDom = doc.querySelector('.time-hour')

  const fillZero = (str, length) => {
    let strLen = (str + '').length
    while (strLen < length) {
      str = '0' + str
      strLen += 1
    }
    return str
  }

  // 更新页面的时间数据
  const setDomDateTime = () => {
    const d = new Date()
    // 月
    const month = d.getMonth() + 1
    // 日
    const day = fillZero(d.getDate(), 2)
    // 时
    const hour = fillZero(d.getHours(), 2)
    // 分
    const min = fillZero(d.getMinutes(), 2)
    // 秒
    const second = fillZero(d.getSeconds(), 2)

    const dateStr = `${month}月${day}日`
    const timeStr = `${hour}:${min}:${second}`

    dateDom.innerHTML = dateStr
    hourDom.innerHTML = timeStr

    // console.log(dateStr, timeStr)
  }

  // 初始化页面时间数据
  const init = () => {
    setDomDateTime()
    setInterval(() => {
      setDomDateTime()
    }, 1000)
  }

  init()
})(document)
