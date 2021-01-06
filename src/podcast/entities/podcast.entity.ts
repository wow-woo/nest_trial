import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { Episode } from './episode.entity';

@ObjectType()
export class Podcast {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  category: string;

  @Field(() => Float)
  rating: number;

  @Field(() => [Episode] )
  episodes: Episode[];
}
