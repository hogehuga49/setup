# ==================
# Laravel初期設定
# ==================
cd /var/www/html/my-laravel-app
composer install
npm install
# envが無い場合は生成
if [ ! -e .env ]; then
    cp .env.example .env
fi
php artisan key:generate
chmod -R 777 storage
# /bin/sh -c "while sleep 1000; do :; done"
# sleep infinity