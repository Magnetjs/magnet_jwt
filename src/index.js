import jwt from 'koa-jwt';
import convert from 'koa-convert';
import Base from 'magnet-core/dist/base';
import defaultConfig from './config/jwt';

export default class JWT extends Base {
  async setup() {
    const config = Object.assign(defaultConfig, this.config.jwt);

    this.app.jwt = jwt(config.options).unless(config.unless);

    this.app.application.use(convert(this.app.jwt));
  }
}
