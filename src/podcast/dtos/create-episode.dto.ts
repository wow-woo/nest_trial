import { CoreOutput } from './common/coreOutput.dto';
import { Episode } from './../entities/episode.entity';
import { InputType, Field, ObjectType,  PickType, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateEpisodeDto extends PickType(PartialType(Episode), ['title', 'category','rating']){
}

@InputType()
export class CreateEpisodeInp {
  @Field(()=>String)
  podcastId:string

  @Field(()=>CreateEpisodeDto)
  createEpisodeDto:CreateEpisodeDto
}

@ObjectType()
export class CreateEpisodeOutput extends CoreOutput{
  @Field(()=>Number)
  episodeId: number;
}

