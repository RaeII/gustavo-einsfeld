
//FunÃ§Ã£o que carrega imagens junto com o browser
//USO: coocar dentro do body : onLoad="MM_preloadImages('img/bot_2.jpg');"
function MM_findObj(n,d) { //v4.01
	var p,i,x;
	if(!d){
		d=document;
	}
	if((p=n.indexOf("?"))>0&&parent.frames.length) {
		d=parent.frames[n.substring(p+1)].document;
		n=n.substring(0,p);
	}
	if(!(x=d[n])&&d.all){
		x=d.all[n];
	}
	for (i=0;!x&&i<d.forms.length;i++){
		x=d.forms[i][n];
	}
	for(i=0;!x&&d.layers&&i<d.layers.length;i++){
		x=MM_findObj(n,d.layers[i].document);
	}
	if(!x && d.getElementById){
		x=d.getElementById(n);
	}
	return x;
}
function MM_swapImgRestore() { //v3.0
	var i,x,a=document.MM_sr;
	for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++){
		x.src=x.oSrc;
	}
}
function MM_preloadImages() { //v3.0
	var d=document;
	if(d.images){
		if(!d.MM_p){
			d.MM_p=new Array();
		}
    	var i,j=d.MM_p.length,a=MM_preloadImages.arguments;
		for(i=0; i<a.length; i++){
    		if (a[i].indexOf("#")!=0){
				d.MM_p[j]=new Image;
				d.MM_p[j++].src=a[i];
			}
		}
	}
}
function MM_swapImage() { //v3.0
	var i,j=0,x,a=MM_swapImage.arguments;
	document.MM_sr=new Array;
	for(i=0;i<(a.length-2);i+=3){
		if ((x=MM_findObj(a[i]))!=null){
			document.MM_sr[j++]=x;
			if(!x.oSrc){
				x.oSrc=x.src;
				x.src=a[i+2];
			}
		}
	}
}




// Permite somente numero no campo
// USO: onkeypress="return SomenteNumero();"
function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;
    if((tecla > 47 && tecla < 58)) return true;
    else{
    if (tecla != 8) return false;
    else return true;
    }
}





// Checa se o email Ã© vÃ¡lido.
// USO: if(checkMail(email.value)){ sucesso! }
function checkMail(mail){ 
	var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/); 
	if(typeof(mail) == "string"){ 
		if(er.test(mail)){
			return true;
		} 
	}else if(typeof(mail) == "object"){ 
		if(er.test(mail.value)){  
			return true;  
		} 
	}else{ 
		return false; 
	} 
}






// Formata nÃºmero tipo moeda
// USO: onKeydown="FormataMoeda(this,20,event,2);"
function FormataMoeda(campo,tammax,teclapres,decimal) {
	var tecla = teclapres.keyCode;
	vr = Limpar(campo.value,"0123456789");
	tam = vr.length;
	dec = decimal;	
	if (tam < tammax && tecla != 8){
		tam = vr.length + 1 ;
	}
	if (tecla == 8 ){ 
		tam = tam - 1 ;
	}
	if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 ){
		if ( tam <= dec ){ 
			campo.value = vr ;
		}
		if ( (tam > dec) && (tam <= 5) ){ 
			campo.value = vr.substr( 0, tam - 2 ) + "," + vr.substr( tam - dec, tam ) ; 
		}
		if ( (tam >= 6) && (tam <= 8) ){ 
			campo.value = vr.substr( 0, tam - 5 ) + "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - dec, tam ) ; 
		}
		if ( (tam >= 9) && (tam <= 11) ){ 
			campo.value = vr.substr( 0, tam - 8 ) + "." + vr.substr( tam - 8, 3 ) + "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - dec, tam ) ; 
		}
		if ( (tam >= 12) && (tam <= 14) ){
			campo.value = vr.substr( 0, tam - 11 ) + "." + vr.substr( tam - 11, 3 ) + "." + vr.substr( tam - 8, 3 ) + "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - dec, tam ) ; 
		}
		if ( (tam >= 15) && (tam <= 17) ){
			campo.value = vr.substr( 0, tam - 14 ) + "." + vr.substr( tam - 14, 3 ) + "." + vr.substr( tam - 11, 3 ) + "." + vr.substr( tam - 8, 3 ) + "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - 2, tam ) ;
		}
	}
}







// Retorna valor tipo moeda
// USO: formatavalor('12345.99') = 12.345,99
function formatavalor(valor) {
	valor = replaceAll(valor, '.', '');
	valor = replaceAll(valor, ',', '');
	tam = valor.length;	
	if(tam=='0'){ 
		return '0,00';
	}else if(tam=='1'){ 
		return '0,0'+valor;
	}else if(tam=='2'){ 
		return '0,'+valor;
	}else if( (tam>2) && (tam<=5) ){
		return valor.substr(0,tam-2)+","+valor.substr(tam-2, tam); 
	}else if( (tam>=6) && (tam<=8) ){
		return valor.substr(0,tam-5)+"."+valor.substr(tam-5,3)+","+valor.substr(tam-2,tam);
	}else if( (tam>=9) && (tam<=11) ){
		return valor.substr(0,tam-8)+"."+valor.substr(tam-8,3)+"."+valor.substr(tam-5,3)+","+valor.substr(tam-2,tam);
	}else if( (tam>=12) && (tam<=14) ){
		return valor.substr(0,tam-11)+"."+valor.substr(tam-11,3)+"."+valor.substr(tam-8,3)+"."+valor.substr(tam-5,3)+","+valor.substr(tam-2,tam);
	}else if((tam>=15) && (tam<=17) ){
		return valor.substr(0,tam-14)+"."+valor.substr(tam-14,3)+"."+valor.substr(tam-11,3)+"."+valor.substr(tam-8,3)+"."+valor.substr(tam-5,3)+","+valor.substr(tam-2,tam) ;
	}
}














//repalceAll igual o replace do php
function replaceAll(str, de, para){
    var pos = str.indexOf(de);
    while (pos > -1){
		str = str.replace(de, para);
		pos = str.indexOf(de);
	}
    return (str);
}





// testa cpf e cnpj
function testacpf(campo)
{
	var obj = eval(cpf);
  	var txt = campo.value;
	txt = replaceAll(txt,'-','');
	txt = replaceAll(txt,'/','');
	txt = replaceAll(txt,'.','');
	conta = txt.length;
	if(conta != ""){
		if(conta == "11"){
			confere_cpf(campo);
		}else if(conta == "14"){
			confere_cnpj(campo);
		}else{
			return false;
		}
	}
}





// Checa se o cnpj Ã© vÃ¡lido.
// USO: if(confere_cnpj('12.345.678/9012-34')){ sucesso! }
function confere_cnpj(ref)
{
	CNPJ = ref;
	CNPJ = replaceAll(CNPJ,'-','');
	CNPJ = replaceAll(CNPJ,'/','');
	CNPJ = replaceAll(CNPJ,'.','');
	if(CNPJ != '00000000000000' && CNPJ != '11111111111111' &&  CNPJ != '222222222222222' &&  CNPJ != '3333333333333' &&  CNPJ != '44444444444444' &&  CNPJ != '55555555555555' &&  CNPJ != '66666666666666' &&  CNPJ != '77777777777777' &&  CNPJ != '88888888888888' && CNPJ != '99999999999999'){	
		erro = new String;
		var nonNumbers = /\D/;
		if (nonNumbers.test(CNPJ)){ erro += "A verificaÃ§Ã£o de CNPJ suporta apenas numeros! \n\n"; }
		var a = [];
		var b = new Number;
		var c = [6,5,4,3,2,9,8,7,6,5,4,3,2];
		for (i=0; i<12; i++){
			a[i] = CNPJ.charAt(i);
			b += a[i] * c[i+1];
		}
		if ((x = b % 11) < 2) { a[12] = 0 } else { a[12] = 11-x }
		b = 0;
		for (y=0; y<13; y++) {
			b += (a[y] * c[y]); 
		}
		if ((x = b % 11) < 2) { a[13] = 0; } else { a[13] = 11-x; }
		if ((CNPJ.charAt(12) != a[12]) || (CNPJ.charAt(13) != a[13])){
			erro +="O CNPJ informado nao e valido!";
		}
		if (erro.length > 0){
			return false;
		}else{
			return true;
		}
	}else{
		return false;
	}
}



// Checa se o cpf Ã© vÃ¡lido.
// USO: if(confere_cpf('123.456.789-01')){ sucesso! }
function confere_cpf(ref){
	var digito = new Array(11);
	var digito2 = new Array(11);
	var total_numero_d10 = 0
	var total_numero_d11 = 0
	var valor1;
	var valor2;
	var cpf = ref;
	cpf = replaceAll(cpf,'-','');
	cpf = replaceAll(cpf,'/','');
	cpf = replaceAll(cpf,'.','');
	if(cpf != '00000000000' && cpf != '11111111111' &&  cpf != '222222222222' &&  cpf != '3333333333' &&  cpf != '44444444444' &&  cpf != '55555555555' &&  cpf != '66666666666' &&  cpf != '77777777777' &&  cpf != '88888888888' && cpf != '99999999999'){			
		digito[10] = cpf.charAt(9)
		digito[11] = cpf.charAt(10)
		for (i=11;i>=2;i--) {
			digito2[i] = i
		}
		for (i=1;i<=9;i++) {
			digito[i] = cpf.charAt(i-1)
			total_numero_d10 += parseInt(digito[i])*parseInt(digito2[11-i])
		}
		valor1 = total_numero_d10 % 11
		if (valor1<2) {
			valor1 = 0
		}else{
			valor1 = 11 - valor1
		}
		for (i=1;i<=9;i++) {
			total_numero_d11 += parseInt(digito[i])*(11-i+1)
		}	
		total_numero_d11 += valor1*2
		valor2 = total_numero_d11 % 11
		if (valor2<2) {
			valor2 = 0
		}else {
			valor2 = 11 - valor2
		}
		if (digito[10]==valor1 && digito[11]==valor2) {
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
	return true;
}





// retira caracteres invalidos da string
// USO: Limpar('ABCDE','BCDEFGH') = BCDE
function Limpar(valor, validos)
{
	var result = "";
	var aux;
	for (var i=0; i < valor.length; i++) {
		aux = validos.indexOf(valor.substring(i, i+1));
		if (aux>=0) {
			result += aux;
		}
	}
	return result;
}




function validaPlaca(string)
{
	var conta = string.length;
	var letras = "ABCDEFGHIJKLMNOPQRSTUVXYWZabcdefghijklmnopqrstuvxywz";
	var numeros = "1234567890";
	var retorno = true;
	if(conta!=7){
		retorno = false;
	}
	if(retorno){
		for(var i=0;i<7;i++){
			char = string.charAt(i);
			if(i<3 && letras.indexOf(char)==-1){
				retorno = false;
			}else if(i>=3 && numeros.indexOf(char)==-1){
				retorno = false;
			}
		}
	}
	return retorno;
}







// retorna se uma data Ã© vÃ¡lida
// USO: if(validaDATA('06/01/1984')){ sucesso! }
function validaDATA(dataev)
{
	function numdias(mes,ano){
		if((mes<8 && mes%2==1) || (mes>7 && mes%2==0)){
			return 31;
		}else if(mes!=2){
			return 30; 
		}else if(ano%4==0){
			return 29;
		}else{
			return 28;
		}
	}	
	data = dataev;
	totalcaracter = data.length;
	if(totalcaracter!="10" && totalcaracter!="0"){
		return false;
	}else if(totalcaracter=="10"){
		var erro=0;
		for(var i=0;i<totalcaracter;i++){
			letra = data.charAt(i);
			if(i!=2 && i!=5){
				if(letra!='0' && letra!='1' && letra!='2' && letra!='3' && letra!='4' && letra!='5' && letra!='6' && letra!='7' && letra!='8' && letra!='9'){
					return false;
					erro++;
				}
			}else{
				if(letra!='/'){
					return false;
					erro++;
				}
			}
		}
		if(erro=='0'){
			dat = data.split('/');
			dia = dat[0];
			mes = dat[1];
			ano = dat[2];		
			data_at = new Date();
			ano_at = data_at.getYear();
			mes_at = data_at.getMonth();
			if(mes_at=='0'){ mes_at='01'; }
			if(mes_at=='1'){ mes_at='02'; }
			if(mes_at=='2'){ mes_at='03'; }
			if(mes_at=='3'){ mes_at='04'; }
			if(mes_at=='4'){ mes_at='05'; }
			if(mes_at=='5'){ mes_at='06'; }
			if(mes_at=='6'){ mes_at='07'; }
			if(mes_at=='7'){ mes_at='08'; }
			if(mes_at=='8'){ mes_at='09'; }
			if(mes_at=='9'){ mes_at='10'; }
			if(mes_at=='10'){ mes_at='11'; }
			if(mes_at=='11'){ mes_at='12'; }			
			dia_at = data_at.getDate();
			if(dia_at=='1'){ dia_at='01'; }
			if(dia_at=='2'){ dia_at='02'; }
			if(dia_at=='3'){ dia_at='03'; }
			if(dia_at=='4'){ dia_at='04'; }
			if(dia_at=='5'){ dia_at='05'; }
			if(dia_at=='6'){ dia_at='06'; }
			if(dia_at=='7'){ dia_at='07'; }
			if(dia_at=='8'){ dia_at='08'; }
			if(dia_at=='9'){ dia_at='09'; }
			if(mes==0 || mes>12){
				return false;
			}
			if(dia==0 || dia>numdias(mes,ano)){
				return false;
			}
			return true;
		}		
	}
}


function validaDATAhora(dataev)
{
	function numdias(mes,ano){
		if((mes<8 && mes%2==1) || (mes>7 && mes%2==0)){
			return 31;
		}else if(mes!=2){
			return 30; 
		}else if(ano%4==0){
			return 29;
		}else{
			return 28;
		}
	}	
	data = dataev.value;
	totalcaracter = data.length;
	
	if(totalcaracter!="16" && totalcaracter!="0"){
		return false;
	}else if(totalcaracter=="16"){
		var erro=0;
		for(var i=0;i<totalcaracter;i++){
			letra = data.charAt(i);
			if(i!=2 && i!=5 && i!=10 && i!=13){
				if(letra!='0' && letra!='1' && letra!='2' && letra!='3' && letra!='4' && letra!='5' && letra!='6' && letra!='7' && letra!='8' && letra!='9'){
					return false;
					erro++;
				}
			}else{
				if(letra!='/' && letra!=':' && letra!=' '){
					return false;
					erro++;
				}
			}
		}
		if(erro=='0'){
			dia = data.substr(0,2);
			mes = data.substr(3,2);
			ano = data.substr(6,4);
			hora = data.substr(11,2);
			minuto = data.substr(14,2);



			data_at = new Date();
			ano_at = data_at.getFullYear();
			mes_at = data_at.getMonth();
			if(mes_at=='0'){ mes_at='01'; }
			if(mes_at=='1'){ mes_at='02'; }
			if(mes_at=='2'){ mes_at='03'; }
			if(mes_at=='3'){ mes_at='04'; }
			if(mes_at=='4'){ mes_at='05'; }
			if(mes_at=='5'){ mes_at='06'; }
			if(mes_at=='6'){ mes_at='07'; }
			if(mes_at=='7'){ mes_at='08'; }
			if(mes_at=='8'){ mes_at='09'; }
			if(mes_at=='9'){ mes_at='10'; }
			if(mes_at=='10'){ mes_at='11'; }
			if(mes_at=='11'){ mes_at='12'; }			
			dia_at = data_at.getDate();
			if(dia_at=='1'){ dia_at='01'; }
			if(dia_at=='2'){ dia_at='02'; }
			if(dia_at=='3'){ dia_at='03'; }
			if(dia_at=='4'){ dia_at='04'; }
			if(dia_at=='5'){ dia_at='05'; }
			if(dia_at=='6'){ dia_at='06'; }
			if(dia_at=='7'){ dia_at='07'; }
			if(dia_at=='8'){ dia_at='08'; }
			if(dia_at=='9'){ dia_at='09'; }
			hora_at = data_at.getHours();
			minuto_at = data_at.getMinutes();

			if(parseInt(ano)<parseInt(ano_at)){
				return false;
			}else if(parseInt(ano)==parseInt(ano_at)){
				if(parseInt(mes)<parseInt(mes_at)){
					return false;
				}else if(parseInt(mes)==parseInt(mes_at)){
					if(parseInt(dia)<parseInt(dia_at)){
						return false;
					}else if(parseInt(dia)==parseInt(dia_at)){
						if(parseInt(hora)<parseInt(hora_at)){
							return false;
						}else if(parseInt(hora)==parseInt(hora_at)){
							if(parseInt(minuto)<parseInt(minuto_at)){
								return false;
							}else if(parseInt(minuto)==parseInt(minuto_at)){
								return false;
							}
						}
					}
				}
			}

			if(mes==0 || mes>12){
				return false;
			}
			if(dia==0 || dia>numdias(mes,ano)){
				return false;
			}
			if(hora==0 || hora>24){
				return false;
			}
			if(minuto>59){
				return false;
			}
			return true;
		}		
	}
}



function formataDataDiaMes(n)
{
	switch(n){
		case 1: n="01"; break;
		case 2: n="02"; break;
		case 3: n="03"; break;
		case 4: n="04"; break;
		case 5: n="05"; break;
		case 6: n="06"; break;
		case 7: n="07"; break;
		case 8: n="08"; break;
		case 9: n="09"; break;
	}
	return n;
}


function getDataAtual()
{
	var data = new Date;
	var dia = data.getDate();
	var mes = parseInt(data.getMonth())+parseInt(1);
	var ano = data.getFullYear();
	if(dia<10){ dia = "0"+dia; }
	if(mes<10){ mes = "0"+mes; }
	return dia+"/"+mes+"/"+ano;
}
function addDiaData(data,numero)
{
	numero = parseInt(numero);
	var d = new Date();
	d.setTime(Date.parse(data.split("/").reverse().join("/"))+(86400000*(numero)));
	var DataFinal;
	DataFinal = (d.getDate() < 10)? "0"+d.getDate().toString() : d.getDate().toString();
	DataFinal += "/";
	DataFinal += ((d.getMonth()+1) < 10)? "0"+(d.getMonth()+1).toString() : (d.getMonth()+1).toString();
	var retorno = DataFinal+"/"+d.getFullYear().toString();
	
	return retorno;
}
function addMesData(data,numero)
{
	numero = parseInt(numero);
	var dat = data.split('/');
	var dia = parseInt(dat[0]);
	var mes = parseInt(dat[1]);
	var ano = parseInt(dat[2]);
	var soma = mes+numero;
	if(soma<=12){
		mes = soma;
	}else if(soma>12){
		var divisao = parseInt(soma / parseInt(12));
		var resto = parseInt((soma % parseInt(12)));
		ano = ano + divisao;
		mes = resto;
	}
	dia = formataDataDiaMes(dia);
	mes = formataDataDiaMes(mes);
	return dia+"/"+mes+"/"+ano;
}
function addAnoData(data,numero)
{
	numero = parseInt(numero);
	var dat = data.split('/');
	var dia = parseInt(dat[0]);
	var mes = parseInt(dat[1]);
	var ano = parseInt(dat[2]);
	var soma = ano+numero;
	dia = formataDataDiaMes(dia);
	mes = formataDataDiaMes(mes);
	return dia+"/"+mes+"/"+soma;
}






function delDiaData(data,numero)
{
	numero = parseInt(numero);
	var d = new Date();
	d.setTime(Date.parse(data.split("/").reverse().join("/"))-(86400000*(numero)));
	var DataFinal;
	DataFinal = (d.getDate() < 10)? "0"+d.getDate().toString() : d.getDate().toString();
	DataFinal += "/";
	DataFinal += ((d.getMonth()+1) < 10)? "0"+(d.getMonth()+1).toString() : (d.getMonth()+1).toString();
	var retorno = DataFinal+"/"+d.getFullYear().toString();
	
	return retorno;
}
function delMesData(data,numero)
{
	numero = parseInt(numero);
	var dat = data.split('/');
	var dia = parseInt(dat[0]);
	var mes = parseInt(dat[1]);
	var ano = parseInt(dat[2]);
	var soma = mes-numero;
	if(soma>0){
		mes = soma;
	}else if(soma<=0){
		soma = soma - parseInt(12);
		var divisao = parseInt(soma / parseInt(12));
		var resto = parseInt((soma % parseInt(12)));
		ano = ano + divisao;
		mes = parseInt(12)+resto;
	}
	dia = formataDataDiaMes(dia);
	mes = formataDataDiaMes(mes);
	return dia+"/"+mes+"/"+ano;
}
function delAnoData(data,numero)
{
	numero = parseInt(numero);
	var dat = data.split('/');
	var dia = parseInt(dat[0]);
	var mes = parseInt(dat[1]);
	var ano = parseInt(dat[2]);
	var soma = ano-numero;
	dia = formataDataDiaMes(dia);
	mes = formataDataDiaMes(mes);
	return dia+"/"+mes+"/"+soma;
}

function diffData(datai,dataf,ret)
{
	if(ret==null){
		ret = "dias";
	}
	var dataInicio = new Date();
	dataInicio.setTime(Date.parse(datai.split("/").reverse().join("/")));
	var dataFim = new Date();
	dataFim.setTime(Date.parse(dataf.split("/").reverse().join("/")));
	var diffMilissegundos = Math.round(dataFim - dataInicio);
	var diffSegundos = Math.round(diffMilissegundos / 1000);
	var diffMinutos = Math.round(diffSegundos / 60);
	var diffHoras = Math.round(diffMinutos / 60);
	var diffDias = Math.round(diffHoras / 24);
	var diffMeses = Math.round(diffDias / 30);
	var diffAnos = Math.round(diffMeses / 12);
	var retorno = diffMilissegundos;
	if(ret=="milissegundos"){
		retorno = diffMilissegundos;
	}else if(ret=="segundos"){
		retorno = diffSegundos;
	}else if(ret=="minutos"){
		retorno = diffMinutos;
	}else if(ret=="horas"){
		retorno = diffHoras;
	}else if(ret=="dias"){
		retorno = diffDias;
	}else if(ret=="meses"){
		retorno = diffMeses;
	}else if(ret=="anos"){
		retorno = diffAnos;
	}
	return retorno;
}






// retorna uma cor de RGB para HEX
// USO: hexc("rgb(0,0,0)") retorna #000000
function hexc(colorval) {
    if(colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)){
		var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		delete(parts[0]);
		for (var i = 1; i <= 3; ++i) {
			parts[i] = parseInt(parts[i]).toString(16);
			if (parts[i].length == 1) parts[i] = '0' + parts[i];
		}
		return color = '#' + parts.join('');
	}
}






// Retira os espaÃ§os do inicio e do fim
if (!String.prototype.trim) {
	String.prototype.trim = function () {
		return this.replace(/^\s+|\s+$/g, '');
	};
}





function filtracidade(uf,formulario,campoform)
{
	if(uf!="" && uf!=null){
		document.forms[formulario][campoform].options.length = 0;
		document.forms[formulario][campoform].options['0'] = new Option('Carregando...', 'Carregando...');		
		document.forms[formulario][campoform].options['0'].selected = true;
		xajax_filtracidade(uf,formulario,campoform);
	}else{
		document.forms[formulario][campoform].options.length = 0;
		document.forms[formulario][campoform].options['0'] = new Option('Selecione um UF', '');		
		document.forms[formulario][campoform].options['0'].selected = true;
	}
}
function InsertTexto(texto,n,formulario,campoform)
{
	for(var i=0;i<n;i++){
		texto = texto.replace("*****","\r\n");
	}
	document.forms[formulario][campoform].value = texto;
}

function filtracep(cep,formulario,campoEndereco,campoBairro,campoUf,campoIdCidade,campoMsg)
{
	if(cep && cep.length==10){
		if(campoEndereco){
			//if(document.forms[formulario][campoEndereco].value==""){
				document.forms[formulario][campoEndereco].value = "Carregando...";
				document.forms[formulario][campoEndereco].disabled = true;
			//}else{
			//	campoEndereco = null;
			//}
		}
		if(campoBairro){
			//if(document.forms[formulario][campoBairro].value==""){
				document.forms[formulario][campoBairro].value = "Carregando...";
				document.forms[formulario][campoBairro].disabled = true;
			//}else{
			//	campoBairro = null;
			//}
		}
		if(campoUf && campoIdCidade){
			//if(document.forms[formulario][campoUf].value==""){
				document.forms[formulario][campoUf].disabled = true;
			//}else{
			//	campoUf = null;
			//}
			//if(document.forms[formulario][campoIdCidade].value==""){
				document.forms[formulario][campoIdCidade].options.length = 0;
				document.forms[formulario][campoIdCidade].options['0'] = new Option('Carregando...', 'Carregando...');		
				document.forms[formulario][campoIdCidade].options['0'].selected = true;
				document.forms[formulario][campoIdCidade].disabled = true;
			//}else{
			//	campoIdCidade = null;
			//}
		}
		if(campoMsg){
			document.getElementById(campoMsg).innerHTML = "<span class='carregando'>Carregando...</span>";
		}
		xajax_filtracep(cep,formulario,campoEndereco,campoBairro,campoUf,campoIdCidade,campoMsg);
	}else if(cep && cep.length!=10 && cep!=""){
		if(campoMsg){
			document.getElementById(campoMsg).innerHTML = "<span class='exclamacao'>Cep invalido!</span>";
		}
	}
}



function dump(arr,level) {
	var dumped_text = "";
	if(!level) level = 0;

	var level_padding = "";
	for(var j=0;j<level+1;j++) level_padding += "    ";
	if(typeof(arr) == 'object') {
		for(var item in arr) {
			var value = arr[item];
			if(typeof(value) == 'object') {
				dumped_text += level_padding + "'" + item + "' ...\n";
				dumped_text += dump(value,level+1);
			} else {
				dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
			}
		}
	} else {
		dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
	}
	return dumped_text;
}






function RetiraCaracterEspecial(str){
	var chrEspeciais = new Array("Å ","Å’","Å½","Å¡","Å“","Å¾","Å¸","Â¥","Âµ","Ã€","Ã","Ã‚","Ãƒ","Ã„","Ã…","Ã†","Ã‡","Ãˆ","Ã‰","ÃŠ","Ã‹","ÃŒ","Ã","ÃŽ","Ã","Ã","Ã‘","Ã’","Ã“","Ã”","Ã•","Ã–","Ã˜","Ã™","Ãš","Ã›","Ãœ","Ã","ÃŸ","Ã ","Ã¡","Ã¢","Ã£","Ã¤","Ã¥","Ã¦","Ã§","Ã¨","Ã©","Ãª","Ã«","Ã¬","Ã­","Ã®","Ã¯","Ã°","Ã±","Ã²","Ã³","Ã´","Ãµ","Ã¶","Ã¸","Ã¹","Ãº","Ã»","Ã¼","Ã½","Ã¿",".","/","&",";","(",")","?","!");
	var chrNormais = new Array("S","O","Z","s","o","z","Y","Y","u","A","A","A","A","A","A","A","C","E","E","E","E","I","I","I","I","D","N","O","O","O","O","O","O","U","U","U","U","Y","s","a","a","a","a","a","a","a","c","e","e","e","e","i","i","i","i","o","n","o","o","o","o","o","o","u","u","u","u","y","y",",","-","e","-","-","-","-","-");
	for (var index in chrEspeciais){
		str = str.replace(chrEspeciais[index], chrNormais[index]);
	}
	str = str.replace(/[^A-Za-z0-9 ,-]/g, '-');
	str = replaceAll(str, " ", "-");
	while (str.indexOf("--")!==-1){
		str = str.replace("--","-");
	}
	return str;
} 
function GeraLink(str)
{
	str = RetiraCaracterEspecial(str);
	str = replaceAll(str, " ", "-");
	str = str.toLowerCase();
	return str;
}




function utf8_encode(argString) {
  //  discuss at: http://phpjs.org/functions/utf8_encode/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: sowberry
  // improved by: Jack
  // improved by: Yves Sucaet
  // improved by: kirilloid
  // bugfixed by: Onno Marsman
  // bugfixed by: Onno Marsman
  // bugfixed by: Ulrich
  // bugfixed by: Rafal Kukawski
  // bugfixed by: kirilloid
  //   example 1: utf8_encode('Kevin van Zonneveld');
  //   returns 1: 'Kevin van Zonneveld'

  if (argString === null || typeof argString === 'undefined') {
    return '';
  }

  var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  var utftext = '',
    start, end, stringl = 0;

  start = end = 0;
  stringl = string.length;
  for (var n = 0; n < stringl; n++) {
    var c1 = string.charCodeAt(n);
    var enc = null;

    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(
        (c1 >> 6) | 192, (c1 & 63) | 128
      );
    } else if ((c1 & 0xF800) != 0xD800) {
      enc = String.fromCharCode(
        (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    } else { // surrogate pairs
      if ((c1 & 0xFC00) != 0xD800) {
        throw new RangeError('Unmatched trail surrogate at ' + n);
      }
      var c2 = string.charCodeAt(++n);
      if ((c2 & 0xFC00) != 0xDC00) {
        throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
      }
      c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
      enc = String.fromCharCode(
        (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }
      utftext += enc;
      start = end = n + 1;
    }
  }

  if (end > start) {
    utftext += string.slice(start, stringl);
  }

  return utftext;
}




function encodeHTML(str){
 var aStr = str.split(''),
     i = aStr.length,
     aRet = [];

   while (--i) {
    var iC = aStr[i].charCodeAt();
    if (iC < 65 || iC > 127 || (iC>90 && iC<97)) {
      aRet.push('&#'+iC+';');
    } else {
      aRet.push(aStr[i]);
    }
  }
 return aRet.reverse().join('');
}




function limitTextArea(field){
	//field = document.getElementById(field.id);
	var str = field.value;
	var newStr = "";
	var linhas = new Array();
	var replaceLine = false;
	linhas = str.split("\n");
	var cont = linhas.length;

	for (x in linhas){
		if(linhas[x].length > field.cols-2){
			linhas[x] = linhas[x].substring(0, field.cols);
			replaceLine=true;
		}
		if(x < field.rows){
			newStr += linhas[x] + "\n";
		}
	}
	if (cont > field.rows || replaceLine) {
		field.value = newStr.substring(0, newStr.length-1);
	}
	return cont <= field.rows;
}





function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}





function urlRemovePar(filtro,urlAtual)
{
	if(!urlAtual){
		var urlAtual = document.location.href;
	}
	var urlNova = urlAtual;
	if(urlAtual.indexOf(filtro)!=-1){
		var regex = new RegExp(filtro+'=([^&?]*)&?','gi');
		urlNova = urlAtual.replace(regex,"");
	}
	if(urlNova.charAt(urlNova.length-1)=="?" || urlNova.charAt(urlNova.length-1)=="&"){
		urlNova = urlNova.substring(0,(urlNova.length-1));
	}
	return urlNova;
}














