var code = "unknown";

var version = 0;

var platform = "Win";

var j = 0;

var i = navigator.userAgent.indexOf("MSIE");

if (i >= 0 && j == 0) {
    code = "MSIE";
    version = parseFloat(navigator.userAgent.substring(i + 5, i + 9));
    j = 1;
}

i = navigator.userAgent.indexOf("Opera");

if (i >= 0 && j == 0) {
    code = "Opera";
    version = parseFloat(navigator.userAgent.substring(i + 5, i + 11));
    j = 1;
}

i = navigator.userAgent.indexOf("Mozilla/");

if (i >= 0 && j == 0) {
    code = "NS";
    version = parseFloat(navigator.userAgent.substring(i + 8, i + 12));
}

if (navigator.userAgent.indexOf("Mac") >= 0) {
    platform = "Mac";
}

if (navigator.userAgent.indexOf("OS/2") >= 0) {
    platform = "OS/2";
}

if (navigator.userAgent.indexOf("X11") >= 0) {
    platform = "UNIX";
}

function ClearAll(f) {
    f.node.options.selectedIndex = 0;
    f.network.options.selectedIndex = 0;
    f.cf[0].checked = true;
    f.oct1.value = "";
    f.oct2.value = "";
    f.oct3.value = "";
    f.oct4.value = "";
    f.snm1.value = "";
    f.snm2.value = "";
    f.snm3.value = "";
    f.snm4.value = "";
    f.snm1a.value = "";
    f.snm2a.value = "";
    f.snm3a.value = "";
    f.snm4a.value = "";
    f.snm1c.value = "";
    f.snm2c.value = "";
    f.snm3c.value = "";
    f.snm4c.value = "";
    f.snm1d.value = "";
    f.snm2d.value = "";
    f.snm3d.value = "";
    f.snm4d.value = "";
    f.snm1e.value = "";
    f.snm2e.value = "";
    f.snm3e.value = "";
    f.snm4e.value = "";
    f.oct1a.value = "";
    f.oct2a.value = "";
    f.oct3a.value = "";
    f.oct4a.value = "";
    f.oct1b.value = "";
    f.oct2b.value = "";
    f.oct3b.value = "";
    f.oct4b.value = "";
    f.hex1b.value = "";
    f.hex2b.value = "";
    f.hex3b.value = "";
    f.hex4b.value = "";
    f.bin1b.value = "";
    f.bin2b.value = "";
    f.bin3b.value = "";
    f.bin4b.value = "";
    f.nw1a.value = "";
    f.nw2a.value = "";
    f.nw3a.value = "";
    f.nw4a.value = "";
    f.node1a.value = "";
    f.node2a.value = "";
    f.node3a.value = "";
    f.node4a.value = "";
    f.nwclass.value = "";
    f.nwclass1.value = "";
    f.subsuper.value = "";
    f.nwquant.value = "";
    f.nodequant.value = "";
    f.snmbits.value = "";
    f.broad1a.value = "";
    f.broad2a.value = "";
    f.broad3a.value = "";
    f.broad4a.value = "";
    f.snmbitsc.value = "";
    f.dec1b.value = "";
}

function listsubnets(f) {
    compute(f);
    if (f.nwclass.value != "Illegal") {
        SubnetWindow = window.open("", "SubnetWindow", "width=600px,scrollbars=yes,menubar=yes,status=yes,resizable=yes");
        SubnetWindow.document.write("<h1>网络列表</h1>");
        networks = f.nwquant.value;
        nodes = f.nodequant.value + 2;
        SubnetWindow.status = "正在生成表格";
        if (f.subsuper.value == "子网是") {
            var count = 0;
            SubnetWindow.status = "正在生成表格";
            if (f.nwclass1.value == "C类网") {
                SubnetWindow.document.write("<h3>(网络 " + f.nw1a.value + "." + f.nw2a.value + "." + f.nw3a.value + ".0，掩码");
                SubnetWindow.document.write(" " + f.snm1.value + "." + f.snm2.value + "." + f.snm3.value + "." + f.snm4.value + ")</h3>");
                SubnetWindow.document.write("<table border=1>");
                SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络</b></td><td colspan=2 align=center><b>主机</b></td><td rowspan=2 align=center><b>广播地址</b></td></tr>");
                SubnetWindow.document.write("<tr><td align=center><b>起始</b></td><td align=center><b>结束</b></td></tr>");
                nodes = 256 / networks;
                for (var i = 0; i < 256; i = i + nodes) {
                    j = i + 1;
                    topi = i + nodes - 1 & 255;
                    topj = topi - 1;
                    if (networks == 128) {
                        j = i;
                        topi = i + nodes - 1 & 255;
                        topj = topi;
                    }
                    SubnetWindow.document.write("<tr><td>" + f.oct1.value + "." + f.oct2.value + "." + f.oct3.value + "." + i + "</td><td>" + f.oct1.value + "." + f.oct2.value + "." + f.oct3.value + "." + j + "</td><td>" + f.oct1.value + "." + f.oct2.value + "." + f.oct3.value + "." + topj + "</td><td>" + f.oct1.value + "." + f.oct2.value + "." + f.oct3.value + "." + topi + "</td></tr>");
                }
            }
            if (f.nwclass1.value == "B类网") {
                SubnetWindow.document.write("<h3>(网络 " + f.nw1a.value + "." + f.nw2a.value + ".0.0，掩码");
                SubnetWindow.document.write(" " + f.snm1.value + "." + f.snm2.value + "." + f.snm3.value + "." + f.snm4.value + ")</h3>");
                SubnetWindow.document.write("<table border=1>");
                SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络</b></td><td colspan=2 align=center><b>主机</b></td><td rowspan=2 align=center><b>广播地址</b></td></tr>");
                SubnetWindow.document.write("<tr><td align=center><b>起始</b></td><td align=center><b>结束</b></td></tr>");
                nodes = 65536 / networks;
                for (var i = 0; i < 65536; i = i + nodes) {
                    count = count + 1;
                    i4 = i & 255;
                    i3 = i / 256 & 255;
                    j = i4 + 1;
                    topi4 = i + nodes - 1 & 255;
                    topi3 = (i + nodes - 1) / 256 & 255;
                    topj = topi4 - 1;
                    if (networks == 32768) {
                        j = i4;
                        topi4 = i + nodes - 1 & 255;
                        topj = topi4;
                    }
                    SubnetWindow.document.write("<tr><td>" + f.oct1.value + "." + f.oct2.value + "." + i3 + "." + i4 + "</td><td>" + f.oct1.value + "." + f.oct2.value + "." + i3 + "." + j + "</td><td>" + f.oct1.value + "." + f.oct2.value + "." + topi3 + "." + topj + "</td><td>" + f.oct1.value + "." + f.oct2.value + "." + topi3 + "." + topi4 + "</td></tr>");
                    if (count == 256 && networks > 512) {
                        SubnetWindow.document.write("<tr><td>..</td><td>..</td><td>..</td><td>..</td></tr>");
                        i = 65536 - count * nodes;
                    }
                }
            }
            if (f.nwclass1.value == "A类网") {
                SubnetWindow.document.write("<h3>(网络 " + f.nw1a.value + ".0.0.0，掩码");
                SubnetWindow.document.write(" " + f.snm1.value + "." + f.snm2.value + "." + f.snm3.value + "." + f.snm4.value + ")</h3>");
                SubnetWindow.document.write("<table border=1>");
                SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络</b></td><td colspan=2 align=center><b>主机</b></td><td rowspan=2 align=center><b>广播地址</b></td></tr>");
                SubnetWindow.document.write("<tr><td align=center><b>起始</b></td><td align=center><b>结束</b></td></tr>");
                nodes = 16777216 / networks;
                for (var i = 0; i < 16777216; i = i + nodes) {
                    count = count + 1;
                    i4 = i & 255;
                    i3 = i / 256 & 255;
                    i2 = i / 65536 & 255;
                    j = i4 + 1;
                    topi4 = i + nodes - 1 & 255;
                    topi3 = (i + nodes - 1) / 256 & 255;
                    topi2 = (i + nodes - 1) / 65536 & 255;
                    topj = topi4 - 1;
                    if (networks == 8388608) {
                        j = i4;
                        topi4 = i + nodes - 1 & 255;
                        topj = topi4;
                    }
                    SubnetWindow.document.write("<tr><td>" + f.oct1.value + "." + i2 + "." + i3 + "." + i4 + "</td><td>" + f.oct1.value + "." + i2 + "." + i3 + "." + j + "</td><td>" + f.oct1.value + "." + topi2 + "." + topi3 + "." + topj + "</td><td>" + f.oct1.value + "." + topi2 + "." + topi3 + "." + topi4 + "</td></tr>");
                    if (count == 256 && networks > 512) {
                        SubnetWindow.document.write("<tr><td>..</td><td>..</td><td>..</td><td>..</td></tr>");
                        i = 16777216 - count * nodes;
                    }
                }
            }
        }
        if (f.subsuper.value == "Supernetted") {
            SubnetWindow.document.write("<h3>(网络 " + f.nw1a.value + "." + f.nw2a.value + "." + f.nw3a.value + ".0，掩码");
            SubnetWindow.document.write(" " + f.snm1.value + "." + f.snm2.value + "." + f.snm3.value + "." + f.snm4.value + ")</h3>");
            SubnetWindow.document.write("<table border=1>");
            SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络</b></td><td colspan=2 align=center><b>主机</b></td><td rowspan=2 align=center><b>广播地址</b></td></tr>");
            SubnetWindow.document.write("<tr><td align=center><b>起始</b></td><td align=center><b>结束</b></td></tr>");
            i = f.nw4a.value + 1;
            j = f.broad4a.value - 1;
            SubnetWindow.document.write("<tr><td>" + f.nw1a.value + "." + f.nw2a.value + "." + f.nw3a.value + "." + f.nw4a.value + "</td><td>" + f.nw1a.value + "." + f.nw2a.value + "." + f.nw3a.value + "." + i + "</td><td>" + f.broad1a.value + "." + f.broad2a.value + "." + f.broad3a.value + "." + j + "</td><td>" + f.broad1a.value + "." + f.broad2a.value + "." + f.broad3a.value + "." + f.broad4a.value + "</td></tr>");
        }
        SubnetWindow.document.write("</table>");
        SubnetWindow.status = "完成";
    }
}

function compute2(f) {
    var cf = 1;
    if (f.cf[1].checked == "1") cf = f.cf[1].value;
    if (f.cf[2].checked == "1") cf = f.cf[2].value;
    if (f.cf[3].checked == "1") cf = f.cf[3].value;
    if (code == "MSIE") {
        var node = f.node.value;
        var nw = f.network.value;
        if (node > 0) {
            nw = 0;
            f.network.options.selectedIndex = 0;
            node = eval(eval(node));
        }
    } else {
        var i = f.node.selectedIndex;
        var node = parseInt(f.node.options[i].value);
        var j = f.network.selectedIndex;
        var nw = parseInt(f.network.options[j].value);
        if (node > 0) {
            nw = 0;
            f.network.options.selectedIndex = 0;
            node = eval(eval(node));
        }
    }
    if (nw == 0 && node == 0) nw = 1;
    var power2 = 2;
    if (f.oct1.value > 255) f.oct1.value = 255;
    if (f.oct2.value > 255) f.oct2.value = 255;
    if (f.oct3.value > 255) f.oct3.value = 255;
    if (f.oct4.value > 255) f.oct4.value = 255;
    if (f.oct1.value > 0 && f.oct1.value < 127) f.nwclass.value = "A类网";
    if (f.oct1.value > 127 && f.oct1.value < 192) f.nwclass.value = "B类网";
    if (f.oct1.value > 191 && f.oct1.value < 224) f.nwclass.value = "C类网";
    if (f.oct1.value < 1 || f.oct1.value > 223) {
        f.nwclass.value = "Illegal";
        f.nwclass1.value = "";
        f.subsuper.value = "";
        f.nwquant.value = 0;
        f.nodequant.value = 0;
        f.snm1.value = 0;
        f.snm2.value = 0;
        f.snm3.value = 0;
        f.snm4.value = 0;
        f.snmbits.value = 0;
    }
    if (f.nwclass.value == "A类网" && cf == 1 || cf == 2 && f.nwclass.value != "Illegal") {
        if (nw >= 1) node = 16777216 / nw;
        var nwtemp;
        if (node > 16777216) {
            f.nwclass1.value = "";
            nw = 1073741824 / node;
            nwtemp = nw;
            f.snm1.value = ~(64 / nw - 1) & 255;
            f.snm2.value = 0;
            f.snm3.value = 0;
            f.snm4.value = 0;
            f.subsuper.value = "Supernetted";
            nw = 1;
        } else {
            f.nwclass1.value = "A类网";
            nw = 16777216 / node;
            nwtemp = nw;
            f.snm1.value = 255;
            f.snm2.value = ~(256 / nw - 1) & 255;
            f.snm3.value = ~(65536 / nw - 1) & 255;
            f.snm4.value = ~(16777216 / nw - 1) & 255;
            f.subsuper.value = "子网是";
            power2 = power2 + 6;
        }
        while (nwtemp > 1) {
            nwtemp = nwtemp / 2;
            power2 = power2 + 1;
        }
        f.nodequant.value = node;
        f.nwquant.value = nw;
        f.snmbits.value = "/" + power2;
    }
    if (f.nwclass.value == "B类网" && cf == 1 || cf == 3 && f.nwclass.value != "Illegal") {
        if (nw > 32768) nw = 32768;
        if (nw >= 1) node = 65536 / nw;
        var nwtemp;
        if (node > 65536) {
            f.nwclass1.value = "";
            nw = 1073741824 / node;
            nwtemp = nw;
            f.snm1.value = ~(64 / nw - 1) & 255;
            f.snm2.value = ~(16384 / nw - 1) & 255;
            f.snm3.value = 0;
            f.snm4.value = 0;
            f.subsuper.value = "Supernetted";
            nw = 1;
        } else {
            f.nwclass1.value = "B类网";
            nw = 65536 / node;
            nwtemp = nw;
            f.snm1.value = 255;
            f.snm2.value = 255;
            f.snm3.value = ~(256 / nw - 1) & 255;
            f.snm4.value = ~(65536 / nw - 1) & 255;
            f.subsuper.value = "子网是";
            power2 = power2 + 14;
        }
        while (nwtemp > 1) {
            nwtemp = nwtemp / 2;
            power2 = power2 + 1;
        }
        f.nodequant.value = node;
        f.nwquant.value = nw;
        f.snmbits.value = "/" + power2;
    }
    if (f.nwclass.value == "C类网" && cf == 1 || cf == 4 && f.nwclass.value != "Illegal") {
        if (nw > 128) nw = 128;
        if (nw >= 1) node = 256 / nw;
        var nwtemp;
        if (node > 256) {
            f.nwclass1.value = "";
            nw = 1073741824 / node;
            nwtemp = nw;
            f.snm1.value = ~(64 / nw - 1) & 255;
            f.snm2.value = ~(16384 / nw - 1) & 255;
            f.snm3.value = ~(4194304 / nw - 1) & 255;
            f.snm4.value = 0;
            f.subsuper.value = "Supernetted";
            nw = 1;
        } else {
            f.nwclass1.value = "C类网";
            nw = 256 / node;
            nwtemp = nw;
            f.snm1.value = 255;
            f.snm2.value = 255;
            f.snm3.value = 255;
            f.snm4.value = ~(256 / nw - 1) & 255;
            f.subsuper.value = "子网是";
            power2 = power2 + 22;
        }
        while (nwtemp > 1) {
            nwtemp = nwtemp / 2;
            power2 = power2 + 1;
        }
        f.nodequant.value = node;
        f.nwquant.value = nw;
        f.snmbits.value = "/" + power2;
    }
    f.snm1a.value = f.snm1.value;
    f.snm2a.value = f.snm2.value;
    f.snm3a.value = f.snm3.value;
    f.snm4a.value = f.snm4.value;
    f.oct1a.value = f.oct1.value;
    f.oct2a.value = f.oct2.value;
    f.oct3a.value = f.oct3.value;
    f.oct4a.value = f.oct4.value;
    f.oct1b.value = f.oct1.value;
    f.oct2b.value = f.oct2.value;
    f.oct3b.value = f.oct3.value;
    f.oct4b.value = f.oct4.value;
    compute(f);
    compute3(f);
    f.snm1c.value = f.snm1.value;
    f.snm2c.value = f.snm2.value;
    f.snm3c.value = f.snm3.value;
    f.snm4c.value = f.snm4.value;
    computeSNMA(f);
    f.snm1d.value = f.snm1.value;
    f.snm2d.value = f.snm2.value;
    f.snm3d.value = f.snm3.value;
    f.snm4d.value = f.snm4.value;
    computeINV1(f);
    if (f.nw1a.value == 0 && f.nw2a.value == 0 && f.nw3a.value == 0 && f.nw4a.value == 0 || f.broad1a.value == 255 && f.broad2a.value == 255 && f.broad3a.value == 255 && f.broad4a.value == 255) {
        f.nwclass.value = "Illegal";
        f.nwclass1.value = "";
        f.subsuper.value = "";
        f.nwquant.value = 0;
        f.nodequant.value = 0;
        f.snm1.value = 0;
        f.snm2.value = 0;
        f.snm3.value = 0;
        f.snm4.value = 0;
        f.snmbits.value = 0;
    }
    SetCookieValues("oct1", f.oct1.value);
    SetCookieValues("oct2", f.oct2.value);
    SetCookieValues("oct3", f.oct3.value);
    SetCookieValues("oct4", f.oct4.value);
    SetCookieValues("node", f.node.selectedIndex);
    SetCookieValues("network", f.network.selectedIndex);
    SetCookieValues("cf", cf);
}

function compute(f) {
    if (f.oct1a.value > 255) f.oct1a.value = 255;
    if (f.oct2a.value > 255) f.oct2a.value = 255;
    if (f.oct3a.value > 255) f.oct3a.value = 255;
    if (f.oct4a.value > 255) f.oct4a.value = 255;
    if (f.snm1a.value > 255) f.snm1a.value = 255;
    if (f.snm2a.value > 255) f.snm2a.value = 255;
    if (f.snm3a.value > 255) f.snm3a.value = 255;
    if (f.snm4a.value > 255) f.snm4a.value = 255;
    f.nw1a.value = eval(f.snm1a.value & f.oct1a.value);
    f.nw2a.value = eval(f.snm2a.value & f.oct2a.value);
    f.nw3a.value = eval(f.snm3a.value & f.oct3a.value);
    f.nw4a.value = eval(f.snm4a.value & f.oct4a.value);
    f.node1a.value = eval(~f.snm1a.value & f.oct1a.value);
    f.node2a.value = eval(~f.snm2a.value & f.oct2a.value);
    f.node3a.value = eval(~f.snm3a.value & f.oct3a.value);
    f.node4a.value = eval(~f.snm4a.value & f.oct4a.value);
    f.broad1a.value = f.nw1a.value ^ ~f.snm1a.value & 255;
    f.broad2a.value = f.nw2a.value ^ ~f.snm2a.value & 255;
    f.broad3a.value = f.nw3a.value ^ ~f.snm3a.value & 255;
    f.broad4a.value = f.nw4a.value ^ ~f.snm4a.value & 255;
    SetCookieValues("oct1a", f.oct1a.value);
    SetCookieValues("oct2a", f.oct2a.value);
    SetCookieValues("oct3a", f.oct3a.value);
    SetCookieValues("oct4a", f.oct4a.value);
    SetCookieValues("snm1a", f.snm1a.value);
    SetCookieValues("snm2a", f.snm2a.value);
    SetCookieValues("snm3a", f.snm3a.value);
    SetCookieValues("snm4a", f.snm4a.value);
}

function compute3(f) {
    if (f.oct1b.value > 255) f.oct1b.value = 255;
    if (f.oct2b.value > 255) f.oct2b.value = 255;
    if (f.oct3b.value > 255) f.oct3b.value = 255;
    if (f.oct4b.value > 255) f.oct4b.value = 255;
    f.bin1b.value = d2b(f.oct1b.value);
    f.bin2b.value = d2b(f.oct2b.value);
    f.bin3b.value = d2b(f.oct3b.value);
    f.bin4b.value = d2b(f.oct4b.value);
    f.hex1b.value = d2h(f.oct1b.value);
    f.hex2b.value = d2h(f.oct2b.value);
    f.hex3b.value = d2h(f.oct3b.value);
    f.hex4b.value = d2h(f.oct4b.value);
    f.dec1b.value = eval(f.oct1b.value * 16777216) + eval(f.oct2b.value * 65536) + eval(f.oct3b.value * 256) + eval(f.oct4b.value);
    SetCookieValues("dec1b", f.dec1b.value);
}

function compute4(f) {
    f.oct1b.value = b2d(f.bin1b.value);
    f.oct2b.value = b2d(f.bin2b.value);
    f.oct3b.value = b2d(f.bin3b.value);
    f.oct4b.value = b2d(f.bin4b.value);
    f.hex1b.value = d2h(f.oct1b.value);
    f.hex2b.value = d2h(f.oct2b.value);
    f.hex3b.value = d2h(f.oct3b.value);
    f.hex4b.value = d2h(f.oct4b.value);
    f.dec1b.value = eval(f.oct1b.value * 16777216) + eval(f.oct2b.value * 65536) + eval(f.oct3b.value * 256) + eval(f.oct4b.value);
    SetCookieValues("dec1b", f.dec1b.value);
}

function compute5(f) {
    f.oct1b.value = h2d(f.hex1b.value);
    f.oct2b.value = h2d(f.hex2b.value);
    f.oct3b.value = h2d(f.hex3b.value);
    f.oct4b.value = h2d(f.hex4b.value);
    f.bin1b.value = d2b(f.oct1b.value);
    f.bin2b.value = d2b(f.oct2b.value);
    f.bin3b.value = d2b(f.oct3b.value);
    f.bin4b.value = d2b(f.oct4b.value);
    f.dec1b.value = eval(f.oct1b.value * 16777216) + eval(f.oct2b.value * 65536) + eval(f.oct3b.value * 256) + eval(f.oct4b.value);
    SetCookieValues("dec1b", f.dec1b.value);
}

function compute6(f) {
    f.oct1b.value = f.dec1b.value >>> 24;
    f.oct2b.value = f.dec1b.value << 8 >>> 24;
    f.oct3b.value = f.dec1b.value << 16 >>> 24;
    f.oct4b.value = f.dec1b.value << 24 >>> 24;
    f.bin1b.value = d2b(f.oct1b.value);
    f.bin2b.value = d2b(f.oct2b.value);
    f.bin3b.value = d2b(f.oct3b.value);
    f.bin4b.value = d2b(f.oct4b.value);
    f.hex1b.value = d2h(f.oct1b.value);
    f.hex2b.value = d2h(f.oct2b.value);
    f.hex3b.value = d2h(f.oct3b.value);
    f.hex4b.value = d2h(f.oct4b.value);
    SetCookieValues("dec1b", f.dec1b.value);
}

function computeSNMA(f) {
    f.snm1c.value = snmcorrect(f.snm1c.value);
    if (f.snm1c.value < 255) {
        f.snm2c.value = 0;
        f.snm3c.value = 0;
        f.snm4c.value = 0;
    } else {
        f.snm2c.value = snmcorrect(f.snm2c.value);
        if (f.snm2c.value < 255) {
            f.snm1c.value = 255;
            f.snm3c.value = 0;
            f.snm4c.value = 0;
        } else {
            f.snm3c.value = snmcorrect(f.snm3c.value);
            if (f.snm3c.value < 255) {
                f.snm1c.value = 255;
                f.snm2c.value = 255;
                f.snm4c.value = 0;
            } else {
                f.snm4c.value = snmcorrect(f.snm4c.value);
            }
        }
    }
    bits = 0;
    bits = bits + d2bits(f.snm1c.value);
    bits = bits + d2bits(f.snm2c.value);
    bits = bits + d2bits(f.snm3c.value);
    bits = bits + d2bits(f.snm4c.value);
    f.snmbitsc.value = bits;
}

function computeSNMB(f) {
    if (f.snmbitsc.value < 0) f.snmbitsc.value = 0;
    if (f.snmbitsc.value > 32) f.snmbitsc.value = 32;
    f.snm1c.value = bits2d(f.snmbitsc.value);
    f.snm2c.value = bits2d(f.snmbitsc.value - 8);
    f.snm3c.value = bits2d(f.snmbitsc.value - 16);
    f.snm4c.value = bits2d(f.snmbitsc.value - 24);
}

function computeINV1(f) {
    f.snm1e.value = ~f.snm1d.value & 255;
    f.snm2e.value = ~f.snm2d.value & 255;
    f.snm3e.value = ~f.snm3d.value & 255;
    f.snm4e.value = ~f.snm4d.value & 255;
}

var f = document.forms[0];

var l = f.elements.length;

function EmptyHosts() {
    f.node.options.selectedIndex = 0;
}

function EmptyNetwork() {
    f.network.options.selectedIndex = 0;
}

function SetOrder() {
    var c;
    var k = 0;
    for (var i = 0; i < l - 1; i++) {
        c = f.elements[i];
        f.elements[i].taborder = i;
    }
    return;
}

function Jump() 
{
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


function d2h(decimal) {
    var j = decimal;
    var hexchars = "0123456789ABCDEF";
    var hv = "";
    for (var i = 0; i < 2; i++) {
        k = j & 15;
        hv = hexchars.charAt(k) + hv;
        j = j >> 4;
    }
    return hv;
}

function h2d(hex) {
    var j = hex.toUpperCase();
    var d = 0;
    var ch = " ";
    var hexchars = "0123456789ABCDEF";
    while (j.length < 4) j = 0 + j;
    for (var i = 0; i < 4; i++) {
        ch = j.charAt(i);
        d = d * 16 + hexchars.indexOf(ch);
    }
    return d;
}

function d2b(decimal) {
    var bit8 = 0, bit7 = 0, bit6 = 0, bit5 = 0, bit4 = 0, bit3 = 0, bit2 = 0, bit1 = 0;
    if (decimal & 128) {
        bit8 = 1;
    }
    if (decimal & 64) {
        bit7 = 1;
    }
    if (decimal & 32) {
        bit6 = 1;
    }
    if (decimal & 16) {
        bit5 = 1;
    }
    if (decimal & 8) {
        bit4 = 1;
    }
    if (decimal & 4) {
        bit3 = 1;
    }
    if (decimal & 2) {
        bit2 = 1;
    }
    if (decimal & 1) {
        bit1 = 1;
    }
    return "" + bit8 + bit7 + bit6 + bit5 + bit4 + bit3 + bit2 + bit1;
}

function d2bits(decimal) {
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

function snmcorrect(decimal) {
    snmcorr = decimal;
    if (decimal > 255) snmcorr = 255;
    if (decimal == 253) snmcorr = 254;
    if (decimal > 248 && decimal < 252) snmcorr = 252;
    if (decimal > 240 && decimal < 248) snmcorr = 248;
    if (decimal > 224 && decimal < 240) snmcorr = 240;
    if (decimal > 192 && decimal < 224) snmcorr = 224;
    if (decimal > 128 && decimal < 192) snmcorr = 192;
    if (decimal > 0 && decimal < 128) snmcorr = 128;
    if (decimal < 0) snmcorr = 0;
    return snmcorr;
}

function b2d(binary) {
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

function bits2d(binary) {
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