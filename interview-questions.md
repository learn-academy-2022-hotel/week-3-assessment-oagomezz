# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX can be thought of to be a combination of HTML and Javascript, it is utilized in react apps. One syntax difference between HTML and JSX is that in order to access the onclick event in HTML it is written out as onclick whereas to be used in JSX the 'c' in onClick has to be capitalized. JSX can also access javascript functions when being used the only requirement is that {} must be ulitized when calling on the item for example in the use of props in a display component. When they are called from a nested component is it required that the variable be enclosed in {} otherwise the webpage will through up a fault. 

Researched answer: JSX is Javascript XML and allows for the use of html in react. It allows the program to render components without having to utilize methods such as createElement. the use of JSX allows for the production of cleaner code during the development process which is why most people enjoy it. 

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yarn is resource negotiator or packet manager that allows your code to be used and accessed by others around the world. It was created by Meta(Facebook)

Researched answer: Yarn was created to replace the existing workflow for npm client. It was created to make software development faster and easier while remaining compatible with npm registry.

3. What is a React component?

Your answer: a react componenet can be broken down into two main groups the logic componenet that contains all of the code block pertaining to the functionality of the webpage and the display componenet which holds all information used to develop a user interface.

Researched answer: components are reusable code blocks that sometimes are seperated by the functionality of the code. For example in a podcast player it is a possibility to find the player portion of the code to be found in the player display component whereas the array pertaining to the list of podcasts would be found in its own seperate component to be updated as required. Each component works independently. 

4. What is the difference between state values and props in React?

Your answer:props typically get passed to a component as a parameter within the function whereas state values are declared within the component.

Researched answer: When it comes to react, props cannot be modified and are read only characteristics whereas state changes can be modified using the setState built in method in your application. 

5. What is the DOM?

Your answer: Document object model is the visual representation of the code you are working on. If you were to look at any website on a browser you would be looking at the dom. 

Researched answer: The Dom is the data representation of the objects that comprise the structure and content of a document on the web. The DOM is built using multiple APIs that work together. API's were created to provide developers a simple way to create complex functionality. 

6. STRETCH: Which is the difference between a div and a span?

Your answer: Div and span are similar in the fact that they are containers to help organize parts of code or webpages. Span elements are beneficial for styling and inline coding 

Researched answer: Divs are utilized to create seperations in form of blocks. It's often used in multiple paragraph articles seperated by div blocks. Divs make it easier to identify sections of a webpage. Spans are used on lines of code to apply styling. They do not start on new lines and only take up as much space as their content. 

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: a programming model that focuses primarily on the manipulation of the object in the model as opposed to the logic applied to the object within the program. It is comprised of 4 main building blocks, classes which act as blueprints for the creation for more objects, objects are instances made from the classes provided that can be used to catagorize specific information compiled from the classes. methods are used to explain the behavior of a function and attributes are found within the class building block and represent the state of the data. 

2. Ruby: a dynamic language created in 1995 which is focusing heavily on the utilization of objects.

3. Implicit return: a function will automatically return the result of the last line of code in the program. It makes it so that the word return doesn't have to be returned in order to see the results of a function. It was beneficial in favor of creating very minimal code.

4. Ruby blocks: anonymous functions that can be passed into methods. They require the use of {} to enclose the code. In order to invoke a ruby block you use the yield statemnet.  

5. Ruby hashes: Ruby hashes are a collection of key value pairs with the same behavior as an array object. They can be invoked using dot notation to retrieve values from specified keys. If no value has been assigned the code will return a default value as provided or with the result of nill.
