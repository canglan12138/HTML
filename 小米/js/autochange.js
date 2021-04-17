/*
* 轮播图js
* */

window.onload = function () {
  /*
  *保存定时器
  * */
  var timer
  function auto_Change() {
    timer = setInterval(() => {
      current++
      if (current > allImg.length - 1) {
        current = 0
      }
      left_arrow.num = current
      banner_list.style.left = -current * 1226 + 'px'
      setbtn(banner_btn_all,current)
    },2000)
  }

  function setbtn() {
    for (let i = 0;i < banner_btn_all.length;i++) {
      banner_btn_all[i].className = ''
    }
    banner_btn_all[current].className = 'current_btn'
  }
  /*
  *获取 banner_list 元素
  * */
  var banner_list = document.getElementsByClassName('banner_list')[0]
  /*
  *获取所有图片
  * */
  var allImg = banner_list.getElementsByTagName('li')
  /*
  *获取按钮元素
  * */
  var banner_btn_all = document.getElementsByClassName('banner_btn_list')[0].getElementsByTagName('li')
  /*
  *获取左箭头
  * */
  var left_arrow = document.getElementsByClassName('left_arrow')[0]
  /*
  *获取右箭头
  * */
  var right_arrow = document.getElementsByClassName('right_arrow')[0]

  /*
  *保存当前图片的索引
  * */
  var current = 0
  /*
  * 自动轮播
  * */
  auto_Change()

  /*
  * 点击按钮切换图片
  * */

  /*
  *为每一个按钮绑定点击事件
  * */
  for (let i = 0;i < banner_btn_all.length;i++) {
    banner_btn_all[i].onclick = function () {
      /*
      *清除定时器
      * */
      clearInterval(timer)
      current = i
      banner_list.style.left = -current * 1226 + 'px'
      /*
      * 对应的按钮显示
      * */
      setbtn(banner_btn_all,current)
      /*
      * 开启定时器
      * */
      auto_Change(banner_list,allImg,banner_btn_all,current)
    }
  }

  /*
  * 箭头切换图片
  * */
  /*
  *为左箭头绑定单击函数
  * */
  left_arrow.onclick = function () {
    clearInterval(timer)
    current--
    if (current < 0) {
      current = banner_btn_all.length - 1
    }
    banner_list.style.left = -current * 1226 + 'px'
    setbtn()
    auto_Change()
  }
  /*
  *为右箭头绑定单击函数
  * */
  right_arrow.onclick = function () {
    clearInterval(timer)
    current++
    if (current > banner_btn_all.length - 1) {
      current = 0
    }
    banner_list.style.left = -current * 1226 + 'px'
    setbtn()
    auto_Change()
  }
}

