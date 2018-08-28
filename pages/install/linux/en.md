@title = 'Bitmask for GNU/Linux. Version 0.10.7'
@nav_title = 'Linux'
@this.toc = false

# Standalone Bundles

<%= render({:partial => 'common/download_button'}, {:link => 'https://dl.bitmask.net/client/linux/stable/Bitmask-linux64-latest.tar.gz', :text => 'Download (64 bit)'}) %>

The [[signature => https://dl.bitmask.net/client/linux/stable/Bitmask-linux64-latest.tar.gz.asc]] can be [[verified => signature-verification]] using LEAP's archive signing key. You can browse [[the downloads => https://dl.bitmask.net/client/linux]], including release candidates.


# Debian/Ubuntu

## For Ubuntu Bionic Beaver (18.04) and Debian testing (buster):
```
sudo apt install leap-archive-keyring lsb-release
sudo sh -c 'echo "deb http://deb.leap.se/client release $(lsb_release -sc)" > /etc/apt/sources.list.d/bitmask.list'
sudo apt update && sudo apt install bitmask
```

## For Debian stable (9.0, Stretch): 

You need to enable `stretch-backports` to install the latest `leap-archive-keyring` package (skip this step
if you already have `stretch-backports` enabled):

```
sudo echo "deb http://deb.debian.org/debian stretch-backports main" > /etc/apt/sources.list.d/stretch-backports.list
sudo apt update && sudo apt install -t stretch-backports leap-archive-keyring
```

```
sudo sh -c 'echo "deb http://deb.leap.se/client release stretch" > /etc/apt/sources.list.d/bitmask.list'
sudo apt update && sudo apt install bitmask
```

## For Ubuntu oldstable (17.10, Artful):

```
sudo apt install wget
sudo sh -c 'echo "deb http://deb.leap.se/client release artful" > /etc/apt/sources.list.d/bitmask.list'
wget https://downloads.leap.se/platform/leap-archive-signing-keys.asc -O /tmp/leap-archive-signing-keys.asc
sha256sum /tmp/leap-archive-signing-keys.asc
```

The latest command will output a checksum that you need to compare with this one: `940aed61f2bd9db8246c4855a2239a7ed5b847894de89e25bebb163055f85da9`
Please *only* proceed if the checksums are identical !

```
sudo apt-key add /tmp/leap-archive-signing-keys.asc
sudo apt update && sudo apt install bitmask
```

Read more about [[ our different repositories => debs ]] for deb packages.

# Other

If none of the above methods works for you, you can try to install [[via pip => http://bitmask.readthedocs.io/en/latest/installation/index.html#with-pip]] or [[from source => http://bitmask.readthedocs.io/en/latest/hacking/devenv.html]], or get in contact with us if you want to package Bitmask for some other distribution.
