/**
 * Created by liuxing5 on 2017/8/19.
 */

import React, {Component} from 'react';

class Uncontrolled extends Component{

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        //这里使用React提供的ref prop来操作DOM
        //当然，也可以使用原生的接口，如 document.querySelector
        const { value } = this.refs.name;
        console.log(value);
    }

    render(){
        return(
            <form onSubmit ={this.handleSubmit}>
                <input ref="name" type="text" defaultValue="hangzhou" />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Uncontrolled;
