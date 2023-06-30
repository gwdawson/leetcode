#!/bin/bash

if [ -z "$1" ]; then
  yarn ts-node ./playground.ts
else
  for dir in ./src/*; do
    if [[ -d "$dir" ]] && [[ "$(basename "$dir")" == "$1"* ]]; then
      yarn ts-node "$dir/index.ts"
    fi
  done
fi
