import { Module } from '@nestjs/common'
import * as Joi from '@hapi/joi'
// import { PostsController } from './posts/posts.controller';
// import { PostsService } from './posts/posts.service';
// import { ConfigMod as ConfigModule } from './config/config.module';

import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
// import configuration from './config/configuration'
import { configuration, database } from './config/index'

import { PostsModule } from './posts/posts.module';
const businessModules = [PostsModule]

const libModules = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.development.env',
    load: [configuration, database],
    //忽略配置文件，为true则仅读取操作系统环境变量，常用于生产环境
    ignoreEnvFile: false,
    validationSchema: Joi.object({
      HOST: Joi.string().default('localhost'),
      NODE_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
      PORT: Joi.number().default(3000),
    })
  }),
  MongooseModule.forRootAsync({
    useFactory: async (Config: ConfigService) => ({
      uri: Config.get<string>('mongoUrl'),
      // useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    }),
    inject: [ConfigService]
  })
]

@Module({
  imports: [...libModules, ...businessModules],
  // controllers: [PostsController],
  // providers: [PostsService],
})
export class AppModule { }
