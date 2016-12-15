
function add() {
	var element = document.createElement('div');
	element.classList.add('wraper');
	element.innerHTML = '<div class="container"><div class="row"><div class="col-md-12"><div class="form-box"><form action="#"><h3>Тест по программированию</h3><section><p>1. Вопрос №1</p><input type="radio" id="answer_1_1" name="answer_1"/><label for="answer_1_1"><span></span>Вариант ответа №1</label><br><input type="radio" id="answer_1_2" name="answer_1"/><label for="answer_1_2"><span></span>Вариант ответа №2</label><br><input type="radio" id="answer_1_3" name="answer_1"/><label for="answer_1_3"><span></span>Вариант ответа №3</label></section><section><p>2. Вопрос №2</p><input type="radio" id="answer_2_1" name="answer_2"/><label for="answer_2_1"><span></span>Вариант ответа №1</label><br><input type="radio" id="answer_2_2" name="answer_2"/><label for="answer_2_2"><span></span>Вариант ответа №2</label><br><input type="radio" id="answer_2_3" name="answer_2"/><label for="answer_2_3"><span></span>Вариант ответа №3</label></section><section><p>3. Вопрос №3</p><input type="radio" id="answer_3_1" name="answer_3"/><label for="answer_3_1"><span></span>Вариант ответа №1</label><br><input type="radio" id="answer_3_2" name="answer_3"/><label for="answer_3_2"><span></span>Вариант ответа №2</label><br><input type="radio" id="answer_3_3" name="answer_3"/><label for="answer_3_3"><span></span>Вариант ответа №3</label></section><div class="btn-wrap"><button>Проверить мои результаты</button></div></form></div></div></div></div>';
	var myBody = document.querySelector('.body');
	myBody.appendChild(element);
}

add();

