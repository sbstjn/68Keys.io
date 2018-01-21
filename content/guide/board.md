---

title: The Circuit Board
description: Order your custom Printed Circuit Board to power your 68% Mechanical Keyboard. A complete shopping list helps you with ordering all parts, and a detailed guide with photos supports you in building your own mechanical keyboard.
image: /images/og/splash.jpg

next:
  link: /guide/firmware
  name: TMK Firmware

---

All sources for the custom **Printed Circuit Board** are available online. You can find ready-to-use *Gerber files* files matching the cover plate on [GitHub][gerberfiles]. You only need to submit them to a company to print them for you. Of course you can do this in your own home as well, but prices are that low for custom PCBs, it's a no-brainer to just order them!

![PCB with Diodes](/images/board/diodes-assembled.jpg)

The circuit board has no micro controller on it, it's just the wiring for your keyboard. But you can perfectly solder an **Arduino Pro Micro** to the board! You will need one simple **Push Button** to controll the Arduino and one **1N4148 Diode** for every Cherry MX Switch on the board: 

{{% parts "board" %}}

Ordering the circuit board usually takes the longest time. Luckily, most companies offer express delivery if you do not want to wait for standard shipping.

### PCB from EasyEDA.com

For the keyboard in this guide, I ordered the circuit boards from [EasyEDA][easyeda]. They have reasonable prices and offer shipping with *DHL Express*, it only took three days from pickup in Asia to delivery in Germany.

[EasyEDA][easyeda] requires you to purchase at least five copies of the board. You can easily sell the unused boards on [r/MechMarket][mechmarket], [GeekHack][geekhack], or just ask on twitter using [#68keys][hashtag] if someone would love to buy one from you. Just check in with me [on twitter][sbstjn], maybe I still have a board left!

### Add components to PCB

The circuit board has marks for every component. 

![PCB with Diodes](/images/board/parts.jpg)

Diodes, Arduino, Switch

{{% gallery "half" %}}

![PCB with Diodes](/images/board/arduino-board.jpg)
![PCB with Diodes](/images/board/diodes-pre.jpg)

{{% /gallery %}}

### Connect PCB to Switches

After soldering the Arduino, the Button, and all 68 Diodes onto the board, it's time to connect the board to the Switches.

### Finish the Sandwich Case

Connect the Micro-USB cable to the Arduino and use the **M3 Screws** and **Standoffs** to close the *Sandwich Case*. You now have everything ready to put some software onto your keyboard, isn't that awesome? Head to the next page and read everything about the custom [TMK Firmware][firmware]!


[easyeda]: https://easyeda.com
[gerberfiles]: https://github.com/sbstjn/tmk_keyboard/tree/master/keyboard/mf68/pcb
[firmware]: /guide/firmware
[sbstjn]: https://twitter.com/sbstjn
[mechmarket]: https://reddit.com/r/mechmarket
[geekhack]: https://geekhack.org/
[hashtag]: https://twitter.com/hashtag/68keys