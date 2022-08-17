
var tasks = document.getElementsByClassName('todo-display-list');

for(let i of tasks){
  // To apply line-through style to text when checkbox is clicked
    i.getElementsByTagName('input')[0].addEventListener('change', function() {
        if (this.checked) {
          i.getElementsByTagName('h3')[0].style.textDecoration = 'line-through';
          i.getElementsByTagName('h4')[0].style.textDecoration = 'line-through';
        } else {
            i.getElementsByTagName('h3')[0].style.textDecoration = 'none';
            i.getElementsByTagName('h4')[0].style.textDecoration = 'none';
        }
      });
}