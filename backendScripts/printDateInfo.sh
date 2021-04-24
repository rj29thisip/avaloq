#!/bin/bash
DIR=`pwd`
LIST=$DIR/infoList.txt
JSON=$DIR/infoJson.json

date=$(date | awk '{print $2"-"$3"-"$6}')
time=$(date | awk '{print $4}')
timezone=$(date +"%Z %z")

echo -e "$date;$time;$timezone" > $LIST

cat $LIST | awk '{print $1$2$3}' | column -t -s ";"
jq -Rs '[ split("\n")[] | select(length > 0) | split(";") | {Date: .[0], Time: .[1], Timezone: .[2]} ]' $LIST > $JSON
