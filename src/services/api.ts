import { Suggestion, PagerDutyResponse } from '../utils/types';

export const fetchSuggestions = async (query: string): Promise<Suggestion[]> => {
  const response = await fetch(`https://api.pagerduty.com/services?query=${query}`, {
    headers: {
      'Authorization': `Token token=y_NbAkKc66ryYTWUXYEu`,
      'Accept': 'application/vnd.pagerduty+json;version=2'
    }
  });
  const data: PagerDutyResponse = await response.json();
  return data.services.map((service) => ({
    id: service.id,
    name: service.name
  }));
};