// 尽量将数据模拟得和抓取的qq接口（https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg）数据一样

export const commonParams = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export const options = {
  param: 'jsonpCallback'
}

export const ERR_OK = 0
