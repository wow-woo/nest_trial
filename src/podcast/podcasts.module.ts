import { Module } from '@nestjs/common';
import { PodcastResolver } from './podcast.resolver';
import { EpisodeController, PodcastsController } from './podcasts.controller';
import { PodcastsService } from './podcasts.service';

@Module({
  controllers: [PodcastsController, EpisodeController],
  providers: [PodcastResolver, PodcastsService],
})
export class PodcastsModule {}
