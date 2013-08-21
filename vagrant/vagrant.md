# VAGRANT

Development environments made easy.

Create and configure lightweight, reproducible, and portable virtual development environments.



## Core concepts

* A Vagrantfile (ASCII) fully describes your environment!
* Based on virtualisation. Supported virtualisation providers are:
  * VirtualBox
  * VMware
  * AWS
* Boxes: base environment images that get configured. (http://www.vagrantbox.es)
* Automated provisioning (software installation) using:
  * shell scripts
  * Ansible: http://www.ansibleworks.com
  * Chef: www.opscode.com/chef/
  * Puppet: http://puppetlabs.com



## Getting started

$ vagrant init precise64 http://files.vagrantup.com/precise64.box
$ vagrant up
$ vi myfile.txt
$ vagrant ssh
$ cat /vagrant/myfile.txt
$ vagrant destroy



### Links

* http://www.vagrantup.com
* http://www.vagrantbox.es
* https://www.docker.io/
* http://lxc.sourceforge.net/

