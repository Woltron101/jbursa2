document.addEventListener("DOMContentLoaded", ready);

function ready() {
	var locArr = [],
		li = document.createElement('li'),
		list = document.getElementsByTagName('ul')

	document.querySelector('form').addEventListener('submit', function () {
		var task = document.querySelector('.text').value,
			submit = true;
		if (task != "") {
			// createLi(task)
			locArr[document.querySelectorAll('li').length - 1] = task;
			locArr.sort();
			for (var i = 0; i < document.querySelectorAll('li').length; i++) {
				document.querySelectorAll('li')[i].remove();
			}
			showList();
			localStorage.setItem('tasks', JSON.stringify(locArr));
			document.querySelector('form').reset();
		}
	});

	function showList(submit) {
		if (!submit) {
			locArr = JSON.parse(localStorage.getItem('tasks'));
		}
		for (i = 0; i < locArr.length; i++) {
			task = locArr[i];
			createLi(task);
		}
	}

	function createLi(task) {
		var li = document.createElement('li');
		li.innerHTML = task;
		list[0] = list[0].appendChild(li);
	}
	showList()
}

