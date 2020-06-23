---
lastModified: '2020-05-28'
---
## Building a docker image for a python flask app

So I have been using python form time to time and so far I never faced any issues with packages or environments and I had been deploying to Google App Engine and IBM Cloud Foundry for my projects so there wasn't much of a challenge there. But realizing my docker skills were getting rusty, I decided to play around with docker and kubernetes.

My Goals are right now to be able to build a basic docker image that does 2 things 
- Work Locally on my local machine in the dev environment
- Be able to deploy it to a production environment 
- Be able to deploy to a kubernetes cluster

### Writing the Dockerfile

`FROM python:3.8-slim`

The slim verson seems to be a better option than the alpine version as I ran into issues during the `pip install` stage as I would need to get things like `gcc` and `libpq-dev` packages installed to get postgresql drivers running. 
Alpine on the other hand seems more lightweight but is more useful for people who are willing to spend more time building their images. 

Next comes the debian packages along with the python packages
```
RUN apt-get update && apt-get install -y python-dev libxml2-dev libxslt-dev libpq-dev gcc

COPY ./requirements.txt /app/requirements.txt

RUN pip install -r /app/requirements.txt

```

Each step in the docker process is a seperate image so we are copying the `requirements.txt` file in the beginning so that they are cached 

Next we copy the code to the `/app` directory where will serve as the root directory for our app 

```
COPY . ./whaii/
#sets the work directory inside the
WORKDIR /whaii
```

ENV FLASK_APP=server/__init__.py
ENV FLASK_DEBUG=true
ENV PORT=3000

EXPOSE 8000

RUN ["chmod", "+x", "./prod.sh"]
CMD ["./prod.sh"]