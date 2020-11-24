#language:pt
#encoding:utf-8
#Author: ivtleonel@gmail.com
#AuthorPhone: 92 992120190

@pesquisaBotas
Funcionalidade: Acessar o site da arezzo, clicar em Nova Colecao, escrever no campo de pequisar a palavra Botas. 
Clicar em Botas e confirmar que esta na pagina do produto pesquisado 

  @pesquisarBotas
  Cenario: entrar em nova colecao e pesquisar por botas 
    Dado   que eu tenha acessado o site da arezzo
    Quando clico em Nova Colecao 
    E      pesquiso por botas
    Entao  vejo a tela de "BOTAS"   
    
