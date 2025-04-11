# This script is used to clean up the Docker environment by removing the specified container, network, and volume.
source .env.db
source .env.network
source .env.volume

# Check if the container exist
if [ "$(docker ps -q -f name=$DB_CONTAINER_NAME)" ]; then
    docker kill $DB_CONTAINER_NAME
    echo "Container $DB_CONTAINER_NAME stopped & removed"
else
    echo "Container $DB_CONTAINER_NAME does not exist"
fi

# Check if the network exist
if [ "$(docker network ls -q -f name=$NETWORK_NAME)" ]; then
    docker network rm $NETWORK_NAME
    echo "Network $NETWORK_NAME removed"   
else
    echo "Network $NETWORK_NAME does not exist"
fi

# Check if the volume exist
if [ "$(docker volume ls -q -f name=$VOLUME_NAME)" ]; then
    docker volume rm $VOLUME_NAME
    echo "Volume $VOLUME_NAME removed"
else
    echo "Volume $VOLUME_NAME does not exist"
fi