function mudar() {
	if(document.getElementById('campo').classList.contains('pp')){
		document.getElementById('campo').classList.remove('pp');
		document.getElementById('campo').classList.add('alt');
		document.getElementById('cabecalho').classList.remove('pp');
		document.getElementById('cabecalho').classList.add('alt');
		document.getElementById('centro').classList.remove('pp');
		document.getElementById('centro').classList.add('alt');
		document.getElementById('menu').classList.remove('pp');
		document.getElementById('menu').classList.add('alt');
		document.getElementById('opcaoum').classList.remove('pp');
		document.getElementById('opcaoum').classList.add('alt');
		document.getElementById('opcaodois').classList.remove('pp');
		document.getElementById('opcaodois').classList.add('alt');
		document.getElementById('opcaotres').classList.remove('pp');
		document.getElementById('opcaotres').classList.add('alt');
		document.getElementById('opcaoquatro').classList.remove('pp');
		document.getElementById('opcaoquatro').classList.add('alt');
		document.getElementById('p').classList.remove('pp');
		document.getElementById('p').classList.add('alt');

		document.getElementById('s').classList.remove('pp');
		document.getElementById('s').classList.add('alt');

		document.getElementById('t').classList.remove('pp');
		document.getElementById('t').classList.add('alt');

		document.getElementById('q').classList.remove('pp');
		document.getElementById('q').classList.add('alt');

		document.getElementById('im').classList.remove('imglogo');
		document.getElementById('im').classList.add('imgalt');

		document.getElementById('contraste').classList.remove('pp');
		document.getElementById('contraste').classList.add('alt');

		document.getElementById('teste').classList.remove('cc');
		document.getElementById('teste').classList.add('alt');

		document.getElementById('rodape').classList.remove('pp');
		document.getElementById('rodape').classList.add('alt');

		document.getElementById('rodapecenter').classList.remove('pp');
		document.getElementById('rodapecenter').classList.add('alt');

		document.querySelector('body').classList.remove('pp');
		document.querySelector('body').classList.add('alt');

		document.getElementById('rodapeprimeiro').classList.remove('pp');
		document.getElementById('rodapeprimeiro').classList.add('alt');

		document.getElementById('rodapesegundo').classList.remove('pp');
		document.getElementById('rodapesegundo').classList.add('alt');



	} else {
		document.getElementById('campo').classList.remove('alt');
		document.getElementById('campo').classList.add('pp');
		document.getElementById('cabecalho').classList.remove('alt');
		document.getElementById('cabecalho').classList.add('pp');
		document.getElementById('centro').classList.remove('alt');
		document.getElementById('centro').classList.add('pp');
		document.getElementById('menu').classList.remove('alt');
		document.getElementById('menu').classList.add('pp');
		document.getElementById('opcaoum').classList.remove('alt');
		document.getElementById('opcaoum').classList.add('pp');
		document.getElementById('opcaodois').classList.remove('alt');
		document.getElementById('opcaodois').classList.add('pp');
		document.getElementById('opcaotres').classList.remove('alt');
		document.getElementById('opcaotres').classList.add('pp');
		document.getElementById('opcaoquatro').classList.remove('alt');
		document.getElementById('opcaoquatro').classList.add('pp');

		document.getElementById('p').classList.remove('alt');
		document.getElementById('p').classList.add('pp');

		document.getElementById('s').classList.remove('alt');
		document.getElementById('s').classList.add('pp');

		document.getElementById('t').classList.remove('alt');
		document.getElementById('t').classList.add('pp');

		document.getElementById('q').classList.remove('alt');
		document.getElementById('q').classList.add('pp');

		document.getElementById('im').classList.remove('imgalt');
		document.getElementById('im').classList.add('imglogo');

		document.getElementById('contraste').classList.remove('alt');
		document.getElementById('contraste').classList.add('pp');

		document.getElementById('teste').classList.remove('alt');
		document.getElementById('teste').classList.add('cc');

		document.getElementById('rodape').classList.remove('alt');
		document.getElementById('rodape').classList.add('pp');

		document.getElementById('rodapecenter').classList.remove('alt');
		document.getElementById('rodapecenter').classList.add('pp');

		document.querySelector('body').classList.remove('alt');
		document.querySelector('body').classList.add('pp');

		document.getElementById('rodapeprimeiro').classList.remove('alt');
		document.getElementById('rodapeprimeiro').classList.add('pp');

		document.getElementById('rodapesegundo').classList.remove('alt');
		document.getElementById('rodapesegundo').classList.add('pp');




	}
}

var cont;
var maa = 0;
var mee = 0;


var m2 = 0;
var me2 = 0;

var m3 = 0;
var me3 = 0;

var m4 = 0;
var me4 = 0;

var m5 = 0;
var me5 = 0;

var m6 = 0;
var me6 = 0;

var m7 = 0;
var me7 = 0;

var m8 = 0;
var me8 = 0;

var m9 = 0;
var me9 = 0;

var m10 = 0;
var me10 = 0;

var m11 = 0;
var me11 = 0;

var m12 = 0;
var me12 = 0;

function add(n){
	cont = n + 1;
	return cont;
}

function rem(n) {
	cont = n - 1;
	return cont;
}

function acum() {
	if (maa < 10) {
		add(maa);
		maa = maa + 1;
		document.getElementById('tiunidade').innerHTML = "Tem " + maa +" equipamento(s).";
		document.getElementById('nume').innerHTML = maa;
	} else {
		document.getElementById('tiunidade').innerHTML = "Tem " + 10 +" equipamento(s).";
	}
}

function acum2() {
	if (m2 < 10) {
		add(m2);
		m2 = m2 + 1;
		document.getElementById('tibicicleta').innerHTML = "Nessa academia tem " + m2 +" bicicleta(s).";
		document.getElementById('nume2').innerHTML = m2;
	} else {
		document.getElementById('tibicicleta').innerHTML = "Nessa academia tem " + 10 + " bicicleta(s).";
	}
}

function acum3() {
	if (m3 < 10) {
		add(m2);
		m3 = m3 + 1;
		document.getElementById('tieliptico').innerHTML = "Nessa academia tem " + m3 +" bicicleta(s).";
		document.getElementById('nume3').innerHTML = m3;
	} else {
		document.getElementById('tieliptico').innerHTML = "Nessa academia tem " + 10 + " bicicleta(s).";
	}
}

function acum4() {
	if (m4 < 10) {
		add(m4);
		m4 = m4 + 1;
		document.getElementById('tihalter').innerHTML = "Nessa academia tem " + m4 +" Halter(es).";
		document.getElementById('nume4').innerHTML = m4;
	} else {
		document.getElementById('tihalter').innerHTML = "Nessa academia tem " + 10 + " Halter(es).";
	}
}

function acum5() {
	if (m5 < 10) {
		add(m5);
		m5 = m5 + 1;
		document.getElementById('tipolia').innerHTML = "Nessa academia tem " + m5 +" polia(s).";
		document.getElementById('nume5').innerHTML = m5;
	} else {
		document.getElementById('tipolia').innerHTML = "Nessa academia tem " + 10 + " polia(s).";
	}
}

function acum6() {
	if (m6 < 10) {
		add(m6);
		m6 = m6 + 1;
		document.getElementById('tipeckdeck').innerHTML = "Nessa academia tem " + m6 +" Peck Deck(s).";
		document.getElementById('nume6').innerHTML = m6;
	} else {
		document.getElementById('tipeckdeck').innerHTML = "Nessa academia tem " + 10 + " Peck Deck(s).";
	}
}

function acum7() {
	if (m7 < 10) {
		add(m7);
		m7 = m7 + 1;
		document.getElementById('tilegpress').innerHTML = "Nessa academia tem " + m7 +" Leg Press.";
		document.getElementById('nume7').innerHTML = m7;
	} else {
		document.getElementById('tilegpress').innerHTML = "Nessa academia tem " + 10 + " Leg Press.";
	}
}

function acum8() {
	if (m8 < 10) {
		add(m8);
		m8 = m8 + 1;
		document.getElementById('tiflexora').innerHTML = "Nessa academia tem " + m8 +" C. Flexora(s).";
		document.getElementById('nume8').innerHTML = m8;
	} else {
		document.getElementById('tiflexora').innerHTML = "Nessa academia tem " + 10 + " C. Flexora(s).";
	}
}

function acum9() {
	if (m9 < 10) {
		add(m9);
		m9 = m9 + 1;
		document.getElementById('tibarra').innerHTML = "Nessa academia tem " + m9 +" Barra(s).";
		document.getElementById('nume9').innerHTML = m9;
	} else {
		document.getElementById('tibarra').innerHTML = "Nessa academia tem " + 10 + " Barra(s).";
	}
}

function acum10() {
	if (m10 < 10) {
		add(m10);
		m10 = m10 + 1;
		document.getElementById('tiremoseco').innerHTML = "Nessa academia tem " + m10 +" Remo(s) Seco(s).";
		document.getElementById('nume10').innerHTML = m10;
	} else {
		document.getElementById('tiremoseco').innerHTML = "Nessa academia tem " + 10 + " Remo(s) Seco(s).";
	}
}

function acum11() {
	if (m11 < 10) {
		add(m11);
		m11 = m11 + 1;
		document.getElementById('tiequipamento').innerHTML = "Nessa academia tem " + m11 +" equipamento(s).";
		document.getElementById('nume11').innerHTML = m11;
	} else {
		document.getElementById('tiequipamento').innerHTML = "Nessa academia tem " + 10 + " equipamento(s).";
	}
}

function acum12() {
	if (m12 < 10) {
		add(m12);
		m12 = m12 + 1;
		document.getElementById('tikittlebell').innerHTML = "Nessa academia tem " + m12 +" Kittle Bell(s).";
		document.getElementById('nume12').innerHTML = m12;
	} else {
		document.getElementById('tikittlebell').innerHTML = "Nessa academia tem " + 10 + " Kittle Bell(s).";
	}
}

function acumm() {
	if (mee < maa) {
		if (mee < 10) {
			add(mee);
			mee = mee + 1;
			document.getElementById('timanutencao').innerHTML = "Tem " + mee +" equipamento(s) em manutenção.";
			document.getElementsByClass('numem').innerHTML = mee;
		} else {
			document.getElementById('timanutencao').innerHTML = "Tem " + 10 +" equipamento(s) em manutenção.";
			}
		}
}

function acumm2() {
	if (me2 < m2) {
		if (me2 < 10) {
			add(me2);
			me2 = me2 + 1;
			document.getElementById('timanutencaobi').innerHTML = "Tem " + me2 +" equipamento(s) em manutenção.";
		} else {
			document.getElementById('timanutencaobi').innerHTML = "Tem " + 10 +" equipamento(s) em manutenção.";
			}
		}
}

function acumm3() {
	if (me3 < m3) {
		if (me3 < 10) {
			add(me3);
			me3 = me3 + 1;
			document.getElementById('timanutencaoel').innerHTML = "Tem " + me3 +" equipamento(s) em manutenção.";
		} else {
			document.getElementById('timanutencaoel').innerHTML = "Tem " + 10 +" equipamento(s) em manutenção.";
			}
		}
}

function acumm4() {
	if (me4 < m4) {
		if (me4 < 10) {
			add(me4);
			me4 = me4 + 1;
			document.getElementById('timanutencaoha').innerHTML = "Tem " + me4 +" equipamento(s) em manutenção.";
		} else {
			document.getElementById('timanutencaoha').innerHTML = "Tem " + 10 +" equipamento(s) em manutenção.";
			}
		}
}

function acumm5() {
	if (me5 < m5) {
		if (me5 < 10) {
			add(me5);
			me5 = me5 + 1;
			document.getElementById('timanutencaopo').innerHTML = "Tem " + me5 +" equipamento(s) em manutenção.";
		} else {
			document.getElementById('timanutencaopo').innerHTML = "Tem " + 10 +" equipamento(s) em manutenção.";
			}
		}
}

function acumm6() {
	if (me6 < m6) {
		if (me6 < 10) {
			add(me6);
			me6 = me6 + 1;
			document.getElementById('timanutencaope').innerHTML = "Tem " + me6 +" equipamento(s) em manutenção.";
		} else {
			document.getElementById('timanutencaope').innerHTML = "Tem " + 10 +" equipamento(s) em manutenção.";
			}
		}
}

function acumm7() {
	if (me7 < m7) {
		if (me7 < 10) {
			add(me7);
			me7 = me7 + 1;
			document.getElementById('timanutencaole').innerHTML = "Tem " + me7 +" equipamento(s) em manutenção.";
		} else {
			document.getElementById('timanutencaole').innerHTML = "Tem " + 10 +" equipamento(s) em manutenção.";
			}
		}
}

function acumm8() {
	if (me8 < m8) {
		if (me8 < 10) {
			add(me8);
			me8 = me8 + 1;
			document.getElementById('timanutencaofl').innerHTML = "Tem " + me8 +" C. Flexora(s) em manutenção.";
		} else {
			document.getElementById('timanutencaofl').innerHTML = "Tem " + 10 +" C. Flexora(s) em manutenção.";
			}
		}
}

function acumm9() {
	if (me9 < m9) {
		if (me9 < 10) {
			add(me9);
			me9 = me9 + 1;
			document.getElementById('timanutencaoba').innerHTML = "Tem " + me9 +" Barra(s) em manutenção.";
		} else {
			document.getElementById('timanutencaoba').innerHTML = "Tem " + 10 +" Barra(s) em manutenção.";
			}
		}
}

function acumm10() {
	if (me10 < m10) {
		if (me10 < 10) {
			add(me10);
			me10 = me10 + 1;
			document.getElementById('timanutencaore').innerHTML = "Tem " + me10 +" Remo(s) Seco(s) em manutenção.";
		} else {
			document.getElementById('timanutencaore').innerHTML = "Tem " + 10 +" Remo(s) Seco(s) em manutenção.";
			}
		}
}

function acumm11() {
	if (me11 < m11) {
		if (me11 < 10) {
			add(me11);
			me11 = me11 + 1;
			document.getElementById('timanutencaoeq').innerHTML = "Tem " + me11 +" equipamento(s) em manutenção.";
		} else {
			document.getElementById('timanutencaoeq').innerHTML = "Tem " + 10 +" equipamento(s) em manutenção.";
			}
		}
}

function acumm12() {
	if (me12 < m12) {
		if (me12 < 10) {
			add(me12);
			me12 = me12 + 1;
			document.getElementById('timanutencaoki').innerHTML = "Tem " + me12 +" Kittle Bell(s) em manutenção.";
		} else {
			document.getElementById('timanutencaoki').innerHTML = "Tem " + 10 +" Kittle Bell(s) em manutenção.";
			}
		}
}

function desc() {
	if (maa > 0) {
		rem(maa);
		maa = maa - 1;
		document.getElementById('tiunidade').innerHTML = "Nessa academia tem " + maa +" Esteira(s).";
		document.getElementById('nume').innerHTML = maa;
	} else {
		document.getElementById('tiunidade').innerHTML = "Nessa academia tem " + 0 +" Esteira(s).";
	}
}

function desc2() {
	if (m2 > 0) {
		rem(m2);
		m2 = m2 - 1;
		document.getElementById('tibicicleta').innerHTML = "Nessa academia tem " + m2 +" Bicicleta(s).";
		document.getElementById('nume2').innerHTML = m2;
	} else {
		document.getElementById('tibicicleta').innerHTML = "Nessa academia tem " + 0 +" Bicicleta(s).";
	}
}

function desc3() {
	if (m3 > 0) {
		rem(m3);
		m3 = m3 - 1;
		document.getElementById('tieliptico').innerHTML = "Nessa academia tem " + m3 +" Eliptico(s).";
		document.getElementById('nume3').innerHTML = m3;
	} else {
		document.getElementById('tieliptico').innerHTML = "Nessa academia tem " + 0 +" Eliptico(s).";
	}
}

function desc4() {
	if (m4 > 0) {
		rem(m4);
		m4 = m4 - 1;
		document.getElementById('tihalter').innerHTML = "Nessa academia tem " + m4 +" Halter(es).";
		document.getElementById('nume4').innerHTML = m4;
	} else {
		document.getElementById('tihalter').innerHTML = "Nessa academia tem " + 0 +" Halter(es).";
	}
}

function desc5() {
	if (m5 > 0) {
		rem(m5);
		m5 = m5 - 1;
		document.getElementById('tipolia').innerHTML = "Nessa academia tem " + m5 +" Polia(s).";
		document.getElementById('nume5').innerHTML = m5;
	} else {
		document.getElementById('tipolia').innerHTML = "Nessa academia tem " + 0 +" Polia(s).";
	}
}

function desc6() {
	if (m6 > 0) {
		rem(m6);
		m6 = m6 - 1;
		document.getElementById('tipeckdeck').innerHTML = "Nessa academia tem " + m6 +" Peck Deck(s).";
		document.getElementById('nume6').innerHTML = m6;
	} else {
		document.getElementById('tipeckdeck').innerHTML = "Nessa academia tem " + 0 +" Peck Deck(s).";
	}
}

function desc7() {
	if (m7 > 0) {
		rem(m7);
		m7 = m7 - 1;
		document.getElementById('tilegpress').innerHTML = "Nessa academia tem " + m7 +" Leg Press.";
		document.getElementById('nume7').innerHTML = m3;
	} else {
		document.getElementById('tilegpress').innerHTML = "Nessa academia tem " + 0 +" Leg Press.";
	}
}

function desc8() {
	if (m8 > 0) {
		rem(m8);
		m8 = m8 - 1;
		document.getElementById('tiflexora').innerHTML = "Nessa academia tem " + m8 +" C. Flexora(s).";
		document.getElementById('nume8').innerHTML = m8;
	} else {
		document.getElementById('tiflexora').innerHTML = "Nessa academia tem " + 0 +" C. Flexora(s).";
	}
}

function desc9() {
	if (m9 > 0) {
		rem(m9);
		m9 = m9 - 1;
		document.getElementById('tibarra').innerHTML = "Tem " + m9 +" Barra(s).";
		document.getElementById('nume9').innerHTML = m9;
	} else {
		document.getElementById('tibarra').innerHTML = "Tem " + 0 +" Barra(s).";
	}
}

function desc10() {
	if (m10 > 0) {
		rem(m10);
		m10 = m10 - 1;
		document.getElementById('tiremoseco').innerHTML = "Tem " + m10 +" Remo(s) Seco(s).";
		document.getElementById('nume10').innerHTML = m10;
	} else {
		document.getElementById('tiremoseco').innerHTML = "Tem " + 0 +" Remo(s) Seco(s).";
	}
}

function desc11() {
	if (m11 > 0) {
		rem(m11);
		m11 = m11 - 1;
		document.getElementById('tiequipamento').innerHTML = "Tem " + m11 +" equipamento(s).";
		document.getElementById('nume11').innerHTML = m11;
	} else {
		document.getElementById('tiequipamento').innerHTML = "Tem " + 0 +" equipamento(s).";
	}
}

function desc12() {
	if (m12 > 0) {
		rem(m12);
		m12 = m12 - 1;
		document.getElementById('tikittlebell').innerHTML = "Tem " + m12 +" Kittle Bell(s).";
		document.getElementById('nume12').innerHTML = m12;
	} else {
		document.getElementById('tikittlebell').innerHTML = "Tem " + 0 +" Kittle Bell(s).";
	}
}




function descm() {
	if (mee > 0) {
		rem(mee);
		mee = mee - 1;
		document.getElementById('timanutencao').innerHTML = "Tem " + mee +" equipamento(s) em manutenção.";
		document.getElementById('numem').innerHTML = mee;
	} else {
		document.getElementById('timanutencao').innerHTML = "Tem " + 0 +" equipamento(s) em manutenção.";
		}
}

function descm2() {
	if (me2 > 0) {
		rem(me2);
		me2 = me2 - 1;
		document.getElementById('timanutencaobi').innerHTML = "Tem " + me2 +" equipamento(s) em manutenção.";
	} else {
		document.getElementById('timanutencaobi').innerHTML = "Tem " + 0 +" equipamento(s) em manutenção.";
		}
}

function descm3() {
	if (me3 > 0) {
		rem(me3);
		me3 = me3 - 1;
		document.getElementById('timanutencaoel').innerHTML = "Tem " + me3 +" equipamento(s) em manutenção.";
	} else {
		document.getElementById('timanutencaoel').innerHTML = "Tem " + 0 +" equipamento(s) em manutenção.";
		}
}

function descm4() {
	if (me4 > 0) {
		rem(me4);
		me4 = me4 - 1;
		document.getElementById('timanutencaoha').innerHTML = "Tem " + me4 +" equipamento(s) em manutenção.";
	} else {
		document.getElementById('timanutencaoha').innerHTML = "Tem " + 0 +" equipamento(s) em manutenção.";
		}
}

function descm5() {
	if (me5 > 0) {
		rem(me5);
		me5 = me5 - 1;
		document.getElementById('timanutencaopo').innerHTML = "Tem " + me5 +" equipamento(s) em manutenção.";
	} else {
		document.getElementById('timanutencaopo').innerHTML = "Tem " + 0 +" equipamento(s) em manutenção.";
		}
}

function descm6() {
	if (me6 > 0) {
		rem(me6);
		me6 = me6 - 1;
		document.getElementById('timanutencaope').innerHTML = "Tem " + me6 +" equipamento(s) em manutenção.";
	} else {
		document.getElementById('timanutencaope').innerHTML = "Tem " + 0 +" equipamento(s) em manutenção.";
		}
}

function descm7() {
	if (me7 > 0) {
		rem(me7);
		me7 = me7 - 1;
		document.getElementById('timanutencaole').innerHTML = "Tem " + me7 +" equipamento(s) em manutenção.";
	} else {
		document.getElementById('timanutencaole').innerHTML = "Tem " + 0 +" equipamento(s) em manutenção.";
		}
}

function descm8() {
	if (me8 > 0) {
		rem(me8);
		me8 = me8 - 1;
		document.getElementById('timanutencaofl').innerHTML = "Tem " + me8 +" C. Flexora(s) em manutenção.";
	} else {
		document.getElementById('timanutencaofl').innerHTML = "Tem " + 0 +" C. Flexora(s) em manutenção.";
		}
}

function descm9() {
	if (me9 > 0) {
		rem(me9);
		me9 = me9 - 1;
		document.getElementById('timanutencaoba').innerHTML = "Tem " + me9 +" Barra(s) em manutenção.";
	} else {
		document.getElementById('timanutencaoba').innerHTML = "Tem " + 0 +" Barra(s) em manutenção.";
		}
}

function descm10() {
	if (me10 > 0) {
		rem(me10);
		me10 = me10 - 1;
		document.getElementById('timanutencaore').innerHTML = "Tem " + me10 +" Remo(s) Seco(s) em manutenção.";
	} else {
		document.getElementById('timanutencaore').innerHTML = "Tem " + 0 +" Remo(s) Seco(s) em manutenção.";
		}
}

function descm11() {
	if (me11 > 0) {
		rem(me11);
		me11 = me11 - 1;
		document.getElementById('timanutencaoeq').innerHTML = "Tem " + me11 + " equipamento(s) em manutenção.";
	} else {
		document.getElementById('timanutencaoeq').innerHTML = "Tem " + 0 +" equipamento(s) em manutenção.";
		}
}

function descm12() {
	if (me12 > 0) {
		rem(me12);
		me12 = me12 - 1;
		document.getElementById('timanutencaoki').innerHTML = "Tem " + me12 +" Kittle Bell(s) em manutenção.";
	} else {
		document.getElementById('timanutencaoki').innerHTML = "Tem " + 0 +" Kittle Bell(s) em manutenção.";
		}
}

function aparecer(){
	if (document.getElementById('caman').style.display == 'block') {
		document.getElementById('caman').style.display = 'none';
	} else if (document.getElementById('caman').style.display = 'none'){
		document.getElementById('timanutencao').innerHTML = "Não tem equipamentos em manutenção.";
		document.getElementById('caman').style.display = 'block';
		}
}

function aparecer2(){
	if (document.getElementById('caman2').style.display == 'block') {
		document.getElementById('caman2').style.display = 'none';
	} else if (document.getElementById('caman2').style.display = 'none'){
		document.getElementById('timanutencaobi').innerHTML = "Não tem Bicicletas em manutenção.";
		document.getElementById('caman2').style.display = 'block';
		}
}

function aparecer3(){
	if (document.getElementById('caman3').style.display == 'block') {
		document.getElementById('caman3').style.display = 'none';
	} else if (document.getElementById('caman3').style.display = 'none'){
		document.getElementById('timanutencaoel').innerHTML = "Não tem Eliptico(s) em manutenção.";
		document.getElementById('caman3').style.display = 'block';
		}
}

function aparecer4(){
	if (document.getElementById('caman4').style.display == 'block') {
		document.getElementById('caman4').style.display = 'none';
	} else if (document.getElementById('caman4').style.display = 'none'){
		document.getElementById('timanutencaoha').innerHTML = "Não tem Halter(es) em manutenção.";
		document.getElementById('caman4').style.display = 'block';
		}
}

function aparecer5(){
	if (document.getElementById('caman5').style.display == 'block') {
		document.getElementById('caman5').style.display = 'none';
	} else if (document.getElementById('caman5').style.display = 'none'){
		document.getElementById('timanutencaopo').innerHTML = "Não tem Polia(s) em manutenção.";
		document.getElementById('caman5').style.display = 'block';
		}
}

function aparecer6(){
	if (document.getElementById('caman6').style.display == 'block') {
		document.getElementById('caman6').style.display = 'none';
	} else if (document.getElementById('caman6').style.display = 'none'){
		document.getElementById('timanutencaope').innerHTML = "Não tem Peck Deck(s) em manutenção.";
		document.getElementById('caman6').style.display = 'block';
		}
}

function aparecer7(){
	if (document.getElementById('caman7').style.display == 'block') {
		document.getElementById('caman7').style.display = 'none';
	} else if (document.getElementById('caman7').style.display = 'none'){
		document.getElementById('timanutencaole').innerHTML = "Não tem Leg Press em manutenção.";
		document.getElementById('caman7').style.display = 'block';
		}
}

function aparecer8(){
	if (document.getElementById('caman8').style.display == 'block') {
		document.getElementById('caman8').style.display = 'none';
	} else if (document.getElementById('caman8').style.display = 'none'){
		document.getElementById('timanutencaofl').innerHTML = "Não tem C. Flexora(s) em manutenção.";
		document.getElementById('caman8').style.display = 'block';
		}
}

function aparecer9(){
	if (document.getElementById('caman9').style.display == 'block') {
		document.getElementById('caman9').style.display = 'none';
	} else if (document.getElementById('caman9').style.display = 'none'){
		document.getElementById('timanutencaoba').innerHTML = "Não tem Barra(s) em manutenção.";
		document.getElementById('caman9').style.display = 'block';
		}
}

function aparecer10(){
	if (document.getElementById('caman10').style.display == 'block') {
		document.getElementById('caman10').style.display = 'none';
	} else if (document.getElementById('caman10').style.display = 'none'){
		document.getElementById('timanutencaore').innerHTML = "Não tem Remo(s) Seco(s) em manutenção.";
		document.getElementById('caman10').style.display = 'block';
		}
}

function aparecer11(){
	if (document.getElementById('caman11').style.display == 'block') {
		document.getElementById('caman11').style.display = 'none';
	} else if (document.getElementById('caman11').style.display = 'none'){
		document.getElementById('timanutencaoeq').innerHTML = "Não tem Equipamento(s) em manutenção.";
		document.getElementById('caman11').style.display = 'block';
		}
}

function aparecer12(){
	if (document.getElementById('caman12').style.display == 'block') {
		document.getElementById('caman12').style.display = 'none';
	} else if (document.getElementById('caman12').style.display = 'none'){
		document.getElementById('timanutencaoki').innerHTML = "Não tem Kittle Bell(s) em manutenção.";
		document.getElementById('caman12').style.display = 'block';
		}
}