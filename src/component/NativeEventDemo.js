/**
 * Created by liuxing5 on 2017/8/18.
 */
import React, {Component} from 'react';

class NativeEventDemo extends Component{
    componentDidMount(){
        this.refs.button.addEventListener('click',e =>{
            this.handleClick(e);
        });
    }

    handleClick(e){
        console.log(e);
    }

    componentWillUnmount(){
        this.refs.button.removeEventListener('click');
    }

    render(){
        return <button ref="button">Test</button>
    }
}

export default NativeEventDemo;
