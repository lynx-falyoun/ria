import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';
import { IAppConfig } from '../app-config';
import { DatabaseConnectionService } from './database-connection.service';
import { SequelizeModuleOptions } from '@nestjs/sequelize/dist/interfaces/sequelize-options.interface';

@Global()
@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: (configService: ConfigService<IAppConfig>) => {
        const sequelizeModuleOptions: SequelizeModuleOptions =
          configService.get<SequelizeModuleOptions>('sequelizeOptions');
        return {
          ...sequelizeModuleOptions,
          models: [],
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [DatabaseConnectionService],
  exports: [DatabaseConnectionService],
})
export class AppDatabaseModule {}
