@extends('layouts.app')

@section('page-title') {{ __('Tetris | Main menu') }} @endsection

@section('content')
    <main class="menu">
        <div class="container">
            <div class="d-flex justify-content-center">
                <div id="work_container" class="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 list-group">
                    <a href="{{ route('game') }}" class="list-group-item list-group-item-action" aria-current="true">{{ __('Start') }}</a>
                    <a href="{{ route('statistics') }}" class="list-group-item list-group-item-action">{{ __('Statistics') }}</a>
                    <a href="{{ route('settings') }}" class="list-group-item list-group-item-action">{{ __('Settings') }}</a>
                    <a class="list-group-item list-group-item-action" onclick="window.close()">Exit</a>
                </div>
            </div>
        </div>
    </main>
@endsection