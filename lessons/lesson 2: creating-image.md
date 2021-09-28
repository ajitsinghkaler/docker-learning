#### Creating a basic docker image

To create a docker image specify a base docker image, define installation commands for setup and then define a startup command which starts the docker image all this is added to a Dockerfile which does all these processes in the specified base image to create a docker image

# Types of instructions in a docker file

FROM tells the base docker image

RUN tells us what how to prepare our image mostly installation

CMD is the startup command which tells what should be executed when we start our Docker image

[Example docker file](https://github.com/ajitsinghkaler/docker-learning/blob/main/redis-image/Dockerfile)

After this run 
```bash
docker build .
``` 
in the folder where where your Dockerfile is created

This will give you an Id of the image created by this build process and you can now run this Docker Image

#### What is a base image

Base image is a basis OS so that it can run your Docker images. Docker runs on a Virtual machine base image is the OS of that VM

#### Process of creating an image

1. From base image and create a temporary container
2. Run installation instructions in it example
RUN apk add --update redis
3. Take snapshot file system of conatiner  VM
4. Destroy temp VM
5. In next step again create a temp VM and run the second installation instruction if there is any ie any other RUN statement
6. Destroy container
7. Create New VM 
8. Run startup command 
9. Set startup command for the container take snapshot 
10. Your Image is ready

Basically after each command in Docker file Docker creates a Vm and takes its snapshot until the final image which is then stored and given you as an Id for running the image

#### Create a image manu ally from a running docker container 

To create an image of already running docker when you have made a lot of changes in it by executing into it you can use 
```bash
docker commit -c <startup command> <container id>
```