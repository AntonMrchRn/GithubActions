import {api} from '..';
import {Actions} from './types';

export const actionsAPI = api
  .enhanceEndpoints({
    addTagTypes: ['actions'],
  })
  .injectEndpoints({
    endpoints: builder => ({
      getActions: builder.query<Actions, void>({
        query: () => ({
          url: 'repos/AntonMrchRn/github-actions/actions/artifacts',
          method: 'GET',
          params: {
            per_page: 25,
          },
        }),
      }),
    }),
    overrideExisting: true,
  });

export const {useGetActionsQuery} = actionsAPI;
