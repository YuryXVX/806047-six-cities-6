import { inject, injectable } from 'inversify';
import { Component } from '../shared/types/index.js';
import { Logger } from '../shared/lib/logger/index.js';
import { RestSchema, Config } from '../shared/lib/config/index.js';

@injectable()
export class RestApplication {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<RestSchema>
  ) {}

  public async init() {
    this.logger.info('Application initialization');
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);
  }
}
