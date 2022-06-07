#!/bin/bash
# example script to iterate over arguments to the script

for i in "$@"; do
	printf '%s\n' "$i"
done
