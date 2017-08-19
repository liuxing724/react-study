/**
 * Created by liuxing5 on 2017/8/19.
 */

import React,{Component} from 'react';

class Select extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            area : '',
        };
    }

    handleChange(e) {
        this.setState({
            area: e.target.value,
        })
    }

    render(){
        return(
            <select value={ this.state.area } onChange={this.handleChange}>
                <option value="beijing">北京</option>
                <option value="shanghai">上海</option>
                <option value="hangzhou">杭州</option>
            </select>
        );
    }
}

export default Select;