/**
 * Created by liuxing5 on 2017/8/18.
 */
import React, {Component} from 'react';

class QrCode extends Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleClickQr = this.handleClickQr.bind(this);

        this.state = {
            active: false,
        };
    }

    componentDidMount(){
        document.body.addEventListener('click', e=>{
            if (e.target && e.target.matches('div.code')) {
                return;
            }
            this.setState({
                active: false,
            });
            console.log('component'+this.state.active);
        })

        document.querySelector('.code').addEventListener('click',e=>{
            e.stopPropagation();
        })
    }


    componentWillUnmount(){
        document.body.removeEventListener('click');
    }


    handleClick(){
        this.setState({
            active: !this.state.active,
        });
        console.log('handleClick'+this.state.active);
    }

    handleClickQr(e){
        e.stopPropagation();
    }

    render(){
        return(
            <div className="qr-wrapper">
                <button className="qr" onClick={this.handleClick}>二维码</button>
                <div className="code" 
                     style={{display: this.state.active ? 'block': 'none',width:200,height:200,}}
                     onClick={this.handleClickQr}
                >
                    <img src="http://img.mukewang.com/5652af9c000102d704460226.png" alt="qr"/>
                </div>
            </div>
        )
    }
}

export default QrCode;
