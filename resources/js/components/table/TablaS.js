import React from 'react';
import Tarjeta2 from '../card/Tarjeta2';
import Tarjeta from '../card/Tarjeta';
import './tabla.css';
import {
    Button, Card
} from 'reactstrap';


export default class TablaS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: [false, false]
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
        if (this.props.semis[0].id > 0) {
            visibility[0] = visibility;
            this.setState = {
                visibility: visibility
            }
        } if (this.props.semis[1].id > 0) {
            visibility[1] = visibility;
            this.setState = {
                visibility: visibility
            }
        }
    }
    render() {

        this.cambiarEstado()
        return (
            <tbody>
                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>

                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>
                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[0]} onClick={() => { this.props.ganadorS(event, this.props.semis[0]) }} color="success">{this.props.semis[0].name}({this.props.semis[0].pais})</Button></Card></td></tr>

                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>

                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>

                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>
                <tr className="size"><td><Card className="text-center"><Button hidden={!this.state.visibility[1]} onClick={() => { this.props.ganadorS(event, this.props.semis[1]) }} color="success">{this.props.semis[1].name}({this.props.semis[1].pais})</Button></Card></td></tr>

                <tr className="size"><td hidden="false"><Tarjeta2 /></td></tr>
            </tbody>
        );
    }


}
