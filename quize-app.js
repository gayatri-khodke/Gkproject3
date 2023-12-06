
const questions=[
    {
        'que':'which of the following markup language?',
        'a':'css',
        'b':'html',
        'c':'javascript',
        'd':'php',
        'correct':'b'
    },
    {
        'que':'when ES6 was introduced?',
        'a':'2010',
        'b':'1022',
        'c':'2013',
        'd':'2015',
        'correct':'d'
    },
    {
        'que':'which of the following is not correct css selector',
        'a':'id selector',
        'b':'class selector',
        'c':'pseudo class selector',
        'd':'special selector',
        'correct':'d'
    },
    {
        'que':'which of the following is not correct table tag',
        'a':'<td> </td>',
        'b':'<th> </th>',
        'c':'<table> </table>',
        'd':'<row> </row>',
        'correct':'d'
    },
    {
        'que':'which of the following is not correct value of display attribute',
        'a':'none',
        'b':'hidden',
        'c':'start',
        'd':'inline',
        'correct':'c'
    },
    {
        'que':'DOM stand for',
        'a':'document object module',
        'b':'dividi object machin',
        'c':'drive optical machin',
        'd':'dom object model',
        'correct':'a'
    },
    {
        'que':'which option is not correct',
        'a':'string.length() method is use to get length of string',
        'b':'string.trim() method is use to remove white spece of string',
        'c':'concat() method use to extract the part of string in new string',
        'd':'charAt() method returns the character at a specified index (position) in a string',
        'correct':'c'
    },
];
const htmlquestions=[
    {
        'que':'Which HTML tag is used to define the structure of an ordered list?',
        'a':'<ol> </ol>',
        'b':'<ul> </ul>',
        'c':'<li> </li>',
        'd':'<hr> </hr>',
        'correct':'a'
    },
    {
        'que':'In HTML, which attribute is used to open a link in a new browser window?',
        'a':'new',
        'b':'target',
        'c':'href',
        'd':'link',
        'correct':'b'
    },
    {
        'que':'What is the purpose of the <footer> tag in HTML?',
        'a':'Defines a section in the document',
        'b':'Specifies the main content of the page',
        'c':'Contains metadata about the document',
        'd':'Represents the footer of a document or section',
        'correct':'d'
    },
    {
        'que':'Which HTML element is used to create a line break?',
        'a':'<br> </br>',
        'b':'<newline> </newline>',
        'c':'<break> </break>',
        'd':'<td> </td>',
        'correct':'a'
    },
    {
        'que':'which html tag is used ot insert external javascript file',
        'a':'<link> </link>',
        'b':'<script> </script>',
        'c':'<css> </css>',
        'd':'<stylesheet> </stylesheet>',
        'correct':'b'
    },
    {
        'que':'Which HTML tag is used to create a checkbox in a form?',
        'a':'<input type="checkbox">',
        'b':'<checkbox>',
        'c':'<check>',
        'd':'<select>',
        'correct':'a'
    },
    {
        'que':'HTML stand for',
        'a':'HyperText Markup Language',
        'b':'hiper test marp language',
        'c':'higher text markup language',
        'd':'hypertext marp language',
        'correct':'a'
    },
];

const cssquestions=[
    {
        'que':'css stand for',
        'a':'cascade style sheets',
        'b':'color and style sheets',
        'c':'Cascading style sheets',
        'd':'none of hte above',
        'correct':'c'
    },
    {
        'que':'Which of the following is the correct syntax for referring the external style sheet?',
        'a':'<style src = example.css>',
        'b':'<style src = "example.css" >',
        'c':'<stylesheet> example.css </stylesheet>',
        'd':'<link rel="stylesheet" type="text/css" href="example.css">',
        'correct':'d'
    },
    {
        'que':'The property in CSS used to change the background color of an element is -',
        'a':'bgcolor',
        'b':'color',
        'c':'background-color',
        'd':'All of the above',
        'correct':'c'
    },
    {
        'que':'The property in CSS used to change the text color of an element is -',
        'a':'bgcolor',
        'b':'color',
        'c':'background-color',
        'd':'All of the above',
        'correct':'b'
    },
    {
        'que':'The CSS property used to control the elements font-size is',
        'a':'text-style',
        'b':'text-size',
        'c':'font-size',
        'd':'none of the above',
        'correct':'c'
    },
    {
        'que':'The HTML attribute used to define the inline styles is -',
        'a':'style',
        'b':'styles',
        'c':'class',
        'd':'None of the above',
        'correct':'a'
    },
    {
        'que':'Which of the following CSS property is used to set the background image of an element',
        'a':'background-attachment',
        'b':'background-image',
        'c':'background-color',
        'd':'None of the above',
        'correct':'b'
    },
    {
        'que':'Which of the following is the correct syntax to display the hyperlinks without any underline?-',
        'a':'a {text-decoration : underline;}',
        'b':'a {decoration : no-underline;}',
        'c':'a {text-decoration : none;}',
        'd':'None of the above',
        'correct':'c'
    },
    {
        'que':'The CSS property used to make the text bold is -',
        'a':'font-weight : bold',
        'b':'weight: bold',
        'c':'font: bold',
        'd':'style: bold',
        'correct':'a'
    },
];
const jsquestions=[
    {
        'que':'Javascript is an _______ language?',
        'a':'Object oriented',
        'b':'object based',
        'c':'[rpcedira;',
        'd':'none of the above',
        'correct':'a'
    },
    {
        'que':'Which of the following keywords is used to define a variable in Javascript?',
        'a':'var',
        'b':'let',
        'c':'both A and B',
        'd':'None of the above',
        'correct':'c'
    },
    {
        'que':'Which of the following methods is used to access HTML elements using Javascript?',
        'a':'getElementById()',
        'b':'getElementByClassName()',
        'c':'Both A and B',
        'd':'None of the above',
        'correct':'c'
    },
    {
        'que':'Which of the following methods can be used to display data in some form using Javascript?',
        'a':'document.write()',
        'b':'console.log()',
        'c':'window.alert()',
        'd':'All of the above',
        'correct':'d'
    },
    {
        'que':'How can a datatype be declared to be a constant type',
        'a':'const',
        'b':'var',
        'c':'let',
        'd':'constant',
        'correct':'a'
    },
    {
        'que':'When the switch statement matches the expression with the given labels, how is the comparison done?',
        'a':'both the datatype and the result of the expression are compared',
        'b':'only the datatype of the expression is compared',
        'c':'only the value of hte expression is compared',
        'd':'None of the above',
        'correct':'a'
    },
    {
        'que':'What is the use of the <noscript> tag in Javascript?',
        'a':'the contents are displayed by non-js-based browsers',
        'b':'clears all the cookies and cache',
        'c':'Both A and B',
        'd':'None of the above',
        'correct':'a'
    },
    {
        'que':'when an operators value is Null, the typeof returned',
        'a':'Boolean',
        'b':'Undefined',
        'c':'object',
        'd':'integer',
        'correct':'c'
    },
    {
        'que':'What does the Javascript “debugger” statement do',
        'a':'it will debug all the errors in the program at runtime',
        'b':'it acts as a breakpoint in a program',
        'c':'it will debug error in the current statement if any',
        'd':'All of the above',
        'correct':'b'
    }
];

let index=0;
let array=[];
let total=questions.length;
let right=0;
let wrong=0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options")
const popbox=document.getElementById("pop");
const loadquestion=(array1=[...questions])=>{
    array=[...array1];
    if(index===total){
       return endquiz();
    }
     reset();
   const data=array[index];
   quesBox.innerHTML=`${index+1})${data.que}`;
   optionInputs[0].nextElementSibling.innerText=data.a;
   optionInputs[1].nextElementSibling.innerText=data.b;
   optionInputs[2].nextElementSibling.innerText=data.c;
   optionInputs[3].nextElementSibling.innerText=data.d;
   //console.log(data);
}

const reset=()=>{
    optionInputs.forEach((input)=>{
        input.checked=false;
    })
}
const submitquiz = ()=>{
    //remove const data
     data=array[index];
    const ans=getAnswer();
    if(ans===data.correct){
     right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion(array);
    return;
}

function backquiz(){
    index--;
    loadquestion(array);
}
const getAnswer = ()=>{
    let answer;
    optionInputs.forEach((input)=>{
            if(input.checked){
               answer=input.value;
            }
        }
    )
    return answer;
}

const endquiz=()=>{
    //popbox.classList.remove("popupbox");
    //popbox.classList.add("movepop");
    popbox.innerHTML=`<h2>Thanks for solving this quize. You got following Score<h2>
    <h2>${right}/${total}are correct<h2>`
    popbox.style.display="block";
}

function restartquiz(){
    document.getElementById("quesBox").innerHTML = " ";
    index=0;
    right=0;
    wrong=0;
    return loadquestion([...questions]);
}
function htmlquize(){
    index=0;
    right=0;
    wrong=0;
    return loadquestion([...htmlquestions]);
}
function jsquize(){
    index=0;
    right=0;
    wrong=0;
    return loadquestion([...jsquestions]);
}
function cssquize(){
    index=0;
    right=0;
    wrong=0;
    return loadquestion([...cssquestions]);
}
function jsquize(){
    index=0;
    right=0;
    wrong=0;
    return loadquestion([...jsquestions]);
}
function cquize(){
    index=0;
    right=0;
    wrong=0;
    return loadquestion([...cquestions]);
}
function pythonquize(){
    index=0;
    right=0;
    wrong=0;
    return loadquestion([...pythonquestions]);
}
function sqlquize(){
    index=0;
    right=0;
    wrong=0;
    return loadquestion([...sqlquestions]);
}
function javaquize(){
    index=0;
    right=0;
    wrong=0;
    return loadquestion([...javaquestions]);
}
function closepop(){
      popbox.style.display="none";
 }
 
const cquestions=[
    {
        'que':'who is the father of c language?',
        'a':'steve jobs',
        'b':'james gosling',
        'c':'Dennis Ritchie',
        'd':'Rasmus Lerdorf',
        'correct':'c'
    },
    {
        'qur':' Which of the following is not a valid C variable name?',
        'a':'int number',
        'b':'float rate',
        'c':'int variable_count',
        'd':'int $main',
        'correct':'d'
    },
    {
        'qur':'All keywords in C are in ?',
        'a':'LowerCase letters',
        'b':'UpperCase letters',
        'c':'CamelCase letters',
        'd':'None of the mentioned',
        'correct':'a'
    },
    {
        'qur':'Which is valid C expression?',
        'a':'int my_num = 100,000;',
        'b':'int my_num = 100000;',
        'c':'int my num = 1000;',
        'd':'int $my_num = 10000;',
        'correct':'b'
    },
    {
        'qur':'Why is a macro used in place of a function',
        'a':'It reduces execution time',
        'b':'It reduces code size',
        'c':'It increases execution time.',
        'd':'it increases code size.',
        'correct':'d'
    },
    {
        'qur':'How many characters can a string hold when declared as follows? char name[20]',
        'a':'18',
        'b':'19',
        'c':'20',
        'd':'none of the above',
        'correct':'c'
    },
    {
        'qur':'How many bytes does "int = D" use?',
        'a':'0',
        'b':'1',
        'c':'2 or 4',
        'd':'10',
        'correct':'c'
    },
    {
        'qur':'What feature makes C++ so powerful?',
        'a':'Easy implementation',
        'b':'Reusing the old code',
        'c':'Easy memory management',
        'd':'All of the above',
        'correct':'d'
    },
    {
        'qur':'Which of the following will copy the null-terminated string that is in array src into array dest?',
        'a':'dest = src;',
        'b':'dest == src;',
        'c':'strcpy(dest, src);',
        'd':'strcpy(src, dest);',
        'correct':'c'
    },
    {
        'qur':'How many instances of a class can be declared?',
        'a':'1',
        'b':'10',
        'c':'As per required',
        'd':'None of the above',
        'correct':'c'
    },

];
const pythonquestions=[
    {
        'que':'Who developed Python Programming Language?',
        'a':'Wick van Rossum',
        'b':'Rasmus Lerdorf',
        'c':'Guido van Rossum',
        'd':'Niene Stom',
        'correct':'c'
    },
    {
        'que':'Which type of Programming does Python support?',
        'a':'object-oriented programming',
        'b':'structured programming',
        'c':' functional programming',
        'd':'all of the mentioned',
        'correct':'d'
    },
    {
        'que':'Is Python case sensitive when dealing with identifiers?',
        'a':'yes',
        'b':'No',
        'c':'machine dependent',
        'd':'none of hte mentioned',
        'correct':'b'
    },
    {
        'que':' Which of the following is the correct extension of the Python file',
        'a':'.python',
        'b':'.pi',
        'c':'.py',
        'd':'.p',
        'correct':'c'
    },
    {
        'que':'Is Python code compiled or interpreted?',
        'a':'Python code is both compiled and interpreted',
        'b':'Python code is neither compiled nor interpreted',
        'c':'Python code is only compiled',
        'd':'Python code is only interpreted',
        'correct':'a'
    },
    {
        'que':'All keywords in Python are in',
        'a':'Capitalized',
        'b':'lower case',
        'c':'UPPER CASE',
        'd':'None of the mentioned',
        'correct':'d'
    },
    {
        'que':' What will be output? 4 + 3 % 5',
        'a':'7',
        'b':'2',
        'c':'4',
        'd':'1',
        'correct':'a'
    },
    {
        'que':'Which of the following is used to define a block of code in Python language?',
        'a':'Indentation',
        'b':'key',
        'c':'Brackets',
        'd':'All of the above',
        'correct':'a'
    },
    {
        'que':' Which of the following character is used to give single-line comments in Python?',
        'a':'//',
        'b':'#',
        'c':'!',
        'd':'/*',
        'correct':'b'
    },
    {
        'que':' What does pip stand for python?',
        'a':'Pip Installs Python',
        'b':'Pip Installs Packages',
        'c':'Preferred Installer Program',
        'd':'All of the mentioned',
        'correct':'c'
    },
];
const sqlquestions=[
    {
        'que':'Which SQL function is used to count the number of rows in a SQL query?',
        'a':'COUNT()',
        'b':'NUMBER()',
        'c':'SUM()',
        'd':'COUNT(*)',
        'correct':'d'
    },
    {
        'que':'Which SQL keyword is used to retrieve a maximum value?',
        'a':'MOST',
        'b':'TOP',
        'c':'MAX',
        'd':'UPPER',
        'correct':'c'
    },
    {
        'que':'Which of the following SQL clauses is used to DELETE tuples from a database table?',
        'a':'DELETE',
        'b':'REMOVE',
        'c':'DROP',
        'd':'CLEAR',
        'correct':'a'
    },
    {
        'que':'removes all rows from a table without logging the individual row deletions.',
        'a':'DELETE',
        'b':'REMOVE',
        'c':'DROP',
        'd':'TRUNCATE',
        'correct':'d'
    },
    {
        'que':'Which of the following is not a DDL command?',
        'a':'UPDATE',
        'b':'TRUNCATE',
        'c':'ALTER',
        'd':'None of the Mentioned',
        'correct':'a'
    },
    {
        'que':'Which of the following are TCL commands?',
        'a':'UPDATE and TRUNCATE',
        'b':'SELECT and INSERT',
        'c':'GRANT and REVOKE',
        'd':'ROLLBACK and SAVEPOINT',
        'correct':'d'
    },
    {
        'que':'is not a category of SQL command.',
        'a':'TCL',
        'b':'SCL',
        'c':'DCL',
        'd':'DDL',
        'correct':'b'
    },
    {
        'que':'If you don’t specify ASC or DESC after a SQL ORDER BY clause, the following is used by defaul',
        'a':'ASC',
        'b':'DESC',
        'c':'There is no default value',
        'd':'None of the mentioned',
        'correct':'a'
    },
    {
        'que':'Which of the following are TCL commands?',
        'a':'COMMIT and ROLLBACK',
        'b':'UPDATE and TRUNCATE',
        'c':'SELECT and INSERT',
        'd':'GRANT and REVOKE',
        'correct':'a'
    },
    {
        'que':'Which statement is used to delete all rows in a table without having the action logged?',
        'a':'DELETE',
        'b':'REMOVE',
        'c':'DROP',
        'd':'TRUNCATE',
        'correct':'d'
    },

];
const reactquestions=[
    {
        'que':'Who created React.js?',
        'a':'jordan Mike',
        'b':'Jordan Walke',
        'c':'Tim Lee',
        'd':'Jordan Lee',
        'correct':'b'

    },
    {
        'que':'In which language is React.js writter?',
        'a':'Python',
        'b':'JavaScript',
        'c':'Java',
        'd':'PHP',
        'correct':'b'

    },
    {
        'que':'What is Babel?',
        'a':'JavaScript compiler',
        'b':'JavaScript interpreter',
        'c':'JavaScript transpiler',
        'd':'None of the above',
        'correct':'a'

    },
    {
        'que':'Identify the command used to create a react app.',
        'a':'npm install create-react-app',
        'b':'npm install -g create-react-app',
        'c':'install -g create-react-app',
        'd':'None of the above',
        'correct':'b'

    },
    {
        'que':'How many elements can a valid react component retur',
        'a':'1',
        'b':'2',
        'c':'3',
        'd':'4',
        'correct':'1'

    },
    {
        'que':'A state in React.js is also known as?',
        'a':'the internal storage of the component',
        'b':'External storage of the component',
        'c':'Permanent storage',
        'd':'All of the above',
        'correct':'a'

    },
    {
        'que':'Which of the following method is used to access the state of a component from inside of a member function',
        'a':'this.prototype.stateValue',
        'b':'this.getstate()',
        'c':'this.values',
        'd':'this.state',
        'correct':'c'

    },
    {
        'que':'What are arbitrary inputs of components in react also known as?',
        'a':'Elements',
        'b':'Props',
        'c':'keys',
        'd':'Ref',
        'correct':'b'

    },
    {
        'que':'In MVC, what does React.js act as?',
        'a':'Model',
        'b':'Controller',
        'c':'View',
        'd':'Middleware',
        'correct':'c'

    },
    {
        'que':'Identify the smallest building block of React.JS.',
        'a':'Props',
        'b':'Elements',
        'c':'Components',
        'd':'None of hte above',
        'correct':'c'

    },
];
const javaquestions=[
    {
        'que':'Which of the following option leads to the portability and security of Java?',
        'a':'he portability and security of Java',
        'b':'The applet makes the Java code secure and portable',
        'c':'Use of exception handling',
        'd':'Dynamic binding between objects',
        'correct':'a'
    },
    {
        'que':'Which of the following is not a Java features?',
        'a':'Dynamic',
        'b':'Architecture Neutral',
        'c':'Use of pointers',
        'd':'Object-oriented',
        'correct':'c'
    },
    {
        'que':'---is used to find and fix bugs in the Java programs',
        'a':'JVM',
        'b':'JRE',
        'c':'JDK',
        'd':'JDB',
        'correct':'d'
    },
    {
        'que':'Which of the following is a valid declaration of a char?',
        'a':'char ch = utea',
        'b':'char ca = tea',
        'c':'char cr = \u0223;',
        'd':'char cc = \itea',
        'correct':'a'
    },
    {
        'que':'What is the return type of the hashCode() method in the Object class?',
        'a':'Object',
        'b':'int',
        'c':'long',
        'd':'void',
        'correct':'b'
    },
    {
        'que':' if x=3, y=5, and z=10: ++z + y - y + z + x++',
        'a':'24',
        'b':'23',
        'c':'20',
        'd':'25',
        'correct':'d'
    },
    {
        'que':'Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?',
        'a':'javap tool',
        'b':'javaw command',
        'c':'Javadoc tool',
        'd':'javah command',
        'correct':' '
    },
    {
        'que':'Which of the following creates a List of 3 visible items and multiple selections abled',
        'a':'new List(false, 3)',
        'b':'new List(3, true)',
        'c':'new List(true, 3)',
        'd':'new List(3, false)',
        'correct':'b'
    },
    {
        'que':' Which of the following for loop declaration is not valid?',
        'a':'for ( int i = 99; i >= 0; i / 9 )',
        'b':'for ( int i = 7; i <= 77; i += 7 )',
        'c':'for ( int i = 20; i >= 2; - -i )',
        'd':'for ( int i = 2; i <= 20; i = 2* i )',
        'correct':'a'
    },
    {
        'que':'Which of the following is true about the anonymous inner class?',
        'a':'It has only methods',
        'b':'Objects cannot be created',
        'c':'It has a fixed class name',
        'd':'It has no class name',
        'correct':'d'
    },

]
