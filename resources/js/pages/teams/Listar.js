import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';

import Tabla from '../../components/table/Tabla';
import TablaC from '../../components/table/TablaC';
import TablaS from '../../components/table/TablaS';
import TablaF from '../../components/table/TablaF';
import TablaD from '../../components/table/TablaD';
import TablaCD from '../../components/table/TablaCD';
import TablaSD from '../../components/table/TablaSD';
import '../../components/table/tabla.css';
import PanelBotones from '../../components/PanelBotones';




class Listar extends Component {


    url = "/api";

    constructor(props) {
        super(props);
        this.state = {
            octavos: [],
            equipos: [],
            cuartos: ["", "", "", "", "", "", "", ""],
            semis: ["", "", "", ""],
            final: ["", ""],
            campeon: [""],
            id: 0,
            prodes: [],
            guardar: false,
            prode_id: 0,
        }
    }


    ganadorO(e, equipo) {
        e.preventDefault();
        var cuartos = this.state.cuartos;
        // this.setState({valores: valores});
        switch (true) {
            case equipo.id <= 2:
                cuartos[0] = equipo;

                this.setState({
                    cuartos: cuartos,

                })

                break;

            case equipo.id >= 3 && equipo.id < 5:
                cuartos[1] = equipo;
                this.setState({
                    cuartos: cuartos,

                })

                break;
            case equipo.id >= 5 && equipo.id < 7:
                cuartos[2] = equipo;
                this.setState({
                    cuartos: cuartos,

                })

                break;
            case (equipo.id >= 7 && equipo.id < 9):
                cuartos[3] = equipo;
                this.setState({
                    cuartos: cuartos,

                })

                break;
            case (equipo.id >= 9 && equipo.id < 11):
                cuartos[4] = equipo;
                this.setState({
                    cuartos: cuartos,

                })

                break;
            case (equipo.id >= 11 && equipo.id < 13):
                cuartos[5] = equipo;
                this.setState({
                    cuartos: cuartos,

                })

                break;
            case (equipo.id >= 13 && equipo.id < 15):
                cuartos[6] = equipo;
                this.setState({
                    cuartos: cuartos,

                })

                break;
            case (equipo.id >= 15 && equipo.id < 17):
                cuartos[7] = equipo;
                this.setState({
                    cuartos: cuartos,

                })

                break;
            default:
                console.log(equipo.id);

        }

    }
    ganadorC(e, equipo) {
        e.preventDefault();
        var semis = this.state.semis;
        // this.setState({valores: valores});
        switch (true) {
            case equipo.id <= 4:
                semis[0] = equipo;

                this.setState({
                    semis: semis,
                })
                break;

            case equipo.id >= 5 && equipo.id < 9:
                semis[1] = equipo;
                this.setState({
                    semis: semis,
                })
                break;
            case equipo.id >= 9 && equipo.id < 13:
                semis[2] = equipo;
                this.setState({
                    semis: semis,
                })
                break;
            case (equipo.id >= 13 && equipo.id < 17):
                semis[3] = equipo;
                this.setState({
                    semis: semis
                })
                break;
            default:
                console.log('error');

        }
    }
    ganadorS(e, equipo) {
        e.preventDefault();
        var final = this.state.final;
        // this.setState({valores: valores});
        switch (true) {
            case equipo.id <= 8:
                final[0] = equipo;

                this.setState({
                    final: final,
                })
                break;

            case equipo.id >= 9 && equipo.id < 17:
                final[1] = equipo;
                this.setState({
                    final: final,
                })
                break;
            default:
                console.log('error');

        }
    }
    ganadorF(e, equipo) {
        e.preventDefault();
        var ganador = this.state.campeon;
        ganador[0] = equipo;

        this.setState({
            campeon: ganador,
            guardar: true
        });
    }



    /**Cuando monte el componente que me liste los equipos */
    componentDidMount() {
        window.axios = require('axios');


        let api_token = document.querySelector('meta[name="api-token"]');
        localStorage.setItem("api_token", api_token);
        let token = document.head.querySelector('meta[name="csrf-token"]');
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        window.axios.defaults.headers.common['Authorization'] = api_token.content;

        //Request del usuario
        axios({
            method: 'get',
            url: this.url + '/user',
        }).then(respuesta => {
            let r = respuesta.data;
            var id = r.data
            this.setState({
                id: id,
            });

            //Request de prodes del usuario
            axios({
                method: 'get',
                url: this.url + '/prode/usuario/' + this.state.id
            }).then(respuesta => {
                let r = respuesta.data;
                this.setState({
                    prodes: r.data,
                });
            }).catch(error => {
                alert("Error")
            });

        }).catch(error => {
            alert("Error")
        });





        //Request de equipos
        axios({
            method: 'get',
            url: this.url + '/index',
        }).then(respuesta => {
            let r = respuesta.data;
            this.setState({
                equipos: r.data,
                octavos: r.data,
            });
        }).catch(error => {
            alert("Error")
        });


    }
    pintar_equipos() {
        return this.state.equipos.map((e, i) => {

            if (i < 8)
                return <Tabla key={i} e={e} ganadorO={this.ganadorO.bind(this)} />
        });

    }

    pintar_equipos2() {
        return this.state.equipos.map((e, i) => {
            if (i >= 8)
                return <TablaD key={i} e={e} ganadorO={this.ganadorO.bind(this)} />
        });

    }



    new() {
        this.reiniciar();
        //recarga la pagina
        // window.location.reload();
        //Request de prodes del usuario
        axios({
            method: 'get',
            url: this.url + '/prode/usuario/' + this.state.id
        }).then(respuesta => {
            let r = respuesta.data;
            this.setState({
                prodes: r.data,
            });
        }).catch(error => {
            alert("Error")
        });
    }

    reiniciar() {
        this.setState({
            cuartos: ["", "", "", "", "", "", "", ""],
            semis: ["", "", "", ""],
            final: ["", ""],
            campeon: [""],
            guardar: false,
        });
    }

    seleccionarProde(e) {
        this.reiniciar();
        let cuartos = e.cuartos.split(',');
        let semis = e.semis.split(',');
        let final = e.final.split(',');
        let campeon = e.campeon.split(',');
        console.log('antes del for', cuartos);
        var c;
        for (c = 0; c <= 8; c++) {
            this.state.equipos.map((e, i) => {
                if (cuartos[c] == e.id) {
                    cuartos[c] = e;
                }
                if (c < 4 && semis[c] == e.id) {
                    semis[c] = e;
                }
                if (c < 2 && final[c] == e.id) {
                    final[c] = e;
                }
                if (campeon[0] == e.id) {
                    campeon[0] = e;
                }
            });
        }
        this.setState({
            prode_id: e.id,
            cuartos: cuartos,
            semis: semis,
            final: final,
            campeon: campeon,
        });
        console.log('despues del for', this.state.campeon)
    }



    misProdes() {
        if (this.state.prodes.length > 0) {
            return this.state.prodes.map((e, i) =>
                <div className="row">
                    <div className="col">
                        <button className="dropdown-item" onClick={() => { this.seleccionarProde(e) }}>{e.name}</button>
                    </div>
                </div>
            );
        }
    }



    editarProde() {
        //Request de editar prode
        axios({
            method: 'put',
            url: `api/prode/` + this.state.prode_id,

            data: {
                'cuartos': [this.state.cuartos[0].id, this.state.cuartos[1].id, this.state.cuartos[2].id, this.state.cuartos[3].id, this.state.cuartos[4].id, this.state.cuartos[5].id, this.state.cuartos[6].id, this.state.cuartos[7].id],
                'semis': [this.state.semis[0].id, this.state.semis[1].id, this.state.semis[2].id, this.state.semis[3].id],
                'final': [this.state.final[0].id, this.state.final[1].id],
                'campeon': [this.state.campeon[0].id],
            }
        }).then(function (response) {
            console.log(response);
            alert(response.data.message);
        }).catch(function (error) {
            console.log(error);
        });
        this.new();

    }

    borrar() {
        if (this.state.prode_id != 0)
            return (
                <button className="btn btn-danger" onClick={() => { this.eliminar() }}>Borrar prode seleccionado</button>
            );
    }

    eliminar() {
        let result = window.confirm("¿Esta seguro que desea borrar el prode seleccionado?");
        if (result) {
            axios({
                method: 'delete',
                url: `api/prode/` + this.state.prode_id,
            }).then(function (response) {
                console.log(response);
                alert(response.data.message);
            }).catch(function (error) {
                console.log(error);
            });
            this.setState({
                prode_id: 0
            });
            this.new();


        }
    }

    render() {
        let guardar;

        if (this.state.guardar) {
            if (this.state.prode_id == 0)
                guardar = <PanelBotones cuartos={this.state.cuartos} semis={this.state.semis} final={this.state.final} campeon={this.state.campeon} new={this.new.bind(this)} />;
            else
                guardar = <Button color="light" onClick={() => { this.editarProde() }}>Actualizar Prode</Button>;
        }

        return (
            <div className="clase container-fluid">

                <div className="btn-group">
                    <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mis Prodes
                    </button>
                    <div className="dropdown-menu">
                        <button className="dropdown-item btn btn-dark" onClick={() => { this.reiniciar(); this.setState({ prode_id: 0 }) }}>Nuevo Prode</button>

                        {this.misProdes()}
                    </div>
                </div>

                <Table responsive className="tabla table-borderless text-center">

                    <tbody>
                        <tr>
                            <td >
                                <Table responsive className="table-borderless">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Octavos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.pintar_equipos()}
                                    </tbody>
                                </Table>
                            </td>
                            <td>
                                <Table responsive className="table-borderless">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Cuartos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TablaC cuartos={this.state.cuartos} otroCuadro={this.state.otroCuadro} ganadorC={this.ganadorC.bind(this)} />
                                    </tbody>
                                </Table>
                            </td>
                            <td>
                                <Table responsive className="table-borderless">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Semifinal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TablaS semis={this.state.semis} ganadorS={this.ganadorS.bind(this)} />
                                    </tbody>
                                </Table>
                            </td>
                            <td >
                                <Table responsive className="table-borderless">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Final</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TablaF final={this.state.final} campeon={this.state.campeon} ganadorF={this.ganadorF.bind(this)} />
                                    </tbody>
                                </Table>
                            </td>
                            <td>
                                <Table responsive className="table-borderless">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Semifinal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TablaSD semis={this.state.semis} ganadorS={this.ganadorS.bind(this)} />
                                    </tbody>
                                </Table>
                            </td>
                            <td className="text-center">
                                <Table responsive className="table-borderless">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Cuartos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TablaCD cuartos={this.state.cuartos} ganadorC={this.ganadorC.bind(this)} />
                                    </tbody>
                                </Table>
                            </td>
                            <td>
                                <Table responsive className="table-borderless">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Octavos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.pintar_equipos2()}
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                    </tbody>

                </Table>
                <div className="row text-center btn-group btn-group-justified">
                    <Button color="primary" onClick={() => { { this.reiniciar(event) } }}>Reiniciar </Button>
                    {guardar}
                    {this.borrar()}
                </div>




            </div>

        );
    }
}

export default Listar;

