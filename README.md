# desafioWeb
Descrição
Teste automatico pra acessar um determinado site, clicar em uma coleção, pesquisar por um determidado produto e confirmar o resultado.
Ações do teste: Click, pesquisa, escreve e valida resultado

Ferramentas usadas na automação:
-Selenium
-Cucumber
-Webdrivermanager
-Maven
-JUnit
-Java

NOTA:
Este projeto de teste não atende por completo as boas praticas de programação.
Pois o mapeamento dos elementos que eram para sere feitos na classe PageObjects estão na classe de test,
assim como a contrução do driver que era pra ser em uma classe DriverFectory também esta sendo usado na classe de test


COMO EXECUTAR O TESTE

1. Baixar em um repositorio local
2. Abrir em uma IDE (Preferencial eclipse)
3. Entra em src/test/java
4. Entra runners
5. Executa o arquivo EnviarPesquisaRunner.java
(com o botão direito so mouse clica em Run As/ JUnit test )

VER O RELATORIO COM O RESULTADO DO TESTE

1. Clica em Console
Deve tá assim:
#language:pt
#encoding:utf-8
#Author: ivtleonel@gmail.com
#AuthorPhone: 92 992120190
@pesquisaBotas

  @pesquisarBotas
  Cenario: entrar em nova colecao e pesquisar por botas # pesquisaBotas.feature:11
    Dado que eu tenha acessado o site da arezzo         # PesquisaBotasSteps.que_eu_tenha_acessado_o_site_da_arezzo()
    Quando clico em Nova Colecao                        # PesquisaBotasSteps.clico_em_Nova_Colecao()
    E pesquiso por botas                                # PesquisaBotasSteps.pesquiso_por_botas()
    Entao vejo a tela de "BOTAS"                        # PesquisaBotasSteps.vejo_a_tela_de(String)

1 Scenarios (1 passed)
4 Steps (4 passed)
0m26,304s


