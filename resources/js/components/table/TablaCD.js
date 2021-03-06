import React from 'react';
import Tarjeta2 from '../card/Tarjeta2';
import './tabla.css';
import {
    Button,Card
} from 'reactstrap';


export default class TablaCD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: [false, false, false, false]
        }
    }

    // shouldComponentUpdate(){
    //     if (this.props.cuartos[0]===0)
    //         return false;
    //     else
    //         return true;
    // }
    cambiarEstado() {
        var visibility = this.state.visibility;
        visibility[0]=false
        visibility[1]=false
        visibility[2]=false
        visibility[3]=false
        if (this.props.cuartos[4].id > 0) {
            visibility[0] = true;
            this.setState = {
                visibility: visibility
            }
        }if (this.props.cuartos[5].id > 0) {
            visibility[1] = true;
            this.setState = {
                visibility: visibility
            }
        }if (this.props.cuartos[6].id > 0) {
            visibility[2] = true;
            this.setState = {
                visibility: visibility,
            }
        }if (this.props.cuartos[7].id > 0) {
            visibility[3] = true;
            this.setState = {
                visibility: visibility,
            }
        }
    }

    estanTodos(){
        if(this.state.visibility[0] && this.state.visibility[1] && this.state.visibility[2] && this.state.visibility[3])
            return false;
        else
            return true;
    }
    render() {

        this.cambiarEstado()
        return (
            <div>
                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>

                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[0]} disabled={this.estanTodos()} onClick={() => { this.props.ganadorC(event, this.props.cuartos[4]) }} color="danger">{this.props.cuartos[4].name}({this.props.cuartos[4].pais})</Button></Card></td></tr>
                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>
                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[1]}  disabled={this.estanTodos()}onClick={() => { this.props.ganadorC(event, this.props.cuartos[5]) }} color="danger">{this.props.cuartos[5].name}({this.props.cuartos[5].pais})</Button></Card></td></tr>
                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>
                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[2]}  disabled={this.estanTodos()}onClick={() => { this.props.ganadorC(event, this.props.cuartos[6]) }} color="danger">{this.props.cuartos[6].name}({this.props.cuartos[6].pais})</Button></Card></td></tr>
                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>
                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[3]} disabled={this.estanTodos()} onClick={() => { this.props.ganadorC(event, this.props.cuartos[7]) }} color="danger">{this.props.cuartos[7].name}({this.props.cuartos[7].pais})</Button></Card></td></tr>
            </div>
        );
    }


}
