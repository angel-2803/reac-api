# en que esta echo el programa 
FROM node:10

# el directorio que se va a crear 
WORKDIR /app

# una copia de los package.json
COPY package*.json ./

# instalacion de las dependencias
RUN npm install

# copia de todo lo que no esta ignorado en el proyecto
COPY . .

# el puerto expuesto de salida 
EXPOSE  3000

# los comnados con el que se puede correr el proyecto
CMD [ "npm", "start" ]