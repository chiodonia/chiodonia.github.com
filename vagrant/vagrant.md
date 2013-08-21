# VAGRANT

Development environments made easy.



## [DevOps tool](http://en.wikipedia.org/wiki/DevOps)

Create and configure lightweight, reproducible, and portable virtual development environments.



## Core concepts

* A Vagrantfile (ASCII!!!!) fully describes your environment!
* Based on virtualisation. Supported virtualisation providers are:
  * [VirtualBox](https://www.virtualbox.org/)
  * VMware
  * AWS
* Boxes: base [environment images](http://www.vagrantbox.es) that get configured. 
* Automated provisioning (software installation) using:
  * shell scripts
  * [Ansible](http://www.ansibleworks.com)
  * [Chef](www.opscode.com/chef/)
  * [Puppet](http://puppetlabs.com)



## Getting started

	$ vagrant init precise64 http://files.vagrantup.com/precise64.box
	$ vi Vagrantfile
	$ vagrant up
	$ vi myfile.txt
	$ vagrant ssh
	$ cat /vagrant/myfile.txt
	$ vagrant destroy



## More advances sample

* https://github.com/narkisr/storm-sandbox
* http://blog.cloudera.com/blog/2013/04/how-to-use-vagrant-to-set-up-a-virtual-hadoop-cluster/



## Links

* Vagrant
   * http://www.vagrantup.com
   * http://www.vagrantbox.es

* Virtualisation
   * https://www.virtualbox.org/

* Containers (alternative to Virtualisation)
   * https://www.docker.io/
   * http://lxc.sourceforge.net/

* Provisioning
   * http://www.ansibleworks.com
   * http://www.opscode.com/chef/
   * http://puppetlabs.com
