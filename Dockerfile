# Выбор базового образа
FROM node:latest

# Установка рабочей директории в контейнере
WORKDIR /app

# Копирование всех файлов package.json в контейнер
COPY . ./

RUN npm install -g concurrently

# Установка зависимостей
RUN npm install

# Сборка приложений (если необходимо)
# RUN npm run build

# CMD команду следует указать в docker-compose или переопределить в Dockerfile для конкретного микро-фронта
CMD ["npm", "start"]