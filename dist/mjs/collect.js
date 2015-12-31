//网络列表弹窗显示函数

function listsubnets(f)
{
    compute(f);
    if (f.nwclass.value != "Illegal")
    {
    SubnetWindow=window.open("","SubnetWindow","width=600px,scrollbars=yes,menubar=yes,status=yes,resizable=yes");
    SubnetWindow.document.write("<h1>网络列表<\/h1>");
    networks=f.nwquant.value;
    nodes=f.nodequant.value+2;
    SubnetWindow.status="正在生成表格";
    if (f.subsuper.value == "子网是")
    {
        var count=0;
        SubnetWindow.status="正在生成表格";
        if (f.nwclass1.value == "C类网")
        {
            SubnetWindow.document.write("<h3>(网络 "+f.nw1a.value+"."+f.nw2a.value+"."+f.nw3a.value+".0，掩码");
            SubnetWindow.document.write(" "+f.snm1.value+"."+f.snm2.value+"."+f.snm3.value+"."+f.snm4.value+")<\/h3>");
            SubnetWindow.document.write("<table border=1>");
            SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络<\/b><\/td><td colspan=2 align=center><b>主机<\/b><\/td><td rowspan=2 align=center><b>广播地址<\/b><\/td><\/tr>");
            SubnetWindow.document.write("<tr><td align=center><b>起始<\/b><\/td><td align=center><b>结束<\/b><\/td><\/tr>");
            nodes = ((256/networks));
            for (var i=0; i < 256; i=i+nodes)
            {
                j=i+1;
                topi = (i+nodes-1) & 255;
                topj = topi-1;
                if (networks == 128)
                    {
                        j = i;topi = (i+nodes-1) & 255;
                        topj = topi;
                    }
                SubnetWindow.document.write("<tr><td>"+f.oct1.value+"."+f.oct2.value+"."+f.oct3.value+"."+ i +"<\/td><td>"+f.oct1.value+"."+f.oct2.value+"."+f.oct3.value+"."+ j +"<\/td><td>"+f.oct1.value+"."+f.oct2.value+"."+f.oct3.value+"."+ topj + "<\/td><td>"+f.oct1.value+"."+f.oct2.value+"."+f.oct3.value+"."+topi+"<\/td><\/tr>");
            }
        }

        if (f.nwclass1.value == "B类网")
        {
            SubnetWindow.document.write("<h3>(网络 "+f.nw1a.value+"."+f.nw2a.value+".0.0，掩码");
            SubnetWindow.document.write(" "+f.snm1.value+"."+f.snm2.value+"."+f.snm3.value+"."+f.snm4.value+")<\/h3>");
            SubnetWindow.document.write("<table border=1>");
            SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络<\/b><\/td><td colspan=2 align=center><b>主机<\/b><\/td><td rowspan=2 align=center><b>广播地址<\/b><\/td><\/tr>");
            SubnetWindow.document.write("<tr><td align=center><b>起始<\/b><\/td><td align=center><b>结束<\/b><\/td><\/tr>");
            nodes = ((65536/networks));
            for (var i=0; i < 65536; i=i+nodes)
            {
                count=count+1;
                i4 = i & 255;
                i3 = (i/256) & 255;
                j=i4+1;topi4 = ((i+nodes)-1) & 255;
                topi3 = (((i+nodes)-1)/256) & 255;
                topj = topi4-1;
                if (networks == 32768)
                {
                    j = i4;topi4 = (i+nodes-1) & 255;
                    topj = topi4;
                }
                SubnetWindow.document.write("<tr><td>"+f.oct1.value+"."+f.oct2.value+"."+ i3 +"."+ i4 +"<\/td><td>"+f.oct1.value+"."+f.oct2.value+"."+ i3 +"."+ j +"<\/td><td>"+f.oct1.value+"."+f.oct2.value+"."+ topi3 +"."+ topj + "<\/td><td>"+f.oct1.value+"."+f.oct2.value+"."+ topi3 +"."+ topi4 +"<\/td><\/tr>");
                if ((count == 256) && (networks > 512))
                {
                    SubnetWindow.document.write("<tr><td>..<\/td><td>..<\/td><td>..<\/td><td>..<\/td><\/tr>");
                    i=65536-(count*nodes);
                }
            }
        }

        if (f.nwclass1.value == "A类网")
        {
            SubnetWindow.document.write("<h3>(网络 "+f.nw1a.value+".0.0.0，掩码");
            SubnetWindow.document.write(" "+f.snm1.value+"."+f.snm2.value+"."+f.snm3.value+"."+f.snm4.value+")<\/h3>");
            SubnetWindow.document.write("<table border=1>");
            SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络<\/b><\/td><td colspan=2 align=center><b>主机<\/b><\/td><td rowspan=2 align=center><b>广播地址<\/b><\/td><\/tr>");
            SubnetWindow.document.write("<tr><td align=center><b>起始<\/b><\/td><td align=center><b>结束<\/b><\/td><\/tr>");
            nodes = ((16777216/networks));
            for (var i=0; i < 16777216; i=i+nodes)
            {
                count=count+1;
                i4 = i & 255;
                i3 = (i/256) & 255;
                i2 = (i/65536) & 255;
                j=i4+1;
                topi4 = ((i+nodes)-1) & 255;
                topi3 = (((i+nodes)-1)/256) & 255;
                topi2 = (((i+nodes)-1)/65536)& 255;
                topj = topi4-1;
                if (networks == 8388608)
                {
                    j = i4;topi4 = (i+nodes-1) & 255;
                    topj = topi4;
                } 
                SubnetWindow.document.write("<tr><td>"+f.oct1.value+"."+ i2 +"."+ i3 +"."+ i4 +"<\/td><td>"+f.oct1.value+"."+ i2 +"."+ i3 +"."+ j +"<\/td><td>"+f.oct1.value+"."+ topi2 +"."+ topi3 +"."+ topj + "<\/td><td>"+f.oct1.value+"."+ topi2 +"."+ topi3 +"."+ topi4 +"<\/td><\/tr>");
                if ((count == 256) && (networks > 512))
                {
                    SubnetWindow.document.write("<tr><td>..<\/td><td>..<\/td><td>..<\/td><td>..<\/td><\/tr>");
                    i=16777216-(count*nodes);
                }
            }
        }
    }

    if (f.subsuper.value == "Supernetted")
    {
        SubnetWindow.document.write("<h3>(网络 "+f.nw1a.value+"."+f.nw2a.value+"."+f.nw3a.value+".0，掩码");
        SubnetWindow.document.write(" "+f.snm1.value+"."+f.snm2.value+"."+f.snm3.value+"."+f.snm4.value+")<\/h3>");
        SubnetWindow.document.write("<table border=1>");
        SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络<\/b><\/td><td colspan=2 align=center><b>主机<\/b><\/td><td rowspan=2 align=center><b>广播地址<\/b><\/td><\/tr>");
        SubnetWindow.document.write("<tr><td align=center><b>起始<\/b><\/td><td align=center><b>结束<\/b><\/td><\/tr>");
        i=f.nw4a.value+1;
        j=f.broad4a.value-1;
        SubnetWindow.document.write("<tr><td>"+f.nw1a.value+"."+f.nw2a.value+"."+f.nw3a.value+"."+f.nw4a.value+"<\/td><td>"+f.nw1a.value+"."+f.nw2a.value+"."+f.nw3a.value+"."+ i +"<\/td><td>"+f.broad1a.value+"."+f.broad2a.value+"."+f.broad3a.value+"."+ j + "<\/td><td>"+f.broad1a.value+"."+f.broad2a.value+"."+f.broad3a.value+"."+f.broad4a.value+"<\/td><\/tr>");
        }
        SubnetWindow.document.write("<\/table>");
        SubnetWindow.status="完成";
    }
}



//10进制转换成2进制
function toBin(intNum)
{
    var answer = "";
    if (/d+/.test(intNum)) 
    {
        while(intNum != 0)
        {
            answer = Math.abs(intNum%2)+answer;
            intNum = parseInt(intNum/2);
        }
        if (answer.length == 0)
        {
            answer = "0";
            return answer;
        };
    }
    else
    {
        return 0;
    }
}

//10进制转换成2进制 函数2
function toDec(dec)
{
    var bits = [];
        dividend = dec;
        remainder = 0;
    while(dividend >= 2)
    {
        remainder = dividend % 2;
        bits.push(remainder);
        dividend = (dividend - remainder) / 2;
    }
    bits.push(dividend);
    bits.reverse();
    return bits.join("");
}


function network_checkip1() 
{
    var f = document.forms[0];
    var l = f.elements.length;
    var c = window.event.srcElement;
    var code = window.event.keyCode;
    var newc;
    if (c.type != "text" || c.value.length < c.maxLength || code < 32 || code >= 33 && code <= 40 || c.taborder == null) return;
    var k = c.taborder;
    while (f.elements[k + 1].name == c.name) 
    {
        k++;
        if (k >= l - 1) return;
    }
    newc = f.elements[k + 1];
    if (newc.type != "hidden") newc.focus();
    if (newc.type == "text") newc.select();
}