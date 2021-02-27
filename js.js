/* --------------------------geral--*/

window.onload = function() {
  atualizaNP();
};

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
	document.getElementById('nomeHeroi').innerHTML="<h3 style='text-align:center;'>"+heroi.nome+"<h3>"
     
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
	'descritor':undefined,
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


/*-------------------------------------- gerar ficha--*/

function gerarHeroi(){

	heroi.np=document.getElementById('nivelPoder').value;
	/* atribui o np do heroi */

	function preencherFicha(){
	 	function preencherCampo(idCampo,valor){
	 		campo = document.getElementById(idCampo);
			campo.innerHTML= valor;
	 	}

	 	preencherCampo('fichaDescritor',heroi.descritor);
	 	preencherCampo('fichaIdade',heroi.idade);
	 	preencherCampo('fichaAltura',heroi.altura);
	 	preencherCampo('fichaNp',heroi.np);
	 	
	 	for (var i = 0; i<heroi.pericias.length; i++) {
	 		document.getElementById('fichaPericias').append(heroi.pericias[i].nome+' '+heroi.pericias[i].grad+', ');
	 	}

	 	for (var i = 0; i<heroi.poderes.length; i++) {
	 		document.getElementById('fichaPoderes').append(heroi.poderes[i].nome+' '+heroi.poderes[i].grad + ', ');
	 	}

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
	 
	 /* heroi.conceito=listaConceitos[randomAte(listaConceitos.length)]; */
	 heroi.descritor=listaDescritores[randomAte(listaDescritores.length)];
	 heroi.idade=randomEntre(14,60);
	 heroi.altura=(randomEntre(165,190))/100;

	 /* define os valores de ataque cac e ataquedist */
	 if (randomAte(1)){
	 	heroi.ataquecac=heroi.np;
	 	heroi.ataquedist=(heroi.np/2).toFixed();
	 	heroi.pericias.push(
	 		{'nome':'Combate à Distancia', 'grad':heroi.ataquedist},
	 		{'nome':'Combate corpo-a-corpo', 'grad':heroi.ataquecac}
	 		);
	 } else {
	 	heroi.ataquecac=(heroi.np/2).toFixed();
	 	heroi.ataquedist=heroi.np;
	 	heroi.pericias.push(
	 		{'nome':'Combate à Distancia', 'grad':heroi.ataquedist},
	 		{'nome':'Combate corpo-a-corpo', 'grad':heroi.ataquecac}
	 		);
	 }

	numPoderes = (heroi.np/3.5).toFixed();/* arredonda pra cima*/

	for (var i = 0; i < numPoderes; i++) { 	
	 heroi.poderes.push(listaPoderes[randomAte(listaPoderes.length)]);
	 }

	 document.getElementById('ficha').style.display="block";
	 preencherFicha();/* Imprime os dados em seus respectivos campos */
	 trocarBotoes(); 
	 window.scroll(0,370); /* scroll até a ficha*/

} /* fim gerar heroi */