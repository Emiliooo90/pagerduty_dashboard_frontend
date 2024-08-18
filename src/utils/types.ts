export interface Suggestion {
  id: string;
  name: string;
}

export interface PagerDutyService {
  id: string;
  name: string;
}

export interface PagerDutyResponse {
  services: PagerDutyService[];
}