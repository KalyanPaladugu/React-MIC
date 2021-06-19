### ReactJS

#### Environment setup


+ Creating React application by using Webpack and babel
+ By using `create-react-app`

    + npm install create-react-app
          + create-react-app applicationname
          
    + npx create-react-app applicationname

+ To change current directotory `cd applicationame`
+ To start the server use `npm start`

### React features

+ It is a library
+ Virtual DOM (it's enable us to build scalable and fast applications)
+ JSX
+ One way data binding(parent to child)
+ Single page applications
+ components
    + Functional component (stateless)
    + Class component  (statefull)
    + Pure component
    + Higher Order Components


### Props 

+ Props are like arguments in function
+ Props are immutable
+ It is undirectional and data is read only

Example:
=========
+ UnionBank --> Parent(Funcional Component)
+ AndhraBank  --> Child1 (Functional Component)
+ CorporationBank --> Child2 (Class Component)

### State

+ In react we maintain data in the format of states in class components
+ By creating constructor we can initialize data with usage of `super()` method and `this.state`
+ `constructor(){
    super();
    this.state={
        name:"Sasi"
    }
} 
`
+ Data can be updated by using `setState()`
+ App.js
    + Register.js
    + Login.js
    + Home.js

+ Register.js

        + RegisterHead.js
        + RegisterBody.js
        + RegisterLeft.js
        + RegisterRight.js

+ Login.js
+ Home.js


### Component Lifecycle

+ Lifecycle of component is divided into 4 phases

    + Initial Phase
    + Mounting Phase
    + Updating Phase
    + Unmounting phase


1. Initial Phase
    + getDefaultProps()
    + getInitialState()

2. MountingPhase
   
   + componentWillMount()
        + This is invoked immediately before a component gets rendered into the DOM 
   + componentDidMount()
        + This is invoked immediately after a component gets rendered and placed into the DOM

3. Updating Phase

    + componentWillReceiveProps()
        + It is invoked when a component receive new props.If you want to update the state in response to prop changes,you should compare this.props and nextProps to perform state transition by using this.setState() method
    + shouldComponentUpdate()
        + It is invoked when a component decides any chnages/updaion to the DOM
    + componentWillUpdate()
        + It is invoked just before the component updating occurs.
    + componentDidUpdate()
        + It is invoked immediately after the component updating occurs.

4. Unmounting Phase

 + componentWillUnmount()
    + This method is invoked immediately before a component is destroyed and unmounted permanently.

 
 ### React Hooks

Summary:
=========
+ Hooks are new feature addition in React 16.8 version
+ Avoid the confusion of using `this` keyword
+ Allow you to resue the statefull logic
+ By using `useState()` we can initialize state and assign to a varible with usage of array destructuring . To update state we cn use callback function

Rules of Hooks:
===============
+ Only call Hooks at the top level of a component and not in conditions or loops
+ Call them with in functional component not in normal javascript functions


+ Basic Hooks:
     + useState
     + useEffect
     + useContext

#### useState

+ useState returns a pair: the current state value and a callback function that let's you update state

+ const [age,setAge]=useState(26)


#### useEffect

+ Adds the ability to perform side effects from a function component
+ It serves the same purpose  as componentDidMount(),componentDidUpdate and componentWillUnmount() in React classes, but unified into single API


### Routing in React

+ Navigate from one component to another component we will use routing concept
+ Install `react-router-dom`

+ Two Type of router components
    + BrowseRouter --> To handle the dynamic URL
    + HashRouter  --> To handle the Static request