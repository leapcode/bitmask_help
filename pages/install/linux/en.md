- @title = 'Bitmask for Linux'
- @nav_title = 'Linux'

<%= render :partial => 'notice' %>

## Install as packages

This is the recommended method of installing Bitmask. If installed as a package, Bitmask will run faster, be better integrated in the system, and will be kept up to date.

### Ubuntu 14.04 (Trusty Tahr)

<%= render({:partial => 'via_packages'}, {:distro => 'trusty'}) %>

### Ubuntu 13.10 (Saucy Salamander)

<%= render({:partial => 'via_packages'}, {:distro => 'saucy'}) %>

### Debian 7.0 (Wheezy)

Note: for wheezy, these instructions will enable `wheezy-backports`, causing your computer to install more up-to-date versions of many packages. For more information, see the [Debian backports page](https://wiki.debian.org/Backports).

<%= render({:partial => 'via_packages'}, {:distro => 'wheezy', :os => 'debian'}) %>

### Debian 8.0 (Jessie)

<%= render({:partial => 'via_packages'}, {:distro => 'jessie', :os => 'debian'}) %>

## Install stand-alone bundle

Alternately, you can run Bitmask from a stand alone bundle. This is useful if want to run Bitmask from a thumb drive. The bundle should work on most recent Linux distributions that are derived from Debian (e.g. Ubuntu, Mint, etc).

There are several disadvantages to the stand-alone bundle:

* Installing via the bundle takes up more space.
* The Bitmask app will be less well integrated with the desktop environment.
* Running from the bundle is slower to start than via packages.
* You will not get automatic updates running the stand alone bundle.

How do you tell if you running a 32 bit or 64 bit kernel? Run the following command:

    uname -m

If the result is:

* `x86_64`, you have **64 bit**
* `i686`, you have **32 bit**
* `i386`, you have **32 bit**

### 32 bit kernel

<%= render({:partial => 'common/download_button'}, {:link => '/client/linux/Bitmask-linux32-latest.tar.bz2', :text => 'Download 32 bit'}) %>

### 64 bit kernel

<%= render({:partial => 'common/download_button'}, {:link => '/client/linux/Bitmask-linux64-latest.tar.bz2', :text => 'Download 64 bit'}) %>

### Other options

If you want to install an old or development version of Bitmask, you can [browse all releases.](/client/linux/)

<%= render({:partial => 'common/email'}) %>
