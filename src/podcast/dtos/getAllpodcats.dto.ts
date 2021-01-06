import { CoreOutput } from './common/coreOutput.dto';
import { Field, ObjectType } from '@nestjs/graphql';
import { Podcast } from '../entities/podcast.entity';

@ObjectType()
export class GetAllPodcastsOutput extends CoreOutput{
  @Field(()=>[Podcast], {nullable:true})
  podcasts: Podcast[];
}
