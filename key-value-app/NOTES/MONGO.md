```
docker pull mongodb/mongodb-community-server:latest
docker pull mongodb/mongodb-community-server:7.0-ubi9
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -v /home/ubuntu/mongodb:/data/db \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=admin \
  -e MONGO_INITDB_DATABASE=admin \
  mongo:latest

(adminpassword) for portainer
docker run -d \
    --name portainer \
    -p 9000:9000 \
    -v portainer_data:/data \
    -v "/var/run/docker.sock:/var/run/docker.sock" \
    portainer/portainer-ce:latest

https://learning.oreilly.com/videos/docker-and-kubernetes/9781837025077/9781837025077-video12_3/
```

```sh
# docker pull mongodb/mongodb-community-server
# docker pull mongodb/mongodb-community-server:7.0-ubi9
docker run -d \
   --name mongodb \
   -p 27017:27017 \
   -v /home/ubuntu/mongodb:/data/db \
   -e MONGO_INITDB_ROOT_USERNAME=admin \
   -e MONGO_INITDB_ROOT_PASSWORD=admin \
   -e MONGO_INITDB_DATABASE=admin \
   mongo:latest

# (adminpassword) for portainer
docker run -d \
     --name portainer \
     -p 9000:9000 \
     -v portainer_data:/data \
     -v "/var/run/docker.sock:/var/run/docker.sock" \
     portainer/portainer-ce:latest

```

```
ricardo@DESKTOP-JNF13VU:~/Learning/key-value-app> docker exec -it mongodb mongosh
Current Mongosh Log ID: 67f7d15ec128a84785d861df
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.0
Using MongoDB:          7.0.18
Using Mongosh:          2.5.0

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/


To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.

test>
```

**Connect to alternative mongodb in the same network**
```sh
# docker run --rm on shutdown --name --it (interactive) --network (name) (docker image) mongosh (command) USER:PASSWORD@URL/Database
docker run --rm --name debugsh -it --network key-value-net mongodb/mongodb-community-server:7.0-ubuntu2204 mongosh mongodb://key-value-user:key-value-password@mongodb/key-value-db
```