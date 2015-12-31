//定义全局变量存放处理以后的结果
var ipaddress     = [], //IP地址
	nettype       = [], //子网网络类型
	subnetmask    = [], //子网掩码
	subnet        = 0,  //子网数量
	hostnumbers   = 0,  //子网主机数
	ipaddresstype = 0;  //IP地址类型
	ipaddresstype_result = 0; //选择radio以后最终的地址类型


//输入IP以后自动跳转函数
function network_checkip(x,y)
{
	if(y<256)
	{
		if(x.maxLength == y.length)
		{
			var t = x.tabIndex;
			if(t<$("#network_ipinput").find("input").length)
			{
				$("#network_ipinput").find("input").eq(t).focus().select();
			}
		}
	}
}

//不选择子网和主机数
function network_math()
{
	var network_radiotype_var = network_radiotype(),
	    network_ipnumbers_var = network_ipnumbers(),
	    network_hostnumbers_var = network_hostnumbers();
	if(network_ipnumbers_var == 0 && network_hostnumbers_var == 0)
	{
		if (network_radiotype_var == 1) 
		{
			switch(ipaddresstype)
			{
			case 1:
			nettype[0] = "A类网";
			nettype[2] = nettype[0];
			subnetmask = [255,0,0,0,"/8"];
			subnet = 1;
			hostnumbers = 16777216;
			ipaddresstype_result = 1;
			nettype[1] = "子网是";
			break;

			case 2:
			nettype[0] = "B类网";
			nettype[2] = nettype[0];
			subnetmask = [255,255,0,0,"/16"];
			subnet = 1;
			hostnumbers = 65536;
			ipaddresstype_result = 2;
			nettype[1] = "子网是";
			break;

			case 3:
			nettype[0] = "C类网";
			nettype[2] = nettype[0];
			subnetmask = [255,255,255,0,"/24"];
			subnet = 1;
			hostnumbers = 256;
			ipaddresstype_result = 2;
			nettype[1] = "子网是";
			break;

			case 4:
			nettype[0] = "Ip有误";
			}
		};

		if (network_radiotype_var == 2) 
		{
			switch(ipaddresstype)
			{
			case 1:
			nettype[0] = "A类网";
			break;

			case 2:
			nettype[0] = "B类网";
			break;

			case 3:
			nettype[0] = "C类网";
			break;

			case 4:
			nettype[0] = "Ip有误";
			break;
			}
			nettype[1] = "子网是";
			nettype[2] = "A类网";
			subnetmask = [255,0,0,0,"/8"];
			subnet = 1;
			hostnumbers = 16777216;
			ipaddresstype_result = 1;
		};

		if (network_radiotype_var == 3) 
		{
			switch(ipaddresstype)
			{
			case 1:
			nettype[0] = "A类网";
			break;

			case 2:
			nettype[0] = "B类网";
			break;

			case 3:
			nettype[0] = "C类网";
			break;

			case 4:
			nettype[0] = "Ip有误";
			}
			nettype[1] = "子网是";
			nettype[2] = "B类网";
			subnetmask = [255,255,0,0,"/16"];
			subnet = 1;
			hostnumbers = 65536;
			ipaddresstype_result = 2;
		};

		if (network_radiotype_var == 4) 
		{
			switch(ipaddresstype)
			{
			case 1:
			nettype[0] = "A类网";
			break;

			case 2:
			nettype[0] = "B类网";
			break;

			case 3:
			nettype[0] = "C类网";
			break;

			case 4:
			nettype[0] = "Ip有误";
			}
			nettype[1] = "子网是";
			nettype[2] = "C类网";
			subnetmask = [255,255,255,0,"/24"];
			subnet = 1;
			hostnumbers = 256;
			ipaddresstype_result = 3;		
		};
	}
	if (network_ipnumbers_var != 0 && network_hostnumbers_var == 0)
	{
		switch(parseInt(network_radiotype_var))
		{
			case 1:
			if (ipaddresstype == 1)
			{
				ipaddresstype_result = 1;
				network_ipresult(ipaddresstype_result);
			};

			if (ipaddresstype == 2) 
			{
				ipaddresstype_result = 2;
				network_ipresult(ipaddresstype_result);
			};
			if (ipaddresstype == 3) 
			{
				ipaddresstype_result = 3;
				network_ipresult(ipaddresstype_result);
			};
			if (ipaddresstype == 4) 
			{
				return;
			};
			break;

			case 2:
			ipaddresstype_result = 1;
			network_ipresult(ipaddresstype_result);
			break;

			case 3:
			ipaddresstype_result = 2;
			network_ipresult(ipaddresstype_result);
			break;

			case 4:
			ipaddresstype_result = 3;
			network_ipresult(ipaddresstype_result);
			break;
		};
	};

	if (network_ipnumbers_var == 0 && network_hostnumbers_var != 0) 
	{
		switch(parseInt(network_radiotype_var))
		{
			case 1:
			if (ipaddresstype == 1)
			{
				ipaddresstype_result = 1;
				network_hostresult(ipaddresstype_result);
			};

			if (ipaddresstype == 2) 
			{
				ipaddresstype_result = 2;
				network_hostresult(ipaddresstype_result);
			};
			if (ipaddresstype == 3) 
			{
				ipaddresstype_result = 3;
				network_hostresult(ipaddresstype_result);
			};
			if (ipaddresstype == 4) 
			{
				return;
			};
			break;

			case 2:
			ipaddresstype_result = 1;
			network_hostresult(ipaddresstype_result);
			break;

			case 3:
			ipaddresstype_result = 2;
			network_hostresult(ipaddresstype_result);
			break;

			case 4:
			ipaddresstype_result = 3;
			network_hostresult(ipaddresstype_result);
			break;
		}
	};
}

//获取所选的子网类型
function network_radiotype()
{
	var back = $("input[name = net_radio]:checked").val();
	//console.log(b);
	return back;
}

//获取所选IP子网数量
function network_ipnumbers()
{
	var back = $("select[name = net_ipnumbers]").val();
	//console.log(b);
	return back;
}

//获取所选的主机数
function network_hostnumbers()
{
	var back = $("select[name = net_hostnumbers]").val();
	//console.log(b);
	return back;
}

//全部内容显示函数		
function network_display()
{
	for (var i = 0; i < 4; i++) 
	{
		$("#network_type").find('input').eq(i).val(nettype[i]);
		$("#subnetmask2").find('input').eq(i).val(subnetmask[i]);
		$("#ipaddress2").find('input').eq(i).val(ipaddress[i]);
		$("#ipaddress_10").find('input').eq(i).val(ipaddress[i]);
		$("#subnetmask10").find('input').eq(i).val(subnetmask[i]);
		$("#subnetmask12").find('input').eq(i).val(subnetmask[i]);
	};

	for (var i = 0; i < 5; i++) 
	{
		$("#network_netmask").find('input').eq(i).val(subnetmask[i]);
	};

	$("#network_subnet").find('input').eq(0).val(subnet);

	$("#network_host").find('input').eq(0).val(hostnumbers);
	
	network_math2();
	network_math3();
	network_math7();
	network_math9();
}

//获取IP地址的类型
function network_ipaddresstype()
{
	for (var i = 0; i < 4; i++) 
	{
		ipaddress[i] = $("#network_ipinput").find('input').eq(i).val();
	}

	if (ipaddress[0]<127&&ipaddress[0]>0) 
	{
		ipaddresstype = 1;
		$("#waring").html("");
	}
	else if (ipaddress[0]>=127&&ipaddress[0]<192) 
	{
		ipaddresstype = 2;
		$("#waring").html("");
	}
	else if (ipaddress[0]>=192&&ipaddress[0]<224) 
	{
		ipaddresstype = 3;
		$("#waring").html("");
	}
	else if (ipaddress[0]>=224) 
	{
		ipaddresstype = 4;
		$("#waring").html("请输入正确的IP地址");
	};
}

//选中IP数量后计算子网结果
function network_ipresult(ipresult)
{
	var a = 0;
	var b = 0;
	var c = 0;
	var total = 0;
	var thistype = 0;
	var network_ipnumbers_var = network_ipnumbers();
	switch(ipresult)
	{
		case 1:
		total = 16777216;
		thistype = "A类网";
		break;

		case 2:
		total = 65536;
		thistype = "B类网";
		break;

		case 3:
		total = 256;
		thistype = "C类网";
		break;
	}
	hostnumbers = total/network_ipnumbers_var;
	subnet = network_ipnumbers_var;
	nettype = ["A类网","子网是",thistype];
	a = 32 - Math.log2(hostnumbers);
	network_mask(a,b,c);
}

//选中host数量后计算子网结果
function network_hostresult(ipresult)
{
	var a = 0;
	var b = 0;
	var c = 0;
	var total = 0;
	var thistype = 0;
	var network_hostnumbers_var = network_hostnumbers();
	switch(ipresult)
	{
		case 1:
		total = 16777216;
		thistype = "A类网";
		break;

		case 2:
		total = 65536;
		thistype = "B类网";
		break;

		case 3:
		total = 256;
		thistype = "C类网";
		break;
	}
	hostnumbers = network_hostnumbers();
	subnet = total/network_hostnumbers_var;
	nettype = ["A类网","子网是",thistype];
	a = 32 - Math.log2(hostnumbers);
	network_mask(a,b,c);
}

//计算掩码
function network_mask(a,b,c)
{
	if ((32/a)<2) 
	{
		for (var i = 0; i < a - 16; i++) 
		{
			b = b|(1<<i);
		};
		for (var i = 0; i < 32 - a; i++) 
		{
			b = b << 1;
		};
		subnetmask = [0xff,0xff,(b&0xff00)>>8,(b&0x00ff),"/"+ a];

	};

	if ((32/a)>=2) 
	{
		for (var i = 0; i < a; i++) 
		{
			c = c|(1<<i);
		};
		for (var i = 0; i < 16 - a; i++) 
		{
			c = c << 1;
		};
		subnetmask = [(c&0xff00)>>8,c&0x00ff,0x0000,0x0000,"/"+ a];
	};
}

//清空host中的内容
function network_EmptyHosts()
{
/*	var f = $("select[name = net_ipnumbers]");
	f.node.options.selectedIndex=0;*/
	$("select[name = net_hostnumbers]").val("0");
}

//清空ip中的内容
function network_EmptyNetwork()
{
	/*var f = document.table[0];
	f.network.options.selectedIndex=0;*/
	$("select[name = net_ipnumbers]").val("0");
}

//清空所有内容
function network_delete()
{
	for (var i = 0; i < 5; i++) {
		$("#network_ipinput").find("input").eq(i).val("");
		$("#network_type").find('input').eq(i).val("");
		$("#network_netmask").find('input').eq(i).val("");
		$("#subnetmask2").find('input').eq(i).val("");
		$("#ipaddress2").find('input').eq(i).val("");
		$("#net2").find('input').eq(i).val("");
		$("#host2").find('input').eq(i).val("");
		$("#broadcast2").find('input').eq(i).val("");
		$("#ipaddress_10").find('input').eq(i).val("");
		$("#ipaddress_2").find('input').eq(i).val("");
		$("#ipaddress_16").find('input').eq(i).val("");
		$("#subnetmask10").find('input').eq(i).val("");
		$("#subnetmask12").find('input').eq(i).val("");
		$("#subnetmask13").find('input').eq(i).val("");	
	};

	$("#network_subnet").find('input').eq(0).val("");
	$("#network_host").find('input').eq(0).val("");
	$("select[name = net_ipnumbers]").val("0");
	$("select[name = net_hostnumbers]").val("0");
	$("input[name = ipaddress10_1]").val("");
	$("input[name = subnetmask11_1]").val("");
	$("input[name = net_radio]").get(0).checked = true;
}

//子网列表弹窗显示函数
function network_netlist()
{
	var count = 0;
	subnetWindow=window.open("subnetWindow","_blank","width=600px,scrollbars=yes,menubar=yes,status=yes,resizable=yes");
	subnetWindow.document.write("<h1>网络列表<\/h1>");

	if (ipaddresstype_result == 1) 
	{
		subnetWindow.document.write("<h3>(网络 "+ipaddress[0]+".0.0.0，掩码");
		subnetWindow.document.write(" "+subnetmask[0]+"."+subnetmask[1]+"."+subnetmask[2]+"."+subnetmask[3]+")<\/h3>");
		subnetWindow.document.write("<table border=1>");
		subnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络<\/b><\/td><td colspan=2 align=center><b>主机<\/b><\/td><td rowspan=2 align=center><b>广播地址<\/b><\/td><\/tr>");
		subnetWindow.document.write("<tr><td align=center><b>起始<\/b><\/td><td align=center><b>结束<\/b><\/td><\/tr>");
		nodes = ((16777216/subnet));
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
			if (subnet == 8388608)
			{
				j = i4;
				topi4 = (i+nodes-1) & 255;
				topj = topi4;
			} 
			subnetWindow.document.write("<tr><td>"+ipaddress[0]+"."+ i2 +"."+ i3 +"."+ i4 +"<\/td><td>"+ipaddress[0]+"."+ i2 +"."+ i3 +"."+ j +"<\/td><td>"+ipaddress[0]+"."+ topi2 +"."+ topi3 +"."+ topj + "<\/td><td>"+ipaddress[0]+"."+ topi2 +"."+ topi3 +"."+ topi4 +"<\/td><\/tr>");
			if ((count == 256) && (subnet > 512))
			{
				subnetWindow.document.write("<tr><td>..<\/td><td>..<\/td><td>..<\/td><td>..<\/td><\/tr>");
				i=16777216-(count*nodes);
			}
		}
	};

	if (ipaddresstype_result == 2)
	{
		subnetWindow.document.write("<h3>(网络 "+ipaddress[0]+"."+ipaddress[1]+".0.0，掩码");
		subnetWindow.document.write(" "+subnetmask[0]+"."+subnetmask[1]+"."+subnetmask[2]+"."+subnetmask[3]+")<\/h3>");
		subnetWindow.document.write("<table border=1>");
		subnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络<\/b><\/td><td colspan=2 align=center><b>主机<\/b><\/td><td rowspan=2 align=center><b>广播地址<\/b><\/td><\/tr>");
		subnetWindow.document.write("<tr><td align=center><b>起始<\/b><\/td><td align=center><b>结束<\/b><\/td><\/tr>");
		nodes = ((65536/subnet));
		for (var i=0; i < 65536; i=i+nodes)
		{
			count=count+1;
			i4 = i & 255;
			i3 = (i/256) & 255;
			j=i4+1;
			topi4 = ((i+nodes)-1) & 255;
			topi3 = (((i+nodes)-1)/256) & 255;
			topj = topi4-1;
			if (subnet == 32768)
			{
				j = i4;
				topi4 = (i+nodes-1) & 255;
				topj = topi4;
			}
			subnetWindow.document.write("<tr><td>"+ipaddress[0]+"."+ipaddress[1]+"."+ i3 +"."+ i4 +"<\/td><td>"+ipaddress[0]+"."+ipaddress[1]+"."+ i3 +"."+ j +"<\/td><td>"+ipaddress[0]+"."+ipaddress[1]+"."+ topi3 +"."+ topj + "<\/td><td>"+ipaddress[0]+"."+ipaddress[1]+"."+ topi3 +"."+ topi4 +"<\/td><\/tr>");
			if ((count == 256) && (subnet > 512))
			{
				subnetWindow.document.write("<tr><td>..<\/td><td>..<\/td><td>..<\/td><td>..<\/td><\/tr>");
				i=65536-(count*nodes);
			}
		}
	};

	if (ipaddresstype_result == 3)
	{
		subnetWindow.document.write("<h3>(网络 "+ipaddress[0]+"."+ipaddress[1]+"."+ipaddress[3]+".0，掩码");
		subnetWindow.document.write(" "+subnetmask[0]+"."+subnetmask[1]+"."+subnetmask[2]+"."+subnetmask[3]+")<\/h3>");
		subnetWindow.document.write("<table border=1>");
		subnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络<\/b><\/td><td colspan=2 align=center><b>主机<\/b><\/td><td rowspan=2 align=center><b>广播地址<\/b><\/td><\/tr>");
		subnetWindow.document.write("<tr><td align=center><b>起始<\/b><\/td><td align=center><b>结束<\/b><\/td><\/tr>");
		nodes = ((256/subnet));
		for (var i=0; i < 256; i=i+nodes)
		{
			j=i+1;
			topi = (i+nodes-1) & 255;
			topj = topi-1;
			if (subnet == 128)
				{
					j = i;topi = (i+nodes-1) & 255;
					topj = topi;
				}
			subnetWindow.document.write("<tr><td>"+ipaddress[0]+"."+ipaddress[1]+"."+ipaddress[3]+"."+ i +"<\/td><td>"+ipaddress[0]+"."+ipaddress[1]+"."+ipaddress[3]+"."+ j +"<\/td><td>"+ipaddress[0]+"."+ipaddress[1]+"."+ipaddress[3]+"."+ topj + "<\/td><td>"+ipaddress[0]+"."+ipaddress[1]+"."+ipaddress[3]+"."+topi+"<\/td><\/tr>");
		}
	};
	subnetWindow.document.write("<\/table>");
}

//第2个按钮的函数
function network_math2()
{
	var subnetmask2 = [],
		ipaddress2  = [],
		net2        = [],
		host2       = [],
		broadcast2  = [];

	for (var i = 0; i < 4; i++) {
		subnetmask2[i] = $("#subnetmask2").find('input').eq(i).val();
		ipaddress2[i]  = $("#ipaddress2").find('input').eq(i).val();

		net2[i]  = subnetmask2[i] & ipaddress2[i];
		host2[i] = (~ subnetmask2[i]) & ipaddress2[i];
		broadcast2[i] = net2[i] ^ ~ subnetmask2[i] & 255;

		$("#net2").find('input').eq(i).val(net2[i]);
		$("#host2").find('input').eq(i).val(host2[i]);
		$("#broadcast2").find('input').eq(i).val(broadcast2[i]);
	};
}

//第3个按钮的函数
function network_math3()
{
    var ipaddress10 = [],
    	temp = 0;
    for (var i = 0; i < 4; i++) 
    {
    	ipaddress10[i] = parseInt($("#ipaddress_10").find('input').eq(i).val());
    	$("#ipaddress_2").find('input').eq(i).val(network_toBin(parseInt(ipaddress10[i])));
    	temp = network_toHex(parseInt(ipaddress10[i]));
    	temp = temp.toLocaleUpperCase();
    	$("#ipaddress_16").find('input').eq(i).val(temp);

    };

    $("#ipaddress11_1").val(ipaddress10[0]*16777216+ipaddress10[1]*65536+ipaddress10[2]*256+ipaddress10[3]);
}

//第4个按钮的函数
function network_math4()
{
	var ipaddress2 = [];
	var temp;
	for (var i = 0; i < 4; i++) {
		ipaddress2[i] = $("#ipaddress_2").find('input').eq(i).val();
		$("#ipaddress_10").find('input').eq(i).val(network_binToDec(ipaddress2[i]));
		temp =network_toHex(parseInt($("#ipaddress_10").find('input').eq(i).val()));
		temp = temp.toLocaleUpperCase();
		$("#ipaddress_16").find('input').eq(i).val(temp);
	};
    $("#ipaddress11_1").val(parseInt($("input[name = ipaddress_10_1]").val())*16777216+parseInt($("input[name = ipaddress_10_2]").val())*65536+parseInt($("input[name = ipaddress_10_3]").val())*256+parseInt($("input[name = ipaddress_10_4]").val()));
}

//第5个按钮的函数
function network_math5()
{
	var ipaddress16 = [];
	var temp_5;
	for (var i = 0; i < 4; i++) {
		ipaddress16[i] = $("#ipaddress_16").find('input').eq(i).val();
		$("#ipaddress_10").find('input').eq(i).val(network_hexToDec(ipaddress16[i]));
		temp_5 = $("#ipaddress_10").find('input').eq(i).val();
		$("#ipaddress_2").find('input').eq(i).val(network_toBin(parseInt(temp_5)));
	};
    $("#ipaddress11_1").val(parseInt($("input[name = ipaddress_10_1]").val())*16777216+parseInt($("input[name = ipaddress_10_2]").val())*65536+parseInt($("input[name = ipaddress_10_3]").val())*256+parseInt($("input[name = ipaddress_10_4]").val()));
}

//第6个按钮的函数
function network_math6()
{
	var temp_6;
	var ipaddress10 = [];
	temp_6 = parseInt($("#ipaddress11_1").val());
	$("input[name = ipaddress_10_1]").val(temp_6 >>> 24);
	$("input[name = ipaddress_10_2]").val(temp_6 << 8 >>> 24);
	$("input[name = ipaddress_10_3]").val(temp_6 << 16 >>> 24);
	$("input[name = ipaddress_10_4]").val(temp_6 << 24 >>>24);

	for (var i = 0; i < 4; i++) {
		ipaddress10[i] = parseInt($("#ipaddress_10").find('input').eq(i).val());
    	$("#ipaddress_2").find('input').eq(i).val(network_toBin(parseInt(ipaddress10[i])));
    	temp = network_toHex(parseInt(ipaddress10[i]));
    	temp = temp.toLocaleUpperCase();
    	$("#ipaddress_16").find('input').eq(i).val(temp);
	};
}

//第7个按钮的函数
function network_math7()
{
	var temp = [];
	for (var i = 0; i < 4; i++) 
	{
		temp[i] = parseInt($("#subnetmask10").find('input').eq(i).val());
	};
    if (temp[0] < 255) 
	{
        $("#subnetmask10").find('input').eq(1).val("0");
		$("#subnetmask10").find('input').eq(2).val("0");
		$("#subnetmask10").find('input').eq(3).val("0")
		temp[1] = 0;
		temp[2] = 0;
		temp[3] = 0;
    } else 
	{
        if (temp[1] < 255) 
		{
            $("#subnetmask10").find('input').eq(2).val("0");
			$("#subnetmask10").find('input').eq(3).val("0");
			temp[2] = 0;
			temp[3] = 0;
        } else 
		{
            if (temp[2] < 255) 
			{
                $("#subnetmask10").find('input').eq(3).val("0");
				temp[3] = 0;
            }
        }
    }
    bits = 0;
    bits = bits + network_masknums(temp[0]);
    bits = bits + network_masknums(temp[1]);
    bits = bits + network_masknums(temp[2]);
    bits = bits + network_masknums(temp[3]);
	$("#subnetmask11").val(bits); 
}

//第8个按钮的函数
function network_math8()
{
	var temp_8;
	temp_8 = parseInt($("#subnetmask11").val());
    for (var i = 0; i < 4; i++) {
    	$("#subnetmask10").find('input').eq(i).val(network_toMask(temp_8));
    	temp_8 = temp_8-8;
    };
}

//第9个按钮的函数
function network_math9()
{
	var subnetmask_1 = [];
	for (var i = 0; i < 4; i++) {
		subnetmask_1[i] = parseInt($("#subnetmask12").find('input').eq(i).val());
		subnetmask_1[i] = ~subnetmask_1[i]&255;
		$("#subnetmask13").find('input').eq(i).val(subnetmask_1[i]);
	};
}

//第10个按钮的函数
function network_math10()
{
	var subnetmask_2 = [];
	for (var i = 0; i < 4; i++) {
		subnetmask_2[i] = parseInt($("#subnetmask13").find('input').eq(i).val());
		subnetmask_2[i] = ~subnetmask_2[i]&255;
		$("#subnetmask12").find('input').eq(i).val(subnetmask_2[i]);
	};
}

//二进制转换
function network_toBin(n)
{
	var str;
	n = n.toString(2);
	str = "00000000" + n;
	str = str.substr(n.length,str.length)
	return str;
}

//十六进制转换
function network_toHex(n)
{
	var str;
	n = n.toString(16);
	str = "00" + n;
	str = str.substr(n.length,str.length)
	return str;
}

//子网数量转换成十进制点格式
function network_toMask(binary) {
    var decimal = 0;
    if (binary > 0) {
        decimal = decimal + 128;
    }
    if (binary > 1) {
        decimal = decimal + 64;
    }
    if (binary > 2) {
        decimal = decimal + 32;
    }
    if (binary > 3) {
        decimal = decimal + 16;
    }
    if (binary > 4) {
        decimal = decimal + 8;
    }
    if (binary > 5) {
        decimal = decimal + 4;
    }
    if (binary > 6) {
        decimal = decimal + 2;
    }
    if (binary > 7) {
        decimal = decimal + 1;
    }
    return decimal;
}

//二进制转换成十进制
function network_binToDec(binary) {
    var decimal = 0;
    while (binary.length < 8) {
        binary = "0" + binary;
    }
    if (binary.substring(7, 8) == "1") {
        decimal++;
    }
    if (binary.substring(6, 7) == "1") {
        decimal = decimal + 2;
    }
    if (binary.substring(5, 6) == "1") {
        decimal = decimal + 4;
    }
    if (binary.substring(4, 5) == "1") {
        decimal = decimal + 8;
    }
    if (binary.substring(3, 4) == "1") {
        decimal = decimal + 16;
    }
    if (binary.substring(2, 3) == "1") {
        decimal = decimal + 32;
    }
    if (binary.substring(1, 2) == "1") {
        decimal = decimal + 64;
    }
    if (binary.substring(0, 1) == "1") {
        decimal = decimal + 128;
    }
    return decimal;
}

//16进制数转换成10进制
function network_hexToDec(hex) {
    var j = hex.toUpperCase();
    var d = 0;
    var ch = " ";
    var hexchars = "0123456789ABCDEF";
    for (var i = 0; i < j.length; i++) {
        ch = j.charAt(i);
        d = d * 16 + hexchars.indexOf(ch);
    }
    return d;
}

//计算子网1的数量
function network_masknums(decimal) {
    var bits = 0;
    if (decimal & 128) {
        bits = bits + 1;
    }
    if (decimal & 64) {
        bits = bits + 1;
    }
    if (decimal & 32) {
        bits = bits + 1;
    }
    if (decimal & 16) {
        bits = bits + 1;
    }
    if (decimal & 8) {
        bits = bits + 1;
    }
    if (decimal & 4) {
        bits = bits + 1;
    }
    if (decimal & 2) {
        bits = bits + 1;
    }
    if (decimal & 1) {
        bits = bits + 1;
    }
    return bits;
}