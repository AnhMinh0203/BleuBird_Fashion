function editCell(cell) {
    // Lấy nội dung hiện tại của ô
    var currentData = cell.innerHTML;

    // Tạo một ô input để chỉnh sửa dữ liệu
    var input = document.createElement("input");
    input.style.width = '50px';
    input.value = currentData;

    // Khi người dùng kết thúc chỉnh sửa, lưu giá trị mới và xóa ô input
    input.onblur = function () {
        cell.innerHTML = input.value;
    };

    // Thêm ô input vào ô cell
    cell.innerHTML = "";
    cell.appendChild(input);

    // Focus vào ô input để bắt đầu chỉnh sửa
    input.focus();
}

const sizePlus = document.querySelector('.size_plus')

sizePlus.addEventListener('click', function() {
    themCotSize()
})

const table_size = document.getElementById("table_size");

function themCotSize() {
    var header_size = document.getElementById("header_size");
    var header_long = document.getElementById("header_long");
    var header_height = document.getElementById("header_height");
    var header_color = document.getElementById("header_color");
    var header_quantity = document.getElementById("header_quantity");

    header_size.innerHTML += `
        <th onclick="editCell(this)"></th>
    `;
    header_long.innerHTML += `
        <td onclick="editCell(this)"></td>
    `;
    header_height.innerHTML += `
        <td onclick="editCell(this)"></td>
    `;
    header_color.innerHTML += `
        <td onclick="editCell(this)"></td>
    `;
    header_quantity.innerHTML += `
        <td onclick="editCell(this)"></td>
    `;
}

const sizeMinus = document.querySelector('.size_minus')

sizeMinus.addEventListener('click', function() {

    const columnCount = table_size.rows[0].cells.length;

    if (columnCount >= 3) {
      // Duyệt qua tất cả các hàng của bảng và xóa cột cuối cùng (thứ columnCount - 1)
      for (let i = 0; i < table_size.rows.length; i++) {
        table_size.rows[i].deleteCell(columnCount - 1);
      }
    }
})


// const parameterPlus = document.querySelector('.parameter_plus')

// parameterPlus.addEventListener('click', function() {
//     themCotParameter()
// })

// const table_parameter = document.getElementById("table_parameter");

// function themCotParameter() {
//     var header_parameter = document.getElementById("header_parameter");
//     var header_color = document.getElementById("header_color");
//     var header_quantity = document.getElementById("header_quantity");

//     header_parameter.innerHTML += `
//         <th onclick="editCell(this)"></th>
//     `;
//     header_color.innerHTML += `
//         <td onclick="editCell(this)"></td>
//     `;
//     header_quantity.innerHTML += `
//         <td onclick="editCell(this)"></td>
//     `;
// }

// const parameterMinus = document.querySelector('.parameter_minus')

// parameterMinus.addEventListener('click', function() {

//     const columnCount = table_parameter.rows[0].cells.length;

//     if (columnCount >= 3) {
//       // Duyệt qua tất cả các hàng của bảng và xóa cột cuối cùng (thứ columnCount - 1)
//       for (let i = 0; i < table_parameter.rows.length; i++) {
//         table_parameter.rows[i].deleteCell(columnCount - 1);
//       }
//     }
// })

// const parameterMinus = document.querySelector('.parameter_minus')

// parameterMinus.addEventListener('click', function() {

//     const columnCount = table_parameter.rows[0].cells.length;

//     if (columnCount >= 3) {
//       // Duyệt qua tất cả các hàng của bảng và xóa cột cuối cùng (thứ columnCount - 1)
//       for (let i = 0; i < table_parameter.rows.length; i++) {
//         table_parameter.rows[i].deleteCell(columnCount - 1);
//       }
//     }
// })

// function addImg() {
//     var add = document.getElementById('productimg_label')
//     add.innerHTML += `
//         <input type="text" class="productimg_input">
//     `
//     console.log(123)
// }

function addImg() {
    var add = document.getElementById('table_img')
    add.innerHTML += `
        <tr>
            <td contenteditable="true"></td>
        </tr>
    `
}

function deleteImg() {
    var del = document.getElementById('table_img')
    var rowCount = del.rows.length;

    // Kiểm tra xem bảng có ít nhất một dòng không
    if (rowCount > 1) {
        // Xóa dòng cuối cùng (dòng có chỉ số rowCount - 1)
        del.deleteRow(rowCount - 1);
    }
    else {
        alert("Not delete")
    }
}
