FROM python:3.10-alpine

RUN apk update && apk add \
                        gcc \
                        libffi-dev \
                        libc-dev

WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
ADD . .

CMD ["python", "main.py"]
