function math(data,length,length2,nets)
{
    var area_length1 = 0,
        area_length2 = 0;
    for (var n = 0; n < data.length; n++) {
        area_length1 = data[n].nets.length + area_length1;
        if(length < area_length1)
        {
            break;
        }
    };
    for (var p = 0; p < data.length; p++) {
        area_length2 = data[p].nets.length + area_length2;
        if (length2 < area_length2)
        {
            break;
        };
    };
    $("#wrong").append(data[n].name+":"+nets[length]+">>"+data[p].name+":"+nets[length2]+"\n");
}

function getData()
{
    $.get('./data/nets.json', function(data) {
        /*optional stuff to do after success */
        var nets = [],nets_data = [],wrong_data = [], m=0;

        for (var i = 0; i < data.length; i++) 
        {
            for (var j = 0; j < data[i].nets.length; j++) 
            {
                nets[m] = data[i].nets[j];
                m++;
            };
        };
        m = 0;
        for (var i = 0; i < nets.length; i++) 
        {
            nets_data[i] = utils.ip.netRange(nets[i]);
        };
        for (var i = 0; i < nets.length; i++) 
        {
            for (var j = i+1; j < nets.length-i; j++) {
                if (nets_data[j][0]>=nets_data[i][0]&&nets_data[j][1]<=nets_data[i][1])
                {   
                    math(data,i,j,nets);
                    console.log("wrong a");
                }
                else if (nets_data[j][0]<nets_data[i][0]&&nets_data[j][1]>nets_data[i][1])
                {
                    console.log("wrong b");
                    math(data,i,j,nets);
                }
                else if (nets_data[j][0]<nets_data[i][0]&&nets_data[j][1]>nets_data[i][0])
                {
                    console.log("wrong c");
                    math(data,i,j,nets);
                }
                else if (nets_data[j][0]>nets_data[i][0]&&nets_data[j][0]<nets_data[i][1]&&nets_data[j][1]>nets_data[i][1])
                {
                    console.log("wrong d");
                    math(data,i,j,nets);
                };
            };
        };

    });
}