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

Seems like systemctl "enable" (after start) isn't completing but node-app does persist manual reboot.

TASK [deploy : Enable and start node-app] ***************************************************************************************************
fatal: [ec2-18-217-69-123.us-east-2.compute.amazonaws.com]: FAILED! => {"changed": false, "msg": "Unable to enable service node-app: Failed to execute operation: Invalid argument\n"}

Issue then is that ASG creates cluster from LC using AMI based on that instance but the ASG probe detects service down on HTTP 8000 and terminates that instance while starting up a new one. 

