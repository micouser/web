var userTable = new Vue({
    el: "#user",
    data: {
        users: [],
        here: false
    },
    methods: {
        check: function(user){
            console.log(this)
            console.log("here");
            this.here = !this.here
        }
    }

})

$.ajax({
    url: '../data/name.json',
    type: 'GET',
    dataType: 'json',
    success: function(data){
        console.log(data);
        userTable.users = data;
    }
});

/*var lailo = new Vue({
        el: '#pack',
        data: {
            columns:["fullname","password"],
            password:[]
        },
        methods:{
            creat:function(){
                $('#hider').toggle();
            },
            enabledrag:function(){
                var a = 3;
                console.log("a");
                return a;
            }
        },
        components:{
            pass: {
                template: "#passtable",
                props:{
                    lname : Array,
                    column :Array
                },
                methods:{
                    enabledrag:function(){
                        var a = 3;
                        console.log("a");
                        return a;
                    }
                }
            }
        }
    })

function mdelay(){
    $.get('../data/name.json', function(data) {
        console.log(data);
        lailo.password = data;
    });
}    
mdelay();

function checkup()
{
    var name = $('#newname').val();
    var password = $('#newpassword').val();
    var na = new Object();
    na.fullname = name;
    na.password = password;
    var na2 = JSON.stringify(na);
    localStorage.json = na2;
    lailo.password.push(na);
}*/
/*var miya = new Vue({
    el:'#app',
    data:{
        message:'Hello',
        fname:true
    },
    methods:{
        great:function(){
            return true
        }
    }
})
//miya.data.push({message:'barzzzz'});
var pig = new Vue({
    el:'#app1',
    data:{
        todos:[
            {text:'name'},
            {fname:'Learn JavaScript',password:'think'}
        ]

    }
})*/
