'use strict';

import config from './index.config';
import run from './index.run';

import uiRouter from '@uirouter/angularjs';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';

import mainModule from './pages/main/main.module';
import loginModule from './pages/login/login.module';
import analyzersModule from './pages/analyzers/analyzers.module';
import jobsModule from './pages/jobs/jobs.module';

import maintenanceModule from './pages/maintenance/maintenance.module';

import 'font-awesome/css/font-awesome.css';
import 'angular-ui-notification/dist/angular-ui-notification.css';

const App = angular.module('cortex', [
  // plugins
  uiRouter,
  'ngSanitize',
  'ngMessages',
  'ngResource',
  'oc.lazyLoad',
  'ui.bootstrap',
  'ui-notification',
  'angularUtils.directives.dirPagination',
  'angularMoment',

  // core
  coreModule.name,

  // components
  indexComponents.name,

  // routes
  indexRoutes.name,

  // pages
  mainModule.name,
  loginModule.name,
  maintenanceModule.name,
  analyzersModule.name,
  jobsModule.name
]);

App.config(config).run(run);

export default App;