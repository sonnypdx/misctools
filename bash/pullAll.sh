#!/bin/bash
# traverse through each folder and do a git pull
for dir in $(find . -maxdepth 1 -type d); do
    # skip the scripts dir since it is not a git repo
    if [ "$dir" == "./scripts" ]; then
        echo "skipping $dir ..."
    elif [ "." != "$dir" ]; then
        echo "git pull $(basename $dir)"
        cd $dir
        git pull
        cd ..
    fi
done
