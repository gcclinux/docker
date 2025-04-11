**Configure backend**
```sh
mkdir backend
```
```sh
cd backend
npm init -y
```
```sh
npm i express@4.19.2 mongoose@8.5.1 body-parser@1.20.2 --save-exact
```

**Build docker image for express**
```sh
cd /home/ricardo/Learning/key-value-app/backend
docker build -t key-value-backend -f Dockerfile.dev .
```

**Run the docker image just created**
```sh
docker run -d --name backend --network key-value-net -p3000:3000 key-value-backend
```

**Check running images & containers**
```sh
docker ps -a --format "table {{.ID}}\t{{.Names}}\t{{.Status}}\t{{.Size}}\t{{.Ports}}"
CONTAINER ID   NAMES       STATUS          SIZE                   PORTS
88897a6643ec   backend     Up 3 minutes    528B (virtual 176MB)   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp
c8fdf356fa6c   mongodb     Up 20 minutes   0B (virtual 1.23GB)    0.0.0.0:27017->27017/tcp, :::27017->27017/tcp
1225c474fb50   portainer   Up 20 minutes   0B (virtual 268MB)     8000/tcp, 9443/tcp, 0.0.0.0:9000->9000/tcp, :::9000->9000/tcp
```