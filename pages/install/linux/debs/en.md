@title = 'Bitmask debian/ubuntu repositories'
@nav_title = 'Bitmask debian/ubuntu repositories'
@this.toc = false

# Supported distributions

We provide packages for **ubuntu** ``zesty`` (17.04), **debian** ``stretch`` (*stable*) and ``buster`` (*testing*).
Try the [[ standalone bundles => /en/install/linux/#standalone-bundles ]] if your distribution is not there.

Change ``stretch`` in the following instructions for the one you are using:

```
sudo apt install leap-archive-keyring
sudo sh -c 'echo "deb http://deb.leap.se/client stretch release" > /etc/apt/sources.list.d/bitmask.list'
sudo apt update && sudo apt install bitmask
```

# Release, staging, or master?

Above, the ``release`` component tracks only the **stable** releases. That is probably what you want to use.

If you want **alpha** versions and **release candidates**, use ``staging`` in your ``/etc/apt/sources.list.d/bitmask.list`` file, like this:

```
sudo gedit /etc/apt/sources.list.d/bitmask.list
deb http://deb.leap.se/client stretch staging
```

If you want to have the bleeding edge, use ``master`` instead. Beware that this can be unstable at times:

```
deb http://deb.leap.se/client stretch master
```


# Removing the packages 

If you want to remove bitmask from your system:

```
sudo -s
apt remove bitmask leap-archive-keyring
rm /etc/apt/sources.list.d/bitmask.list
```

You probably also want to wipe all the files in your local user account, in:


```
~/.config/leap/
```
