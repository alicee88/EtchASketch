# EtchASketch

A project from the Odin Project to practice building a simple app using HTML, CSS, and JS.

It provides a grid of squares as a canvas on which the user can draw with using the mouse. Like the classic Etch A Sketch toy, you can't lift the cursor: the resulting image will be a continuous line.

Options include:
* Configuring the number of squares in the grid (maintaining a constant number of pixels)
* Monochrome or rainbow colours, with the functionality of 'shading' (increasing darkness with multiple mouse strokes)
* Reset

This was my first experience of using **CSS Grid**: I'd originally tried to create the grid using **FlexBox**, but realised this was going to be difficult when configuring the number of squares. Using FlexBox to centre the CSS Grid was a good learning point.

I also gained experience using **CSS Custom Properties** to access and change CSS variables within JS, the number of squares in this case.

You can try it [here](https://alicee88.github.io/EtchASketch/).
