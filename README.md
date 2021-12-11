# Django-NextJs

This repo is a django-nextjs web app boiler-plate that is dockerized including Nginx and gunicorn. Django is used as backend and nextjs is used as front-end.

## Repo includes
- Django (ORM and micro-controllers)
- NextJS
- GraphQL
- Docker (served in Nginx using gunicorn)

## Things needed
Docker must have been installed, in order to use this boiler-plate code. For downloading the docker check this out - [docker download](https://docs.docker.com/get-docker/)

## Setting up the boiler-plate
1. Clone this repo

```bash
$ git clone https://github.com/yeganathan18/django-nextjs-bioler-plate.git
```

2. Start the Docker desktop app (mac & windows) and make sure that the docker-engine is started

```bash
$ docker info
```

> Using this command check whether the docker engine is running!


3. Shot up the terminal and 

```bash
$ cd django-nextjs-bioler-plate
```

Make sure the directory is proper before moving further, it should be `django-nextjs-bioler-plate/` 

4. Build the Docker images

```bash
$ docker-compose build
```

> This may take some time to complete

5. Once the docker container is built,

```bash
$ docker-compose up
```

You may see the logs that are running up in the terminal, now the container has been started.

- Step 6: There may be some default migrations that has to be done for the django, so open-up another terminal in the same directory and run the following command.

```bash
docker compose exec backend python manage.py migrate
```


## Navigation

Webapp - [http://localhost/](http://localhost/)

Django Admin panel - [http://localhost/api/admin](http://localhost/api/admin)

GraphiQL Playground - [http://localhost/api/graphql](http://localhost/api/graphql)

## Note ❗️

This is been dockerized only for the local development and not for the production-ready web app.

## Misc

Whether to install a package or use a command in particular container run the following code.

```bash
docker compose exec <container-name> <command that need to be executed>
```

check the directory's readme, inorder to execute basic necessary commands for both [django](./backend) and [webapp](./webapp).

## License
[MIT](https://choosealicense.com/licenses/mit/)
