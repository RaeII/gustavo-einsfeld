$(function(){
		   
		   
	$.fn.formatatelefone = function(){
		$('.formatatelefone').keydown( function(e){
			$(this).attr('maxlength','15');
			//$('#msgform').html(e.keyCode);
			if ((e.keyCode==229) || (e.keyCode>=48 && e.keyCode<=57) || (e.keyCode>=96 && e.keyCode<=105) || e.keyCode==32 || e.keyCode==13 || e.keyCode==27 || e.keyCode==116 || e.keyCode==9 || e.keyCode==8 || e.keyCode==16 || e.keyCode==37 || e.keyCode==39 || e.keyCode==46){
				return true;
			}else{
				return false;
			}
		});
		$('.formatatelefone').keyup( function(e){
			if (e.keyCode!=37 && e.keyCode!=39 && e.keyCode!=46){
				var v = $(this).val();
				v = v.replace(/\D/g,"");
				var length = v.length;
				if(length<=10){
					formato = '';
					for(var i=0;i<length;i++){
						if(i==0){
							formato+= '(';
						}else if(i==2){
							formato+= ') ';
						}else if(i==6){
							formato+= '-';
						}
						num = v.substring(i,parseInt(i+1));
						formato+= num;
					}
				}else{
					formato = '';
					for(var i=0;i<length;i++){
						if(i==0){
							formato+= '(';
						}else if(i==2){
							formato+= ') ';
						}else if(i==7){
							formato+= '-';
						}
						num = v.substring(i,parseInt(i+1));
						formato+= num;
					}
				}
				this.value = formato;
			}
		});
	}





	$.fn.formatacnpj = function(){
		$('.formatacnpj').keydown( function(e){
			$(this).attr('maxlength','18');
			if ((e.keyCode==229) || (e.keyCode>=48 && e.keyCode<=57) || (e.keyCode>=96 && e.keyCode<=105) || e.keyCode==32 || e.keyCode==13 || e.keyCode==27 || e.keyCode==116 || e.keyCode==9 || e.keyCode==8 || e.keyCode==16 || e.keyCode==37 || e.keyCode==39 || e.keyCode==46){
				return true;
			}else{
				return false;
			}
		});
		$('.formatacnpj').keyup( function(e){
			if (e.keyCode!=37 && e.keyCode!=39 && e.keyCode!=46){
				var v = $(this).val();
				v = v.replace(/\D/g,"");
				var length = v.length;
				formato = '';
				for(var i=0;i<length;i++){
					if(i==2){
						formato+= '.';
					}else if(i==5){
						formato+= '.';
					}else if(i==8){
						formato+= '/';
					}else if(i==12){
						formato+= '-';
					}
					num = v.substring(i,parseInt(i+1));
					formato+= num;
				}
				this.value = formato;
			}
		});
	}





	$.fn.formatacpf = function(){
		$('.formatacpf').keydown( function(e){
			$(this).attr('maxlength','14');
			if ((e.keyCode==229) || (e.keyCode>=48 && e.keyCode<=57) || (e.keyCode>=96 && e.keyCode<=105) || e.keyCode==32 || e.keyCode==13 || e.keyCode==27 || e.keyCode==116 || e.keyCode==9 || e.keyCode==8 || e.keyCode==16 || e.keyCode==37 || e.keyCode==39 || e.keyCode==46){
				return true;
			}else{
				return false;
			}
		});
		$('.formatacpf').keyup( function(e){
			if (e.keyCode!=37 && e.keyCode!=39 && e.keyCode!=46){
				var v = $(this).val();
				v = v.replace(/\D/g,"");
				var length = v.length;
				formato = '';
				for(var i=0;i<length;i++){
					if(i==3){
						formato+= '.';
					}else if(i==6){
						formato+= '.';
					}else if(i==9){
						formato+= '-';
					}
					num = v.substring(i,parseInt(i+1));
					formato+= num;
				}
				this.value = formato;
			}
		});
	}





	$.fn.formatadata = function(){
		$('.formatadata').keydown( function(e){
			$(this).attr('maxlength','10');
			if ((e.keyCode==229) || (e.keyCode>=48 && e.keyCode<=57) || (e.keyCode>=96 && e.keyCode<=105) || e.keyCode==32 || e.keyCode==13 || e.keyCode==27 || e.keyCode==116 || e.keyCode==9 || e.keyCode==8 || e.keyCode==16 || e.keyCode==37 || e.keyCode==39 || e.keyCode==46){
				return true;
			}else{
				return false;
			}
		});
		$('.formatadata').keyup( function(e){
			if (e.keyCode!=37 && e.keyCode!=39 && e.keyCode!=46){
				var v = $(this).val();
				v = v.replace(/\D/g,"");
				var length = v.length;
				formato = '';
				for(var i=0;i<length;i++){
					if(i==2){
						formato+= '/';
					}else if(i==4){
						formato+= '/';
					}
					num = v.substring(i,parseInt(i+1));
					formato+= num;
				}
				this.value = formato;
			}
		});
	}





	$.fn.formatacep = function(){
		$('.formatacep').keydown( function(e){
			$(this).attr('maxlength','10');
			if ((e.keyCode==229) || (e.keyCode>=48 && e.keyCode<=57) || (e.keyCode>=96 && e.keyCode<=105) || e.keyCode==32 || e.keyCode==13 || e.keyCode==27 || e.keyCode==116 || e.keyCode==9 || e.keyCode==8 || e.keyCode==16 || e.keyCode==37 || e.keyCode==39 || e.keyCode==46){
				return true;
			}else{
				return false;
			}
		});
		$('.formatacep').keyup( function(e){
			if (e.keyCode!=37 && e.keyCode!=39 && e.keyCode!=46){
				var v = $(this).val();
				v = v.replace(/\D/g,"");
				var length = v.length;
				formato = '';
				for(var i=0;i<length;i++){
					if(i==2){
						formato+= '.';
					}else if(i==5){
						formato+= '-';
					}
					num = v.substring(i,parseInt(i+1));
					formato+= num;
				}
				this.value = formato;
			}
		});
	}





	$.fn.formatamoeda = function(){
		$('.formatamoeda').keydown( function(e){
			$(this).attr('maxlength','13');
			if ((e.keyCode==229) || (e.keyCode>=48 && e.keyCode<=57) || (e.keyCode>=96 && e.keyCode<=105) || e.keyCode==32 || e.keyCode==13 || e.keyCode==27 || e.keyCode==116 || e.keyCode==9 || e.keyCode==8 || e.keyCode==16 || e.keyCode==37 || e.keyCode==39 || e.keyCode==46){
				return true;
			}else{
				return false;
			}
		});
		$('.formatamoeda').keyup( function(e){
			var v = $(this).val();
			$(this).maskMoney({
				symbol:'R$ ', // Simbolo
				decimal:',', // Separador do decimal
				precision:2, // Precisão
				thousands:'.', // Separador para os milhares
				allowZero:false, // Permite que o digito 0 seja o primeiro caractere
				showSymbol:false // Exibe/Oculta o símbolo
			});
		});
	}





	$.fn.formatapesokg = function(){
		$('.formatapesokg').keydown( function(e){
			$(this).attr('maxlength','10');
			if ((e.keyCode==229) || (e.keyCode>=48 && e.keyCode<=57) || (e.keyCode>=96 && e.keyCode<=105) || e.keyCode==32 || e.keyCode==13 || e.keyCode==27 || e.keyCode==116 || e.keyCode==9 || e.keyCode==8 || e.keyCode==16 || e.keyCode==37 || e.keyCode==39 || e.keyCode==46){
				return true;
			}else{
				return false;
			}
		});
		$('.formatapesokg').keyup( function(e){
			var v = $(this).val();
			$(this).maskMoney({
				symbol:'Kg ', // Simbolo
				decimal:',', // Separador do decimal
				precision:3, // Precisão
				thousands:'', // Separador para os milhares
				allowZero:true, // Permite que o digito 0 seja o primeiro caractere
				showSymbol:false // Exibe/Oculta o símbolo
			});
		});
	}





	$.fn.formatapesokg = function(){
		$('.formatainteiro').keydown( function(e){
			$(this).attr('maxlength','10');
			if ((e.keyCode==229) || (e.keyCode>=48 && e.keyCode<=57) || (e.keyCode>=96 && e.keyCode<=105) || e.keyCode==32 || e.keyCode==13 || e.keyCode==27 || e.keyCode==116 || e.keyCode==9 || e.keyCode==8 || e.keyCode==16 || e.keyCode==37 || e.keyCode==39 || e.keyCode==46){
				return true;
			}else{
				return false;
			}
		});
		$('.formatainteiro').keyup( function(e){
			var v = $(this).val();
			$(this).maskMoney({
				symbol:'', // Simbolo
				decimal:'', // Separador do decimal
				precision:0, // Precisão
				thousands:'.', // Separador para os milhares
				allowZero:true, // Permite que o digito 0 seja o primeiro caractere
				showSymbol:false // Exibe/Oculta o símbolo
			});
		});
	}





	$.fn.formatasomentenumero = function(){
		$('.formatasomentenumero').keydown( function(e){
			if ((e.keyCode==229) || (e.keyCode>=48 && e.keyCode<=57) || (e.keyCode>=96 && e.keyCode<=105) || e.keyCode==32 || e.keyCode==13 || e.keyCode==27 || e.keyCode==116 || e.keyCode==9 || e.keyCode==8 || e.keyCode==16 || e.keyCode==37 || e.keyCode==39 || e.keyCode==46){
				return true;
			}else{
				return false;
			}
		});
	}





	$.fn.formataform = function(){
		$().formatatelefone();
		$().formatacnpj();
		$().formatacpf();
		$().formatadata();
		$().formatacep();
		$().formatamoeda();
		$().formatapesokg();
		$().formatasomentenumero();
	}
	
	$().formataform();


});




