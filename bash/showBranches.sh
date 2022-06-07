#!/bin/bash
# traverse through each folder and show the current branch
for dir in $(find . -maxdepth 1 -type d); do
    # skip the scripts dir since it is not a git repo
    if [ "$dir" == "./scripts" ]; then
        echo "skipping $dir ..."
    elif [ "." != "$dir" ]; then
        cd $dir
        echo "Current Branch of $(basename $dir): [$(git branch --show-current)]"
        cd ..
    fi
done
