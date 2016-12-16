// ---------- ВАРИАНТ № 1  --------

var divClose = '</div>',
		cont = '<div class="container">',
		row = '<div class="row">',
		col_md_12 = '<div class="col-md-12">',
		form_box = '<div class="form-box">',
		form = '<form action="#" method="post">',
		formClose = '</form>',
		h3 = '<h3>Тест по программированию</h3>',
		section = '<section>',
		sectionClose = '</section>',
		br = '</br>',
		button = '<div class="btn-wrap"><button>Проверить мои результаты</button></div>';

var answer_1 = {
	1: 'answer_1',
	2: '1. Вопрос №1',
	3: 'answer_1_1',	
	4: 'Вариант ответа №1',
	5: 'answer_1_2',	
	6: 'Вариант ответа №2',
	7: 'answer_1_3',
	8: 'Вариант ответа №3',
};
var answer_2 = {
	1: 'answer_2',
	2: '2. Вопрос №2',
	3: 'answer_2_1',	
	4: 'Вариант ответа №1',
	5: 'answer_2_2',	
	6: 'Вариант ответа №2',
	7: 'answer_2_3',
	8: 'Вариант ответа №3',
};
var answer_3 = {
	1: 'answer_3',
	2: '3. Вопрос №3',
	3: 'answer_3_1',	
	4: 'Вариант ответа №1',
	5: 'answer_3_2',	
	6: 'Вариант ответа №2',
	7: 'answer_3_3',
	8: 'Вариант ответа №3',
};

function inputL(f, s, d) {
	var zMas = ['<input type="radio" id="', s, '" name="', f, '"/><label for="', s, '"><span></span>', d, '</label>'];
	var dMas = '';
	for (var y = 0; y < zMas.length; y++) {
		dMas = dMas + zMas[y] 
	}
	return dMas;
}
function inputP(c) {
	var cMas = ['<p>', c, '</p>'];
	var sMas = '';
	for (var y = 0; y < cMas.length; y++) {
		sMas = sMas + cMas[y] 
	}
	return sMas;
}

var sectAnswer_1 = section + inputP(answer_1[2]) + inputL(answer_1[1], answer_1[3], answer_1[4]) + br + inputL(answer_1[1], answer_1[5], answer_1[6]) + br + inputL(answer_1[1], answer_1[7], answer_1[8]) + sectionClose;
var sectAnswer_2 = section + inputP(answer_2[2]) + inputL(answer_2[1], answer_2[3], answer_2[4]) + br + inputL(answer_2[1], answer_2[5], answer_2[6]) + br + inputL(answer_2[1], answer_2[7], answer_2[8]) + sectionClose;
var sectAnswer_3 = section + inputP(answer_3[2]) + inputL(answer_3[1], answer_3[3], answer_3[4]) + br + inputL(answer_3[1], answer_3[5], answer_3[6]) + br + inputL(answer_3[1], answer_3[7], answer_3[8]) + sectionClose;

var result = cont + row + col_md_12 + form_box + form + h3 + sectAnswer_1 + sectAnswer_2 + sectAnswer_3 + button + formClose + divClose + divClose + divClose + divClose;

function add() {
	var element = document.createElement('div');
	element.classList.add('wraper');
	element.innerHTML = result ;
	var myBody = document.querySelector('.body');
	myBody.appendChild(element);
}

add();



// ---------- ВАРИАНТ № 2 --------
/* 

function add() {
	var element = document.createElement('div');
	element.classList.add('wraper');
	element.innerHTML = '<div class="container"><div class="row"><div class="col-md-12"><div class="form-box"><form action="#" ><h3>Тест по программированию</h3><section><p>1. Вопрос №1</p><input type="radio" id="answer_1_1" name="answer_1"/><label for="answer_1_1"><span></span>Вариант ответа №1</label><br><input type="radio" id="answer_1_2" name="answer_1"/><label for="answer_1_2"><span></span>Вариант ответа №2</label><br><input type="radio" id="answer_1_3" name="answer_1"/><label for="answer_1_3"><span></span>Вариант ответа №3</label></section><section><p>2. Вопрос №2</p><input type="radio" id="answer_2_1" name="answer_2"/><label for="answer_2_1"><span></span>Вариант ответа №1</label><br><input type="radio" id="answer_2_2" name="answer_2"/><label for="answer_2_2"><span></span>Вариант ответа №2</label><br><input type="radio" id="answer_2_3" name="answer_2"/><label for="answer_2_3"><span></span>Вариант ответа №3</label></section><section><p>3. Вопрос №3</p><input type="radio" id="answer_3_1" name="answer_3"/><label for="answer_3_1"><span></span>Вариант ответа №1</label><br><input type="radio" id="answer_3_2" name="answer_3"/><label for="answer_3_2"><span></span>Вариант ответа №2</label><br><input type="radio" id="answer_3_3" name="answer_3"/><label for="answer_3_3"><span></span>Вариант ответа №3</label></section><div class="btn-wrap"><button>Проверить мои результаты</button></div></form></div></div></div></div>';
	var myBody = document.querySelector('.body');
	myBody.appendChild(element);
}

add();
*/
