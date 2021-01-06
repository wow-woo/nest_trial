import { CoreOutput } from './common/coreOutput.dto';
import { InputType, ObjectType, Field, Float, PartialType, ArgsType } from '@nestjs/graphql';
import { Episode } from '../entities/episode.entity';

@InputType()
export class UpdatePodcastDto {
  @Field(()=>String, {nullable:true})
  readonly title?: string;
  
  @Field(()=>String, {nullable:true})
  readonly category?: string;
  
  @Field(()=>Number, {nullable:true})
  readonly rating?: number;

  @Field(()=>[Episode], {nullable:true})
  readonly episodes?: Episode[];
}

@InputType()
export class UpdatePodcastInp {
  @Field(()=>String)
  podcastId: string;

  @Field(()=>UpdatePodcastDto)
  updatePodcastDto:UpdatePodcastDto
}

@ObjectType()
export class UpdatePodcastOutput extends CoreOutput {
}