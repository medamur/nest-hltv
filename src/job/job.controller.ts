import { Controller, Get } from '@nestjs/common'
import { JobService } from './job.service'
import { MatchPreview } from 'hltv';

@Controller('job')
export class JobController {
	constructor(private readonly jobService: JobService) {}

	@Get('start')
	start(): Promise<MatchPreview[]> {
		return this.jobService.start()
	}
}
