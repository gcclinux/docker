source .env.db

# Connectivity
source .env.network
LOCALHOST_PORT=3000
CONTAINER_PORT=3000

BACKEND_IMAGE_NAME="key-value-backend"
BACKEND_CONTAINER_NAME="backend"
MONGODB_HOST="mongodb"


if [ "$(docker ps -aq -f name=$BACKEND_CONTAINER_NAME)" ]; then
    echo "Container $BACKEND_CONTAINER_NAME already exists"
    echo "The container will be removed when stopped"
    echo "To remove the container, run: docker kill $BACKEND_CONTAINER_NAME"
    exit 1
fi

# Build the backend image
# The Dockerfile.dev file is used for development purposes
docker build -t ${BACKEND_IMAGE_NAME} \
    -f backend/Dockerfile.dev \
    backend

docker run --rm -d \
    --name $BACKEND_CONTAINER_NAME \
    -p $LOCALHOST_PORT:$CONTAINER_PORT \
    -e PORT=$CONTAINER_PORT \
    -e MONGODB_HOST=$MONGODB_HOST \
    -e KEY_VALUE_DB=$KEY_VALUE_DB \
    -e KEY_VALUE_USER=$KEY_VALUE_USER \
    -e KEY_VALUE_PASSWORD=$KEY_VALUE_PASSWORD \
    -v ./backend/src:/app/src \
    --network $NETWORK_NAME \
    $BACKEND_IMAGE_NAME

