/* --------------------------geral--*/

window.onload = function() {
  atualizaNP();
};

/*-------------------------------Form de geração */

function atualizaNP(){
	d = document.getElementById('nivelPoder').value;
	Num = document.getElementById('NumeroNP');
	Num.innerHTML = d;
	pontosDistrib = document.getElementById('pontosDistribuir');
	pontosDistrib.innerHTML = d*15;
	limPericias = document.getElementById('limitePericia');
	limPericias.innerHTML = 10+ parseInt(d);
	limiteDobro = document.getElementsByClassName('DobroNP');
	limiteDobro[0].innerHTML = d*2;
	limiteDobro[1].innerHTML = d*2;
	limiteDobro[2].innerHTML = d*2;
}


function trocarBotoes(){
	document.getElementById('botaoGerar').style.display="none";
	document.getElementById('botaoImprimir').style.display="block";
}


function tentarNovamente(){
	document.location.reload();
}

function randomAte(numMaximo){
	 /* 
	 de 0 a numMaximo -1.
	 se colocar numMaximo+1 no argumento, 
	 vai de 1 até numMaximo.
	 */
	return Math.floor(Math.random()*(numMaximo));
}

function randomEntre(min,max){
	/* valor mínimo = min e valor máximo=max */
   return Math.floor(Math.random() * (max-min+1)+min);
}	

function imprimirFicha() {
	console.log(document.getElementById('inputNome').value);
	heroi.nome=document.getElementById('inputNome').value;
	document.getElementById('nomeHeroi').innerHTML="<h3 style='text-align:center;'><strong>"+heroi.nome+"</strong></h3>"
     
    conteudoImprimir = document.getElementById('ficha').innerHTML;
    document.body.innerHTML = conteudoImprimir;
    window.print();
    document.location.reload();
}

/*--------------------------Herói--*/
var heroi={
	'nome': '',
	'np': 11, /* caso não for atribuido */
	/*'conceito':undefined,*/
	'descritores':[],
	'genero':undefined,
	'idade':undefined,
	'altura':undefined,

	'for':undefined,
	'agi':undefined,
	'lut':undefined,
	'pro':undefined,
	'vig':undefined,
	'des':undefined,
	'int':undefined,
	'pre':undefined,

	'esquiva':undefined,
	'aparar':undefined,
	'fortitude':undefined,
	'resistencia':undefined,
	'vontade':undefined,

	'ataquecac':undefined,
	'ataquedist':undefined,

	'vantagens': [],
	'pericias': [],
	'poderes': []
}

/*-------------------------------------- gerar ficha--*/

function gerarHeroi(){

	heroi.np=document.getElementById('nivelPoder').value;
	/* atribui o np do heroi */

	function preencherFicha(){
	 	function preencherCampo(idCampo,valor){
	 		campo = document.getElementById(idCampo);
			campo.innerHTML= valor;
	 	}

	 	preencherCampo('fichaDescritor',heroi.descritores[0]+' e '+heroi.descritores[1]);
	 	/*preencherCampo('fichaIdade',heroi.idade);
	 	preencherCampo('fichaAltura',heroi.altura);*/
	 	preencherCampo('fichaNp',heroi.np);
	 	preencherCampo('cacGrad',heroi.pericias[0].grad)/* perícias [0] sempre é a cac */ 
	 	preencherCampo('distGrad',heroi.pericias[1].grad)/* perícias [1] sempre é a cac */
	 	
	 	for (var i = 0; i<heroi.pericias.length; i++) {
	 		document.getElementById('fichaPericias').append(heroi.pericias[i].nome+' '+heroi.pericias[i].grad+', ');
	 	}

	 	for (var i = 0; i<heroi.poderes.length; i++) {
	 		document.getElementById('fichaPoderes').append(heroi.poderes[i].nome+' '+heroi.poderes[i].grad + ', ');
	 		if (heroi.poderes[i].alcance=='Perto'){
	 			document.getElementById('cacPoderes').append(heroi.poderes[i].nome+' '+heroi.poderes[i].grad + ', ');
	 		} else if(heroi.poderes[i].alcance=='À Distância'){
	 			document.getElementById('distPoderes').append(heroi.poderes[i].nome+' '+heroi.poderes[i].grad + ', ');
	 		}
	 	}

	 	for (var i = 0; i<heroi.vantagens.length; i++) {
	 		document.getElementById('fichaVantagens').append(heroi.vantagens[i].nome+' ('+heroi.vantagens[i].descricao+'), ');
	 	}

	 	document.getElementById('fichaForca').innerHTML=heroi.for;
	 	document.getElementById('fichaAgilidade').innerHTML=heroi.agi;
	 	document.getElementById('fichaLuta').innerHTML=heroi.lut;
	 	document.getElementById('fichaProntidao').innerHTML=heroi.pro;
	 	document.getElementById('fichaVigor').innerHTML=heroi.vig;
	 	document.getElementById('fichaDestreza').innerHTML=heroi.des;
	 	document.getElementById('fichaIntelecto').innerHTML=heroi.int;
	 	document.getElementById('fichaPresenca').innerHTML=heroi.pre;

	 	document.getElementById('fichaEsquiva').innerHTML=heroi.esquiva+heroi.agi+'='+heroi.esquiva+'+('+heroi.agi+')';
	 	document.getElementById('fichaAparar').innerHTML=heroi.aparar+heroi.lut+'='+heroi.aparar+'+('+heroi.lut+')';
	 	document.getElementById('fichaFortitude').innerHTML=heroi.fortitude+heroi.vig+'='+heroi.fortitude+'+('+heroi.vig+')';
	 	document.getElementById('fichaResistencia').innerHTML=heroi.resistencia+heroi.vig+'='+heroi.resistencia+'+('+heroi.vig+')';
	 	document.getElementById('fichaVontade').innerHTML=heroi.vontade+heroi.pro+'='+heroi.vontade+'+('+heroi.pro+')';
	 }

	 function definirGraduacoes(){

	 	function definirHabilidades(){
		 	 heroi.for=randomEntre(heroi.np/5,heroi.np);
		 	 heroi.agi=randomEntre(heroi.np/5,heroi.np);
		 	 heroi.lut=randomEntre(heroi.np/5,heroi.np);
		 	 heroi.pro=randomEntre(heroi.np/5,heroi.np);
		 	 heroi.vig=randomEntre(heroi.np/5,heroi.np);
		 	 heroi.des=randomEntre(heroi.np/5,heroi.np);
		 	 heroi.int=randomEntre(heroi.np/5,heroi.np);
			 heroi.pre=randomEntre(heroi.np/5,heroi.np);
	 	}

	 	function definirDefesas(){
	 		heroi.esquiva=randomAte(heroi.np/2);
	 		heroi.aparar=randomAte(heroi.np/2);
	 		heroi.fortitude=randomAte(heroi.np/2);
	 		heroi.resistencia=randomAte(heroi.np/2);
	 		heroi.vontade=randomAte(heroi.np/2);
	 	}

	 	function definirPericias(){

	 	}

	  definirHabilidades();
	  definirDefesas();

	 }

	/*var listaConceitos=[];*/
	var listaDescritores=[];
	var listaPoderes=[];
	var listaVantagens=[];
	var listaPericias=[];


/*------------------------------------------ poderes */
	listaPoderes.push(
		{
		'grad': 0,
		'nome':'Absorção de Energia',
		'tipo':'Geral',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Afliçao',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Instantâneo',
		'resistencia':'Fortitude ou Vontade'
		},
		{
		'grad': 0,
		'nome':'Alongamento',
		'tipo':'Geral',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Ambiente',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'Graduação',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Armadilha',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Esquiva'
		},
		{
		'grad': 0,
		'nome':'Aura de Energia',
		'tipo':'Ataque',
		'acao':'Reação',
		'alcance':'Perto',
		'duracao':'Instantâneo',
		'resistencia':'Resistência'
		},
		{
		'grad': 0,
		'nome':'Campo de Força',
		'tipo':'Defesa',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Camuflagem',
		'tipo':'Sensorial',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Compreender',
		'tipo':'Sensorial',
		'acao':'Nenhuma',
		'alcance':'Pessoal',
		'duracao':'Permanente',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Comunicação',
		'tipo':'Sensorial',
		'acao':'Livre',
		'alcance':'Graduação',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Controle de Elemento',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'Percepção',
		'duracao':'Sustentado',
		'resistencia':'Força'
		},
		{
		'grad': 0,
		'nome':'Controle de Energia',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Resistência'
		},
		{
		'grad': 0,
		'nome':'Controle Mental',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'Percepção',
		'duracao':'Instantâneo',
		'resistencia':'Vontade'
		},
		{
		'grad': 0,
		'nome':'Crescimento',
		'tipo':'Geral',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Criar',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Cura',
		'tipo':'Geral',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Instantâneo',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Dano',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Instantâneo',
		'resistencia':'Resistência'
		},
		{
		'grad': 0,
		'nome':'Deflexão',
		'tipo':'Defesa',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Duplicação',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Encolhimento',
		'tipo':'Geral',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Enfraquecer',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Instantâneo',
		'resistencia':'Fortitude ou Vontade'
		},
		{
		'grad': 0,
		'nome':'Escavação',
		'tipo':'Movimento',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Golpe',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Instantâneo',
		'resistencia':'Resistência'
		},
		{
		'grad': 0,
		'nome':'Ilusão',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'Percepção',
		'duracao':'Sustentado',
		'resistencia':'Prontidão'
		},
		{
		'grad': 0,
		'nome':'Imortalidade',
		'tipo':'Defesa',
		'acao':'Nenhuma',
		'alcance':'Pessoal',
		'duracao':'Permanente',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Imunidade',
		'tipo':'Defesa',
		'acao':'Nenhuma',
		'alcance':'Pessoal',
		'duracao':'Permanente',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Intangibilidade',
		'tipo':'Geral',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Invisibilidade',
		'tipo':'Sensorial',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Invocar',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Leitura Mental',
		'tipo':'Sensorial',
		'acao':'Padrão',
		'alcance':'Percepção',
		'duracao':'Sustentado',
		'resistencia':'Vontade'
		},
		{
		'grad': 0,
		'nome':'Magia',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Resistência'
		},
		{
		'grad': 0,
		'nome':'Membros Extras',
		'tipo':'Geral',
		'acao':'Nenhuma',
		'alcance':'Pessoal',
		'duracao':'Permanente',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Morfar',
		'tipo':'Geral',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Mover Objeto',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Sustentado',
		'resistencia':'Força'
		},
		{
		'grad': 0,
		'nome':'Movimento',
		'tipo':'Movimento',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Natação',
		'tipo':'Movimento',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Nulificar',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Graduação/Vontade'
		},
		{
		'grad': 0,
		'nome':'Pasmar',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Fortitude ou Vontade'
		},
		{
		'grad': 0,
		'nome':'Poder de Carga',
		'tipo':'Geral',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Proteção',
		'tipo':'Defesa',
		'acao':'Nenhuma',
		'alcance':'Pessoal',
		'duracao':'Permanente',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Raio',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Resistência'
		},
		{
		'grad': 0,
		'nome':'Rajada Mental',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'Percepção',
		'duracao':'Instantâneo',
		'resistencia':'Vontade'
		},
		{
		'grad': 0,
		'nome':'Rapidez',
		'tipo':'Geral',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Regeneração',
		'tipo':'Defesa',
		'acao':'Nenhuma',
		'alcance':'Pessoal',
		'duracao':'Permanente',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Salto',
		'tipo':'Movimento',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Instantâneo',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Sentidos',
		'tipo':'Sensorial',
		'acao':'Nenhuma',
		'alcance':'Pessoal',
		'duracao':'Permanente',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Sentido Remoto',
		'tipo':'Sensorial',
		'acao':'Livre',
		'alcance':'Graduação',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Sono',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Fortitude'
		},
		{
		'grad': 0,
		'nome':'Sufocamento',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Fortitude'
		},
		{
		'grad': 0,
		'nome':'Supervelocidade',
		'tipo':'Veja Descrição',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Veja descrição',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Teleporte',
		'tipo':'Movimento',
		'acao':'Movimento',
		'alcance':'Graduação',
		'duracao':'Instantâneo',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Transformação',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Variável',
		'tipo':'Geral',
		'acao':'Padrão',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Velocidade',
		'tipo':'Movimento',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'grad': 0,
		'nome':'Voo',
		'tipo':'Movimento',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		}
	);

/*------------------------------------------ conceito */
	/*listaConceitos.push(
		'',
		'',
		''
	);
	*/
/*--------------------------------------- descritores */
	listaDescritores.push(
		'elemental',
		'ar',
		'fogo',
		'magma',
		'terra',
		'planta',
		'água',
		'vapor',
		'gelo',
		'madeira',
		'eletricidade/raio',
		'clima',
		'divino/celestial',
		'sombra',
		'luz',
		'magnético',
		'radiação',
		'sônico',
		'espaço',
		'quântico',
		'sorte',
		'biológico',
		'cósmico',
		'interplanetário',
		'extradimensional',
		'mágico',
		'bem',
		'mal',
		'demoníaco',
		'psíquico'
	);

/*-------------------------------------- perícias */
	 listaPericias.push(
		{'nome':'Acrobacia', 'grad':0},
		{'nome':'Atletismo', 'grad':0},
		{'nome':'Enganação', 'grad':0},
		{'nome':'Furtividade', 'grad':0},
		{'nome':'Intimidação', 'grad':0},
		{'nome':'Intuição', 'grad':0},
		{'nome':'Investigação', 'grad':0},
		{'nome':'Percepção', 'grad':0},
		{'nome':'Persuasão', 'grad':0},
		{'nome':'Prestidigitação', 'grad':0},
		{'nome':'Tecnologia', 'grad':0},
		{'nome':'Tratamento', 'grad':0},
		{'nome':'Veiculos', 'grad':0}
	);

 /*-------------------------------------------------vantagens */
 	listaVantagens.push(
 		{'nome':'Ação em Movimento', 'descricao':'Mova-se tanto antes quanto depois de sua ação padrão.'},
 		{'nome':'Agarrar Aprimorado', 'descricao':'Faça ataques de agarrar com apenas uma mão.'},
 		{'nome':'Agarrar Preciso', 'descricao':'Substitui Des por For em ataques para agarrar.'},
 		{'nome':'Agarrar Rápido', 'descricao':'Quando acerta um ataque desarmado, pode fazer um teste de agarrar como ação livre.'},
 		{'nome':'Ambiente Favorito', 'descricao':'Bônus de circunstância no ataque ou na defesa em determinado ambiente.'},
 		{'nome':'Arma Improvisada', 'descricao':'Use a perícia Combate Desarmado com armas improvisadas, com bônus de dano de +1.'},
 		{'nome':'Armação', 'descricao':'Transfira o benefício de uma perícia de interação para um aliado.'},
 		{'nome':'Ataque à Distância', 'descricao':'Bônus de +1 em testes de ataque à distância por graduação.'},
 		{'nome':'Ataque Acurado', 'descricao':'Troque a CD do efeito por um bônus de ataque.'},
 		{'nome':'Ataque Corpo-a-Corpo', 'descricao':'Bônus de +1 em testes de ataque corpo-a-corpo por graduação'},
 		{'nome':'Ataque Defensivo', 'descricao':'Troque um bônus de ataque por um bônus de defesa ativa'},
 		{'nome':'Ataque Dominó', 'descricao':'Ganhe um ataque extra quando incapacitar um capanga'},
 		{'nome':'Ataque Imprudente', 'descricao':'Troque defesa ativa por um bônus de ataque.'},
 		{'nome':'Ataque Poderoso', 'descricao':'Troque bônus de ataque por bônus de efeito.'},
 		{'nome':'Ataque Preciso', 'descricao':'Ignore penalidades em testes de ataque devido a cobertura ou camuflagem.'},
 		{'nome':'Crítico Aprimorado', 'descricao':'+1 na ameaça de crítico com um ataque específico por graduação.'},
 		{'nome':'Defesa Aprimorada', 'descricao':'Bônus de +2 em uma defesa ativa quando você usa a ação defender-se.'},
 		{'nome':'Derrubar Aprimorado', 'descricao':'Sem penalidade para usar a ação derrubar'},
 		{'nome':'Desarmar Aprimorado', 'descricao':'Sem penalidade para usar a ação desarmar'},
 		{'nome':'Esquiva Fabulosa', 'descricao':'Você não fica vulnerável quando surpreso ou desatento.'},
 		{'nome':'Estrangular', 'descricao':'Sufoca um oponente que você tenha agarrado.'},
 		{'nome':'Evasão', 'descricao':'Bônus de circunstância para evitar ataques de área'},
 		{'nome':'Imobilizar Aprimorado', 'descricao':'Penalidade de circunstância de –5 para escapar de você.'},
 		{'nome':'Iniciativa Aprimorada', 'descricao':'Bônus de +4 por graduação em testes de iniciativa'},
 		{'nome':'Luta no Chão', 'descricao':'Sem penalidade por lutar caído.'},
 		{'nome':'Maestria em Arremesso', 'descricao':'Bônus de dano de +1 com armas arremessadas por graduação.'},
 		{'nome':'Mira Aprimorada', 'descricao':'Dobra os bônus de circunstância por mirar'},
 		{'nome':'Prender Arma', 'descricao':'Tentativa livre de desarme quando você se defende'},
 		{'nome':'Quebrar Aprimorado', 'descricao':'Sem penalidade para usar a ação quebrar'},
 		{'nome':'Quebrar Arma', 'descricao':'Tentativa livre de quebrar quando você se defende'},
 		{'nome':'Redirecionar', 'descricao':'Use Enganação para redirecionar um ataque que falhe para outro alvo'},
 		{'nome':'Rolamento Defensivo', 'descricao':'Bônus de defesa ativa de +1 em Resistência por graduação.'},
 		{'nome':'Saque Rápido', 'descricao':'Saque uma arma como uma ação livre'},
 		{'nome':'Artífice', 'descricao':'Use Especialidade: Magia para criar dispositivos mágicos temporários'},
 		{'nome':'Assustar', 'descricao':'Use Intimidação para fintar em combate'},
 		{'nome':'Atraente', 'descricao':'Bônus de circunstância em perícias de interação baseado em sua aparência.'},
 		{'nome':'Bem Informado', 'descricao':'Teste imediato de Investigação ou Percepção para saber alguma coisa.'},
 		{'nome':'Bem Relacionado', 'descricao':'Chame ajuda ou consiga favores com um teste de Persuasão.'},
 		{'nome':'Contatos', 'descricao':'Faça um teste inicial de Investigação em um minuto.'},
 		{'nome':'Empatia com Animais', 'descricao':'Use perícias de interação com animais'},
 		{'nome':'Esconder-se à Plena Vista', 'descricao':'Esconda-se quando observado sem precisar de uma distração.'},
 		{'nome':'Fascinar', 'descricao':'Use uma perícia de interação para prender a atenção dos outros.'},
 		{'nome':'Faz Tudo', 'descricao':'Use qualquer perícia sem treinamento.'},
 		{'nome':'Ferramentas Aprimoradas', 'descricao':'Sem penalidade por usar perícias sem as ferramentas apropriadas.'},
 		{'nome':'Finta Ágil ', 'descricao':'Finte usando a perícia Acrobacia ou sua velocidade.'},
 		{'nome':'Idiomas', 'descricao':'Fale e compreenda idiomas adicionais'},
 		{'nome':'Inimigo Favorito', 'descricao':'Bônus de circunstância em testes contra um tipo de oponente'},
 		{'nome':'Inventor', 'descricao':'Use Tecnologia para criar dispositivos temporários'},
 		{'nome':'Maestria em Perícia', 'descricao':'Realize testes de rotina com uma perícia sob quaisquer circunstâncias'},
 		{'nome':'Rastrear', 'descricao':'Use Percepção para seguir rastros.'},
 		{'nome':'Ritualista', 'descricao':'Use Especialidade: Magia para criar e realizar rituais.'},
 		{'nome':'Tontear', 'descricao':'Use Enganação ou Intimidação para deixar um oponente tonto.'},
 		{'nome':'Zombar', 'descricao':'Use Enganação para desmoralizar em combate.'},
 		{'nome':'Esforço Supremo', 'descricao':'Gaste um ponto heróico para ganhar um 20 efetivo em um teste específico.'},
 		{'nome':'Inspirar', 'descricao':'Gaste um ponto heróico para conceder a seus aliados um bônus de circunstância de +1 por graduação.'},
 		{'nome':'Liderança', 'descricao':'Gaste um ponto heróico para remover uma condição de um aliado.'},
 		{'nome':'Sorte de Principiante', 'descricao':'Gaste um ponto heróico para ganhar 5 graduações temporárias em uma perícia.'},
 		{'nome':'Sorte', 'descricao':'Rerole uma rolagem uma vez por graduação.'},
 		{'nome':'Tomar a Iniciativa', 'descricao':'Gaste um ponto heróico para agir primeiro na ordem de iniciativa.'},
 		{'nome':'Avaliação', 'descricao':'Use Intuição para descobrir as habilidades de combate do oponente'},
 		{'nome':'Benefício', 'descricao':'Ganhe uma gratificação ou benefício adicional.'},
 		{'nome':'Capanga', 'descricao':'Ganhe um seguidor ou capanga com (15 x graduação) pontos de poder'},
 		{'nome':'De Pé', 'descricao':'Passe de caído para em pé como uma ação livre.'},
 		{'nome':'Destemido', 'descricao':'Imune a efeitos de medo.'},
 		{'nome':'Duro de Matar', 'descricao':'Estabilize automaticamente quando moribundo'},
 		{'nome':'Equipamento', 'descricao':'5 pontos de equipamento por graduação.'},
 		{'nome':'Esforço Extraordinário', 'descricao':'Ganhe dois benefícios quando usando esforço extra.'},
 		{'nome':'Interpor-se', 'descricao':'Sofra um ataque mirado contra um aliado.'},
 		{'nome':'Memória Eidética', 'descricao':'Você se lembra de tudo, bônus de circunstância de +5 para se lembrar das coisas.'},
 		{'nome':'Parceiro', 'descricao':'Ganhe um parceiro com (5 x graduação) pontos de poder.'},
 		{'nome':'Segunda Chance', 'descricao':'Rerole um teste falho contra uma ameaça uma vez'},
 		{'nome':'Tolerância Maior', 'descricao':'+5 em testes envolvendo tolerância.'},
 		{'nome':'Trabalho em Equipe', 'descricao':'+5 de bônus para ajudar em testes de equipe'},
 		{'nome':'Transe', 'descricao':'Entre em um transe parecido com a morte que diminui as funções vitais.'},
	);
	

	 
	 /* heroi.conceito=listaConceitos[randomAte(listaConceitos.length)]; */
	 heroi.descritores.push(listaDescritores[randomAte(listaDescritores.length)]);
	 heroi.descritores.push(listaDescritores[randomAte(listaDescritores.length)]);
	 /*heroi.idade=randomEntre(14,60);
	 heroi.altura=(randomEntre(165,190))/100;*/
	 /* define os valores de ataque cac e ataquedist */
	 if (randomEntre(0,1)){
	 	heroi.ataquecac=heroi.np;
	 	heroi.ataquedist=(heroi.np/2).toFixed();
	 	heroi.pericias.push(
	 		{'nome':'Combate corpo-a-corpo', 'grad':heroi.ataquecac},
	 		{'nome':'Combate à Distancia', 'grad':heroi.ataquedist}
	 		);
	 } else {
	 	heroi.ataquecac=(heroi.np/2).toFixed();
	 	heroi.ataquedist=heroi.np;
	 	heroi.pericias.push(
	 		{'nome':'Combate corpo-a-corpo', 'grad':heroi.ataquecac},
	 		{'nome':'Combate à Distancia', 'grad':heroi.ataquedist}
	 		);
	 }
 /*  Atribuindo os poderes --------------------------*/
	numPoderes = (heroi.np/3.5).toFixed();/* arredonda pra cima*/
	for (let i = 0; i < numPoderes; i++) { 	
	 heroi.poderes.push(listaPoderes[randomAte(listaPoderes.length)]);
	 heroi.poderes[i].grad=randomEntre(heroi.np/3,heroi.np) 
	 }

/*  Atribuindo as perícias --------------------------*/
	numPericias = (heroi.np/2).toFixed();/* arredonda pra cima*/
	for (let i = 0; i < numPericias; i++) { 	
	 heroi.pericias.push(listaPericias[randomAte(listaPericias.length)]);
	 heroi.pericias[i+2].grad=randomEntre(1,10) /* o i+2 é porque as duas primeiras posições do heroi.pericias já estão preenchidas com as pericias de combate. */
	 }

/*  Atribuindo as vantagens  --------------------------*/
	numVantagens = (heroi.np/2).toFixed();/* arredonda pra cima*/
	for (let i = 0; i < numVantagens; i++) { 	
	 heroi.vantagens.push(listaVantagens[randomAte(listaVantagens.length)]);
	 }

	 definirGraduacoes();

	 document.getElementById('ficha').style.display="block";
	 preencherFicha();/* Imprime os dados em seus respectivos campos */
	 trocarBotoes(); 
	 window.scroll(0,370); /* scroll até a ficha*/

} /* fim gerar heroi */