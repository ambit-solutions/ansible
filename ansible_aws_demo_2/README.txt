Demo uses "startup" for trusty 14.04 - this lacks correct version of python 
Updated to xenial 16.04 which has correct python but systemd instead of "startup"
tried chaning deploy role to write webapp.service but systemd not writable error
Removed service entirely
Installing node is now nodejs-legacy (and npm install express) but requires apt-update
Where update_cache: yes included "Failed to lock apt for exclusive operation" even though root
Timeout when waiting for /var/lib/apt/lists/lock absent
Next to try - wait for path /proc/8798/status absent maybe
## CURRENT ##
TASK [createLC : Create Launch Configuration] ***********************************************************************************************
fatal: [localhost]: FAILED! => {"msg": "The task includes an option with an undefined variable. The error was: 'security_groups' is undefined\n\nThe error appears to have been in '/opt/cloud/git/repos/ansible/ansible_aws_demo_2/roles/createLC/tasks/main.yml': line 5, column 3, but may\nbe elsewhere in the file depending on the exact syntax problem.\n\nThe offending line appears to be:\n\n\n- name: Create Launch Configuration\n  ^ here\n"}

Also unable to delete AMI because indexing of ami_find.results unrecognised
