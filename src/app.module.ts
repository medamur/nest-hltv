import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { JobModule } from './job/job.module'
import { configService } from './config/config.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ParseCsgoModule } from './parse-csgo/parse-csgo.module';
configService

@Module({
	imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), JobModule, ParseCsgoModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
