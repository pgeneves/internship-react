# Internship react discovery 2024
**The knowledge section contains important information and is useful to read first and to look at when in a doubt**

The goal of that project is to discover a mainstream framework used for web-development.
It is named React.js and the company is using it for all user interfaces.

While the project will be created from scratch, code examples are available in the 'examples' application already present

# Visual studio code
 - Main tool to edit code for this project
 - Open project folder using the proper menu entry in the File menu
    - 'internship-react'
 - Open a Terminal using the proper menu entry in the '...' menu
    - Choose a Ubuntu-WSL terminal


# Bootstrapping a react application
## Project creation and start of the application
````shell
#In a terminal navigate to the root of the project folder (internship-react)
# 'ls' command to list content of current location
# 'cd' command to navigate across directories
# 'cd ..' to navigate to parent directory

# Command to create a sample react application in the internship-2024 folder
npx create-react-app react-project

# Entering the application folder
cd react-project

# Launching the application in a development server
npm start
````

**npm start** command will
 - Compile the project (assemble all the code to be executable by the Javascript engine)
 - Launch a development server on the port 3000 of localhost
   - This development server will be configured to serve the content that have been create during compilation
   - It will also on the fly recompile any changes done on the source code in the 'src' folder and reflect it in the web-page
   - In some occasion a restart of the development server is required to see changes
 - Open a browser on that address
   - Page is open in a private window to avoid caching of resources by the browser and reflect code modification on the fly
 - 'CTRL-C' can be used to terminate the development server

## Introduction on the generated code
The source code is localized in the 'src' folder of the project
````shell
cd src
ls
````

A lot of files have been created and only the main ones are described here as an introduction.
 - Files with the '.js' extension are javascript files containing javascript code
 - Files with the '.css' extension are css files containing style element associated to javascript file of same name (it is a convention)
 - index.js
   - Entry point of the application. It is used to bootstrap the single-page application. 
   - React framework will generate an 'index.html' page from it. It can be observed by displaying source page in the browser
 - App.js  
   - This code is launched from the 'index.js' file and by convention is the real entry point of the application
   - It mainly contains a javascript function named like the file (as a convention)
   - The function return HTML content using a special React syntax
      - HTML instruction can be mixed with react instructions that allow to adapt the generated HTML using the code logic

## First modification of the generated code X
Let's try to add some text in the generated web page.
 - Modify the App function in the App.js file
   - Add some text inside the <div > element (It means somewhere between the <div> and </div> markups)
   - Caution: Inline styling are declared in a special way in the react syntax
       -  ````<h1 style={{color: "red"}}>React!</h1> will be the way to create a title with a Red style````

## Understanding react components
The major strenght of React is to ease re-use of code. This property can be named 'Composition'.
A complex application with lot of UI will be created in React as a composition of multiple simple parts.
React components are at the core of that capability.

In the 'examples' application, a component named 'TextOuput' have been created and used in the application

Let's try to also introduce a component in the 'react-project' application.
 - Look carefully at the code in the 'examples' application
   - Look at how a component is declared in 'components/TextOuput.js' and check code comments
   - Look at how a component is used in 'App.js'
 - Copy the TextOutput component in the 'react-project' application by copying the javascript file from  the 'examples'
 - Modify the App.js in 'react-project' by looking at App.js of 'examples'
   - Add the TextOutput component 3 times, with different texts

## Understanding variable, function and state
A variable is a part if the memory reserved by the code to store value while the code is executing.
A variable have to be declared (e.g. "var myVariable")
An initial value can be assigned during the declaration (e.g. "var myVariable = 'myValue'")
The value of a variable can be accessed by using the variable name
The value of a variable can be changed by the code (e.g. "myVariable = 'myNewValue'")

A function is a piece of code that can be defined one time and reused by other part of the code.
Classical function are defined with name and can receive parameters

````javascript
// A simple function
function simpleFunction() {console.log("in the function");}

/**
 * A  function that can be called with some parameters
 * In the example below, the passed parameters are assigned to a variable named 'params'
 */
function functionWithParameters(params) {
  console.log("in the param function: "+params);
}

/**
 * A  function that can return a value
 */
function functionWithParametersAndReturn(params) {
  return "Changed"+params;
}

// A function can also call another function
function chainFunction() {
  // console.log() is itself a function provided out of the box
  console.log(functionWithParametersAndReturn("original_text"));
}
````

Another strenght of react is to continuously adapt the UI to the state of its component.

State is a special type of variable managed by React.
To declare this variable, the special function 'useState' provided by React have to be used, like in TextOutput.js
To update this variable, to assign a new value to it, the function returned by 'useState' must be used 

It will be illustrated in following sections

## Use components made by the community
Lot's of component have been created by the community and can be re-used instead of starting from scratch on each new project.
A popular UI toolkit for react is named MaterialUI; It provides many UI element ready for use with nice examples.

https://mui.com/material-ui/

In order to be used, the library must first be installed

````shell
// Install the MaterialUI library
npm install @mui/material @emotion/react @emotion/styled
// Install the font that is used for MUI text
npm install @fontsource/roboto
// Install Icon used in MUI
npm install @mui/icons-material
````

Let's try to use a pre-defined component from MaterialUI in 'react-project'
 - Look carefully at the code in the 'examples' application
   - Look at how a component using MaterialUI element is declared in 'components/TestMUI.js' and check code comments
   - Look at how this TestMUI component is used in 'App.js'
 - Copy the TestMUI component in the 'react-project' application by copying the javascript file from  the 'examples'
 - Modify the App.js in 'react-project' by looking at App.js of 'examples'
 - Look at the documentation in the MUI website
   - The Slider component used above is documented here https://mui.com/material-ui/react-slider/ 
 - Select another simple component and use it in TestMUI
   - A 'Chip' is a very simple component to try; Select and Rating are also easy to try
   
TIPS: When using a component look at its documentation in MUI; The first code example are usually the simpler to start.
To find out the import, the easiest is to look at the live example at the beginning of their documentation and use the 'show code' button.

A special type of MUI components are useful to layout the page.
In that project the recommendation is to experiments with Grid layout (https://mui.com/material-ui/react-grid2/)
'react-grid2' is recommended as grid is deprecated, meaning it will not longuer be maintained by the community and will disappear at some point.

## Use developper tools to resolve bugs
Chrome and Firefox browser have powerful development tools available.
In Firefox CTRL+SHIFT+I can be used to open it (and F11 on Chrome(non))

The 'Console' tab allow to see error message as well as message produce by the code with cal to the 'console.log(...)' function
The 'Debug' tab allow to see variables, put breakpoint to stop code execution, and execute step by step
'Spy expression' are very powerful to keep track of values of some variables across the execution

## Start to code the project!
A separate file named internship.md is describing the goal of the project, its requirements and provide technical information to complete it. With all knowledge gained so far let's implements this real-life project.

# Knowledge
## UI
UI is an acronym for User Interface

## HTML
https://www.w3schools.com/html/default.asp
https://www.w3schools.com/css/default.asp

HTML is a language used to create web pages. Web browsers can understand HTML and render it.
It can instructions that will describe the elements of the page (That will be part of the Document Object Model or DOM).
It can also contains instructions to define the style (color, ...) of those element using the CSS (Cascading Style Sheets) language 

HTML element are defined by markup using a syntax based on '<>' and '</>'
````
 - '<h1>' is the opening of a title element
 - '</h1>' is the closing of that title element
 - '<h1>React!</h1>' we'll create a Title element with the text 'React!'
 - '<h1 style="color:red;">React!</h1>' we'll create a Title element with the text 'React!' with a Red color
   - This is inline styling of the element, where style properties are directly declared inside the element opening
````   

## Javascript
https://www.w3schools.com/js/default.asp

Javascript is a programming language widely used for web-development. It can runs in most web browser and also on any Javascript engine for example on server side. Node.js is a classical javascript engine used on server side

Typescript is also a popular programming language derived from Javascript. It offers a better experience for the developper and is generally a better option for large commercial projects. Browser are not understanding Typescript, but Typescript can be 'compiled (or transpiled)' to Javascript by the tooling.
This internship project is focus on Javascript but when searching for example on the web it is not uncommon to find Typescript code.

## NPM
https://www.w3schools.com/whatis/whatis_npm.asp

 - NPM is a package manager widely used for Javascript; It comes installed with Node.js
 - NPM allow easy import of code created by other programmers and bundled as package, that can be free for use or subject to some license.

## React.js
https://www.w3schools.com/react/default.asp

 - React is a Javascript library mainly used for for building web user interfaces as single-page applications
 - A single-page application differs from a standard web-site as most of what happens in the UI is controlled by Javascript code. Standard web-site and on the reverse made of html pages and use hyperlink to navigate across pages.

# Documentation
- https://www.w3schools.com/
    - Main resource to learn all aspect of Web development and beyond

