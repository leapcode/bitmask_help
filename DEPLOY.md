To deploy bitmask_help to bitmask.net:

    git clone ssh://gitolite@leap.se/bitmask
    cd bitmask
    leap deploy production

To update the bitmask install instructions:
(it copies FROM dl_bitmask_net to this repo)

    git clone ssh://gitolite@leap.se/dl_bitmask_net
    git clone ssh://gitolite@leap.se/bitmask_help
    cd bitmask_help
    sh sync.sh

