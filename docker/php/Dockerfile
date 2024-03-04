# docker-compose.yml に指定しているイメージと合わせておく
FROM php:8.1-fpm

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

# Laravelの初期設定
RUN composer install
RUN cp .env.example .env
RUN php artisan key:generate
RUN chmod -R 777 storage

# コンテナ内でコマンドを実行するときのディレクトリ
WORKDIR /var/www/html

# ファイルのコピー
# wsl上Laravelプロジェクトのパス phpコンテナ内のパス
# COPY ./my-laravel-app /var/www/html
# COPY ./docker/php/php.ini /usr/local/etc/php/php.ini
# COPY ./docker/php/xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini