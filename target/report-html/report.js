$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("pesquisaBotas.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    },
    {
      "line": 2,
      "value": "#encoding:utf-8"
    },
    {
      "line": 3,
      "value": "#Author: ivtleonel@gmail.com"
    },
    {
      "line": 4,
      "value": "#AuthorPhone: 92 992120190"
    }
  ],
  "line": 7,
  "name": "Acessar o site da arezzo, clicar em Nova Colecao, escrever no campo de pequisar a palavra Botas.",
  "description": "Clicar em Botas e confirmar que esta na pagina do produto pesquisado",
  "id": "acessar-o-site-da-arezzo,-clicar-em-nova-colecao,-escrever-no-campo-de-pequisar-a-palavra-botas.",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 6,
      "name": "@pesquisaBotas"
    }
  ]
});
formatter.before({
  "duration": 10033232300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "entrar em nova colecao e pesquisar por botas",
  "description": "",
  "id": "acessar-o-site-da-arezzo,-clicar-em-nova-colecao,-escrever-no-campo-de-pequisar-a-palavra-botas.;entrar-em-nova-colecao-e-pesquisar-por-botas",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 10,
      "name": "@pesquisarBotas"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "que eu tenha acessado o site da arezzo",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "clico em Nova Colecao",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "pesquiso por botas",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "vejo a tela de \"BOTAS\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "PesquisaBotasSteps.que_eu_tenha_acessado_o_site_da_arezzo()"
});
formatter.result({
  "duration": 195697400,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaBotasSteps.clico_em_Nova_Colecao()"
});
formatter.result({
  "duration": 1041966500,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaBotasSteps.pesquiso_por_botas()"
});
formatter.result({
  "duration": 7161336600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BOTAS",
      "offset": 16
    }
  ],
  "location": "PesquisaBotasSteps.vejo_a_tela_de(String)"
});
formatter.result({
  "duration": 4107472000,
  "status": "passed"
});
formatter.after({
  "duration": 844377300,
  "status": "passed"
});
});