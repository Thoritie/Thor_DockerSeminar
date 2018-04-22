FROM python:3.6.4

ENV APPLICATION_ROOT /app/

RUN apt-get update
RUN pip install --upgrade pip

RUN mkdir -p $APPLICATION_ROOT
WORKDIR $APPLICATION_ROOT
ADD . $APPLICATION_ROOT
RUN pip install -r requirements.txt

ENTRYPOINT ["uwsgi", "--ini", "hellodocker.ini"]