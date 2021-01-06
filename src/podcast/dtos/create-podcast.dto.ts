import { CoreOutput } from './common/coreOutput.dto';
import { InputType, ObjectType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreatePodcastDto {
  @Field(()=>String)
  readonly title: string;

  @Field(()=>String)
  readonly category: string;
}

@ObjectType()
export class CreatePodcastOutput extends CoreOutput{
  @Field(()=>ID)
  id: number;
}

