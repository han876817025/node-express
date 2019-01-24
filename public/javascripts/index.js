var a = function () {
    $.ajax({
        url: 'http://localhost:8001/login',//n为任意参数，服务端通过req.params.id获取
        type: 'POST',
        data: {user_id: 10}
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}
document.getElementById('bt').onclick = function () {
    a()
}