@title = 'Bitmask for GNU/Linux'
@nav_title = 'Linux'

<%= render({:partial => 'common/notice'}, {:type => 'info', :text => '<b>NOTE:</b> Encrypted email support in Bitmask is still experimental.'}) %>

# Introduction

There are two ways to install Bitmask on Linux, as a **package** or as a stand-alone **bundle**.

* **Packages**: run faster, and are better integrated with the desktop environment.
* **Bundles**: do not require root, and can be installed on a portable thumb drive.

To find out which distribution you are running, open a terminal and type in the following:

    cat /etc/issue

# Ubuntu Packages

### Ubuntu 16.04 LTS (Xenial Xerus)

<%= render({:partial => 'via_packages'}, {:distro => 'xenial'}) %>

### Ubuntu 15.10 (Wily Werewolf)

<%= render({:partial => 'via_packages'}, {:distro => 'wily'}) %>

### Ubuntu 15.04 (Vivid Vervet)

<%= render({:partial => 'via_packages'}, {:distro => 'vivid'}) %>

# Debian Packages

If you are using Wheezy, then you will need to use the bundle method.

### Debian 8 (Stable/Jessie)

<%= render({:partial => 'via_packages'}, {:distro => 'jessie', :os => 'debian'}) %>

### Debian Testing (Stretch)

<%= render({:partial => 'via_packages'}, {:distro => 'testing', :os => 'debian'}) %>

### Debian Unstable (Sid)

<%= render({:partial => 'via_packages'}, {:distro => 'sid', :os => 'debian'}) %>

# Stand Alone Bundle

The Bitmask stand alone bundle should work on most recent versions of Debian and Ubuntu. You are welcome to try the bundle on other distributions, it sometimes works. Alternately, you can [[build it from source => https://leap.se/en/docs/get-involved/source]].

First determine if you running a 32 bit or 64 bit kernel by running the following command:

    uname -m

<table class="table"><tr><td>
  If the result is x86_64, you have <b>64 bit</b>
</td><td>
  <%= render({:partial => 'common/download_button'}, {:link => 'https://dl.bitmask.net/client/linux/stable/Bitmask-linux64-latest.tar.gz', :text => 'Download 64 bit'}) %>
</td><td>
  [[Signature file => https://dl.bitmask.net/client/linux/stable/Bitmask-linux64-latest.tar.gz.asc]]
</td></tr><tr><td>
  If the result is: i686 or i386, you have <b>32 bit</b>
</td><td>
  <%= render({:partial => 'common/download_button'}, {:link => 'https://dl.bitmask.net/client/linux/stable/Bitmask-linux32-latest.tar.gz', :text => 'Download 32 bit'}) %>
</td><td>
  [[Signature file => https://dl.bitmask.net/client/linux/stable/Bitmask-linux32-latest.tar.gz.asc]]
</td></tr></table>

Optionally, you can [[authenticate the signature => signature-verification]] using LEAP's archive signing key.

If you want to try an experimental or release candidate versions of Bitmask, you can browse the [[full list of available downloads => https://dl.bitmask.net/client/linux]].

# Upgrading

**From stand-alone bundles**: Bitmask should upgrade itself automatically (for versions equal or later than 0.7.0). If you are running a version prior to 0.7.0, you can download the new bundle and copy the "config" folder from the old bundle directory.

**From packages**: If you are running from packages, then you can trigger an update like so:

    apt-get update
    apt-get dist-upgrade

**NOTE:** When upgrading the version of your operating system, you must also follow the directions listed under "When upgrading the OS" above.