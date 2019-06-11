<?php

namespace App\Http\Controllers;

use App\Models\Prode;

//TODO LO QUE SEA PROPIO TENEMOS QUE LLAMARLO SIEMPRE CON APP
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;



use App\Team;



class ProdeController extends Controller
{
    /**
     * Se encarga de listar todos los prodes.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $prodes = Prode::all();
        return response()->json([
            "ok" => true,
            "data" => $prodes,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $name = $request->name;
        $cuartos = implode(',', $request->cuartos);
        $semis = implode(',', $request->semis);
        $final = implode(',', $request->final);
        $campeon = implode(',', $request->campeon);


        $prode = new Prode;
        $prode->name = $name;

        $prode->user_id = auth('api')->user()->id;
        $prode->cuartos = $cuartos;
        $prode->semis = $semis;
        $prode->final = $final;
        $prode->campeon = $campeon;

        // $prode->user_id = auth('api')->user()->id;

        $prode->save();
        return response()->json([

            "ok" => true,
            "message" => "Tu prode ha sido guardado exitosamente",

        ]);
    }


        // try {
        //     $prode->save();

        //     return response()->json([
        //         "ok" => true,
        //         "message" => "Se regitró con éxito",
        //     ]);
        // } catch (\Exception $ex) {

        //     return response()->json([
        //         "ok" => false,
        //         "error" => $ex->getMessage(),
        //     ]);
        // }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $prode = Prode::where('id', $id)->first();
        return response()->json([
            "ok" => true,
            "data" => $prode,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
