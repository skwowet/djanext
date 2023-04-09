## Setting up the boiler-plate

- [Building & Starting the dev server](#building-and-starting-the-dev-server)
- [Navigation](#Navigation)

## How to start the dev server
1. Clone this repo

```bash
$ git clone https://github.com/yeganathan18/django-nextjs-bioler-plate.git
```

2. Create a virtual environment inside `backend/` and activate it

```bash
$ cd backend
$ python3 -m venv venv
$ source venv/bin/activate
```

3. Install the dependencies, run the migrations and start the server

```bash
$ pip install -r requirements.txt
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py runserver
```

4. Open another terminal and start the nextjs server

```bash
$ yarn install
$ yarn dev
```

Now you are ready to go! If you like this boilerplate, please give it a star ⭐️

## Navigation
Webapp - [http://localhost:3000/](http://localhost:3000/)

Django Admin panel - [http://localhost:8000/api/admin](http://localhost:8000/api/admin)

GraphiQL Playground - [http://localhost:8000/api/graphql](http://localhost:8000/api/graphql)