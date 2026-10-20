#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Deployment destination
APP_NAME="marco-martins-website"
HOST="nas-webserver"
REMOTE_USER="deploy"
REMOTE_PATH="/home/deploy/docker/apps/${APP_NAME}"
COMPOSE_FILES=(compose.yaml compose.prod.yaml)

echo "🚀 Deploying to: ${REMOTE_USER}@${HOST}:${REMOTE_PATH}"

printf -v mkdir_command 'mkdir -p -- %q' "$REMOTE_PATH"
ssh -n "${REMOTE_USER}@${HOST}" "$mkdir_command"

rsync -avczP --delete \
  --filter='P /compose.prod.yaml' \
  --include="/compose.prod.yaml" \
  --filter=':- .gitignore' \
  --exclude=".env" \
  --exclude=".git" \
  --exclude=".github" \
  ./ "${REMOTE_USER}@${HOST}:${REMOTE_PATH}"

echo "✅ Files synchronized."

read -r -p "Restart Docker containers? [y/N]: " restart_docker

if [[ ! "$restart_docker" =~ ^[yY]$ ]]; then
  echo "✅ Files synchronized. Containers were not restarted."
  exit 0
fi

echo "🔄 Building and updating Docker containers on remote server..."
printf -v deploy_command '%q ' bash -s -- "$REMOTE_PATH" "${COMPOSE_FILES[@]}"
ssh "${REMOTE_USER}@${HOST}" "$deploy_command" <<'REMOTE'
set -euo pipefail

cd "$1"
shift

compose=(docker compose)
for file in "$@"; do
  compose+=(-f "$file")
done

"${compose[@]}" config --quiet
"${compose[@]}" build
"${compose[@]}" up -d --no-build --wait --wait-timeout 60
"${compose[@]}" ps
REMOTE

echo "✅ Deployment complete!"
