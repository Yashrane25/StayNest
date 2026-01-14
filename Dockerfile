# 1.Use official Node.js image
FROM node:22-alpine

# 2️.Set working directory inside container
WORKDIR /app

# 3️. Copy package files first (for caching)
COPY package*.json ./

# 4️. Install dependencies
RUN npm install

# 5️. Copy rest of the application
COPY . .

# 6️. Expose port (same as app)
EXPOSE 8080

# 7️. Start the application
CMD ["node", "app.js"]
