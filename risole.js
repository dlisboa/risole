[
  '.widget-comentarios', // g1
  '#article-comments', // folha
  '#comentarios', // uol
  '#wrap-comments' // estadao
].forEach(function(selector) {
  var nodes = document.querySelectorAll(selector)
  for (var i=0, len=nodes.length; i < len; i++) {
    nodes[i].remove();
  }
});
