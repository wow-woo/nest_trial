import { DeleteEpisodeOutput, DeleteEpisodeInp } from './dtos/deleteEpisode.dto';
import { UpdateEpisodeOutput, UpdateEpisodeInp } from './dtos/update-episode.dto';
import { CreateEpisodeOutput, CreateEpisodeDto, CreateEpisodeInp } from './dtos/create-episode.dto';
import { GetEpisodesOutput } from './dtos/getEpisodes.dto';
import { DeletePodcastOutput } from './dtos/deletePodcast.dto';
import { UpdatePodcastOutput, UpdatePodcastDto, UpdatePodcastInp } from './dtos/update-podcast.dto';
import { GetPodcastOutput } from './dtos/getPodcast.dto';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { CreatePodcastDto, CreatePodcastOutput } from './dtos/create-podcast.dto';
import { GetAllPodcastsOutput } from './dtos/getAllpodcats.dto';
import { PodcastsService } from './podcasts.service';

@Resolver()
export class PodcastResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query(() => GetAllPodcastsOutput)
  getAllPodcasts(): GetAllPodcastsOutput {
    return this.podcastsService.getAllPodcasts();
  }

  @Mutation(()=>CreatePodcastOutput)
  createPodcast(
    @Args('inp') inp: CreatePodcastDto,
  ): CreatePodcastOutput{
    return this.podcastsService.createPodcast(inp);
  }

  @Mutation(()=>GetPodcastOutput)
  getPodcast(
    @Args('inp') podcastId: string,
  ): GetPodcastOutput {
    return this.podcastsService.getPodcast(podcastId);
  }

  @Mutation(()=>UpdatePodcastOutput)
  updatePodcast(
    @Args('inp') { podcastId, updatePodcastDto }:UpdatePodcastInp
    ): UpdatePodcastOutput {
    return this.podcastsService.updatePodcast(podcastId, updatePodcastDto);
  }

  @Mutation(()=>DeletePodcastOutput)
  deletePodcast(@Args('inp') podcastId: string):DeletePodcastOutput {
    return this.podcastsService.deletePodcast(podcastId);
  }

  @Mutation(()=>GetEpisodesOutput)
  getEpisodes(@Args('inp') podcastId: string):GetEpisodesOutput {
    return this.podcastsService.getEpisodes(podcastId);
  }

  @Mutation(()=>CreateEpisodeOutput)
  createEpisode(
    @Args('inp') { podcastId, createEpisodeDto }:CreateEpisodeInp,
  ): CreateEpisodeOutput {
    return this.podcastsService.createEpisode(podcastId, createEpisodeDto);
  }

  @Mutation(()=>UpdateEpisodeOutput)
  updateEpisode(
    @Args('inp') { podcastId, episodeId, updateEpisodeDto }:UpdateEpisodeInp
  ): UpdateEpisodeOutput {
    return this.podcastsService.updateEpisode(
      podcastId,
      episodeId,
      updateEpisodeDto,
    );
  }

  @Mutation(()=>DeleteEpisodeOutput)
  deleteEpisode(
    @Args('inp') { podcastId, episodeId }:DeleteEpisodeInp
  ): DeleteEpisodeOutput {
    return this.podcastsService.deleteEpisode(podcastId, episodeId);
  }
}
