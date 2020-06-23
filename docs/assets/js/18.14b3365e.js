(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{468:function(e,t,a){"use strict";a.r(t);var n=a(42),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"building-a-docker-image-for-a-python-flask-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-a-docker-image-for-a-python-flask-app"}},[e._v("#")]),e._v(" Building a docker image for a python flask app")]),e._v(" "),a("p",[e._v("So I have been using python form time to time and so far I never faced any issues with packages or environments and I had been deploying to Google App Engine and IBM Cloud Foundry for my projects so there wasn't much of a challenge there. But realizing my docker skills were getting rusty, I decided to play around with docker and kubernetes.")]),e._v(" "),a("p",[e._v("My Goals are right now to be able to build a basic docker image that does 2 things")]),e._v(" "),a("ul",[a("li",[e._v("Work Locally on my local machine in the dev environment")]),e._v(" "),a("li",[e._v("Be able to deploy it to a production environment")]),e._v(" "),a("li",[e._v("Be able to deploy to a kubernetes cluster")])]),e._v(" "),a("h3",{attrs:{id:"writing-the-dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-the-dockerfile"}},[e._v("#")]),e._v(" Writing the Dockerfile")]),e._v(" "),a("p",[a("code",[e._v("FROM python:3.8-slim")])]),e._v(" "),a("p",[e._v("The slim verson seems to be a better option than the alpine version as I ran into issues during the "),a("code",[e._v("pip install")]),e._v(" stage as I would need to get things like "),a("code",[e._v("gcc")]),e._v(" and "),a("code",[e._v("libpq-dev")]),e._v(" packages installed to get postgresql drivers running.\nAlpine on the other hand seems more lightweight but is more useful for people who are willing to spend more time building their images.")]),e._v(" "),a("p",[e._v("Next comes the debian packages along with the python packages")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("RUN apt-get update && apt-get install -y python-dev libxml2-dev libxslt-dev libpq-dev gcc\n\nCOPY ./requirements.txt /app/requirements.txt\n\nRUN pip install -r /app/requirements.txt\n\n")])])]),a("p",[e._v("Each step in the docker process is a seperate image so we are copying the "),a("code",[e._v("requirements.txt")]),e._v(" file in the beginning so that they are cached")]),e._v(" "),a("p",[e._v("Next we copy the code to the "),a("code",[e._v("/app")]),e._v(" directory where will serve as the root directory for our app")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("COPY . ./whaii/\n#sets the work directory inside the\nWORKDIR /whaii\n")])])]),a("p",[e._v("ENV FLASK_APP=server/"),a("strong",[e._v("init")]),e._v(".py\nENV FLASK_DEBUG=true\nENV PORT=3000")]),e._v(" "),a("p",[e._v("EXPOSE 8000")]),e._v(" "),a("p",[e._v('RUN ["chmod", "+x", "./prod.sh"]\nCMD ["./prod.sh"]')])])}),[],!1,null,null,null);t.default=i.exports}}]);