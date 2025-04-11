# Responssible for setting up the network and volumes for the project

source .env.network
source .env.volume

# Check if the network already exist
if [ "$(docker network ls -q -f name=$NETWORK_NAME)" ]; then
    echo "Network $NETWORK_NAME already exists"
else
    echo "Creating network $NETWORK_NAME"
    docker network create $NETWORK_NAME
fi
# Check if the volume already exist
if [ "$(docker volume ls -q -f name=$VOLUME_NAME)" ]; then
    echo "Volume $VOLUME_NAME already exists"
else
    echo "Creating volume $VOLUME_NAME"
    docker volume create $VOLUME_NAME
fi