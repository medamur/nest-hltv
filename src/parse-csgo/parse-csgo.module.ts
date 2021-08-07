import { Module } from '@nestjs/common';
import { ParseCsgoService } from './parse-csgo.service';

@Module({
  providers: [ParseCsgoService]
})
export class ParseCsgoModule {}
