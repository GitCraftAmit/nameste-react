    // const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");    // React.createElement -> It basically creates a javascript object 

    // const root = ReactDOM.createRoot(document.getElementById("root2"));
    
    // root.render(heading);   // This render method it basically will be responsible- to take this object and converted into the heading tag object and put it on the DOM.

    // console.log(heading);   // This returns a object 

//=====================================================================
    // How we can create a nested Element Structure
    /*
    <div id= "parent"></div>
    <div id="child">
        <h1> I am H1 tag </h1>
        <h2> I am a h2 tag </h2>
        </div>
    <div id="child2">
        <h1> I am H1 tag </h1>
        <h2> I am a h2 tag </h2>
        </div>
    </div>

    Ques: How do we create this type of structure in react
    */
   // ReactElement(object) => HTML => (Brouser Understand)
   const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement("div", {id: "child"},
    [React.createElement("h1", {}, "I am a H1 tag!"), React.createElement("h2", {}, "I am a H2 tag!")
   ]),
   React.createElement("div", {id: "child2"},
   [React.createElement("h1", {}, "I am a H1 tag!"), React.createElement("h2", {}, "I am a H2 tag!")
  ])]
   );
    console.log(parent); // object
    const root = ReactDOM.createRoot(document.getElementById("root2"));
    root.render(parent); // It is just putting this parent inside the root2 id tag in html file.