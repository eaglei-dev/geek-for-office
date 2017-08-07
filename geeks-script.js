// idea is simple - remove all the content that you don't need. So let's begin

// Clear Page Title.
$(document).prop('title', 'Be Free !')

// remove favicon
$("link[rel='shortcut icon']").attr("href", "");

// remove the default color form the top menu bar
$("#menu-top").css('background', '#868686');

// remove logo
$("#menu-item-147519").html("");

// remove right side bar
$("#secondary").html("");

// remove left side bar
$("div .leftSideBarParent").html("");

// remove somethings from the top.
$("div .top-button-div").html("");
$("div .main_gfg_title").html("");

// remove footer
$("div .iconic-footer").html("");

$("#___gcse_0").html("");


let wordMap = new Map();
// lets remove these words.
wordMap.set('geeksforgeeks', '-');
wordMap.set('interview', 'inter');

let regexs = new Map();
for (let word of wordMap.keys()) {
  regexs.set(word, new RegExp(word, 'gi'));
}

function replace_text (node) {
  if (node.nodeType === Node.TEXT_NODE) {
    if (node.parentNode &&
        node.parentNode.nodeName === 'TEXTAREA') {
      return;
    }
    let content = node.textContent;
    for (let [word, replacement] of wordMap) {
      const regex = regexs.get(word);
      content = content.replace(regex, replacement);
    }
    node.textContent = content;
  }
  else {
    for (let i = 0; i < node.childNodes.length; i++) {
      replace_text(node.childNodes[i]);
    }
  }
}

replace_text(document.body);
