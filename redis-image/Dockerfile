# Use a docker image as base image
FROM alpine

# Install dependencies
RUN apk add --update redis
RUN apk add --update gcc

# Startup command
CMD ["redis-server"]