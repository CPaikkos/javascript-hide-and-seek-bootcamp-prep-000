function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rankedList = document.getElementById('app').querySelectorAll('.ranked-list li');
  for(var i = 0; i < rankedList.length; i++) {

     rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
}

function deepestChild() {
  //return document.querySelector('#grand-node div div div div'); passes
  //return document.getElementById('#grand-node').children; doesn't pass
  //return document.querySelector('#grand-node *'); passes
      var children = document.getElementById('grand-node');
      var nextChild = children.children[0];
  while (nextChild) {
     children = nextChild;
     nextChild = children.children[0];
}
return children;
}
