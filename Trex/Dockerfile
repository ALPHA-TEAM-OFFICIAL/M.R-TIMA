FROM fusuf/whatsasena:latest

RUN git clone https://github.com/timashabuddila/M.R TIMA
WORKDIR /root/V4/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
