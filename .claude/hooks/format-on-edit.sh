#!/bin/bash
# .claude/hooks/format-on-edit.sh
# Formats the edited file with Prettier, but only for extensions it supports.
# Fails silently so a formatting error never interrupts Claude's session.

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# MultiEdit sends an array of edits instead of a single file_path
if [ -z "$FILE_PATH" ]; then
  FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.edits[0].file_path // empty')
fi

[ -z "$FILE_PATH" ] && exit 0
[ ! -f "$FILE_PATH" ] && exit 0

EXT="${FILE_PATH##*.}"

case "$EXT" in
  ts|tsx|js|jsx|json|css|scss|md|html)
    # Prefer the project's local prettier if it exists, else fall back to npx
    if [ -f "./node_modules/.bin/prettier" ]; then
      ./node_modules/.bin/prettier --write "$FILE_PATH" 2>/dev/null
    else
      npx --no-install prettier --write "$FILE_PATH" 2>/dev/null
    fi
    ;;
  *)
    # Not a Prettier-handled extension, do nothing
    ;;
esac

exit 0