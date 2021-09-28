# Base Image
FROM node:alpine

WORKDIR /usr/app

# Copy relative folders
COPY ./ ./

# Install dependencies
RUN npm install

# Run command
CMD ["npm", "start"]