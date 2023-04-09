This is a [Django](https://www.djangoproject.com) project bootstrapped with [`django-admin startproject backend`](https://www.section.io/engineering-education/integrating-graphql-api-in-a-django-application/).

## Django Getting Started

If you already know django then you must have came across this `makemigrations` and `migrate` for the models. For doing the same insde, docker use the following command 

```bash
$ python manage.py makemigrations
```

```bash
$ python manage.py migrate
```

For creating a superuser,

```bash
$ python manage.py createsuperuser
```

Also, if u get any `ModuleNotFoundError` use the below command in order to install the missing one inside container.

```bash
$ pip install -r requirements.txt
```