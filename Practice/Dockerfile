FROM node:slim
WORKDIR /app
ENV MESSAGE="Hello 12"
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
EXPOSE 4000
CMD ["yarn","start"]