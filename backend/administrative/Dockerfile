
FROM node:latest
ENV NODE_ENV=production
WORKDIR .
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
EXPOSE 5001
CMD ["npm", "start"]