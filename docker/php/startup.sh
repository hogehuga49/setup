#!/usr/bin/env bash
# ==================
# Laravel初期設定
# ==================
cd my-laravel-app/
composer install
cp .env.example .env
php artisan key:generate
chmod -R 777 storage