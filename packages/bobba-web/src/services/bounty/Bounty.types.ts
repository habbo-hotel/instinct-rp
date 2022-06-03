import {Bounty, BountyDTO} from '@bobba-rp/types';

export interface BountyService {
  create(bountyDTO: BountyDTO): Promise<Bounty>;
  getAll(): Promise<Bounty[]>;
  getByID(bountyID: string): Promise<Bounty>;
  updateByID(bountyID: string, bountyDTO: BountyDTO): Promise<void>;
  deleteByID(bountyID: string): Promise<void>;
}
