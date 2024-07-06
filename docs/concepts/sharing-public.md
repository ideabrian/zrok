---
sidebar_position: 10
---
# Public Shares

Run `zrok share public` to see the command-line help and to learn how to use `public` shares.

`zrok` supports `public` sharing for web-based (HTTP and HTTPS) resources. These resources are shared with public access points.
 

## Peer to Public

![zrok_public_share](../images/zrok_public_share.png)

`public` sharing is most useful when the person or service accessing your resources does not have `zrok` running locally and cannot make use of the `private` sharing mode built into `zrok`. Many users share development web servers, webhooks, and other HTTP/HTTPS resources.

As with `private` sharing, `public` sharing does not require you to open any firewall ports or otherwise compromise the security of your local environments. A `public` share goes away as soon as you terminate the `zrok share` command.
