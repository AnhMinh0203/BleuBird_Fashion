
const hide = document.querySelector('.login_hidePass--icon')

const pass = document.querySelector('#passWord')

const show = document.querySelector('.login_showPass--icon')

show.addEventListener('click', function() {
    if(pass.type == 'text') {
        pass.type = 'password'
        show.style.display = 'none'
        hide.style.display = 'block'
    }
    else {
        pass.type = 'text'
        show.style.display = 'block'
        hide.style.display = 'none'
    }
})

hide.addEventListener('click', function() {
    if(pass.type == 'password') {
        pass.type = 'text'
        show.style.display = 'block'
        hide.style.display = 'none'
    }
})

// function ShowHidenPass() {
//     const show = document.getElementById('login_showPass--icon')
//     const pass = document.getElementById('passWord')
//     const hidenPass = document.getElementById("login_hidenPass--icon");
//     if(pass.type == 'text') {
//         pass.type = 'password';
//         hidenPass.style.display = "block";
//         show.style.display = "none";
//     }
//     else {
//         pass.type = 'text';
//         hidenPass.style.display = "none";
//         show.style.display = "block";
//     }
// }
