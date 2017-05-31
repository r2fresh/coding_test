(function(){
    $.ajax({
        url: './books',
        method : 'GET',
        dataType : 'json',
        contentType:"application/json; charset=UTF-8",
        success : function(data, textStatus, jqXHR){
            $.each(data, function(index, value){
                var html = "<li><div class='row book'><div class='col-md-3 text-center'>"+
                            "<a href='"+value.link+"'>"+
                            "<img src='"+value.image+"'>"+
                            "</a></div><div class='col-md-9 info'><ul>"+
                            "<li>"+value.title+"</li>"+
                                <!-- author | publisher | pubdate -->
                            "<li>"+value.author+" | "+value.publisher+" | "+value.pubdate+"</li>"+
                                <!-- price → discount -->
                            "<li>(원가) "+value.price+"원 → "+value.discount+"원</li>"+
                                <!-- description -->
                            "<li>"+value.description+"</li></ul></div></div></li>";
                $("#books").append(html);
            });
        },
        error : function(jsXHR, textStatus, errorThrown){
            console.log()
        },
    });
})()
