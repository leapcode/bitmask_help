@title = "Bitmask for Linux"
@nav_title = 'Linux'

# Bitmask is now RiseupVPN

We've deprecated Bitmask for all desktop clients. We've rewritten the clients and offer provider branded versions. You can try the new client by installing RiseupVPN.

## Requirements

RiseupVPN is distributed as a `snap` package or as a `deb` package in Debian Stable. Currently we don't have the capacities to offer up to date packages for other Linux distributions and need community support for it! 
You can get [[in contact with us => https://0xacab.org/leap/bitmask-vpn/-/issues/new]], if you want to help with packaging!
RiseupVPN is currently tested on **Ubuntu LTS** (18.04) and **Debian Stable**. If you have a different release, it may or may not work.

## Snap Installation

If you use Ubuntu, snap is already installed. Otherwise, run:

```
sudo apt install snapd gnome-software-plugin-snap
```

Then, search for **RiseupVPN** in the **Software Center** or click on this link:

<a class="btn btn-default btn-lg" href="snap://riseup-vpn">
  <i class="fa fa-reply-all"></i>
  Open RiseupVPN in Software Center
</a>

If the link above does not work for you, you can also install via the command line:

```
sudo snap install --classic riseup-vpn
```
If you get an error stating that "python" is missing from /usr/bin/env, you need to install python. This is the case for instance in Lubuntu, at least since version 19.04.

## Package Installation

Run the following commands in a terminal to install the Debian Stable package.

       sudo apt install leap-archive-keyring
       echo "deb http://deb.leap.se/client release buster" | sudo tee -a /etc/apt/sources.list.d/leap.list
       sudo apt update
       sudo apt install riseup-vpn
       
## Download other versions

You can [[browse all releases => https://dl.bitmask.net/RiseupVPN/linux/]] for old or experimental downloads.

You should install the latest stable release. Downloads tagged with "RC" are "Release Candidates" and receive frequent experimental updates that may break the application.


## Troubleshooting

### Bug Reports and Feature Requests

RiseupVPN is built using a free software program called <b>bitmask-vpn</b>.

**Step 1:** [[Search to see => https://0xacab.org/leap/bitmask-vpn/issues]] if the bug has already been reported.

**Step 2:** [[Register an account => https://0xacab.org/users/sign_in]] with [[0xacab.org => https://0xacab.org]] and log in.

**Step 3:** Create a [[new bug report or feature request => https://0xacab.org/leap/bitmask-vpn/issues/new]].

Please include the following information in your bug report:

* Steps to reproduce the bug
* What is the expected behaviour and what do you see
* A screenshot if it is something visual
* Your linux distribution and its version
* The log of the program

### Get the logs

The log of RiseupVPN is located in your home folder:

```
~/.config/leap/systray.log
```

When reporting a bug it is very useful to include the log file.

### Force quit

If anything stops working, run these commands and then try again:

```
sudo pkill -e -f riseup-vpn
```

### Won't start

If the launcher icon does not work, you can run RiseupVPN from the command line in order to identify the problem:

```
/snap/bin/riseup-vpn.launcher
```

Any problem starting will be displayed on the terminal.

### Test a pre-release version

If you want to help us test a development, pre-release version of RiseupVPN, you can install it using this command:

```
sudo snap install --classic --beta riseup-vpn
```

### Remove PID file

Sometimes RiseupVPN will fail to start if it thinks another version is already running.

If you get this error, run these commands:

```
sudo pkill -e -f riseup-vpn
test -f ~/.config/leap/systray.pid && rm -v ~/.config/leap/systray.pid
```

## Source code
The code for the Linux client can be found [[here => https://0xacab.org/leap/bitmask-vpn]].
