# docker-compose.yml に指定しているイメージと合わせておく
FROM php:8.1-fpm
EXPOSE 5174

# イメージがビルドされる際に実行するコマンド
# install composer
RUN cd /usr/bin && curl -s http://getcomposer.org/installer | php && ln -s /usr/bin/composer.phar /usr/bin/composer

RUN apt-get update \
&& apt-get install -y \
git \
zip \
unzip \
vim

RUN apt-get update \
    && apt-get install -y libpq-dev \
    && docker-php-ext-install pdo_pgsql \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug

# Node.jsとnpmのインストール
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
  apt-get install -y nodejs npm

# コンテナ内でコマンドを実行するときのディレクトリ
WORKDIR /var/www/html

# Laravelの初期設定ファイルをコンテナ内にコピー
# NOTE: devcontainer.jsonでコンテナ起動後に実行
#       ここで実行してスリープ等でコンテナを永続起動すると502エラーになる
COPY ./startup.sh /var/www/startup.sh
RUN chmod +x /var/www/startup.sh
# ENTRYPOINT [ "/startup.sh" ]
# CMD [ "sleep", "infinity" ]
# CMD ["/startup.sh"]

# ファイルのコピー
# wsl上Laravelプロジェクトのパス phpコンテナ内のパス
# COPY ./my-laravel-app /var/www/html
# COPY ./docker/php/php.ini /usr/local/etc/php/php.ini
# COPY ./docker/php/xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini