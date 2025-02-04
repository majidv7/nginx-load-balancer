# NGINX Load Balancer Example

This repository demonstrates how to configure NGINX as a load balancer to distribute traffic across multiple Node.js backend servers.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Overview
This project sets up an NGINX load balancer that distributes incoming HTTP requests across three Node.js backend servers running on ports `3000`, `3001`, and `3002`. It uses the **Round Robin** method by default.

## Features
- NGINX configured as a load balancer.
- Three Node.js backend servers for demonstration.

## Prerequisites
- Node.js (v16 or higher recommended).
- NGINX installed on your system.

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/majidv7/nginx-load-balancer.git
cd nginx-load-balancer
``` 

### 2.Configure NGINX
```bash
sudo cp nginx/load-balancer.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/load-balancer.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 3.Start the Backend Server
```bash
pm2 start servers/server1.js --name "server-1"
pm2 start servers/server2.js --name "server-2"
pm2 start servers/server3.js --name "server-3"
```

### Usage
1. Visit http://localhost in your browser or use curl.
2. Refresh the page multiple times to see responses alternating between the three backend servers.
