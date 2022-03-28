
FROM node:latest
ENV NODE_ENV=production
WORKDIR .
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
EXPOSE 5012
CMD ["npm", "start"]