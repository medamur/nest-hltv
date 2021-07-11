import { Injectable } from '@nestjs/common'
import { HLTV, MatchPreview } from 'hltv'

@Injectable()
export class JobService {
	start(): Promise<MatchPreview[]> {
		return HLTV.getMatches()
	}
}
