@extends('layouts.app')

@section('page-title') {{ __('Tetris | game') }} @endsection

@section('content')
    <div id="app">
        <Tetris/></Tetris>
    </div>
@endsection