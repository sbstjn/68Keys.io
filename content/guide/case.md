---

title: The Aluminium Case
description: Find all information you need to build your own aluminium Sandwich Case for your 68% Mechanical Keyboard. A complete shopping list helps you with ordering all parts, and a detailed guide with photos supports you in building your own mechanical keyboard.
image: /images/og/splash.jpg

next:
  link: /guide/board
  name: Circuit Board

---

Every keyboard needs a case; ideally made of Aluminium or other types of metal. It's way more beautiful than plastic, and the extra weight creates a better feeling.

The case for a keyboard can quickly hit the price you plan to invest in keycaps. Using a so-called *Sandwich Case* is a perfect mix. You get Aluminium, but don't have to pay a fortune. The origin of the naming is obvious: There is one piece of Aluminium above your circuit board and one underneath. Both plates are connected with standard hexagonal standoffs and the cover plate holds the switches and stabilizers. 

![Black adonized Aluminium mechanical keyboard with Cherry MX brown switches and Plate-mounted Stabilizers](/images/case/black-assembled.jpg)

You just need a CAD file for both plates and submit them to a company that cuts your lines into a beautiful plate of Aluminium. Sounds complex, right? Don't be afraid! You can find everything you need with a few clicks and submit the files into production within a minute.

### Keyboard Layout with 68 Keys

First, let's head over to the excellent [Keyboard Layout Editor][layout]. The tool by [Ian Prest][ian] is great to create layouts for any keyboard and exports them to an open format readable by other tools.

![Keyboard Layout Editor showing custom layout for 68Keys.io keyboard](/images/case/screenshot-kle.png)

If you use the link to the editor from above, you are already good to go and no further actions are required. You can access the needed data using the **Raw data** menu, it looks like this:

```yaml
["~\n`","!\n1","@\n2","#\n3","$\n4","%\n5","^\n6","&\n7","*\n8","(\n9",")\n0","_\n-","+\n=",{w:2},"Backspace",{x:0.25},"Home","PgUp"],
[{w:1.5},"Tab","Q","W","E","R","T","Y","U","I","O","P","{\n[","}\n]",{w:1.5},"|\n\\",{x:0.25},"End","PgDn"],
[{w:1.75},"Caps Lock","A","S","D","F","G","H","J","K","L",":\n;","\"\n'",{w:2.25},"Enter"],
[{w:2.25},"Shift","Z","X","C","V","B","N","M","<\n,",">\n.","?\n/",{w:2.75},"Shift",{x:0.25},"↑"],
[{w:1.25},"Ctrl",{w:1.25},"Win",{w:1.25},"Alt",{a:7,w:6.25},"",{a:4,w:1.25},"Alt",{w:1.25},"Win",{w:1.25},"Menu",{x:0.5},"←","↓","→"]
```

### Files for Your Aluminium Case

The [Plate & Case Builder][builder] by [Will Stevens][will] generates **CAD** files based on the exported raw data from the [Keyboard Layout Editor][layout]. Just paste your keyboard layout into the **Plate Layout** field and configure the plates.

![Plate & Case Builder configuration for 68Keys.io mechanical keyboard](/images/case/screenshot-builder.png)

Make sure to select **MX** as the layout for the switches if you plan to use Cherry MX switches for your keyboard. If you use Cherry switches, you will use Cherry stabilizers as well. Adjust the values for **Case Type**, **Mount Holes**, **Edge Padding**, and **Plate Corners**, and you should be fine.

```
Switch Type:      MX {_t: 3}
Stabilizer Type:  Cherry + Costar {_s: 1}
Case Type:        Sandwich
Mount Holes:      10 / 3.5 / 10
Edge Padding:     Yes, 10 / 10 / 10 / 10
Plate Corners:    Yes, 5
```

After adjusting the configuration, you can generate the CAD files. The [Plate & Case Builder][builder] will take a few seconds and present you a preview of the generated files. For the basic case, all you need are the **Switch Layer** and **Bottom Layer** files. 

You can download the files with the needed configuration here, but you should use the builder to get a preview of what you are about to order.

{{% download "Aluminium Cover" "/files/case/cover.dxf" "DXF" "125 kb" %}}

{{% download "Aluminium Bottom" "/files/case/bottom.dxf" "DXF" "25 kb" %}}

After downloading both files, you can close the [Plate & Case Builder][builder], as well as the [Keyboard Layout Editor][layout]. The two **DXF** files are all you need for the next step.

### Ordering Aluminium Case

It's time get your credit card ready! Everything you need to do next is submitting both files to a company specialized in laster-cutting Aluminium. Most information to order the plates are combined in the downloaded files. You just need to configure the thickness of the Aluminium plates.

```
Cover:    1.5mm
Bottom:   3.0mm
```

The cover plate **must be 1.5mm** to fit the Cherry MX switches. The bottom plate can be thicker; this adds a few extra grams to your case! I doubled the thickness of the cover plate for the bottom one:

<small>Do you know companies that do this job for a reasonable price? Please [let me know][sbstjn]. Do you work for a company that offers laser-cutting of Aluminium and you can provide a discount code? I would love to feature your business and services here!</small>

<!-- {{% discount "5%" "Example Shop" "odoM88ajRp" %}} -->

### Prepare Case Plates

If you did not pay for extra cleaning after cutting, chances are high you will need to clean both plates after you received them. They may have a plastic cover and some marks from the laser. You can just peel off the plastic and use a wet cotton towel to clean them.

![Raw Aluminium cover and bottom plate for Sandwich Case for 68Keys.io mechanical keyboard](/images/case/raw-both.jpg)

You should find regular Aluminium polish cream in your local hardware store. Together with the cotton towel you can polish the plates and have a shiny sandwich case for your keyboard.

{{% gallery "half" %}}

![Polished Aluminium cover and bottom plates for 68Keys.io mechanical keyboard](/images/case/clean-both.jpg)
![Polished Aluminium cover and bottom plates for 68Keys.io mechanical keyboard (Details, Close-Up)](/images/case/clean-top.jpg)

{{% /gallery %}}

### Adonized Aluminium

Raw Aluminium is very sensitive. You might want to adonize the Aluminium plates; either do this by yourself, find a local company, or check if the company that cuts your plates offers this finishing as well.

![Black adonized Aluminium cover and bottom plates for 68Keys.io mechanical keyboard](/images/case/plates-black.jpg)

If you are lucky, you might get a good deal with a local vendor. Just call them, and ask for a price offer. Most of the time they handle large orders and may sneak your parts in with another order.

### Switches, Stabilizers, and Screws

When your cover plate is ready (either polished or adonized), it's time to snap in the **Stabilizers** and **Switches**. That should be no problem at all, just make sure to start with the stabilizers first.

{{% gallery "half" %}}

![Black Aluminium Case, Cherry MX brown switches, Cherry Stabilizers, M3 Screws, M3 Standoffs](/images/case/parts-black.jpg)
![Black adonized Aluminium cover and bottom plates for 68Keys.io mechanical keyboard (Details, Close-Up)](/images/case/parts-black-assembled.jpg)

{{% /gallery %}}

To close the sandwich case, you need common **M3** screws and a set of matching standoffs. But you do not need them until you soldered the circuit board to the switches. All in all, you will need four basics in addition to the Aluminium plates:

{{% parts "case" %}}

Sometimes it can be hard to find *Plate-mounted* Cherry-compatible stabilizers. I don't know why, but most stabilizers are only *PCB-mounted*. Don't buy them! Keep digging for the ones that fit into the plate. If you have snapped all **Stabilizers** and **Switches** to the plate, it's time to continue with the [Circuit Board][board]!

[layout]: http://www.keyboard-layout-editor.com/##@_backcolor=%23b8b8b8&name=68Keys.io&author=Layout%20for%20custom%2068%25%20Mechanical%20Keyboard%20-%20https%2F:%2F%2F%2F%2F68Keys.io&switchMount=cherry&plate:true%3B&@=~%0A%60&=!%0A1&=%2F@%0A2&=%23%0A3&=$%0A4&=%25%0A5&=%5E%0A6&=%2F&%0A7&=*%0A8&=(%0A9&=)%0A0&=%2F_%0A-&=+%0A%2F=&_w:2%3B&=Backspace&_x:0.25%3B&=Home&=PgUp%3B&@_w:1.5%3B&=Tab&=Q&=W&=E&=R&=T&=Y&=U&=I&=O&=P&=%7B%0A%5B&=%7D%0A%5D&_w:1.5%3B&=%7C%0A%5C&_x:0.25%3B&=End&=PgDn%3B&@_w:1.75%3B&=Caps%20Lock&=A&=S&=D&=F&=G&=H&=J&=K&=L&=%2F:%0A%2F%3B&=%22%0A'&_w:2.25%3B&=Enter%3B&@_w:2.25%3B&=Shift&=Z&=X&=C&=V&=B&=N&=M&=%3C%0A,&=%3E%0A.&=%3F%0A%2F%2F&_w:2.75%3B&=Shift&_x:0.25%3B&=%E2%86%91%3B&@_w:1.25%3B&=Ctrl&_w:1.25%3B&=Win&_w:1.25%3B&=Alt&_a:7&w:6.25%3B&=&_a:4&w:1.25%3B&=Alt&_w:1.25%3B&=Win&_w:1.25%3B&=Menu&_x:0.5%3B&=%E2%86%90&=%E2%86%93&=%E2%86%92
[ian]: https://github.com/ijprest
[builder]: http://builder.swillkb.com/
[will]: http://swillops.com/
[lto]: http://www.laserteileonline.de/dxfimport.html
[sbstjn]: https://twitter.com/sbstjn
[board]: /guide/board