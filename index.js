function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('.ranked-list li');
  for(var i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(i) + n;
  }
}
