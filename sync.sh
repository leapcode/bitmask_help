#!/bin/bash

for i in android linux mac windows
do
  rsync -rv --delete ../dl_bitmask_net/pages/$i/ pages/install/$i
done

rsync -rv ../dl_bitmask_net/pages/common/_download_button.haml pages/common
rsync -rv ../dl_bitmask_net/pages/assets/qr/ pages/assets/qr

