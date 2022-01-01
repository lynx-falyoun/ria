import { ISwagger } from '@app/app-swagger';
import { SequelizeModuleOptions } from '@nestjs/sequelize/dist/interfaces/sequelize-options.interface';

export interface IAuth {
  useCookies: {
    expiration: number;
  };
  useAccessToken: {
    secretKey: string;
    expiration: string;
  };
  useRefreshToken?: {
    secretKey: string;
    expiration: string;
  };
}
export interface IServer {
  port: number;
  apiPrefix: string;
  swagger: ISwagger;
}

export interface IAppConfig {
  sequelizeOptions: SequelizeModuleOptions;
  server: IServer;
  useAuth: IAuth;
}
