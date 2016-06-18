var elements = document.getElementsByTagName('*');
var toReplaceString = /hifi:\/\/(.*?)/gi;
var protocol = "hifi://";

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            if(text.search("hifi://") != -1){
              var textList = text.split(" ");
              var div = document.createElement("span");
              for(var k = 0; k < textList.length; k++)
              {
                if(toReplaceString.test(textList[k]))
                {
                  if(textList[k].length <= 8){
                    div.appendChild(document.createTextNode("hifi:"))
                  }
                  else {
                    link = document.createElement('a');
                    link.appendChild(document.createTextNode("hifi: " + textList[k].replace(protocol, "")));
                    link.setAttribute('href', textList[k]);
                    link.setAttribute('style', 'color: #e04324');
                    div.appendChild(link);
                  }
                  div.appendChild(document.createTextNode(" "))
                }
                else {
                  div.appendChild(document.createTextNode(textList[k] + " "))
                }
              }
              element.replaceChild(div, node);
            }
        }
    }
}
