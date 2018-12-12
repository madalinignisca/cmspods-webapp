# CMS Pods Manager

**CMS Pods Manager** allows you to manage the hosting of websites built on WordPress,
Ghosts and other to come on VPS servers from cloud providers using Docker.

Servers are provisioned in your own account. Websites are deployed using
Docker and allows to use multiple servers for different scenarios (uses Docker
Swarm and block storage volumes).

The idea and concept for **CMS Pods Manager** came after many years of working
with many popular PHP projects, automating lots of tasks, integrating Docker
within the process and the desire to offer something very simple to non-technical
people to use.

**CMS Pods Manager** wants to be a tool for simple people, alternative to
what [**Terraform**](https://www.terraform.io/) is for advanced devops masterminds.

## Features:
* connect to popular cloud hosting services
* provision new servers on connected accounts
* start a new project using prebuilt recipes based on best practices
* monitor resources used by projects and get an understanding of upgrade
  requirements

## Libraries used:
Frontend: Firebase + React + Bootstrap + Reactstrap
Backend: Firebase + Dockerode + various cloud SDK's

## License
GNU AFFERO GENERAL PUBLIC LICENSE
Version 3
`./LICENSE`

## Roadmap:

* v1.0.0 initiate a WordPress website on a provisioned server using one of the available
cloud hosters.
* v1.1.0 scale a cluster to Swarm
* v1.2.0 move a website from a server to another server within a Swarm
* v1.3.0 initiate a Ghost website
* v1.4.0 initiate a Drupal website
* v1.5.0 initiate a Joomla website
* v2.0.0 Realtime stats
* v2.1.0 Uservoice

...