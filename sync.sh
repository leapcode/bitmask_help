#!/bin/bash
#
# Some of the pages used in bitmask.net are copies of pages used on dl.bitmask.net
# Run this to copy those pages from ../dl_bitmask_net.git
#
for i in android linux mac windows signature-verification
do
  rsync -rv --delete ../dl_bitmask_net/pages/$i/ pages/install/$i
done

rsync -rv ../dl_bitmask_net/pages/common/_download_button.haml pages/common
rsync -rv ../dl_bitmask_net/pages/assets/qr/ pages/assets/qr
