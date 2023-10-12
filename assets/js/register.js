function previewImage() {
    var input = document.getElementById('imageInput');
    var img = document.getElementById('previewImage');

    if (input.files && input.files[0]) {
        alert(input.files[0]);
        var reader = new FileReader();
       
        reader.onload = function(e) {
            img.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

const check = document.querySelector('.register_form--shop')

// document.getElementById('action').onclick = function(e){
//     if (this.checked){
//         check.style.display = 'block'
//     }
//     else{
//         check.style.display = 'none'
//     }
// };

const action = document.querySelector('#action')
action.addEventListener('click', function() {
    if (action.checked){
        check.style.display = 'block'
    }
    else{
        check.style.display = 'none'
    }
})