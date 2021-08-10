import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'postgresql',
  url: '',
  host:'localhost',
  port: 9999,
  user: 'postgres',
  database: 'postgres',
};

@lifeCycleObserver('datasource')
export class DsDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'ds';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.ds', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
