# nginx-load-balancer

you just need three VMs for testing, 
I just tried it on Ubuntu servers!

## Here are the IPs I was using in this tutorial:
10.0.5.4 as main server(load balancer)
10.0.5.5, 10.0.5.6 ubuntu servers
## Installation
first, you need to install Nginx on all of these servers.
```bash
sudo apt update && sudo apt install nginx -y
```
edit this file on the main server:

```bash
sudo vim /etc/nginx/sites-available/default

```
then comment on all the configurations of this file then add these lines to the end of the file:

```bash
upstream backend {
        server 10.0.5.5;
        server 10.0.5.6;
}

server {
        listen 80;

        location / {
                proxy_pass http://backend;
        }
```
restart the nginx service so hit this command:
```bash
sudo systemctl restart nginx

```
now let's head back to the Ubuntu servers and add the index.html:
* in server1
```bash
cd /var/www/html
sudo vim index.html

```
add this to the file

```bash
<html>
        <title>Server1 test</title>

        <body>
                <p>Server 1 testing</p>
        </body?
</html>

```
* in server2

```bash
cd /var/www/html
sudo vim index.html

```
add this to the file

```bash
<html>
        <title>Server2 test</title>

        <body>
                <p>Server 2 testing</p>
        </body?
</html>

```
### We just change the name of the server ); nothing special!

### Finally check the result by typing curl 10.0.5.4 or test that in your browser!

 ### You can see the traffics forwards between two servers (10.0.5.5, 10.5.6)

 ### Well done!
