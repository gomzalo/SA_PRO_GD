
FROM node:latest
ENV NODE_ENV=production
WORKDIR .
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
EXPOSE 5013
CMD ["npm", "start"]