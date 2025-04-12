MONGODB_IMAGE="mongodb/mongodb-community-server"
MONGODB_TAG="7.0-ubuntu2204"
source .env.db

# Root credentials
ROOT_USER="admin"
ROOT_PASSWORD="admin"

# Connectivity
source .env.network
LOCALHOST_PORT=27017
CONTAINER_PORT=27017


# Storage
source .env.volume
VOLUME_CONTAINER_PATH="/data/db"

# Run setup script
source setup.sh

if [ "$(docker ps -q -f name=$DB_CONTAINER_NAME)" ]; then
    echo "Container $DB_CONTAINER_NAME already exists"
    echo "The container will be removed when stopped"
    echo "To remove the container, run: docker kill $DB_CONTAINER_NAME"
    exit 1
fi

docker run -d \
    --name $DB_CONTAINER_NAME \
    -p $LOCALHOST_PORT:$CONTAINER_PORT \
    -e MONGODB_INITDB_ROOT_USERNAME=$ROOT_USER \
    -e MONGODB_INITDB_ROOT_PASSWORD=$ROOT_PASSWORD \
    -e KEY_VALUE_DB=$KEY_VALUE_DB \
    -e KEY_VALUE_USER=$KEY_VALUE_USER \
    -e KEY_VALUE_PASSWORD=$KEY_VALUE_PASSWORD \
    -v $VOLUME_NAME:$VOLUME_CONTAINER_PATH \
    -v ./db-config/mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro \
    --network $NETWORK_NAME \
    $MONGODB_IMAGE:$MONGODB_TAG

