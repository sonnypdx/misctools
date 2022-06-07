#!/bin/bash
# example script to iterate over the top-level sub-directories

for dir in $(find . -maxdepth 1 -type d); do
	printf '%s\n' "$dir"
done
