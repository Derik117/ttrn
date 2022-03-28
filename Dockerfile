FROM python:3.10-alpine

RUN apk update && apk add \
                        gcc \
                        libffi-dev \
                        libc-dev

WORKDIR /app
RUN pip install --no-cache-dir poetry==1.1.13
RUN poetry config virtualenvs.create false
COPY pyproject.toml poetry.lock ./
RUN poetry install --no-dev
ADD . .

CMD ["python", "main.py"]