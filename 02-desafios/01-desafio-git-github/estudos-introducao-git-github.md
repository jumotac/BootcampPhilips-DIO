# Estudos Introdução ao Git e Gihub :woman_student:



### Comandos básicos para um bom desempenho no terminal

**WINDOWS:**

1. **dir -** lista de diretório;

2. **cd -** entrar no diretório;

3. **cd .. -** voltar para o repositório anterior;

4. **clear (cls) -** limpar o terminal;

5. **TAB -** alto completar;

6. **mkdir -** criação de um novo diretório;

7. **echo helo > hello.txt -** criação do arquivo e o símbolo **>** redirecionar fluxo (pegar a saída do _**echo**_ e pegar o arquivo para criar um novo);

8. **del -** exclusão do arquivo;

9. **rmkdir -** exclusão do diretório;

   

### Tópicos fundamentais para entender o funcionamento do GIT

A sigla SHA significa **Secyre Hash Algorithm** (Algoritmo de Hash Seguro), é um conjunto de funções hash criptográficas projetadas pela NSA (Agência de Segurança Nacional dos EUA).

A **encriptação** gera um conjunto de caracteres identificador de 40 dígitos. É uma forma curta de representar o arquivo.



### Objetos internos do Git

São 3 tipos de objetos responsáveis pelo versionamento no Git:

1. **BLOBS -** os arquivos ficam guardados dentro desse objeto. Objeto contém metadados.

2. **TREES -** armazenam as BLOBS. Também contém metadados. A árvore é responsável por montar toda a estrutura dos arquivos. 

3. **COMMITS -** É o objeto mais importante, é o que vai juntar tudo. Possui crepitação. Monta uma linha do tempo. 





#### :star: GIT é um sistema distribuído e seguro! :star: 



### Chaves SSH e Tokens

**Chave SSH -** é uma forma de estabelecer uma conexão segura e encriptada entre duas máquinas. Sempre haverá uma chave pública e privada. O Git acaba conhecendo a assinatura da máquina. 

**Token de Acesso - ** é uma chave que te permite ter acesso ao repositório. No caso do **Github** você usaria uma chave assim no lugar da senha da sua conta ao executar operações pela linha de comando ou na API.



### Markdown

É um sistema de formatação aberto que torna a escrita e a leitura mais simples. Com uma codificação mínima, além de fácil, ele é visualmente mais "limpo" e pode ser convertido facilmente para HTML. 

Basicamente, ele marca alterações nos textos (subtítulos, negrito, itálico etc) apenas com os símbolos do teclado, sem usar teclas de atalho, menus, selecionando o texto e sem aquele visual complexo.



### Iniciando o Git 

1. **Git init -** comando para criar um novo projeto. Irá criar um repositório novo e, a partir daí, será possível armazenar seu código fonte, alterar, salvar,  guardar, fazer alterações e etc;

2. **Git add .** - irá adicionar todos os arquivos novos e/ou modificados ao repositório;

3. **Git commit - ** é usado para criar um instantâneo das alterações preparadas em um cronograma de um histórico de projetos do **Git**.

4. **Git Push – ** empurra o arquivo local para um repositório remoto;

5. **Git Pull –** puxa o arquivo do repositório remoto para a máquina local;

6. **Git clone –** Clonar um repositório;

7. **Git remote -v –** para onde o arquivo está apontado.

   

### Passo a passo no ciclo de vida

**Tracked – **rastreamento do arquivo;

**Untracked – ** o **Git** ainda não tem conhecimento do arquivo;

**Unmodified –**  o arquivo ainda não foi modificado;

**Modified –** o arquivo já foi modificado;

**Staged -** é tipo um _"backstage"_, ou seja, a área de espera onde os arquivos estão se preparando para fazer parte de um tipo de agrupamento;

Quando é colocado no **Staged** e damos o COMMIT – retorna os arquivos para o modified – cria um **snapshot** (como se tirasse uma foto do código de como estava, ou seja, move os arquivos que estavam na área de staging e os coloca em cena.



