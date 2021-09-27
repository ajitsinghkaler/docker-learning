#### Why Docker?
We have a problem that when we run applications in our computer it runs but not on others because of dependencies setups etc so to mitigate that we created containers where all variables will remain same for anything in the container. Docker manage these containers

#### What is an Image ?
An Image is a snapshot of all the resources that are there in the container  and a startup command for most of the times starting a container when we run it

#### What is a container?
A container is a a small sub system which has its own isolated memory, computing power and can run the system independent of external factors.

## Basic commands

```bash
docker create <image name>
# prepares a new image to run a container 

docker start <image name>
# Runs the startup command of the image

docker run <image name>
# This creates and start a new container 

# docker run  = docker create  + docker start

docker ps 
# Command to list down all running containers 

# use --all flag to check all container ever run on your machine

# To run docker commands inside your container run 
docker exec <container id> <command name>

# to provide continuous input use -it flag 

docker exec -it <container id> <command name>

# -i joins your bash with docker vm input and -t flag makes   output easier and nicer to see

# this way if you exec it with bash you get access to your docker terminal

docker exec -it <container id> bash

```