To setup a dev environment use a basic app which you have or a get from my directory https://github.com/ajitsinghkaler/docker-learning/tree/main/node-project or use your own

After that add a Docker file to this project and  create a new image to create a new image we need base Image

Basic alpine image does not have node and npm so I choose the official node image now copy your project files in docker container using the COPY instruction
this will create the following dockerfile.

node:alpine is used as its  a minimalist version of node image

```bash
# Base Image
FROM node:alpine

# Copy relative folders
COPY ./ ./

# Install dependencies
RUN npm install

# Run command
CMD ["npm", "start"]

# We use base image node  copy our files into docker container, install dependencies the start our node server. Now we just need to build an image from the docker container we can use docker build .

# We can also give a name to docker container using
docker build -t `<username>/<image name>:<version>` <path-to-folder>

# eg I used
docker build -t ajitsinghkaler/node-basic-server:latest .

```

now run 
```bash
docker run ajitsinghkaler/node-basic-server
```
This will start the server on port 5000 if you used my repo. Now we just need to connect the docker port to our local port and we have created a dev-environment from a docker image to map ports from local machine to docker-image run
```bash
docker run -p <local port to map>:<docker image port to map>  <image name/image id>

# now if you run this command for our image 
docker run -p 5000:5000 ajitsinghkaler/node-basic-server
```

running localhost:5000 in your browser will return 
This is the homepage

Now I have been running our application in docker but I am copying our files but I don't know were so there may be some name clashes may occur because file name or directory names may already exist there to subvert this problem there is an instruction WORKDIR and I used my work dir as /usr/app

WORKDIR /usr/app

This will use an existing folder or create a new folder if not there now you can exec into your docker container via bash and check all you files will be in /usr/app