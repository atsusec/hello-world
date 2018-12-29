console.log('aaa');

document
  .getElementById('add')
  .addEventListener('click', function () {
    const a = document.getElementById('a').value
    const b = document.getElementById('b').value
    const aa = Number(a)
    const bb = Number(b)

    console.log(aa, bb);
    document.getElementById('answer').innerHTML = aa + bb
  })

