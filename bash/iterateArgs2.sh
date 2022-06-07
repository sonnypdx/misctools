#!/bin/bash
# example script to iterate over arguments while capturing the 1st arg into a variable

ARG1=''
for i in "$@"; do
    if [[ $ARG1 == '' ]]; then
        ARG1=$i;
    else
        printf '%s\n' "$i"
    fi
done

echo "Value of the 1st Argument is $ARG1";