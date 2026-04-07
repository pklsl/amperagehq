#!/bin/bash
set -e

# Clean the deployment directory before installing new files
rm -rf /var/www/amperagehq/*
mkdir -p /var/www/amperagehq
