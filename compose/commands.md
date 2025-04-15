```sh
docker run --rm --name mongosh -it --network compose_default mongodb/mongodb-community-server:7.0-ubuntu2204 mongosh mongodb://key-value-user:key-value-password@compose-db-1/key-value-db
```