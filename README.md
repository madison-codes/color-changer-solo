### Color Changer
## Color Changer project for Mod-1 Madison Kerndt

#Front-end engineering individual project.

#Description

This is a simple web application with two prominent buttons, the 'random' button and the 'reset' button. Each button functions to create a simple, fun, and interactive game for the users. The 'random' button will generate a HEX number and display on the page background (white is not included). The 'reset' button simply sets the background color to white.


#Functionality

The 'random' button randomly generates a string of 6 numbers (0-9) and letters(A-F) assigned as a HEX value. This HEX value is then designated through the jQuery method '.css()' to display this color as the background of the entire user page. Each click of the random number button triggers the generation of a new HEX value.

The reset button will return the game to the default background-color of white. It is important to note, that the HEX value of the background-color will never be equal to #ffffff and therefore will never appear as white.

A user is able to toggle their button presses between to get their fill of the multitude of colors HEX can provides.
