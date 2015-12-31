var servers = new Vue({
    el: '#dhcpservers',
    data: {
        columns:["id","primary","secondary"],
        dhcp:[]
    },
    methods:{
        enabledrag:function(){
            $("#hnareas li,#assigned li").draggable({
                revert: 'invalid',
                containment: 'document',
                helper: "clone"
            });
            $('#hnareas li,#assigned li').draggable("enable");
            $('#hnareas ol').droppable({
                accept: '#assigned li',
                drop: function(evrnt,ui)
                {
                    appendtolist(ui.draggable,ui.position);    
                }
            });
            for (var i = 0; i < $('#assigned tr').length; i++) {
                $('#assigned').find('tr').eq(i).children(':last').droppable({
                    accept: '#hnareas li',
                    drop: function(event,ui)
                    {
                        console.log(ui.position);
                        appendtotd(ui.draggable,ui.position);
                    }
                });
            };   
        },
        disabledrag:function(){
            $('#hnareas li').draggable("disable");
            $('#assigned li').draggable("disable");
        }
    },
    components:{
        server: {
            template: "#dhcptable",
            props:{
                dhcps : Array,
                column : Array,
                col : Array
            },

        }
    }
})

var disservers = new Vue({
    el:'#hnareas',
    data:{
        arealist:[]
    },
    methods:{},
    components:{
        area:{
            template:'#unassigned',
            props:{
                areas:Array
            }
        }
    }
})

$.get('../data/dhcp.json', function(data) {
    servers.dhcp = data;
});

$.get('../data/nets.json', function(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].dhcp == null) {
            disservers.arealist.push(data[i].name);
        };
    };
});

function appendtolist(pur)
{
    pur.fadeOut(function() {
        pur.appendTo($('#hnareas ol')).fadeIn();
    });   
}

function appendtotd(pur,helperposition)
{
    pur.fadeOut(function() {
        for (var i = 0; i < $('#assigned tr').length; i++) {
            var tdpositon = $('#assigned').find('tr').eq(i).children(':last').offset().top;
            var tdheight = $('#assigned').find('tr').eq(i).children(':last').height();
            if(helperposition.top>tdpositon&&helperposition.top<(tdpositon+tdheight))
            {
                pur.appendTo($('#assigned').find('ol').eq(i)).fadeIn();
            }
        };  
    });
}