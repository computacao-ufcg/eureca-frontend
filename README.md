# Eureca-frontend
<p>Eureca é uma plataforma de apoio à gestão acadêmica que visa auxiliar as coordenações de cursos de graduação da UFCG em suas diversas atividades. A plataforma disponibiliza variadas informações sobre os discentes dos cursos, bem como oferece um leque de serviços de apoio às coordenações.</p>

## Inicializando a aplicação localmente com NodeJs

<p>Antes de mais nada, é necessário ter o NodeJs instalado em sua máquina.</p>
<p>Com isto, na <strong>raiz</strong> do projeto, podemos executar os seguintes comandos, em ordem:</p>

<code>sudo npm install</code><br>
<code>sudo npm start</code>

**OBS.**: Verificar se o arquivo "./src/services/api.js" está com a configuração adequada.

## Enviando a aplicação para o DockerHub

<p>A partir da raiz do projeto, digite:</p>

<code>docker build -t eureca-frontend:dev .</code>

<p>Após o sucesso do build, esteja logado com sua conta do DockerHub para enviar a imagem.</p>

<p>Para se conectar ao Docker:</p>

<code>docker login</code>

<p>Insira suas credenciais e faça o login.</p>

**Criando a tag para a imagem.**

<p>Com a imagem montada, e o login efetuado, execute:</p>

<code>docker images</code>

<p>Recupere o id da imagem eureca-frontend, pois iremos utilizar no próximo passo.</p>

<code>docker tag "id_imagem" eureca/eureca-frontend:dev</code>

<code>docker push eureca/eureca-frontend:dev</code>

- <b>"eureca/"</b> é o nome da organização que o docker enviará/atualizará a imagem.
- <b>eureca-frontend:dev</b> é o nome da imagem.