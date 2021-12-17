/* exported titleCase */
function titleCase(title) {
  title = title.toLowerCase().split(' ');
  var lowerCaseWords = ['In', 'For', 'Of', 'The', 'To', 'On', 'And'];
  for (var i = 0; i < title.length; i++) {
    title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
    if (title[i] === 'Api') {
      title[i] = title[i].toUpperCase();
    }
    for (var e = 0; e < lowerCaseWords.length; e++) {
      if ((lowerCaseWords[e] !== title[i].charAt(0)) && (lowerCaseWords[e] === lowerCaseWords)) {
        title[e] = title[e].toLowerCase;
      }
    }
  }
  return title.join(' ');
}
