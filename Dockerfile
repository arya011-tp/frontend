# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY . .

# Build TypeScript project
RUN npm run build

# Expose port number
EXPOSE 6722

# Start the app
CMD [ "npm", "start" ]

EXPOSE 4000
