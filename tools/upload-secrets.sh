#!/usr/bin/env bash
# Upload the production secrets in .env.tpl to the seds Worker. cf reads the JSON
# from a private temporary file, removed on exit, because it cannot wait on a pipe.
set -euo pipefail
umask 077
file=$(mktemp "${TMPDIR:-/tmp}/seds-secrets.XXXXXX")
trap 'rm -f "$file"' EXIT
op inject --account mauricekleine.1password.com -i .env.tpl | bun tools/secrets-json.ts >"$file"
PATH="$HOME/.local/bin:$PATH" cf workers secrets bulk --worker seds --secrets "@$file"
