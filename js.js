/* --------------------------geral--*/

function randomAte(numMaximo){
	 /*aleat = Math.floor(Math.random() * numMaximo);*/
	console.log(Math.floor(Math.random()*(numMaximo+1)));
	}
	

/*--------------------------Herói--*/
	
	var heroi={
		'nome': '',
		'np': 11,
		'conceito':undefined,
		'descritor':undefined,
		'genero':undefined,
		'idade':undefined,
		'altura':undefined,
		'olhos':undefined,
		'cabelos':undefined,

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
		'ataqueaux':undefined,

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

	var listaConceitos=[];
	var listaDescritores=[];
	var listaPoderes=[];
	var listaVantagens=[];
	var listaPericias=[];




/*------------------------------------------ poderes */
	listaPoderes.push(
		{
		'nome':'Absorção de Energia',
		'tipo':'Geral',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Afliçao',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Instantâneo',
		'resistencia':'Fortitude ou Vontade'
		},
		{
		'nome':'Alongamento',
		'tipo':'Geral',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Ambiente',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'Graduação',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Armadilha',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Esquiva'
		},
		{
		'nome':'Aura de Energia',
		'tipo':'Ataque',
		'acao':'Reação',
		'alcance':'Perto',
		'duracao':'Instantâneo',
		'resistencia':'Resistência'
		},
		{
		'nome':'Campo de Força',
		'tipo':'Defesa',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Camuflagem',
		'tipo':'Sensorial',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Compreender',
		'tipo':'Sensorial',
		'acao':'Nenhuma',
		'alcance':'Pessoal',
		'duracao':'Permanente',
		'resistencia':''
		},
		{
		'nome':'Comunicação',
		'tipo':'Sensorial',
		'acao':'Livre',
		'alcance':'Graduação',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Controle de Elemento',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'Percepção',
		'duracao':'Sustentado',
		'resistencia':'Força'
		},
		{
		'nome':'Controle de Energia',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Resistência'
		},
		{
		'nome':'Controle Mental',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'Percepção',
		'duracao':'Instantâneo',
		'resistencia':'Vontade'
		},
		{
		'nome':'Crescimento',
		'tipo':'Geral',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Criar',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Cura',
		'tipo':'Geral',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Instantâneo',
		'resistencia':''
		},
		{
		'nome':'Dano',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Instantâneo',
		'resistencia':'Resistência'
		},
		{
		'nome':'Deflexão',
		'tipo':'Defesa',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':''
		},
		{
		'nome':'Duplicação',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Encolhimento',
		'tipo':'Geral',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Enfraquecer',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Instantâneo',
		'resistencia':'Fortitude ou Vontade'
		},
		{
		'nome':'Escavação',
		'tipo':'Movimento',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Golpe',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Instantâneo',
		'resistencia':'Resistência'
		},
		{
		'nome':'Ilusão',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'Percepção',
		'duracao':'Sustentado',
		'resistencia':'Prontidão'
		},
		{
		'nome':'Imortalidade',
		'tipo':'Defesa',
		'acao':'Nenhuma',
		'alcance':'Pessoal',
		'duracao':'Permanente',
		'resistencia':''
		},
		{
		'nome':'Imunidade',
		'tipo':'Defesa',
		'acao':'Nenhuma',
		'alcance':'Pessoal',
		'duracao':'Permanente',
		'resistencia':''
		},
		{
		'nome':'Intangibilidade',
		'tipo':'Geral',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Invisibilidade',
		'tipo':'Sensorial',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Invocar',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Leitura Mental',
		'tipo':'Sensorial',
		'acao':'Padrão',
		'alcance':'Percepção',
		'duracao':'Sustentado',
		'resistencia':'Vontade'
		},
		{
		'nome':'Magia',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Resistência'
		},
		{
		'nome':'Membros Extras',
		'tipo':'Geral',
		'acao':'Nenhuma',
		'alcance':'Pessoal',
		'duracao':'Permanente',
		'resistencia':''
		},
		{
		'nome':'Morfar',
		'tipo':'Geral',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Mover Objeto',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Sustentado',
		'resistencia':'Força'
		},
		{
		'nome':'Movimento',
		'tipo':'Movimento',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Natação',
		'tipo':'Movimento',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Nulificar',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Graduação/Vontade'
		},
		{
		'nome':'Pasmar',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Fortitude ou Vontade'
		},
		{
		'nome':'Poder de Carga',
		'tipo':'Geral',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Proteção',
		'tipo':'Defesa',
		'acao':'Nenhuma',
		'alcance':'Pessoal',
		'duracao':'Permanente',
		'resistencia':''
		},
		{
		'nome':'Raio',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Resistência'
		},
		{
		'nome':'Rajada Mental',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'Percepção',
		'duracao':'Instantâneo',
		'resistencia':'Vontade'
		},
		{
		'nome':'Rapidez',
		'tipo':'Geral',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Regeneração',
		'tipo':'Defesa',
		'acao':'Nenhuma',
		'alcance':'Pessoal',
		'duracao':'Permanente',
		'resistencia':''
		},
		{
		'nome':'Salto',
		'tipo':'Movimento',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Instantâneo',
		'resistencia':''
		},
		{
		'nome':'Sentidos',
		'tipo':'Sensorial',
		'acao':'Nenhuma',
		'alcance':'Pessoal',
		'duracao':'Permanente',
		'resistencia':''
		},
		{
		'nome':'Sentido Remoto',
		'tipo':'Sensorial',
		'acao':'Livre',
		'alcance':'Graduação',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Sono',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Fortitude'
		},
		{
		'nome':'Sufocamento',
		'tipo':'Ataque',
		'acao':'Padrão',
		'alcance':'À Distância',
		'duracao':'Instantâneo',
		'resistencia':'Fortitude'
		},
		{
		'nome':'Supervelocidade',
		'tipo':'Veja Descrição',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Veja descrição',
		'resistencia':''
		},
		{
		'nome':'Teleporte',
		'tipo':'Movimento',
		'acao':'Movimento',
		'alcance':'Graduação',
		'duracao':'Instantâneo',
		'resistencia':''
		},
		{
		'nome':'Transformação',
		'tipo':'Controle',
		'acao':'Padrão',
		'alcance':'Perto',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Variável',
		'tipo':'Geral',
		'acao':'Padrão',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Velocidade',
		'tipo':'Movimento',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		},
		{
		'nome':'Voo',
		'tipo':'Movimento',
		'acao':'Livre',
		'alcance':'Pessoal',
		'duracao':'Sustentado',
		'resistencia':''
		}
		);

/*------------------------------------------ conceito */
	listaConceitos.push(
		'Ataque cac c/ poder',
		'Ataque cac c/ dispositivo',
		'Ataque cac s/ poder (desarmado)',
		'Ataque cac s/ poder (arma branca)',
		'Ataque a dist c/ poder',
		'Ataque a dist c/ dispositivo',
		'Ataque a dist s/ poder (arremesso)',
		'Ataque cac s/ poder (arma mundana)'
		);
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
		'Acrobacia',
		'Atletismo',
		'Combate à Distancia',
		'Combate corpo-a-corpo',
		'Enganação',
		'Furtividade',
		'Intimidação',
		'Intuição',
		'Investigação',
		'Percepção',
		'Persuasão',
		'Prestidigitação',
		'Tecnologia',
		'Tratamento',
		'Veiculos'
		);




}