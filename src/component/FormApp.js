/**
 * Created by liuxing5 on 2017/8/19.
 */
import React, {Component} from 'react';

class FormApp extends Component{
    constructor(props){
        super(props);

        this.state ={
            name:'',
            age:18,
        };
    }

    handleChange(name, e){
        const { value } =e.target;
        //这里只能处理直接赋值这种简单地情况，复杂的处理建议使用 switch(name) 语句
        this.setState({
            name: value,
        });
    }

    render(){
        const {name, age} = this.state;

        return(
            <div>
                <input value={name} onChange={this.handleChange.bind(this,name)}/>
                <input value={age} onChange={this.handleChange.bind(this,age)}/>
            </div>
        )
    }
}

export default FormApp;