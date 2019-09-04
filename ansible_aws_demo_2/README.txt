Demo uses "startup" for trusty 14.04 - this lacks correct version of python 
Updated to xenial 16.04 which has correct python but systemd instead of "startup"
tried chaning deploy role to write webapp.service but systemd not writable error
Removed service entirely
Installing node is now nodejs-legacy (and npm install express) but requires apt-update

Cannot install nodejs because prerequisite libuv1 not installable
Alternative is "PPA" which is personal package from NodeSource the nodejs vendor so correct packages available
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install nodejs

https://www.shellhacks.com/systemd-service-file-example

added pm2 start node-app as systemd service. journalctl shows startup and node-app online but no pm2 or node processes when SSH
