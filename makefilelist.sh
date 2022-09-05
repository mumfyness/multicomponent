#!/bin/bash 

cd images

myMediaFiles=$(ls *.png *.gif *.ico *.jpg) 

for file in $myMediaFiles; do 
    echo $file; 
done

cd ..
