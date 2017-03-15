(function(){
    $.ajax({
        url: './books',
        method : 'GET',
        dataType : 'json',
        contentType:"application/json; charset=UTF-8",
        success : function(data, textStatus, jqXHR){
            //console.log(data)
            $('.beautify pre').text(JSON.stringify(data, null, 4))
        },
        error : function(jsXHR, textStatus, errorThrown){
            console.log()
        },
    });
})()
