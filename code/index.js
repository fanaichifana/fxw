//添加代办

   $('#title').keydown(function(e) {
    const localid = []
    e = e || window.event
    const value = $(this).val()
    localid.push(value)
    if(!value) return
    console.log(value)
    if(e.keyCode == "13"){
      // add(value)
      $(this).val('')
      let str = $(`
      <li>
      <input type="checkbox" />
      <p onclick="edit(1)">${ value }</p>
      <a href="javascript:remove(1)">-</a>
      </li>
      `)
      $('#todolist').append(str)
       window.localStorage.setItem('localid', JSON.stringify(localid))
      update()
      update2()
    }
  })
  


  //切换
  $('#todolist').on('click', 'input', function () {
    if($(this).prop('checked')) {
      $('#donelist').append($(this).parent())
      update()
      update2()
    }
  })

  //切换
  $('#donelist').on('click', 'input', function () {
    if(!$(this).prop('checked')){
      $('#todolist').append($(this).parent())
      update()
      update2()
    }
  })

  //删除
  $('#todolist').on('click', 'a', function () {
    console.log('我要进行删除le')
    $(this).parent().remove()
    update()
    update2()
  })

  $('#donelist').on('click', 'a', function () {
    console.log('我要进行删除le')
    $(this).parent().remove()
    update()
    update2()
  })


  //更换文字

  $('#todolist').on('click', 'p', function () {
    console.log('点我了 ')
    str = `
    <input>
    `
    $(this).html(str)
  })


  //数字更新
  function update() {
    const li = document.querySelectorAll('#todolist li')
  console.log(li.length)
  let str = `
  ${ li.length }
  `
  $('#todocount').html(str)
  }

  function update2() {
    const li = document.querySelectorAll('#donelist li')
    console.log(li)
    let str = `
    ${ li.length }
  `
  $('#donecount').html(str)
  }
  

 //跨域
$(function () {
  const script = ddocument.createElement('script')
  const url = `
  https://api.i-lynn.cn/getIpInfo 
  `
  script.src = url
  script.remove()

  
  
})
  
