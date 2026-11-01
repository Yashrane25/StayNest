#Use official Node.js image
FROM node:22-alpine

#Set working directory inside container
WORKDIR /app

#Copy package files first (for caching)
COPY package*.json ./

#Install dependencies
RUN npm install

#Copy rest of the application
COPY . .

#Expose port (same as app)
EXPOSE 8080

#Start the application
CMD ["node", "app.js"]
