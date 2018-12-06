---
title: QMK Firmware
description: Compile your custom QMK Firmware to run your 68% Mechanical Keyboard. A complete shopping list helps you with ordering all parts, and a detailed DIY guide with photos supports you in building your own mechanical keyboard.
image: /images/og/splash.jpg

back: true
---

How you upload the firmware to your Arduino, depends on your computer's operating system. As I prefer to work with **macOS**, this guide uses tools and commands that work fine on a current **High Sierra v10.13** machine.

### USB Cable

You need a Micro-USB cable to connect the **Arduino Pro Micro**. The cable is required for uploading a new firmware and using the keyboard afterward. You can just order any ordinary cable from the [Shopping List][parts], or look for a vendor that makes awesome-looking custom cables.

<small>Do you work for a company that offers custom USB cables and you can provide a discount code? I would love to feature your business and services here! Please [let me know][sbstjn].</small>

If you use the [Shrink Kit][shrink], you can use already use the Mini-USB cable to flash the Arduino. The connection works for using the keyboard, as well as uploading a new firmware to it.

### Dependencies

To flash your Arduino with software, and for compiling the firmware, you must install a few tools like `avr-gcc` and `avrdude`. Both are available on [Homebrew][homebrew], but I recommend the [CrossPack by ObDev][crosspack].

{{% download "CrossPack for AVR" "https://www.obdev.at/downloads/crosspack/CrossPack-AVR-20131216.dmg" "DMG" "42 MB" %}}

<small>CrossPack for AVR Development is distributed under the terms of the **GNU General Public License** version 2, except AVR Libc which is distributed under a more liberal license. See the manual for the full text of these licenses.</small>

### Firmware

The firmware is based on [QMK][qmk] and customized to work with the **Arduino Pro Micro** on the board. All sources for the keyboard are available [on GitHub][firmware] using the [GPL v2][license] license.

```bash
$ > git clone https://github.com/sbstjn/qmk_firmware.git
$ > cd qmk_firmware
```

The repository already includes a default keyboard configuration that you can use right away available in the `keymap.c` file. The file is located in the `keyboards/68keys` folder.

```c
#include QMK_KEYBOARD_H
#include "68keys.h"

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    [0] = LAYOUT_68_ansi(
        KC_GRV, KC_1, KC_2, KC_3, KC_4, KC_5, KC_6, KC_7, KC_8, KC_9, KC_0, KC_MINS, KC_EQL, KC_BSPC, KC_ESC, KC_PGUP,
        KC_TAB, KC_Q, KC_W, KC_E, KC_R, KC_T, KC_Y, KC_U, KC_I, KC_O, KC_P, KC_LBRC, KC_RBRC, KC_BSLS, KC_DEL, KC_PGDN,
        MO(1), KC_A, KC_S, KC_D, KC_F, KC_G, KC_H, KC_J, KC_K, KC_L, KC_SCLN, KC_QUOT, KC_ENT,
        KC_LSFT, KC_Z, KC_X, KC_C, KC_V, KC_B, KC_N, KC_M, KC_COMM, KC_DOT, KC_SLSH, KC_RSFT, KC_UP,
        KC_LCTL, KC_LALT, KC_LGUI, KC_SPC, KC_RGUI, KC_RALT, KC_RCTL, KC_LEFT, KC_DOWN, KC_RGHT),
    [1] = LAYOUT_68_ansi(
        KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
        KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
        MO(1), KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
        KC_TRNS, KC_TRNS, KC_MPLY, KC_MSTP, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_VOLU,
        KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_MPRV, KC_VOLD, KC_MNXT)
};
```

Basically, I only moved **ESC** to the right side. Thanks to QMK, you can easily add additional layers and replace **Caps Lock** for example with **FN**. Holding **FN** could enable a second keyboard layer, which includes media controls.

### Compile your Firmware

After you have installed all needed [dependencies](#dependencies), compile the firmware with your custom keyboard layout:

```
$ > make 68keys:default

[...]

Checking file size of 68keys_default.hex [OK]
 * The firmware size is fine - 14096/28672 (14576 bytes free)
```

When the command finishes without errors, you end up with a few `68Keys.*` files in the `.build` folder. In the next step you will upload the firmware to your Arduino board.

### Upload Firmware

Connect the Micro-USB cable to your **Arduino Pro Micro** and your computer. The board should be listed using `ls /dev/tty.*` . If you cannot find your board, first check if the green light on the Arduino is on.

```bash
$ > ls /dev/tty.*

crw-rw-rw-  1 root  wheel   21,   4 Jan 24 12:06 /dev/tty.Bluetooth-Incoming-Port
crw-rw-rw-  1 root  wheel   21,   2 Jan 24 12:06 /dev/tty.MALS
crw-rw-rw-  1 root  wheel   21,   0 Jan 24 12:06 /dev/tty.SOC
crw-rw-rw-  1 root  wheel   21,   0 Jan 24 12:06 /dev/tty.usbmodem1441
```

If your computer detected the Arduino board correctly, it's time to upload your custom firmware to it.

```bash
$ > make 68keys:default:avrdude
```

<small>On some systems, the number following `usbmodem` increases every time you re-connect the board. On others, it stays the same or just switches to a different number when the Bootloader is enabled. Just run `ls /dev/tty.*` after you connected the board or enabled the Bootloader to figure this out.</small>

After you hit `enter` you will see a prompt to reset your controller. You can use the **Push Button** to enter the Bootload on your Arduino. [Press it twice][bootloader] directly after re-connecting the board to your computer and the process to flash the firmware to the board will start automatically.

```
Checking file size of 68keys_default.hex                        [OK]
 * The firmware size is fine - 14096/28672 (14576 bytes free)
Copying 68keys_default.hex to qmk_firmware folder               [OK]
Detecting USB port, reset your controller now..............

Detected controller on USB port at /dev/tty.usbmodem146101

Reading | ################################################## | 100% 0.00s

avrdude: Device signature = 0x1e9587
avrdude: erasing chip
avrdude: reading input file ".build/68keys_default.hex"
avrdude: input file .build/68keys_default.hex auto detected as Intel Hex
avrdude: writing flash (14096 bytes):

Writing | ################################################## | 100% 1.06s

avrdude: 14096 bytes of flash written
avrdude: verifying flash memory against .build/68keys_default.hex:
avrdude: load data flash data from input file .build/68keys_default.hex:
avrdude: input file .build/68keys_default.hex auto detected as Intel Hex
avrdude: input file .build/68keys_default.hex contains 14096 bytes
avrdude: reading on-chip flash data:

Reading | ################################################## | 100% 0.12s

avrdude: verifying ...
avrdude: 14096 bytes of flash verified

avrdude: safemode: Fuses OK (H:CB, E:D8, L:FF)

avrdude done.  Thank you.
```

### Make sure everything works

You can install `lsusb` using [Homebrew][homebrew] to list all connected USB devices. If you uploaded the firmware to the Arduino, you computer should list the keyboard with its name.

```bash
$ > lsusb

Bus 020 Device 004: ID feed:0a0c feed  The 68Keys.io Keyboard
Bus 000 Device 001: ID 1d6b:ISPT Linux Foundation USB 3.0 Bus
Bus 001 Device 001: ID 1d6b:CIAR Linux Foundation USB 3.1 Bus
Bus 000 Device 001: ID 1d6b:CIAR Linux Foundation USB 3.1 Bus
```

### Finish the Sandwich Case

After the successful upload of your firmware, you should finally be able to use the keyboard after re-connecting it to your computer. If everything works as expected, it's time to close the [Sandwich Case][case] and you're done!

Make sure the Micro-USB cable is connected to the Arduino board and use the **M3 Screws** and **Standoffs** to close the _Sandwich Case_.

![Custom 68% Mechanical Keyboard from 68Keys.io](/images/intro.jpg)

### Thanks!

Woow, that was a ride! Thanks for reading this guide, I hope you enjoyed building your new mechanical keyboard. I would love to hear your feedback and see the results of your work, please [share them on twitter][twitter]. What key caps did you use for your keyboard? The [SA Grade][grade] set is a perfect match! 😍

[sbstjn]: https://twitter.com/sbstjn
[twitter]: https://twitter.com/68Keys
[github]: https://github.com/sbstjn/68keys.io
[homebrew]: https://breh.sh
[crosspack]: https://www.obdev.at/products/crosspack/download.html
[parts]: /parts
[firmware]: https://github.com/sbstjn/qmk_firmware/tree/master/keyboards/68keys
[license]: https://github.com/sbstjn/qmk_firmware/blob/master/LICENSE
[bootloader]: https://learn.sparkfun.com/tutorials/pro-micro--fio-v3-hookup-guide/troubleshooting-and-faq#ts-reset
[case]: /guide/case
[grade]: http://www.keyset.design/
[qmk]: https://github.com/qmk/qmk_firmware
[di0ib]: https://github.com/di0ib/
[teensy]: https://www.pjrc.com/teensy/
[shrink]: /parts/#shrink-kit
