import { UpdatePodcastOutput } from './update-podcast.dto';
import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateEpisodeDto {
  @Field()
  title?: string;

  @Field()
  category?: string;

  @Field()
  rating?: number;
}

@InputType()
export class UpdateEpisodeInp{
  @Field()
  podcastId:string

  @Field()
  episodeId:string

  @Field()
  updateEpisodeDto:UpdateEpisodeDto
}

@ObjectType()
export class UpdateEpisodeOutput extends UpdatePodcastOutput{
}