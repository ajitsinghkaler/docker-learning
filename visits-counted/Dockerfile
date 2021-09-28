# Base Image
FROM node:alpine

WORKDIR /app

# Copy only package.json
COPY package.json .

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Run command
CMD ["npm", "start"]