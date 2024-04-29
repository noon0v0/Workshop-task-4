# Workshop 4：Interactivity

## URL:
https://noon0v0.github.io/Workshop-task-4/


## Tasks:

- Create an interactive p5.js sketch with at least three different kinds of user input events.
- Experiment with ways to record and redeploy inputs from the user.

## Note:

- Drawing control: Control mouse press and release behavior using `mousePressed()` and `mouseReleased()` functions, and track drawing state with the `drawing` variable.
- Drawing color bar: Draw a rainbow color bar at the bottom of the canvas using the `draw_color_bar()` function, use the `rect()` function to draw colored rectangles, and set fill colors using the `fill()` function.
- Drawing and erasing: Draw shapes based on mouse behavior using the `draw()` function, draw continuous shapes using `beginShape()` and `endShape()` functions, and clear the canvas using the `clear_canvas()` function.
- Changing brush color and thickness: Change brush color in response to key presses using the `keyPressed()` function, set brush thickness using the `strokeWeight()` function, and set brush color using the `stroke()` function.
- Data structure: Use an array `points` to store coordinates of points during drawing.

## Project:

For the fourth task of the workshop, a drawing board was created. Users can draw by holding down the mouse, press the spacebar to change the color of the brush. The sequence of brush color changes follows the order of the rainbow's seven colors. Additionally, users can drag the slider to change the stroke weight, and click the "clear" button to clear the canvas.
