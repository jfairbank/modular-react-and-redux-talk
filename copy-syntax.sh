#!/bin/bash

#FONT_SIZE=30
FONT_SIZE=50
FONT_FAMILY=Monaco
STYLE=seashell
#STYLE=fine_blue
SYNTAX=js
OUTPUT=rtf
FILTER=false

while getopts ":S:s:f" OPT; do
  case $OPT in
    S)
      SYNTAX="$OPTARG"
      shift 2
      ;;
    s)
      STYLE="$OPTARG"
      shift 2
      ;;
    f)
      FILTER=true
      shift
      ;;
    \?)
      exit 1
      ;;
  esac
done

FILENAME="$1"

if [[ -z "$FILENAME" ]]; then
  >&2 echo 'Please supply filename'
  exit 1
fi

if [[ "$FILTER" == true ]]; then
  CONTENTS=$(cat "$FILENAME" | grep -Ev "^(?:import|export)")
else
  CONTENTS=$(cat "$FILENAME")
fi

echo "$CONTENTS" | highlight -s "$STYLE" -O "$OUTPUT" -S "$SYNTAX" -K "$FONT_SIZE" -k "$FONT_FAMILY" | pbcopy
