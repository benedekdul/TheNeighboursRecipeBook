# TheNeighborsRecipeBook

## Prerequisites:
- PHP
- Composer
- npm

## Installation:
```
git clone https://github.com/3ddm3g/TheNeighboursRecipeBook.git
cd TheNeighboursRecipeBook
chmod +x setup.sh
./setup.sh
```

## Configuring database:
Change your database preferences in the `.env` file, then run:

```
php artisan migrate
php artisan db:seed
```

## Hosting the application
Run `php artisan serve` from the project's root, or point your webserver to the `public` folder.
