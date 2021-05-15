# Eureca-frontend
<p>Eureca é uma plataforma de apoio à gestão acadêmica que visa auxiliar as coordenações de cursos de graduação da UFCG em suas diversas atividades. A plataforma disponibiliza variadas informações sobre os discentes dos cursos, bem como oferece um leque de serviços de apoio às coordenações.</p>

## Inicializando a aplicação localmente com NodeJs

<p>Antes de mais nada, é necessário ter o NodeJs instalado em sua máquina.</p>
<p>Com isto, na <strong>raiz</strong> do projeto, podemos executar os seguintes comandos, em ordem:</p>

<code>sudo npm install</code><br>
<code>sudo npm start</code>

**OBS.**: Verificar se o arquivo "./src/services/api.js" está com a configuração adequada.

<p>Caso não ocorra nenhum error é possível observar a aplicação no seu localhost:3000</p>

## Criando um container Docker para deploy

<p>É necessário adicionar o seu user ao grupo de usuários do docker, usando o seguinte comando e depois reiniciar a máquina.</p>

<code>sudo usermod -aG docker $USER</code>

<p>Depois é só executar o <I>script</I> build_tag_push.sh:</p>

<code>bash build_tag_push.sh <git-branch> <docker-tag></code>

<p>Onde <git-branch> é o nome do branch que será usado para todos os repositórios e <docker-tag> é o rótulo
que será colocado na imagem construída e armazenada no Docker Hub.</p>

