FROM oven/bun:latest

COPY package.json ./
COPY bun.lockb ./
COPY index.ts ./

RUN bun install

ENTRYPOINT [ "bun", "run", "index.ts" ]