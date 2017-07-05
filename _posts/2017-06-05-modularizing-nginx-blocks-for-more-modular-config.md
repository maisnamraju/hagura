---
layout: post
title:  "Modularizing nginx blocks using snippets"
date:   2017-06-05 12:34:56 +0530
---

Nginx configurations are much easier to write (in my honest opinion) as compared to apache because the of the structure being so similar to Objects but in cases where you have a complex logic in place that requires you to have really long lines of configuration code, it starts to become messy and really long which for me becomes a pain to read especially when im using an editor like VIM or nano. In such cases we can actually start making use of the `include `statement where in we can break the configurations into smaller reusable snippets. 

So here is a real life scenario; at [BlueWaterTracks](http://bluewatertracks.com), we have a staging server that has serves 4 different applications; 2 Polymer applications and 2 api servers built on nodejs. Our staging config looked like the following 

```
server {
	listen 80 default_server;
	server_name demo.example.com;
	return 301 https://demo.example.com$request_uri;
}
server {
	listen 80 default_server;
	server_name api.demo.example.com;
	return 301 https://api.demo.example.com$request_uri;
}
server {
	listen 443 ssl http2;
	root /home/grant/bluewatertracks/current/client/build/bundled;
	index index.html index.htm;

	server_name demo.example.com;
	ssl_certificate /etc/certificates/live/demo.example.com/fullchain.pem;
	ssl_certificate_key /etc/certificates/live/demo.example.com/privkey.pem;
	
	ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
	ssl_prefer_server_ciphers on;
	ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";
	ssl_ecdh_curve secp384r1; # Requires nginx >= 1.1.0
	ssl_session_cache shared:SSL:10m;
	#ssl_session_tickets off; # Requires nginx >= 1.5.9
	ssl_stapling on; # Requires nginx >= 1.3.7
	ssl_stapling_verify on; # Requires nginx => 1.3.7
	#resolver $DNS-IP-1 $DNS-IP-2 valid=300s;
	#resolver_timeout 5s;
	add_header Strict-Transport-Security "max-age=63072000; includeSubdomains; preload";
	add_header X-Frame-Options DENY;
	add_header X-Content-Type-Options nosniff;

	client_max_body_size 40M;

	location / {
   		try_files $uri /index.html =404;
	}

	location ~ /.well-known {
		 allow all;
		 root /usr/share/nginx/html;

	}

	location  /userdata  {
            root  /data/public;
   }

}

server {
	listen 443 ssl;

	server_name api.demo.example.com;
	ssl_certificate /etc/certificates/live/api.demo.example.com/fullchain.pem; 
	ssl_certificate_key /etc/certificates/live/api.demo.example.com/privkey.pem;

	ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
	ssl_prefer_server_ciphers on;
	ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";
	ssl_ecdh_curve secp384r1; # Requires nginx >= 1.1.0
	ssl_session_cache shared:SSL:10m;
	#ssl_session_tickets off; # Requires nginx >= 1.5.9
	ssl_stapling on; # Requires nginx >= 1.3.7
	ssl_stapling_verify on; # Requires nginx => 1.3.7
	#resolver $DNS-IP-1 $DNS-IP-2 valid=300s;
	#resolver_timeout 5s;
	add_header Strict-Transport-Security "max-age=63072000; includeSubdomains; preload";
	add_header X-Frame-Options DENY;
	add_header X-Content-Type-Options nosniff;

	client_max_body_size 40M;
	
	location / {
		 proxy_pass http://127.0.0.1:4000;
		 proxy_http_version 1.1;
		 proxy_set_header Upgrade $http_upgrade;
		 proxy_set_header Connection 'upgrade';
		 proxy_set_header Host $host;
		 proxy_cache_bypass $http_upgrade;
	}

	location ~ /.well-known {
		 allow all;
		 root /usr/share/nginx/html;
	}

}

.... We have more lines of code that isn't here for obvious reasons

```

As there is a lot of redundant code, you can see that it becomes difficult to debug whenever something is wrong; We could make this easier  by breaking down the code into smaller blocks that can be imported; To start with, we can start with breaking down the code into three reusable snippets
1. The ssl configuration 
2. the code for the reverse proxy
3. the .well-known route

##### The SSL Config
We can see that in the two blocks, the following configuration is common; which is the ssl config for our site. We could place this into the `/etc/nginx/snippets` folder and name it `ssl-config.conf`; this can later be imported into our server blocks;

```
   ssl_certificate /etc/certificates/live/demo.example.com/fullchain.pem;
	ssl_certificate_key /etc/certificates/live/demo.example.com/privkey.pem;
	
	ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
	ssl_prefer_server_ciphers on;
	ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";
	ssl_ecdh_curve secp384r1; # Requires nginx >= 1.1.0
	ssl_session_cache shared:SSL:10m;
	#ssl_session_tickets off; # Requires nginx >= 1.5.9
	ssl_stapling on; # Requires nginx >= 1.3.7
	ssl_stapling_verify on; # Requires nginx => 1.3.7
	#resolver $DNS-IP-1 $DNS-IP-2 valid=300s;
	#resolver_timeout 5s;
	add_header Strict-Transport-Security "max-age=63072000; includeSubdomains; preload";
	add_header X-Frame-Options DENY;
	add_header X-Content-Type-Options nosniff;

	client_max_body_size 40M;
```

##### Reverse Proxy 
The reverse proxy code below is pretty redundant if you are going to be serving multiple applications via reverse proxy, so you could place it into it's own config file. Let's name this `proxy.conf`

```
 		 proxy_http_version 1.1;
		 proxy_set_header Upgrade $http_upgrade;
		 proxy_set_header Connection 'upgrade';
		 proxy_set_header Host $host;
		 proxy_cache_bypass $http_upgrade;
```		 
Finally, the `.well-known ` routes are common in both the blocks and hence would be easy to move into a single config file so that it could be reused again in newer configuration blocks. This is renamed to 'routes.conf' 

```
	location ~ /.well-known {
		 allow all;
		 root /usr/share/nginx/html;
	}
	
```
We could add even more routes if needed in the future to this block and multiple server blocks could reuse this if needed without having to rewrite the whole blocks again and increasing the lines of code. 

Finally, all these lines of code can now be pushed into a single file like the one below. 

```
server {
	listen 80 default_server;
	server_name demo.example.com;
	return 301 https://demo.example.com$request_uri;
}
server {
	listen 443 ssl http2;
	root /home/grant/bluewatertracks/current/client/build/bundled;
	index index.html index.htm;

	server_name demo.example.com;
	include /etc/nginx/snippets/ssl-config.conf; # importing the ssl configurations 
	
	location / {
   		try_files $uri /index.html =404;
	}

	location  /userdata  {
            root  /data/public;
   }

	include /etc/nginx/snippets/routes.conf # the well known route is pushed here 
}

server {
	listen 80 default_server;
	server_name api.demo.example.com;
	return 301 https://api.demo.example.com$request_uri;
}

server {
	listen 443 ssl http2;

	server_name api.demo.example.com;
	include /etc/nginx/snippets/ssl-config.conf; # importing the ssl configurations 
	
	locations / {
		 proxy_pass http://127.0.0.1:4000;
		 include /etc/nginx/snippets/proxy.conf; # reverse proxy header configurations
	}
	
	include /etc/nginx/snippets/routes.conf # the well known route is pushed here 
}

```

Using the reusable code, we managed to break down the entire code into smaller more readable code, where in debugging becomes easier because we have smaller lines of code to read. 