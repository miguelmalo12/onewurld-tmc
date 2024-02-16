#!/bin/sh
set -e

rm -rf /usr/share/nginx/html/ssh*
rm -rf /usr/share/nginx/html/bitbucket*


/usr/sbin/nginx & /usr/sbin/sshd -d -e