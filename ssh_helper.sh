#!/bin/zsh
# switches between work and personal github ssh users
# Usage: 
# sh ssh_helper.sh personal
# sh ssh_helper.sh work

MODE=${1:-work}

# EDIT THESE VARIABLES TO MATCH YOUR SSH KEYS
PERSONAL_SSH_KEY="id_ed25519"
WORK_SSH_KEY="id_rsa"

ssh-add -D
if [ "$MODE" = "personal" ]; then
    ssh-add ~/.ssh/${PERSONAL_SSH_KEY}
else
    ssh-add ~/.ssh//${WORK_SSH_KEY}
fi