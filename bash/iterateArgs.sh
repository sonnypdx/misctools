#!/bin/bash
# example script to iterate over arguments

for i in "$@"; do
	printf '%s\n' "$i"
done
