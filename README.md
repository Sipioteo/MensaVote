# MensaVote
#### Example repo for MensaOnline on how to make code login with MensaOnline
---

This repo is built to make the vote of Mensa Online open and verifiable by anyone. The project aim to the possibility to vote anonymously and to verify the result of the vote.

To run this project in a docker environment you need to install docker and docker-compose.

To run the project you need to run the following command (We assume that you will proxy the project with traefik):
```yaml
version: "3.9"

services:
    vote:
        image: ghcr.io/sipioteo/mensavote:master
        networks:
          - default
          - traefik
        environment:
          - CLIENT_ID=${CLIENT_ID}
          - CLIENT_SECRET=${CLIENT_SECRET}
          - BASE_URL=https://${DOMAIN}
          - AUTH_URL=https://${AUTH_DOMAIN}
        deploy:
          replicas: 1
          labels:
            - "traefik.enable=true"
            - "traefik.docker.network=traefik"
            - "traefik.http.routers.${HOSTNAME}-vote.rule=Host(`${DOMAIN}`)"
            - "traefik.http.routers.${HOSTNAME}-vote.service=${HOSTNAME}-vote-svc"
            - "traefik.http.routers.${HOSTNAME}-vote.entrypoints=websecure"
            - "traefik.http.routers.${HOSTNAME}-vote.tls.certresolver=secure"
            - "traefik.http.services.${HOSTNAME}-vote-svc.loadbalancer.server.port=3000"

networks:
    default:
    traefik:
        external: true
```