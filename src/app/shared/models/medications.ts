import { medication } from './medication';

export interface medications {
  data: {
    pills: medication[];
    rings: medication[];
    patches: medication[];
  };
}
