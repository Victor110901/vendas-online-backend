import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createTableUser1680713841380 } from './migration/1680713841380-create_table_user';
import { createTableState1680714962155 } from './migration/1680714962155-create_table_state';
import { createTableCity1680714969428 } from './migration/1680714969428-create_table_city';
import { createTableAddress1680714978020 } from './migration/1680714978020-create_table_address';
import { alterTableState1680716950497 } from './migration/1680716950497-alter-table-state';
import { insertInState1680716963190 } from './migration/1680716963190-insert-in-state';
import { insertInCity1680716969237 } from './migration/1680716969237-insert-in-city';
import { UserEntity } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { StateEntity } from './state/entities/state.entity';
import { CityEntity } from './city/entities/city.entity';
import { AddressEntity } from './address/entities/address.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [
        UserEntity,
        StateEntity,
        CityEntity,
        AddressEntity
      ],
      migrations: [
        createTableUser1680713841380,
        createTableState1680714962155,
        createTableCity1680714969428,
        createTableAddress1680714978020,
        alterTableState1680716950497,
        insertInState1680716963190,
        insertInCity1680716969237
      ],
      migrationsRun: true
    }),
    UserModule,
    StateModule,
    CityModule,
    AddressModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
