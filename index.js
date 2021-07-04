function getDetails1(){
$.ajax({
url: 'http://demo3311549.mockable.io/canditate',
method: 'GET',
                datatype: 'html',
        success: function(result){
        document.write(result);
        },
        error: function(err, msg){
        alert(msg);
        }
})
}

function getDetails2(){
        $.ajax({
                url: 'http://demo3311549.mockable.io/canditate1',
                method: 'GET',
                datatype: 'html',
        success: function(result){
                document.write(result);
        },
        error: function(err, msg){
                alert(msg);
        }
        })
}

function getDetails3(){
        $.ajax({
                url: 'http://demo3311549.mockable.io/canditate2',
                method: 'GET',
                datatype: 'html',
        success: function(result){
                document.write(result);
        },
        error: function(err, msg){
                alert(msg);
        }
        })
}

function getDetails4(){
        $.ajax({
                url: 'http://demo3311549.mockable.io/canditate3',
                method: 'GET',
                datatype: 'html',
        success: function(result){
                document.write(result);
        },
        error: function(err, msg){
                alert(msg);
        }
        })
}
