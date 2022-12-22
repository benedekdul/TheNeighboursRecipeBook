composer install
npm install --legacy-peer-deps
cp .env.example .env
php artisan key:generate
php artisan storage:link
npm audit fix
npm run build