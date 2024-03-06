#!/usr/bin/env bash
# ==================
# Laravel初期設定
# ==================
cd /var/www/html/my-laravel-app
composer install
cp .env.example .env
php artisan key:generate
chmod -R 777 storage
# /bin/sh -c "while sleep 1000; do :; done"
# sleep infinity