(function ($) {
 
    var methods = {
        init: function (options) {
            $("#text_div").append("<textarea id = 'text' style = 'width : 300px;height : 200px'></textarea>");
        },
        show: function () {
            $("#text_div").show('slow');
        },
        hide: function () {
            $("#text_div").hide('slow');
        },
        update: function (content) {
            var content = $("textarea").val();
           // $("#text").val("textarea"+'\n'+content);

            var textarea = $("#text").val("the text to append \n"+content);
            textarea.scrollTop(textarea[0].scrollHeight - textarea.height());
        },
        pop:function()
        {
            var a,b,c;
            $("#pop2").show('10');
            a = $('#pop').offset().left;
            b= $('#pop').offset().top;
            $("#pop2").css({
                top: b-80,
                left: a+10
            });
            console.log(a);
            console.log(b);
        }
    };
 
    $.fn.tooltip = function (method) {
 
        // 方法调用
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
            
        } else {
            $.error('Method' + method + 'does not exist on jQuery.tooltip');
        }
    };
})(jQuery);