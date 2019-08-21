Demo uses "startup" for trusty 14.04 - this lacks correct version of python 
Updated to xenial 16.04 which has correct python but systemd instead of "startup"
tried chaning deploy role to write webapp.service but systemd not writable error
Removed service entirely
Installing node is now nodejs-legacy (and npm install express) but requires apt-update

Cannot install nodejs because prerequisite libuv1 not installable
Alternative is "PPA" which is personal package from NodeSource the nodejs vendor so correct packages available
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install nodejs

Added ignore_errors to NPM install because despite dependency failures it installs ok

## CURRENT 
fatal: [localhost]: FAILED! => {"msg": "The task includes an option with an undefined variable. The error was: 'ec2_instance_id' is undefined\n\nThe error appears to have been in '/opt/cloud/git/repos/ansible/ansible_aws_demo_2/roles/createAMI/tasks/main.yml': line 8, column 3, but may\nbe elsewhere in the file depending on the exact syntax problem.\n\nThe offending line appears to be:\n\n\n- name: Create AMI\n  ^ here\n"}

Check ec2 out and try "{{ ec2_instance_id }}"
