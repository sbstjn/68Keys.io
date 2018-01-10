---

title: The Aluminium Case
description: Find all information you need to build your own aluminium Sandwich Case for your 68% Mechanical Keyboard. A complete shopping list helps you with ordering all parts, and a detailed guide with photos supports you in building your own mechanical keyboard.

image: /images/og/guide/case.jpg

next:
  link: /guide/board
  name: Circuit Board

---

Every keyboard needs a case; Ideally made of Aluminium, or other types of metal. It's way more beautiful than plastic, and the extra weight creates a better feeling.

The case for a keyboard can easily hit the price you plan to invest in keycaps. Using a so-called *Sandwich Case* is a perfect mix. You get Aluminium, but don't have to pay a fortune. The origin of the naming is kind of obvious: There is one piece of Aluminium above your circuit board, and one underneath. Both plates will be connected with common hexagonal standoffs and the cover plate holds the switches and stabilizers. 

![1st Image](/images/case/done-both.jpg)

Basically, you just need a CAD file for both plates and submit them to a company that cuts your lines into a nice plate of aluminium. Sounds complex, right? Don't be afraid! You can find everything you need with a few clicks and submit the files into production within a minute.

### Keyboard Layout Editor

First let's head over to the awesome [Keyboard Layout Editor][layout]. The tool by [Ian Prest][ian] is great to create layouts for any type of keyboard and export them to an open format readable by other tools.

![Fourth Image](/images/case/screenshot-kle.png)

If you use the link to the editor from above, you are already good to go and no further actions are required. You can access the needed data using the **Raw data** menu, it looks like this:

```yaml
["~\n`","!\n1","@\n2","#\n3","$\n4","%\n5","^\n6","&\n7","*\n8","(\n9",")\n0","_\n-","+\n=",{w:2},"Backspace",{x:0.25},"Home","PgUp"],
[{w:1.5},"Tab","Q","W","E","R","T","Y","U","I","O","P","{\n[","}\n]",{w:1.5},"|\n\\",{x:0.25},"End","PgDn"],
[{w:1.75},"Caps Lock","A","S","D","F","G","H","J","K","L",":\n;","\"\n'",{w:2.25},"Enter"],
[{w:2.25},"Shift","Z","X","C","V","B","N","M","<\n,",">\n.","?\n/",{w:2.75},"Shift",{x:0.25},"↑"],
[{w:1.25},"Ctrl",{w:1.25},"Win",{w:1.25},"Alt",{a:7,w:6.25},"",{a:4,w:1.25},"Alt",{w:1.25},"Win",{w:1.25},"Menu",{x:0.5},"←","↓","→"]
```

### Plate & Case Builder

The [Plate & Case Builder][builder] by [Will Stevens][will] generates **CAD** files based on the exported raw data from the [Keyboard Layout Editor][layout]. Just paste your keyboard layout into the **Plate Layout** field and configure the plates.

![Plate & Case Builder by Will Stevens](/images/case/screenshot-builder.png)

Make sure to select **MX** as the layout for the switches if you plan to use Cherry MX switches for your keyboard. If you use Cherry switches, you will use Cherry stabilizers as well. Adjust the values for **Case Type**, **Mount Holes**, **Edge Padding**, and **Plate Corners** and you should be fine.

```
Switch Type:      MX
Sabilizer Type:   Cherry + Costar
Case Type:        Sandwich
Mount Holes:      10 / 3.5 / 10
Edge Padding:     Yes, 10 / 10 / 10 / 10
Plate Corners:    Yes, 5
```

After adjusting the configuration you can generate the CAD files. The [Plate & Case Builder][builder] will take a few seconds and present you a preview of the generated files. For the basic case, all you need are the **Switch Layer** and **Bottom Layer** files. 

You can get the files with the needed configuration here as well, but you should use the builder to get a preview of what you are about to order.

{{% download "Aluminium Cover" "/files/case/cover.dxf" "DXF" "125 kb" %}}

{{% download "Aluminium Bottom" "/files/case/bottom.dxf" "DXF" "25 kb" %}}

After downloading both files you can close the [Plate & Case Builder][builder], as well as the [Keyboard Layout Editor][layout]. The two **DXF** files are all you need for the next step: Ordering!

### Ordering Aluminium Plates

It's time get your CreditCard ready! Everything you need to do next is submitting both files to a company specialized in laster-cutting aluminium. Most information to order the plates are included in the downloaded files. You just need to configure the thicknewss of the aluminium plates.

The cover plate **must be 1.5mm** to match the Cherry MX switches. The bottom plate can be thicker, this adds a few extra grams to your case! I doubled the thickness of the cover plate for the bottom one.

```
Cover:    1.5mm
Bottom:   3.0mm
```

In Germany, I found [LTO][lto] to do this for a reasonable price. Sadly they only ship to central European countries …

<small>Do you know companies that do this job for a reasonable price? Please [let me know][sbstjn]. Do you work for a company that offers laser-cutting of aluminium and you can provide a discount code? I would love to feature your company and services here!</small>

<!-- {{% discount "5%" "Example Shop" "odoM88ajRp" %}} -->

### Aluminium Plates

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin iaculis felis at egestas. Sed eget rutrum urna, et gravida metus. Fusce egestas fermentum felis eget consectetur. Aenean tincidunt gravida nunc vitae placerat. Suspendisse rutrum enim urna, vitae laoreet sem rutrum ac.

{{% gallery "half" %}}

![Fourth Image](/images/case/raw-both.jpg)
![1st Image](/images/case/raw-top.jpg)

{{% /gallery %}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin iaculis felis at egestas. Sed eget rutrum urna, et gravida metus. Fusce egestas fermentum felis eget consectetur. Aenean tincidunt gravida nunc vitae placerat. Suspendisse rutrum enim urna, vitae laoreet sem rutrum ac.

{{% gallery "half" %}}

![Fourth Image](/images/case/clean-both.jpg)
![1st Image](/images/case/clean-top.jpg)

{{% /gallery %}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin iaculis felis at egestas. Sed eget rutrum urna, et gravida metus. Fusce egestas fermentum felis eget consectetur. Aenean tincidunt gravida nunc vitae placerat. Suspendisse rutrum enim urna, vitae laoreet sem rutrum ac.

### Sed eget rutrum urna

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin iaculis felis at egestas. Sed eget rutrum urna, et gravida metus. Fusce egestas fermentum felis eget consectetur. Aenean tincidunt gravida nunc vitae placerat. Suspendisse rutrum enim urna, vitae laoreet sem rutrum ac.

{{% parts "case" %}}

Fusce egestas fermentum felis eget consectetur. Aenean tincidunt gravida nunc vitae placerat. Suspendisse rutrum enim urna, vitae laoreet sem rutrum ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin iaculis felis at egestas. Sed eget rutrum urna, et gravida metus. Fusce egestas fermentum felis eget consectetur. Aenean tincidunt gravida nunc vitae placerat. Suspendisse rutrum enim urna, vitae laoreet sem rutrum ac.

![1st Image](/images/case/parts.jpg)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin iaculis felis at egestas. Sed eget rutrum urna, et gravida metus. Fusce egestas fermentum felis eget consectetur. Aenean tincidunt gravida nunc vitae placerat. Suspendisse rutrum enim urna, vitae laoreet sem rutrum ac.

{{% gallery "half" %}}

![Fourth Image](/images/case/done-top.jpg)
![1st Image](/images/case/done-both.jpg)

{{% /gallery %}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin iaculis felis at egestas. Sed eget rutrum urna, et gravida metus. Fusce egestas fermentum felis eget consectetur. Aenean tincidunt gravida nunc vitae placerat. Suspendisse rutrum enim urna, vitae laoreet sem rutrum ac.

[layout]: http://www.keyboard-layout-editor.com/##@_backcolor=%23b8b8b8&name=68Keys.io&author=Layout%20for%20custom%2068%25%20Mechanical%20Keyboard%20-%20https%2F:%2F%2F%2F%2F68Keys.io&switchMount=cherry&plate:true%3B&@=~%0A%60&=!%0A1&=%2F@%0A2&=%23%0A3&=$%0A4&=%25%0A5&=%5E%0A6&=%2F&%0A7&=*%0A8&=(%0A9&=)%0A0&=%2F_%0A-&=+%0A%2F=&_w:2%3B&=Backspace&_x:0.25%3B&=Home&=PgUp%3B&@_w:1.5%3B&=Tab&=Q&=W&=E&=R&=T&=Y&=U&=I&=O&=P&=%7B%0A%5B&=%7D%0A%5D&_w:1.5%3B&=%7C%0A%5C&_x:0.25%3B&=End&=PgDn%3B&@_w:1.75%3B&=Caps%20Lock&=A&=S&=D&=F&=G&=H&=J&=K&=L&=%2F:%0A%2F%3B&=%22%0A'&_w:2.25%3B&=Enter%3B&@_w:2.25%3B&=Shift&=Z&=X&=C&=V&=B&=N&=M&=%3C%0A,&=%3E%0A.&=%3F%0A%2F%2F&_w:2.75%3B&=Shift&_x:0.25%3B&=%E2%86%91%3B&@_w:1.25%3B&=Ctrl&_w:1.25%3B&=Win&_w:1.25%3B&=Alt&_a:7&w:6.25%3B&=&_a:4&w:1.25%3B&=Alt&_w:1.25%3B&=Win&_w:1.25%3B&=Menu&_x:0.5%3B&=%E2%86%90&=%E2%86%93&=%E2%86%92
[ian]: https://github.com/ijprest
[builder]: http://builder.swillkb.com/
[will]: http://swillops.com/
[lto]: http://www.laserteileonline.de/dxfimport.html
[sbstjn]: https://twitter.com/sbstjn
