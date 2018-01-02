import angular from 'angular';
import angularFa from '../src/angularjs';
import bootstrapCss from 'bootstrap/dist/css/bootstrap.css';
import iconDemo from './components/icon-demo.component';
import compilerProvider from './components/compiler.service';
import componentCompiler from './components/compiler.component';

angular
    .module('demo', [angularFa])
    .component('faIconDemo', iconDemo)
    .component('componentCompiler', componentCompiler)
    .provider('Compiler', compilerProvider);
