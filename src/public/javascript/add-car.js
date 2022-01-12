$(document).ready(async function () {

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

});  