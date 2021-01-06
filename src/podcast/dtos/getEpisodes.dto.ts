import { CoreOutput } from './common/coreOutput.dto';
import { Field, ObjectType } from '@nestjs/graphql';
import { Episode } from './../entities/episode.entity';

@ObjectType()
export class GetEpisodesOutput extends CoreOutput{
    @Field(()=>[Episode])
    episodes:Episode[]

}