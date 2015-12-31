var $currentNet, $lst, $tbody, $thead, L, M, MN, N, getL, i, id, idNetMap, idx, j, net, netNameMap, tr, _, _b, _e, _i, _j, _k, _ref, _ref1;

$thead = $("table > thead");

$tbody = $("table > tbody");

MN = 128 * 128;

M = 32;

N = MN / M;

getL = function(b, e) {
  var x, _i, _results;
  _results = [];
  for (x = _i = b; _i <= e; x = _i += 1024) {
    _results.push(x);
  }
  return _results;
};


idNetMap = {};

netNameMap = {};

$lst = $("#lst");

(function() {
  var b, e, i, lst, name, net, _i, _j, _len, _len1, _ref, _ref1, _ref2;
  name = "???";
  lst = ["<ul>"];
  _ref = $("#lzy_nets").text().split(/\s/);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    net = _ref[_i];
    console.log(net);
    if (net.slice(0, 2) === "10") {
      _ref1 = utils.ip.netRange(net), b = _ref1[0], e = _ref1[1];
      netNameMap[net] = name;
      _ref2 = getL(b, e);
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        i = _ref2[_j];
        idNetMap[i] = net;
      }
      lst.push("<input style = 'float:left;left:50px' type = 'radio' name = 'ipam'>"+"<li key=title>\n<span class=\"data\">" + net + "</span>\n</li>");
    } else if (net) {
      name = net;
      lst.push("</ul>\n<li key=name>" + name + "</li>\n<ul>");
    }
  }
  lst.push("</ul>");
  return $lst.append(lst.join(""));
})();

$thead.append("<tr>" + ((function() {
  var _i, _results;
  _results = [];
  for (_ = _i = 1; 1 <= N ? _i <= N : _i >= N; _ = 1 <= N ? ++_i : --_i) {
    _results.push("<th></th>");
  }
  return _results;
})()).join("") + "</tr>");

_ref = utils.ip.netRange("10.0.0.0/8"), _b = _ref[0], _e = _ref[1];

L = getL(_b, _e);

console.log(L.length);

for (i = _i = 1, _ref1 = L.length; 1 <= _ref1 ? _i <= _ref1 : _i >= _ref1; i = 1 <= _ref1 ? ++_i : --_i) {
  if (i % N === 0) {
    i;
  }
}

idx = 0;

for (i = _j = 0; 0 <= M ? _j < M : _j > M; i = 0 <= M ? ++_j : --_j) {
  tr = ["<tr>"];
  for (j = _k = 0; 0 <= N ? _k < N : _k > N; j = 0 <= N ? ++_k : --_k) {
    id = L[idx];
    net = idNetMap[id];
    tr.push("<td\ntitle=\"" + (net || "未分配 " + utils.ip.fromInt(id) + "/22") + "\"\nname=" + (netNameMap[net] || "未分配") + "\nclass=" + (Boolean(net)) + "\n></td>");
    idx += 1;
  }
  tr.push("</tr>");
  $tbody.append(tr.join(""));
}

$tbody.on("dblclick", "td", function(e) {
  var $td, name, title;
  $td = $(e.currentTarget);
  title = $td.attr("title");
  name = $td.attr("name");
  console.log(title, name);
  return $("[title='" + title + "']").toggleClass("focus");
});

$lst.on("click", "li", function(e) {
  var $li, k, v;
  $li = $(e.currentTarget);
  $li.toggleClass("focus");
  v = $(".data", $li).text();
  k = $li.attr("key");
  console.log(k, v, "[" + k + "='" + v + "']");
  return $("[" + k + "='" + v + "']").toggleClass("focus");
});

$currentNet = $("#currentNet");

$tbody.on("mouseenter", "td", function(e) {
  var $td;
  $td = $(e.currentTarget);
  return $currentNet.text($td.attr("title"));
});

function btn_click()
{
	var ipam_area_var,ipam_ip_var,ipm_li_var,i=0;
	ipam_area_var = $("#ipam_area").val();
	ipam_ip_var = $("#ipam_ip").val();
	ipam_li_var = $("#lst>li");
	while(ipam_li_var.eq(i).text()!=ipam_area_var)
	{
		i++;
	}
	$("#lst>ul").eq(i+1).append("<li key = 'title'>"+"<span class = 'data'>"+ipam_ip_var+"</span>"+"<span class = 'delete'>x</span>"+"</li>");
	$("#lzy_nets").append(ipam_ip_var);
  $("#ipam_new").toggle('slow/400/fast');
  $(".ipam_container").toggle('fast');

}

function ipam_new(event)
{
    $(".ipam_container").toggle('fast');
    $("#ipam_new").toggle('slow/400/fast');
}

function ipam_editor(event)
{
    $(".ipam_container").toggle('fast');
    $("#ipam_editor").toggle('slow/400/fast');

    var iptext = $("#lst ul>input:checked").next().text();
    var address = $("#lst ul>input:checked").parent().prev().text();
    console.log(iptext);
    console.log(address);
    $("#ipam_area2").val(address);
    $("#ipam_ip2").val(iptext);
}

function btn_click2()
{
    $("#ipam_editor").toggle('slow/400/fast');
    var ipam_ip_var,ipm_li_var,i=0;
    ipam_ip_var = $("#ipam_ip2").val();
    $("#lst ul>input:checked").next().text(ipam_ip_var);
    $(".ipam_container").toggle('fast');
}

function ipam_delete()
{
     $(".ipam_container").toggle('fast');
    $("#ipam_delete").toggle('slow/400/fast');
}

function btn_click3()
{
    $("#lst ul>input:checked").next().remove();
    $("#lst ul>input:checked").remove();
    $("#ipam_delete").toggle('slow/400/fast');
    $(".ipam_container").toggle('fast');

}