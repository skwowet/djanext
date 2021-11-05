FROM python:3.9-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk add --no-cache --virtual .build-deps \
    ca-certificates gcc postgresql-dev linux-headers musl-dev \
    libffi-dev jpeg-dev zlib-dev

WORKDIR /app/backend
RUN pip install --upgrade pip && pip install virtualenv
# RUN pip install virtualenv
ADD . /app/backend
RUN virtualenv venv

RUN source venv/bin/activate
RUN pip install -r requirements.txt
COPY . /app/backend/

ENV VIRTUAL_ENV /env
ENV PATH /env/bin:$PATH

EXPOSE 8000
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
CMD ["gunicorn", "--bind", ":8000", "backend.wsgi:application"]