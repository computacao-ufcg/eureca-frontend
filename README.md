# Eureca-frontend
<p>Eureca é uma plataforma de apoio à gestão acadêmica que visa auxiliar as coordenações de cursos de graduação da UFCG em suas diversas atividades. A plataforma disponibiliza variadas informações sobre os discentes dos cursos, bem como oferece um leque de serviços de apoio às coordenações.</p>
## Inicializando a aplicação localmente com NodeJs

<p>Antes de mais nada, é necessário ter o NodeJs instalado em sua máquina.</p>
<p>Com isto, na <strong>raiz</strong> do projeto, podemos executar os seguintes comandos, em ordem:</p>

<code>sudo npm install</code><br>
<code>sudo npm start</code>

**OBS.**: Verificar se o arquivo "./src/services/api.js" está com a configuração adequada.

## Inicializando a aplicação com Docker

<p>É necessário adicionar o seu user ao grupo de usuários do docker, usando o seguinte comando e depois reiniciar a máquina.</p>

<code>sudo usermod -aG docker $USER</code>

<p>Para inicializar a aplicação com Docker primeiro precisamos executar o build da imagem a partir da raiz do projeto:</p>

<code>docker build -t pdc-front:dev .</code>

<p>Uma vez montada, agora podemos criar o container da aplicação:</p>

<code>docker run -itd --name pdc-front-container \
    -p 3000:3000 \
    -v ${pwd}:/app \
    -v /app/node_modules \
    pdc-front:dev
</code>

- <b>-itd</b> inicia o container no modo iterativo do terminal e em background, é necessario para aplicações react.
- <b>-p</b> são as portas -> host:container.
- <b>-v</b> são os volumes criados para o hot reloading.
- <b>pdc-front:dev</b> é o nome da imagem.

<p>Caso não ocorra nenhum error é possível observar a aplicação no seu localhost:3000</p>
