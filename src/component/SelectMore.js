/**
 * Created by liuxing5 on 2017/8/19.
 */

import React, {Component} from 'react';

class SelectMore extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            area :['beijing','shanghai'],
        };
    }

    handleChange(e){
        const {options} = e.target;
        //注意，这里返回的options是一个对象，并非数组
        const area = Object.keys(options)
            .filter(i => options[i].selected === true)
            .map(i => options[i].value);

        this.setState({
            area,
        })
    }

    render(){
        const {area} = this.state;

        return(
            <select multiple={true} value={area} onChange={this.handleChange}>
                <option value="beijing">北京</option>
                <option value="shanghai">上海</option>
                <option value="hangzhou">杭州</option>
            </select>
            )
    }
}

export default SelectMore;