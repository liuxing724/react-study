/**
 * Created by liuxing5 on 2017/8/18.
 */
import React,{Component} from 'react';


class Bind extends Component {
   constructor(props){
       super(props);
   }

    handleClick(e){
        console.log(e);
    }

    render(){
        return <button onClick={this.handleClick.bind(this)}>Test</button>
    }
}

export default Bind;