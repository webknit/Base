♥ Base V1.4.1 ♥ 
===============

Base is a front-end HTML5 template. Featuring the latest technologies and impeccable code this download is the ideal starting point for any web project.


Features
--------

Base is a CSS/SASS/HTML5 based mobile first front end template which is impeccably neat and tidy and is an ideal starting point for a web project of any size.

Base is extremely lightweight and is ready to go straight out of the box. Download the files. Choose either CSS/SASS for your stylesheet language and then get coding. The files are impeccably neat and generously commented and they include markup and style examples.

View the website at www.base.webknit.co.uk


Grunt
--------

Grunt is a task runner that can dramatically improve your front-end development workflow. With the use of a number of grunt plugins you can automate tasks such as compiling SASS and CoffeeScript, optimizing images and validating your JavaScript code with JSHint.

If you're not using SASS then the gruntfile isn't suitable for you without being modified. Just delete the package.json, Gruntfile.js and SASS folder then write Vanilla CSS.
If you just want to use SASS with something like Codekit then that's also fine. Just delete the package.json & Gruntfile.js. 

I'm hoping that if you plan to use the grunt you have some knowledge of how it works and are familiar with the command line and everything that needs to be installed in order to use grunt etc.
 
If you are using grunt then here are some basic instructions to get started (You will need node, npm, grunt etc installed)
- navigate to your project using the command link
- type 'npm install'
- type 'grunt' to make the project watch your code and update the SASS and JS when saved
- type 'grunt deploy' to compressed the compiled SASS/CSS, JS and to minify the images.

The tasks in the Base Gruntfile are very simple to get you started quickly. 
There are tons of useful stuff you can do with Grunt. I'm planning on writing a blog post in the near future.


SASS Modules
-------------

The modules directory is reserved for Sass code that doesn't cause Sass to actually output CSS. Things like mixin declarations, functions, and variables.

- _variables.scss - Colours, Gradients, Typography.
- _functions.scss - All the functions go in here
- _mixins.scss - All the mixins go in here


SASS Partials
-------------

The partials directory is where most of the CSS is constructed. Plan ahead and think how to structure your partials.

- _reset.scss - Reset, including HTML5
- _base.scss - All the base elements, HTML, body, container, headers, links, img, blockquote etc
- _buttons.scss - Button styles
- _forms.scss - Form styles
- _font-face.scss - Font face stuff


Vendor
-------------

The vendor directory is for third-party CSS.


Log
---

- V1.4.1 (12/08/2014) - Including Susy
- V1.4.0 (09/08/2014) - Including Grunt
- V1.3.4 (21/06/2014) - Updating to jQuery 1.11.1 and adjusting spacing in the JS file
- V1.3.3 (09/05/2014) - Removing Modernizr & GA code - users should add these if needed
- V1.3.2 (16/03/2014) - New design. Also new website design at http://base.webknit.co.uk/
- V1.3.1 (25/02/2014) - Media queries all in one file for both vanilla CSS and SASS uses a new function
- V1.3.0 (20/02/2014) - Completely reworking SASS, including modules and partials folders
- V1.2.4 (14/05/2013) - Updating jQuery to 1.10.2, renaming SASS files, Adding form attributes
- V1.2.3 (14/05/2013) - Moving away from px and onto ems
- V1.2.2 (24/04/2013) - Removing LESS, new folder structure, cleaning HTML markup
- V1.2.1 (12/04/2013) - Introducing SASS @import modules
- V1.2.0 (13/02/2013) - Mobile first
- V1.1.2 (28/01/2013) - Introducing SASS
- V1.1.1 (17/12/2012) - Grid.css now also LESS. CSS ordered alphabetically
- V1.1.0 (17/12/2012) - Introducing LESS. CSS Reset refined
- V1.0.1 (26/11/2012) - Adding additional spacing to CSS file
- V1.0.0 (03/11/2012) - Initial Base template release

