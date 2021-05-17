# Apk web - Aplicativo Financeiro
# Desenvolvedor: Igor Fernandes

O intuito do projeto foi criar um sistema funcional para guardar informações e controlar despesas.


## 🔗 Grade de conteúdos:

- [Recursos](#recursos)
- [Arquitetura](#arquitetura)
- [Instruções](#instruções)


============================//================//===========

## ⚡ RECURSOS:

### [RECURSOS] - Styles
- [SASS](https://sass-lang.com/)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/download/)
- [fontawesome](..)

### [RECURSOS] - Scripts
- [fenix](...)
- [jQuery](...)
- [popper](https://popper.js.org)
- Bootstrap
- fontawesome



## 📂 ARQUITETURA

| Directório     | 1° Setor       | 2° setor         | 3° setor      | 4° setor                 |
|                | assets         | dist  ~| src     | css  ~| js    |   ~|  libary ~ modules   | bootstrap  ~ fenix  ~ fontawesome  ~ jquery  ~|  ...
| src            | includes       |   ...            |               |                          |

**Obser: A pasta "src" está guardando todo os arquivos sass**
**Obser: A pasta a pasta "dist" está guardando o JS editável e o css compilado**


### TROCA DINÂMICA  

- O projeto tem uma troca dinâmica utilizando os recursos de "iframe" do html e ações pelo "JS", com a biblioteca "fenix", ainda não oficialmente lançada, mas já que está sendo produzida. Para saber mais, envie um e-mail para companymarketbr@gmail.com

**RESUMO**
- A biblioteca busca em seus parâmetros a ação do evento clique nos itens que são referência das páginas o valor do atributo "data-src" e introduz como valor do "src" do iframe, que está configurado para alcançar toda página abaixo do cabeçalho. Dessa forma cria-se um esquema de templates sem o php, no entanto, ainda é necessário especificar a chamada dos arquivos na parte interior de cada template. Tendo ciência de que existem formas mais enxutas de fazer, o desenvolvimento mesmo assim foi feito assim para gerar novos desafios. 


## 📂 INSTRUÇÕES

### [INSTRUÇÕES] - Instalação 

-  O projeto é totalmente dinâmico quanto a sua instalação. Caso voce queira fazer modificações no sass do Bootstrap, irá precisar de um preprocessador pro sass. Nesse projeto foi utilizado o "Ruby".

**Obser: Caso utilize o ruby, o comando para ativar a compilação é ' sass --watch assets/src/scss/apk-globals.scss:assets/dist/css/apk.globals.css '. Verifique a versão do sass e do ruby no arquivo ".config".**


### [INSTRUÇÕES] - CRIANDO ARQUIVOS - CSS

- A folha de estilo é totalmente do bootstrap e Fontawesome, siga os padrões

Abaixo se encontra uma tabela com a indicação de cada arquivo de estilo:

| Função                     | Arquivo                |
| ---                        | ..                     |
| Índice                     | ..                     |
| Funções                    | ..                     |
| Fontes                     | ..                     |
| cores                      | ..                     |
| bibliotecas                | ..                     |
| layouts                    | ..                     |
| Fonts globais              | ..                     |
| Keyframes                  | ..                     |
| adicioais                  | ..                     |        


**OBS¹: O container principal que engloba o layout respeita a configuração do bootstrap de "col-11" para dispositivos desktop e "col-12" para dispositivos com telas menores do que 1444px.**

Na função criada de responsividade, existem as seguintes medidas:

| Dispositivo                 | Largura    |
| Extra largo (desktop)       | 1340px     |
| médio (laptop)              | 1024px     |
| pequeno (tablet)            | 780px      |
| extra pequeno (mobile)      | 450px      |


### [INSTRUÇÕES] - CRIANDO ARQUIVOS - CSS

- 

- Utilize o arquivo main.js para declarar os seus códigos JS.
