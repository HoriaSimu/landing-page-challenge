# landing-page-challenge
A landing page built after a Figma design.

### Challenge:

Implement the frontend for a single page. Figma design: https://www.figma.com/file/5hZ8GgzQ6uLDwbRr7Yin4u/traffico-landing-page-for-figma

Additional requirements in the comments of the design:

* When clicking the navigation buttons, you should be scrolled to the appropriate section
* The images should enter the screen from the left or right, using an animation.
* When clicking “Load More”, more questions should appear.

What we will check:

* The design shall be developed pixel-perfect or as much as possible.
* The page shall be responsive.
* The code shall be clean and best practises shall be respected.
* Repository commits and comments.
* The comments from the design file were respected.

### Thoughts & lessons learned

* Normally, for this kind of page I find using React to be overkill, but since the advertised position called for a React developer, I wanted to showcase a bit of my experience in this area.
* It was my first time using Figma - overall it was a very helpful exercise and I learned a lot from it. But I also had some challenges. I might have relied too much on position relative/absolute in following the design and this will make responsiveness more difficult to implement.
* Generally it's recommended to import SVGs in React as inline components, since it offers more control & flexibility. In doing so I noticed some inconsistency in color display - there were some conflicts between the images and the colors were displayed incorrectly. Importing the SVGs as urls seemed to fix this.

### Remaining to do's

Ordered by priority:

* Making the design responsive. Normally I would have started working on the page using a "mobile first" approach, but I didn't want to waste too much time on fiddling with the CSS until I came up with a satisfying design for smaller screens, before working on the actual design from Figma.
* Adding functionality to the "Load more" button. This might involve using another piece of state inside the FAQ component, to track the number of currently displayed questions.
* Fix the animation on the bottom car SVG. It most likely has to do with some of the CSS applied to it, I will have to review it.
* Redo the FAQ section - the design doesn't seem as fluid as the one in Figma. Currently, when a card is open, only one closed question is displayed by its side.
* A hover effect on the buttons would be nice, even if there's no mention of it in the design.
* As I work on an (ultra)wide screen, a bit of responsivity in this direction would be nice. A centering of the current layout should do the trick.
