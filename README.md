# KISMET-INC.github.IO (PORTFOLIO DEVELOPMENT)


## Description
**[KISMET-INC.github.io](https://kismet-inc.github.io/index.html)** is a website to display my body of work as a **Full Stack Web Developer**. It has been launched based off of a Bootstrap template so that all of my previous work would be ready to view in a timely manner post graduation. This development project uses **[Node.js](https://nodejs.org/en/)** as a backend environment,  **[NPM](https://www.npmjs.com/)** as a package manager, **[Gulp.js](https://gulpjs.com/)** as a task manager and **[Nunjucks](https://mozilla.github.io/nunjucks/)** as a templating engine to generate the final HTML5, CSS, and Javascript files.


## What I Learned From the Template
This project uses SCSS  for its stylesheets. The individual parts of the webpage have their own *.scss files to be edited. Upon compiling with **[Gulp.js](https://gulpjs.com/)** the SCSS files are combined into a single CSS file. 

Gulp also utiizes the templating engine **[Nunjucks](https://mozilla.github.io/nunjucks/)** to compile the final html files, identifing the Nunjucks template variables and replacing each with snippets of code wrapped with content identifier tags such as {% block content %} or by id. 

There are multiple levels of templating. The index.html file is almost entirely template variables. The template.html file stores the working template which is interpreted as a scaffolding for all the other pages. 


## Installation

   Clone the repository down to your local drive by opening up a terminal in the folder of your choice and type the code: 
   

    git clone https://github.com/KISMET-INC/KISMET-INC.github.io.git

Download and install **[Node.js](https://nodejs.org/en/)** if you do not already have it installed on your machine. Follow the prompts provided by the Node setup engine to install. 

Install GULP CLI (a task manager) globally by running the code below in your terminal.

    npm install gulp-cli -g

Open the project directory with your cmd or terminal and run the following command to install all dependencies required to run the project.
   
    npm install

   From here you can directly edit the different sections of the code.
   To build the project in a /dist/ folder run the following code in the root directory of the project

    npm start




## Support
Any questions or comments about this repository can be emailed to **kmoreland909@gmail.com**.

## Roadmap
In the future I plan to enhance this project with **REACT**. This will make the  code more efficient, using functional components to DRY up the code base.

## Contributing
I am not accepting contributions to this project at this time.

## Authors and acknowledgment
Thank you to **[BootStrapMade](https://bootstrapmade.com/)** for supplying an easy to use template to launch and learn from.