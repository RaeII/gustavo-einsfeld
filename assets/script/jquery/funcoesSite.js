$(function(){
	
	
	
	
	
	$(".botAvancada,form[name=pesquisaavancada] input[name=Cancelar]").click(function(){
		var botao = $(this);
		var boxBuscaPrincipal = $(".pesquisatopo.normal");
		var boxBuscaAvancada = $(".pesquisatopo.avancada");
		if(boxBuscaAvancada.is(':visible')){
			boxBuscaAvancada.fadeOut("slow",function(){
				if(boxBuscaPrincipal.is(':not(.off)')){
					boxBuscaPrincipal.fadeIn("slow");
				}
			});
		}else{
			boxBuscaPrincipal.fadeOut("slow",function(){
				boxBuscaAvancada.fadeIn("slow");
			});
		}
	});





	$(".clickbanner").click(function(index){
		var botao = $(this);
		var idbanner = $(this).attr("idbanner");
		console.log("clickbanner: "+idbanner);
		xajax_addClickBanner(idbanner);
	});
	
	
	
	$(".compartilharFacebook").click(function(e){
		e.preventDefault();
		var botao = $(this);
		var url = $(this).attr("url");
		compartilharFacebook(url);
	});





	$(".altergrid").click(function(index){
		var botao = $(this);
		if(botao.hasClass('branco')){
			$(this).removeClass('gridbox');
			$(this).removeClass('gridlist');
			$(this).removeClass('color');
			$(this).addClass('carregando');
			$(this).addClass('cinza');
		}
		xajax_altergrid();
	});
	
	
	

	
	
	
	
	
	// MODELO DE USO
	//<input type="text" name="numero" id='numero' style="width:100px;">
	//<div class='inputnumber' campo='numero'>
	//	<div valor='1'>1</div>
	//	<div valor='2' class='active'>2</div>
	//	<div valor='3'>3</div>
	//	<div valor='4'>4+</div>
	//</div>
	$(".inputnumber>div").click(function(){
		var bloco = $(this);
		var valor = $(this).attr('valor');
		var campo = $(this).closest('.inputnumber').attr('campo');
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
		var total = "";
		$(this).closest('.inputnumber').children('div').each(function(index){
			if($(this).hasClass('active')){
				if(total!=''){
					total+= ',';
				}
				total+= $(this).attr('valor');
			}
		});
		$('#'+campo).val(total);
	});
	
	




	// MODELO DE USO
	//<div class='filtroRange combotao' strini='TEXTO NO INICIO' strfim='TEXTO NO FIM' style="width:300px;">
	//	<div class='minmax'>
	//		<span class='min'>R$ 0,00</span>
	//		<span class='max'>R$ 300,00</span>
	//	</div>
	//	<div class='barra' vi='35' vf='210'></div>
	//	<a href=''><div class='botao'></div></a>
	//    <input type="hidden" name="valori" value='' />
	//    <input type="hidden" name="valorf" value='' />
	//</div>
	$(".filtroRange").each(function(index){
		var bloco = $(this);
		var strini = $(this).attr('strini');
		var strfim = $(this).attr('strfim');
		var vi = bloco.children(".barra").attr("vi");
		var vf = bloco.children(".barra").attr("vf");
		var vMin = bloco.children(".minmax").children(".min").html();
		var vMax = bloco.children(".minmax").children(".max").html();
		var parametroA = bloco.children("input:first").attr("name");
		var parametroB = bloco.children("input:last").attr("name");
		var urlAtual = document.location.href;
		urlAtual = urlRemovePar(parametroA,urlAtual);
		urlAtual = urlRemovePar(parametroB,urlAtual);
		if(urlAtual.indexOf("?")!=-1){
			parUrlAtual = "&";
		}else{
			parUrlAtual = "?";
		}
		
		var monetario = false;
		if(vMin.indexOf("R$")!=-1){
			intvMin = replaceAll(vMin, "R$", "");
			intvMax = replaceAll(vMax, "R$", "");
			monetario = true;
		}else{
			intvMin = vMin;
			intvMax = vMax;
		}
		intvMin = parseInt(intvMin);
		intvMax = parseInt(intvMax);
		vi = parseInt(vi);
		vf = parseInt(vf);
		var exibei = vi;
		var exibef = vf;
		if(monetario){
			exibei = "R$ "+formatavalor(exibei+"00");
			exibef = "R$ "+formatavalor(exibef+"00");
		}
		if(strini){
			exibei = strini+exibei;
			exibef = strini+exibef;
		}
		if(strfim){
			exibei = exibei+strfim;
			exibef = exibef+strfim;
		}
		bloco.children(".minmax").children(".min").html(exibei);
		bloco.children(".minmax").children(".max").html(exibef);
		var urlBloco = "";
		if(vi>intvMin){
			if(urlBloco!=""){
				urlBloco+= "&";
			}else{
				urlBloco+= parUrlAtual;
			}
			urlBloco+= parametroA+"="+vi;
		}
		if(vf<intvMax){
			if(urlBloco!=""){
				urlBloco+= "&";
			}else{
				urlBloco+= parUrlAtual;
			}
			urlBloco+= parametroB+"="+vf;
		}
		bloco.children("a").attr("href",urlAtual+urlBloco);
		
		$(this).children(".barra").slider({
			range: true,
			min: intvMin,
			max: intvMax,
			values: [vi,vf],
			slide: function(event,ui){
				var valorMin = ui.values[0];
				var valorMax = ui.values[1];
				bloco.children("input:first").val(valorMin);
				bloco.children("input:last").val(valorMax);
				if(typeof vMin=="string"){
					var ivMin = vMin.indexOf("R$");
				}else{
					var ivMin = -1;
				}
				if(ivMin>=0){
					vMin = parseInt(replaceAll(vMin, "R$", ""));
					vMax = parseInt(replaceAll(vMax, "R$", ""));
				}else{
					vMin = parseInt(vMin);
					vMax = parseInt(vMax);
				}
				var urlPar = "";
				if(valorMin>vMin){
					if(urlPar!=""){
						urlPar+= "&";
					}else{
						urlPar+= parUrlAtual;
					}
					urlPar+= parametroA+"="+valorMin;
				}
				if(valorMax<vMax){
					if(urlPar!=""){
						urlPar+= "&";
					}else{
						urlPar+= parUrlAtual;
					}
					urlPar+= parametroB+"="+valorMax;
				}
				bloco.children("a").attr("href",urlAtual+urlPar);
				if(monetario){
					valorMin = "R$ "+formatavalor(valorMin+"00");
					valorMax = "R$ "+formatavalor(valorMax+"00");
				}
				if(strini){
					valorMin = strini+valorMin;
					valorMax = strini+valorMax;
				}
				if(strfim){
					valorMin = valorMin+strfim;
					valorMax = valorMax+strfim;
				}
				bloco.children(".minmax").children(".min").html(valorMin);
				bloco.children(".minmax").children(".max").html(valorMax);
			}
		});
		
	});
	




	
	// MODELO DE USO
	//<select name="finalidade" style="width:170px;" class="selectmultiple" multiple="multiple">
	//<option value='ven'>Venda</option>
	//<option value='alug'>Alugar</option>
	//</select>
	$(".selectmultiple").each(function(index){
		var campo = $(this);
		var name = $(this).attr('name');
		var width = $(this).outerWidth();
		$(this).multiselect({
			buttonClass: 'selectmultiple',
			buttonWidth: width+'px',
			buttonText: function(options) {
				if (options.length == 0) {
					return 'Todos';
				}else if (options.length > 1) {
					return options.length + ' selecionados';
				}else {
					var selected = '';
					options.each(function() {
						selected += $(this).text() + ', ';
					});
					return selected.substr(0, selected.length -2);
				}
			},
		});
	});
	
	










	


	$(".lateralfiltro .lista li.mais,.lateralfiltro .lista li.menos,.filtroslaterais .lista li.mais,.filtroslaterais .lista li.menos").click(function(){
		var botao = $(this);
		var box = $(this).closest('.lista').children(".plus");
		$(box).toggle( "slow", function() {
			if (box.is(':visible')) {
				botao.removeClass("mais");
				botao.addClass("menos");
				botao.html("Esconder");
			}else{
				botao.removeClass("menos");
				botao.addClass("mais");
				botao.html("Mostrar mais");
			}
		});
	});




/*
	$(".produtobox .btncomparar").click(function(e){
		e.preventDefault();
		var botao = $(this);
		var idproduto = $(this).attr("idproduto");
		if(botao.hasClass('preto')){
			botao.removeClass('preto');
			botao.addClass('prata');
		}else{
			botao.removeClass('prata');
			botao.addClass('preto');
		}
		//compartilharFacebook(url);
		//console.log("btncomparar: "+idproduto);
	});
	*/
	$(".btnfavorito").click(function(e){
		e.preventDefault();
		var botao = $(this);
		var idimovel = $(this).attr("idimovel");
		if(botao.hasClass('active')){
			botao.removeClass('active');
			xajax_removeFavorito(idimovel);
		}else{
			botao.addClass('active');
			xajax_addFavorito(idimovel);
		}
	});


	
	$.fn.sCompare = function(){
		$(".btncomparar").unbind();
		$(".sCompare span.excluir").unbind();
		$(".sCompare .limpar").unbind();
		
		$(".btncomparar").click(function(e){
			e.preventDefault();
			var botao = $(this);
			var idimovel = $(this).attr("idimovel");
			var foto = $(this).attr("foto");
			var title = $(this).attr("title");
			var nbloco;
			var n=0;
			$(".sCompare center ul li").each(function(index){
				var idimovelBox = $(this).attr("idimovel");
				if(idimovelBox==idimovel){
					nbloco = index;
				}
				n++;
			});
			if(n>5){
				alert("Limite máximo atingido!");
			}else if(!nbloco){
				var html = "<li style='background-image:url(fotop/"+foto+");' title='"+title+"' idimovel='"+idimovel+"'><span class='icone15 excluir original'></span></li>";
				$(html).insertBefore(".sCompare center ul li:nth-child("+(n)+")");
				$().sCompare();
				xajax_addCompare(idimovel);
			}
		});
		
		$(".sCompare span.excluir").click(function(e){
			e.preventDefault();
			var botao = $(this);
			var idimovel = $(this).closest("li").attr("idimovel");
			$(".sCompare center ul li").each(function(index){
				var idimovelBox = $(this).attr("idimovel");
				if(idimovelBox==idimovel){
					$(this).remove();
					$().sCompare();
				}
			});
			xajax_removeCompare(idimovel);
		});
		
		$(".sCompare .limpar").click(function(e){
			var total = 0;
			$(".sCompare center ul li").each(function(index){
				total++
			});
			$(".sCompare center ul li").each(function(index){
				if(index<(total-1)){
					$(this).remove();
				}
			});
			$().sCompare();
			xajax_limpaCompare();
		});
		
		var total = 0;
		$(".sCompare center ul li").each(function(index){
			total++
		});
		
		var boxCompare = $(".sCompare");
		var position = boxCompare.position();
		var bottom = $(window).height() - position.top - boxCompare.height();
		
		if(total>1 && bottom<-50){
			boxCompare.animate({
				bottom: '0px',
			}, 1200);
		}else if(total<=1 && bottom>-50){
			boxCompare.animate({
				bottom: '-150px',
			}, 1200);
		}
	}
	$().sCompare();




	$("form[name=pesquisaprincipal] select[name=finalidade],form[name=pesquisaprincipal] select[name=tipo],form[name=pesquisaprincipal] select[name=cidade],form[name=pesquisaprincipal] select[name=bairro]").change(function(index){
		var botao = $(this);
		var nome = $(this).attr("name");
		
		var finalidade = $("form[name=pesquisaprincipal] select[name=finalidade]").val();
		var tipo = $("form[name=pesquisaprincipal] select[name=tipo]").val();
		var cidade = $("form[name=pesquisaprincipal] select[name=cidade]").val();
		var bairro = $("form[name=pesquisaprincipal] select[name=bairro]").val();
		
		var dados = new Object();
		dados.finalidade = finalidade;
		dados.tipo = tipo;
		dados.bairro = bairro;
		dados.cidade = cidade;
		var jsonArray = JSON.stringify(dados);
		
		//console.log(jsonArray);
		xajax_filtrapesquisaprincipal(jsonArray);

	});
	
	atpesquisaprincipal = function(dadosJson){
		
		//console.log("CHEGOU");
		//console.log(dadosJson);
		var obj = JSON.parse(dadosJson);
		//console.log(obj);
		
		$("form[name=pesquisaprincipal] select[name=finalidade]").multiselect('dataprovider', obj.finalidade);
		$("form[name=pesquisaprincipal] select[name=tipo]").multiselect('dataprovider', obj.tipo);
		$("form[name=pesquisaprincipal] select[name=cidade]").multiselect('dataprovider', obj.cidade);
		$("form[name=pesquisaprincipal] select[name=bairro]").multiselect('dataprovider', obj.bairro);
	}
	
});



