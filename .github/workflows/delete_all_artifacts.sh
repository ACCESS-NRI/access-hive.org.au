#!/bin/bash
#
# This script deletes all artifacts from the repo using Github CLI.
# This will NOT break the deployment of ACCESS-Hive (https://access-hive.org.au/)

set -eu

invoke_api() {
  gh api -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" "$@"
}

list_artifacts() {
  invoke_api https://api.github.com/repos/ACCESS-Hive/access-hive.github.io/actions/artifacts
}

list=$(list_artifacts | jq '.artifacts | .[] | .url')
tot=$(list_artifacts | jq '.total_count')

delete_artifact() {
  invoke_api -X DELETE "$1"
  echo "Deleted artifact $2/$tot: $1" 1>&2
}

i=1
while true; do
  if [ "$i" -lt "$tot" ]; then
    for l in ${list} ; do
      artifact=$(echo $l | tr -d '"')
      delete_artifact "$artifact" $i $tot
      i=$((i+1))
    done
    list=$(list_artifacts | jq '.artifacts | .[] | .url')
  else
    echo "Done!"
    exit 0
  fi
done