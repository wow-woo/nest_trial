import { Field, Float, ID, ObjectType, InputType } from '@nestjs/graphql';

@InputType('ha', { isAbstract:true})
@ObjectType()
export class Episode {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  category: string;

  @Field(() => Float)
  rating: number;
}
