# Django-NextJs

This repo is a django-nextjs web app boiler-plate that is dockerized including Nginx and gunicorn. Django is used as backend and nextjs is used as front-end.

## Repo includes
- Django (ORM and micro-controllers)
- NextJS
- GraphQL
- Docker (served in Nginx using gunicorn)

## Prequistics
Docker must have been installed, in order to use this boiler-plate code. For downloading the docker check this out - [docker download](https://docs.docker.com/get-docker/)

## Setting up the boiler-plate
- Clone this repo

```bash
$ git clone https://github.com/yeganathan18/django-nextjs-bioler-plate.git
```

- Step 2: Start the Docker desktop app (mac & windows) and make sure that the docker-engine is started

```bash
$ docker info
```

> Using this command check whether the docker engine is running!


- Step 3: Shot up the terminal and 

```bash
$ cd django-nextjs-bioler-plate
```

Make sure the directory is proper before moving further, it should be `django-nextjs-bioler-plate/` 

- Step 4: Build the Docker images

```bash
$ docker-compose build
```

> This may take some time to complete

- Step 5: Once the docker containeriner is built,

```bash
$ docker-compose up
```

You may see the logs that are running up in the terminal, now the container has been started.

- Step 6: There may be some default migrations that has to be done for the django, so open-up another terminal in the same directory and run the following command.

```bash
docker compose exec backend python manage.py migrate
```

you may end-up getting something like this,

```python
System check identified some issues:

WARNINGS:
products.Book: (models.W042) Auto-created primary key used when not defining a primary key type, by default 'django.db.models.AutoField'.
	HINT: Configure the DEFAULT_AUTO_FIELD setting or the ProductsConfig.default_auto_field attribute to point to a subclass of AutoField, e.g. 'django.db.models.BigAutoField'.
products.Category: (models.W042) Auto-created primary key used when not defining a primary key type, by default 'django.db.models.AutoField'.
	HINT: Configure the DEFAULT_AUTO_FIELD setting or the ProductsConfig.default_auto_field attribute to point to a subclass of AutoField, e.g. 'django.db.models.BigAutoField'.
products.Grocery: (models.W042) Auto-created primary key used when not defining a primary key type, by default 'django.db.models.AutoField'.
	HINT: Configure the DEFAULT_AUTO_FIELD setting or the ProductsConfig.default_auto_field attribute to point to a subclass of AutoField, e.g. 'django.db.models.BigAutoField'.
products.Hello: (models.W042) Auto-created primary key used when not defining a primary key type, by default 'django.db.models.AutoField'.
	HINT: Configure the DEFAULT_AUTO_FIELD setting or the ProductsConfig.default_auto_field attribute to point to a subclass of AutoField, e.g. 'django.db.models.BigAutoField'.
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, products, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying admin.0003_logentry_add_action_flag_choices... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying auth.0010_alter_group_name_max_length... OK
  Applying auth.0011_update_proxy_permissions... OK
  Applying auth.0012_alter_user_first_name_max_length... OK
  Applying products.0001_initial... OK
  Applying products.0002_hello... OK
  Applying sessions.0001_initial... OK
```

Congrats 🎉 we have set up our local development for the next django-nextjs full stack web app

- Finally: In order to access the GraphiQL, Django Admin and our front-end use the following. Open up the browser!

Front-end:

[http://localhost/](http://localhost/)

Backend: Django Admin panel

[http://localhost/api/admin](http://localhost/api/admin)

Backend: GraphiQL

[http://localhost/api/graphql](http://localhost/api/graphql)

## Note ❗️

This is been dockerized only for the local development and not for the production-ready web app.

## Misc

Whether to install a package or use a command in particular container run the following code.

```bash
docker compose exec <container-name> <command that need to be executed>
```

check the directory's readme, inorder to execute basic necessary commands for both [django](./backend) and [webapp](./webapp),

## License
[MIT](https://choosealicense.com/licenses/mit/)
