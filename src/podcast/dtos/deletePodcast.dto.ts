import { ObjectType } from '@nestjs/graphql';
import { UpdatePodcastOutput } from './update-podcast.dto';

@ObjectType()
export class DeletePodcastOutput extends UpdatePodcastOutput{
    
}