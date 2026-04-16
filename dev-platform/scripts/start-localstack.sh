#!/usr/bin/env sh
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
ROOT_DIR=$(CDPATH= cd -- "$SCRIPT_DIR/.." && pwd)

[ -f "$ROOT_DIR/.env" ] && { set -a; . "$ROOT_DIR/.env"; set +a; }

export LOCALSTACK_DEBUG="${DEBUG:-0}"
export SERVICES="${SERVICES:-cloudformation,s3,sqs,dynamodb,sts,iam,ssm}"
export PERSISTENCE="${PERSISTENCE:-1}"
export LOCALSTACK_ACTIVATE_PRO=0

exec localstack start -d
