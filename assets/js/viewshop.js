var check = 1;
function follow() {
    const follow_text = document.getElementById('follow--text')
    const follower = document.getElementById('product_follower')

    var tmp = parseInt(follower.textContent)

    if(check === 1) {
        follow_text.innerHTML = 'Following';
        follow_text.style.color = 'red';
        follow_text.style.border = '1px solid red';
        follower.innerHTML = tmp+1
        tmp++;
        check = 0;
    }
    else {
        follow_text.innerHTML = 'Follow';
        follow_text.style.color = 'black';
        follow_text.style.border = '1px solid black';
        check = 1;
        follower.innerHTML = tmp-1
        tmp--
    }
}

