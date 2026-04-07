#!/bin/bash
set -e

# Set correct ownership and permissions
chown -R www-data:www-data /var/www/amperagehq
find /var/www/amperagehq -type d -exec chmod 755 {} \;
find /var/www/amperagehq -type f -exec chmod 644 {} \;

# Reload nginx to apply any config changes
nginx -t && systemctl reload nginx
