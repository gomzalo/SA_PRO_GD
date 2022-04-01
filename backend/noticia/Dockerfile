FROM node:latest
ENV NODE_ENV=production
WORKDIR .
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
EXPOSE 5007
CMD ["npm", "start"]