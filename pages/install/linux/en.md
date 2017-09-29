@title = 'Bitmask for GNU/Linux. Version 0.10.0'
@nav_title = 'Linux'

# Standalone Bundles

<%= render({:partial => 'common/download_button'}, {:link => 'https://dl.bitmask.net/client/linux/stable/Bitmask-linux64-latest.tar.gz', :text => 'Download Stable Bundle (64 bit)'}) %>

The [[signature => https://dl.bitmask.net/client/linux/stable/Bitmask-linux64-latest.tar.gz.asc]] can be [[verified => signature-verification]] using LEAP's archive signing key. You can also browse [[all the downloads => https://dl.bitmask.net/client/linux]], including release candidates.

# Experimental bundles

If you want to try the latest code, new bundles are continously built.

  <%= render({:partial => 'common/download_button'}, {:link => 'https://0xacab.org/leap/bitmask-dev/builds/artifacts/master/download?job=bitmask_latest_bundle', :text => 'Download Experimental Bundle (64 bit)'}) %>

# Debian/ubuntu

```
sudo apt install leap-archive-keyring
sudo sh -c 'echo "deb http://deb.leap.se/client stretch release" >> /etc/apt/sources.list'
sudo apt update && sudo apt install bitmask-qt bitmask-vpn bitmask-mail
```

Change ``stretch`` for ``zesty`` or ``buster``, according to your distro. [[ Read more => debs ]] about our different repositories.


# Other

If none of the above methods works for you, you can try to install [[ via pip => 'http://bitmask.readthedocs.io/en/latest/installation/index.html#installing-with-pip' ]] or [[ from source => 'http://bitmask.readthedocs.io/en/latest/hacking/index.html#devenv' ]], or get in contact with us if you want to package Bitmask for some other distribution.
