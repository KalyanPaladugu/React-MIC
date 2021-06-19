import React,{Component} from 'react'

function Nested() {
    return (
        <div>
            <p>This is nested 1</p>
            <Main />
        </div>
    )
}

class Main extends Component {
    render() {
        return (
            <div>
               <p>This  is Main Component</p> 
            </div>
        )
    }
}


export default Nested
