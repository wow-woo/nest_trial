import { CoreOutput } from './common/coreOutput.dto';
import { Podcast } from './../entities/podcast.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetPodcastOutput extends CoreOutput{
    @Field(()=>Podcast, {nullable:true})
    podcast:Podcast
}