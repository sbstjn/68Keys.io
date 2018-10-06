---

title: TMK Firmware
description: Compile your custom TMK Firmware to run your 68% Mechanical Keyboard. A complete shopping list helps you with ordering all parts, and a detailed DIY guide with photos supports you in building your own mechanical keyboard.
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

The firmware is based on [TMK][tmk] and customized by [di0ib][di0ib] to work with the **Arduino Pro Micro** on the board. All sources for the keyboard are available [on GitHub][firmware] using the [GPL v2][license] license.

```bash
$ > git clone https://github.com/sbstjn/tmk_keyboard.git
$ > cd tmk_keyboard/keyboard/68Keys
```

The repository already includes a default keyboard configuration that you can use right away available in the `keymap_68Keys.c` file.

```c
#include "keymap_common.h"

const uint8_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
  KEYMAP(
      GRV,  1,    2,    3,     4,    5,    6,    7,    8,    9,    0,     MINS, EQL,  BSPC,   ESC,  PGUP,
      TAB,  Q,    W,    E,     R,    T,    Y,    U,    I,    O,    P,     LBRC, RBRC, BSLS,   DEL,  PGDN,
      FN0,  A,    S,    D,     F,    G,    H,    J,    K,    L,    SCLN,  QUOT, ENT, 
      LSFT, Z,    X,    C,     V,    B,    N,    M,    COMM, DOT,  SLSH,        RSFT,         UP,
      LCTL, LALT, LGUI,                 SPC,                 RGUI, RALT,  RCTL,         LEFT, DOWN, RGHT
  ),
  KEYMAP(
      GRV,  F1,   F2,   F3,    F4,   F5,   F6,   F7,   F8,   F9,   F10,   F11,  F12,  TRNS,   TRNS, HOME,
      TRNS, TRNS, UP,   TRNS,  TRNS, TRNS, TRNS, TRNS, TRNS, UP,   TRNS,  TRNS, TRNS, TRNS,   TRNS, END,
      TRNS, LEFT, DOWN, RIGHT, TRNS, TRNS, TRNS, TRNS, LEFT, DOWN, RIGHT, TRNS, TRNS, 
      TRNS, MPRV, MPLY, MNXT,  VOLU, VOLD, MUTE, TRNS, TRNS, TRNS, TRNS,        TRNS,         VOLU, 
      TRNS, TRNS, TRNS,                 TRNS,                TRNS, TRNS,  APP,          MPRV, VOLD, MNXT
  ),
};

const action_t PROGMEM fn_actions[] = {
    [0] = ACTION_LAYER_MOMENTARY(1),
};
```


Basically, I moved **ESC** to the right side and replaced **Caps Lock** on my keyboard with **FN**. Holding **FN** enables the second keyboard layer, which includes media controls and additional arrow keys. Most keys do not have an extra function, adding **TRNS** just passes through the normal key.

### Compile your Firmware

After you have installed all needed [dependencies](#dependencies), compile the firmware with your custom keyboard layout:

```
$ > make clean
$ > make all

[...]

   text	   data	    bss	    dec	    hex	filename
  22930	     56	    230	  23216	   5ab0	68Keys.elf
```

When the command finishes without errors, you end up with a few `68Keys.*` files. In the next step will upload the `68Keys.hex` file to your Arduino board.

### Upload Firmware

Connect the Micro-USB cable to your **Arduino Pro Micro** and your computer. The board should be listed using `ls /dev/tty.*` . If you cannot find your board, first check if the green light on the Arduino is on.

```bash
$ > ls /dev/tty.*

crw-rw-rw-  1 root  wheel   21,   4 Jan 24 12:06 /dev/tty.Bluetooth-Incoming-Port
crw-rw-rw-  1 root  wheel   21,   2 Jan 24 12:06 /dev/tty.MALS
crw-rw-rw-  1 root  wheel   21,   0 Jan 24 12:06 /dev/tty.SOC
crw-rw-rw-  1 root  wheel   21,   0 Jan 24 12:06 /dev/tty.usbmodem1441
```

If your computer detected the Arduino board correctly, it's time to upload your custom firmware to it. You can use the **Push Button** to enter the Bootload on your Arduino. [Press it twice][bootloader] directly after re-connecting the board to your computer and you have **8 seconds** to start with uploading your firmware.


```bash
$ > avrdude \
    -patmega32u4 -cavr109 -b57600 -D -V \
    -Uflash:w:68Keys.hex:i -P/dev/tty.usbmodem1441
```

<small>On some systems, the number following `usbmodem` increases every time you re-connect the board. On others, it stays the same or just switches to a different number when the Bootloader is enabled. Just run `ls /dev/tty.*`  after you connected the board or enabled the Bootloader to figure this out.</small>

After you hit `enter` and the Arduino is ready to receive the firmware, `avrdude` will start to transfer the data and show you the progress:

````
Connecting to programmer: ...

Found programmer: Id = "CATERIN"; type = S

Programmer supports the following devices:
    Device code: 0x44

avrdude: AVR device initialized and ready to accept instructions

Reading | ################################################## | 100% 0.01s

avrdude: Device signature = 0x1e9587
avrdude: reading input file "68Keys.hex"
avrdude: writing flash (22948 bytes):

Writing | ################################################## | 100% 1.78s

avrdude: 22948 bytes of flash written

avrdude: safemode: Fuses OK (H:CB, E:D8, L:FF)

avrdude done.
Thank you.
````


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

Make sure the Micro-USB cable is connected to the Arduino board and use the **M3 Screws** and **Standoffs** to close the *Sandwich Case*.

![Custom 68% Mechanical Keyboard from 68Keys.io](/images/intro.jpg)

### Thanks!

Woow, that was a ride! Thanks for reading this guide, I hope you enjoyed building your new mechanical keyboard. I would love to hear your feedback and see the results of your work, please [share them on twitter][twitter]. What key caps did you use for your keyboard? The [SA Grade][grade] set is a perfect match! 😍

[sbstjn]: https://twitter.com/sbstjn
[twitter]: https://twitter.com/68Keys
[github]: https://github.com/sbstjn/68keys.io
[homebrew]: https://breh.sh
[crosspack]: https://www.obdev.at/products/crosspack/download.html
[parts]: /parts
[firmware]: https://github.com/sbstjn/tmk_keyboard/tree/master/keyboard/68Keys
[license]: https://github.com/sbstjn/tmk_keyboard#license
[bootloader]: https://learn.sparkfun.com/tutorials/pro-micro--fio-v3-hookup-guide/troubleshooting-and-faq#ts-reset
[case]: /guide/case
[grade]: http://www.keyset.design/
[tmk]: https://github.com/tmk/tmk_keyboard
[di0ib]: https://github.com/di0ib/
[teensy]: https://www.pjrc.com/teensy/
[shrink]: /parts/#shrink-kit
