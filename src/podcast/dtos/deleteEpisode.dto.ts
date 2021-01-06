import { CoreOutput } from './common/coreOutput.dto';
import { ObjectType, InputType, Field } from '@nestjs/graphql';

@InputType()
export class DeleteEpisodeInp{
    @Field(()=>String)
    podcastId:string

    @Field(()=>String)
    episodeId:string
}

@ObjectType()
export class DeleteEpisodeOutput extends CoreOutput{
}