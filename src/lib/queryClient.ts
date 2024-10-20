import { QueryClient } from '@sveltestack/svelte-query';
import { CACHE_TIME } from '../constants/query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: CACHE_TIME,
			staleTime: CACHE_TIME
		}
	}
});

export default queryClient;
