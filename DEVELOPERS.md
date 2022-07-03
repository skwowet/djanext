## Setting up the boiler-plate

- [Building & Starting the dev server](#building-and-starting-the-dev-server)
- [Navigation](#Navigation)
- [Miscellaneous](#Miscellaneous)

## Building and Starting the dev server
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

## Miscellaneous
Whether to install a package or use a command in particular container run the following code.

```bash
docker compose exec <container-name> <command that need to be executed>
```

Check the `README.md` in [webapp](./webapp) and [backend](./backend) directory.