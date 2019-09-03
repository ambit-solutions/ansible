Demo uses "startup" for trusty 14.04 - this lacks correct version of python 
Updated to xenial 16.04 which has correct python but systemd instead of "startup"
tried chaning deploy role to write webapp.service but systemd not writable error
Removed service entirely
Installing node is now nodejs-legacy (and npm install express) but requires apt-update

Cannot install nodejs because prerequisite libuv1 not installable
Alternative is "PPA" which is personal package from NodeSource the nodejs vendor so correct packages available
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install nodejs

When launching AMI manually everything but pm2 startup ok and pm2 startup ok manual

When launching AMI for ASG using lanch.yml no pm2 installed

PM2/node shutdown when AMI created. Requires systemd setup so added roles/deploy/files/node-app.service for upload to /etc/system/system and requires commands $(sudo systemctl node-app) $(sudo systemctl enable node-app) to enable.

https://www.shellhacks.com/systemd-service-file-example
