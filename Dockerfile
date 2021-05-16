# pull official base image
FROM node:16-alpine3.11

ARG EURECA_FRONTEND_BRANCH

# set working directory
WORKDIR /root

RUN \
  apk update && apk upgrade && \
  apk add --no-cache git

RUN \
  git clone https://github.com/computacao-ufcg/eureca-frontend.git && \
  (cd eureca-frontend && git checkout $EURECA_FRONTEND_BRANCH)

WORKDIR /root/eureca-frontend

RUN \
  npm install && \
  npm install -g npm@7.11.2

# start app
CMD ["npm", "start"]
