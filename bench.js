(function() {

function testHTML() {
  var div = document.createElement('div');
  div.innerHTML = "<li data-reactid=\"22\" class=\"clearfix sideNavItem stat_elem\" id=\"navItem_217974574879787\"><div data-reactid=\"23\" class=\"buttonWrap\" data-testid=\"bookmark_edit_button\"><div data-reactid=\"24\" class=\"uiSideNavEditButton\"><a data-reactid=\"25\" href=\"#\" title=\"Edit Messages link\" aria-label=\"Edit Messages link\" class=\"_1wc5 _26tg accessible_elem\"></a></div></div><a data-reactid=\"26\" data-testid=\"left_nav_item_Messages\" class=\"_5afe sortableItem\" data-gt=\"{&quot;bmid&quot;:&quot;217974574879787&quot;,&quot;count&quot;:&quot;0&quot;,&quot;bookmark_type&quot;:&quot;type_facebook_app&quot;,&quot;rank&quot;:&quot;3&quot;,&quot;nav_items_count&quot;:&quot;4&quot;,&quot;nav_section&quot;:&quot;favorites&quot;,&quot;sec_position&quot;:&quot;1&quot;,&quot;screen_height&quot;:&quot;&quot;,&quot;screen_width&quot;:&quot;&quot;,&quot;total&quot;:&quot;22&quot;,&quot;masher&quot;:&quot;item&quot;}\" title=\"Messages\" href=\"/messages/\" draggable=\"true\"><span data-reactid=\"27\" class=\"imgWrap\" data-testid=\"bookmark_icon_left_nav\"><i data-reactid=\"28\" height=\"16\" width=\"16\" draggable=\"true\" class=\"img sp_YH4CuyEceFD sx_1045ce\"></i></span><div data-reactid=\"29\" class=\"linkWrap noCount\"><span data-reactid=\"30\" class=\"\">Messages</span></div></a></li>";
  return div.firstChild;
}

function testCreate() {
  var node22 = document.createElement("li");
  node22.setAttribute("data-reactid", 22);
  node22.setAttribute("class", "clearfix sideNavItem stat_elem");
  node22["id"] = "navItem_217974574879787";
  var node23 = document.createElement("div");
  node23.setAttribute("data-reactid", 23);
  node23.setAttribute("class", "buttonWrap");
  node23.setAttribute("data-testid", "bookmark_edit_button");
  var node24 = document.createElement("div");
  node24.setAttribute("data-reactid", 24);
  node24.setAttribute("class", "uiSideNavEditButton");
  var node25 = document.createElement("a");
  node25.setAttribute("data-reactid", 25);
  node25["href"] = "#";
  node25["title"] = "Edit Messages link";
  node25.setAttribute("aria-label", "Edit Messages link");
  node25.setAttribute("class", "_1wc5 _26tg accessible_elem");
  node24.appendChild(node25);
  node23.appendChild(node24);
  var node26 = document.createElement("a");
  node26.setAttribute("data-reactid", 26);
  node26.setAttribute("data-testid", "left_nav_item_Messages");
  node26.setAttribute("class", "_5afe sortableItem");
  node26.setAttribute("data-gt", "{\"bmid\":\"217974574879787\",\"count\":\"0\",\"bookmark_type\":\"type_facebook_app\",\"rank\":\"3\",\"nav_items_count\":\"4\",\"nav_section\":\"favorites\",\"sec_position\":\"1\",\"screen_height\":\"\",\"screen_width\":\"\",\"total\":\"22\",\"masher\":\"item\"}");
  node26["title"] = "Messages";
  node26["href"] = "/messages/";
  node26["draggable"] = "false";
  var node27 = document.createElement("span");
  node27.setAttribute("data-reactid", 27);
  node27.setAttribute("class", "imgWrap");
  node27.setAttribute("data-testid", "bookmark_icon_left_nav");
  var node28 = document.createElement("i");
  node28.setAttribute("data-reactid", 28);
  node28.setAttribute("height", "16");
  node28.setAttribute("width", "16");
  node28["draggable"] = "false";
  node28["alt"] = "";
  node28.setAttribute("class", "img sp_YH4CuyEceFD sx_1045ce");
  node27.appendChild(node28);
  var node29 = document.createElement("div");
  node29.setAttribute("data-reactid", 29);
  node29.setAttribute("class", "linkWrap noCount");
  var node30 = document.createElement("span");
  node30.setAttribute("data-reactid", 30);
  node30.setAttribute("class", "");
  node30["textContent"] = "Messages";
  node29.appendChild(node30);
  node26.appendChild(node27);
  node26.appendChild(node29);
  node22.appendChild(node23);
  node22.appendChild(node26);
  return node22;
}

var templateNode = testCreate();
function testClone() {
  var node31 = templateNode.cloneNode(true);
  //node31.setAttribute("data-reactid", 31);
  //node31.setAttribute("class", "clearfix sideNavItem stat_elem");
  node31["id"] = "navItem_2344061033";
  var node32 = node31.childNodes[0];
  //node32.setAttribute("data-reactid", 32);
  //node32.setAttribute("class", "buttonWrap");
  //node32.setAttribute("data-testid", "bookmark_edit_button");
  var node33 = node32.childNodes[0];
  //node33.setAttribute("data-reactid", 33);
  //node33.setAttribute("class", "uiSideNavEditButton");
  var node34 = node33.childNodes[0];
  //node34.setAttribute("data-reactid", 34);
  //node34["href"] = "#";
  node34["title"] = "Edit Events link";
  node34.setAttribute("aria-label", "Edit Events link");
  //node34.setAttribute("class", "_1wc5 _26tg accessible_elem");
  //node33.appendChild(node34);
  //node32.appendChild(node33);
  var node35 = node31.childNodes[1];
  //node35.setAttribute("data-reactid", 35);
  node35.setAttribute("data-testid", "left_nav_item_Events");
  //node35.setAttribute("class", "_5afe sortableItem");
  node35.setAttribute("data-gt", "{\"bmid\":\"2344061033\",\"count\":\"0\",\"bookmark_type\":\"type_facebook_app\",\"rank\":\"4\",\"nav_items_count\":\"4\",\"nav_section\":\"favorites\",\"sec_position\":\"1\",\"screen_height\":\"\",\"screen_width\":\"\",\"total\":\"22\",\"masher\":\"item\"}");
  node35["title"] = "Events";
  node35["href"] = "/events/upcoming?ref=46&action_history=null";
  //node35["draggable"] = "false";
  var node36 = node35.childNodes[0];
  //node36.setAttribute("data-reactid", 36);
  //node36.setAttribute("class", "imgWrap");
  //node36.setAttribute("data-testid", "bookmark_icon_left_nav");
  var node37 = node36.childNodes[0];
  //node37.setAttribute("data-reactid", 37);
  //node37.setAttribute("height", "16");
  //node37.setAttribute("width", "16");
  //node37["draggable"] = "false";
  //node37["alt"] = "";
  node37.setAttribute("class", "img sp_843e1e sx_da52ce");
  //node36.appendChild(node37);
  var node38 = node35.childNodes[1];
  //node38.setAttribute("data-reactid", 38);
  //node38.setAttribute("class", "linkWrap noCount");
  var node39 = node38.childNodes[0];
  //node39.setAttribute("data-reactid", 39);
  //node39.setAttribute("class", "");
  node39["textContent"] = "Events";
  //node38.appendChild(node39);
  //node35.appendChild(node36);
  //node35.appendChild(node38);
  //node31.appendChild(node32);
  //node31.appendChild(node35);
  return node31;
}

window.testHTML = testHTML;
window.testCreate = testCreate;
window.testClone = testClone;

})();
