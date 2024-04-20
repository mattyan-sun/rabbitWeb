# ベースイメージを指定
FROM node:14

# 作業ディレクトリを指定
WORKDIR /src

# 依存関係をインストール
COPY package*.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# TypeScriptのコンパイル
RUN npm run build

# ポートの公開
EXPOSE 3000

# アプリケーションの実行
CMD [ "ts-node", "src/app.js" ]
