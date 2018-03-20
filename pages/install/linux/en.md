@title = 'Bitmask for GNU/Linux. Version 0.10.0'
@nav_title = 'Linux'
@this.toc = false

# Standalone Bundles

<%= render({:partial => 'common/download_button'}, {:link => 'https://dl.bitmask.net/client/linux/stable/Bitmask-linux64-latest.tar.gz', :text => 'Download (64 bit)'}) %>

The [[signature => https://dl.bitmask.net/client/linux/stable/Bitmask-linux64-latest.tar.gz.asc]] can be [[verified => signature-verification]] using LEAP's archive signing key. You can browse [[the downloads => https://dl.bitmask.net/client/linux]], including release candidates.

If you want to try the latest code, you can download the [[latest bundle => https://0xacab.org/leap/bitmask-dev/-/jobs/artifacts/master/download?job=bitmask_latest_bundle]] that is built automatically for every change.


# Debian/Ubuntu

We officially support these releases:

- Latest stable Debian release (9.0, Stretch)
- Latest stable Ubuntu release (17.10, Artful)

You might find debian packages for other releases as well but they might or might not work for you. Please understand that we can't provide support for these.

Read more about [[ our different repositories => debs ]] for deb packages.

For Debian jessie and Ubuntu Artful:

```
sudo apt install lsb-release curl
sudo sh -c 'echo "deb http://deb.leap.se/client release $(lsb_release -sc)" > /etc/apt/sources.list.d/bitmask.list'
curl https://downloads.leap.se/platform/leap-archive-signing-keys.asc | sudo apt-key add
sudo apt update && sudo apt install bitmask
```


For Debian testing and Ubuntu Bionic:

```
sudo apt install leap-archive-keyring lsb-release
sudo sh -c 'echo "deb http://deb.leap.se/client release $(lsb_release -sc)" > /etc/apt/sources.list.d/bitmask.list'
sudo apt update && sudo apt install bitmask
```


# Other

If none of the above methods works for you, you can try to install [[via pip => http://bitmask.readthedocs.io/en/latest/installation/index.html#with-pip]] or [[from source => http://bitmask.readthedocs.io/en/latest/hacking/devenv.html]], or get in contact with us if you want to package Bitmask for some other distribution.
