# Key-Value App

This project is part of the **Learning Docker & Kubernetes** course on O'Reilly. It demonstrates the use of Docker and Kubernetes to deploy a key-value store application with MongoDB as the database and a Node.js backend.

Course Link: [Learning Docker & Kubernetes](https://learning.oreilly.com/course/docker-and-kubernetes/9781837025077/)

This [README.md](http://_vscodecontentref_/2) provides an overview of the project, instructions for running it, and references to relevant resources. Let me know if you'd like to customize it further!

---

## Project Structure

- **`backend/`**: Contains the Node.js backend code.
  - Uses `Express` for the server and `Mongoose` for MongoDB integration.
- **`db-config/`**: Contains MongoDB initialization scripts.
  - `mongo-init.js`: Creates a database, user, and roles during MongoDB container initialization.
- **`start-db.sh`**: Bash script to start the MongoDB container with Docker.
- **`.env.*`**: Environment variable files for configuration (e.g., database credentials, network settings, volume paths).

---

## Prerequisites

- **Docker**: Ensure Docker is installed and running.
- **Node.js**: Required for running the backend locally.
- **WSL (if on Windows)**: Use WSL2 for a Linux-based development environment.

---

## How to Run

### 1. Start MongoDB with Docker
Run the following command to start the MongoDB container:

```bash
[start-db.sh](http://_vscodecontentref_/1)