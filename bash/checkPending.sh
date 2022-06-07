#!/bin/bash
# traverse through each folder and check if there were any pending changes
for dir in $(find . -maxdepth 1 -type d); do
    # skip the scripts dir since it is not a git repo
    if [ "$dir" == "./scripts" ]; then
        echo "skipping $dir ..."
    elif [ "." != "$dir" ]; then
        echo "git status $(basename $dir)"
        cd $dir
        git status -s
        cd ..
    fi
done
