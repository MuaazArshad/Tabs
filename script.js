'use strict';

const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		btns.forEach((btn) => {
			btn.classList.remove('active');
		});
		contents.forEach((content) => {
			content.classList.remove('active');
		});
		e.currentTarget.classList.add('active');
		let id = e.currentTarget.innerHTML;
		const con = document.getElementById(id);
		con.classList.add('active');
	});
});
