$(document).ready(async function () {
    alert('application started');

    let response = await getdata();
    let data = response.data;

    showdata(data);
    $("#car-style").on("change", function(){
        const valueStyle = $("#car-style").val();
        return $.ajax({
            url: `/filter/types?style=${valueStyle}`,
            method: 'post',
            dataType: 'json',
            success: (function (response) {
                $('#car-category').html('');
                $('#car-category').append('<option selected disabled>Chọn</option> <option value>Tất cả</option>')
                $.each(response.data, function (index, data) {
                    $('#car-category').append(`<option value="${data.index}">${data.category}</option>`)
                });
            })
        });
    })

    $("#car-category").on("change", function(){
        const valueCategory = $("#car-category").val();
        if (!valueCategory) {
            console.log('hello')
            $('#car-version').html('');
            $('#car-version').append('<option selected disabled>Chọn</option>');
        }
        else 
            return $.ajax({
                url: `/filter/category?category=${valueCategory}`,
                method: 'post',
                dataType: 'json',
                success: (function (response) {
                    $('#car-version').html('');
                    $('#car-version').append('<option selected disabled>Chọn</option> <option value>Tất cả</option>')
                    $.each(response.data, function (index, data) {
                        $('#car-version').append(`<option value="${data}">${data}</option>`)
                    });
                })
            });
    })

    $("#car-style, #car-price, #car-seat, #car-category, #car-fuel, #car-origin, #car-version, #car-sort").on("change", function () {
        const valueStyle = $("#car-style").val();
        const valuePrice = $("#car-price").val();
        const valueSeat = $("#car-seat").val();
        const valueCategory = $("#car-category").val();
        const valueVersion = $("#car-version").val();
        const valueFuel = $("#car-fuel").val();
        const valueOrigin = $("#car-origin").val();
        const valueSort = $("#car-sort").val();
        //filter?style=001
        console.log(valueVersion)
        return $.ajax({
            url: `/filter?style=${valueStyle}&price=${valuePrice}&seat=${valueSeat}&category=${valueCategory}&version=${valueVersion}&fuel=${valueFuel}&origin=${valueOrigin}&sort=${valueSort}`,
            method: 'post',
            dataType: 'json',
            success: (function (response) {
                console.log(response)
                showdata(response.data);
            })
        });
    });

    function showdata(data) {
        $('#list-car').html('');
        $.each(data, function (index, data) {
            const price = (data.priceOriginal).toLocaleString();
            $('#list-car').append(`<div class="col-md-4">
                <div class="box-product-item">
                    <div class="product-item-image">
                        <a href="">
                            <img id="product-car-img" class="img-fluid" src="${data.imageOriginal[0].url}"
                                alt="${data.name}">
                        </a>
                    </div>
                    <div class="product-item-content">
                        <h2 class="content-title">
                            ${data.name}
                        </h2>
                        <p class="content-price">
                            <span>Giá từ</span>
                                <span>
                                    ${price}
                                </span>
                                <span>VNĐ</span>
                        </p>
                        <div class="content-product-description">
                            <p class="mb-2"><span>
                                    ${data.descriptions[0]}
                                </span> - <span>
                                    ${data.types}
                                </span> - <span>
                                    ${data.descriptions[2]}
                                </span></p>
                            <p class="mb-2"><span>
                                    ${data.descriptions[3]}
                                </span> - <span>
                                    ${data.descriptions[4]}
                                </span></p>
                            <p class="mb-2"><span>
                                    ${data.descriptions[5]}
                                </span></p>
                        </div>
                        <div class="content-product-compare mt-4">
                            <button class="btn btn-danger">DỰ TOÁN</button>
                            <button class="btn btn-outline-danger">SO SÁNH</button>
                        </div>
                    </div>
                </div>
            </div>`);
        });
    }

    function getdata() {
        console.log('getdata')
        return $.ajax({
            url: '/getproducts',
            method: 'get',
            dataType: 'json'
        });
    }
});  