# Smooth-Scrolling
Smooth Scrolling for your website!


To start using this script it is necessary:

1. Download the archive and extract the file from the dist directory.
There are two versions of the smooth script.min.js-minified script,
a smooth.js is not a minified script. You can choose any of them.

2. Next, you need to connect the script to the HTML file before your main script file.

3. To make smooth scrolling for the beginning, you need to create a button for scrolling in HTML.
   
   
   
   ```
   <a href="#up" class="pageup">
        ...
   </a>
   
   ```
  

 Here in the link you need to specify the ID of the element to which you want to scroll through the site 
 (you can do the same scrolling at the bottom of the site), and leave the class unchanged.

4. In the main JS file, you need to call the smoothing () function, which takes in the amount of

 smoothing(250);

 the scrolled space (height).

5. That's it, scrolling is ready!
