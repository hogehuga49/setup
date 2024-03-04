composer install
cp .env.example .env
php artisan key:generate
chmod -R 777 storage