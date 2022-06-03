export interface RPRoom {
  id: number;
  roomName: string;
  bankEnabled: boolean;
  casinoEnabled: boolean;
  meleeEnabled: boolean;
  bombEnabled: boolean;
  hitEnabled: boolean;
  magicEnabled: boolean;
  robEnabled: boolean;
  daylightEnabled: boolean;
  turfEnabled: boolean;
  hospitalEnabled: boolean;
  safezoneEnabled: boolean;
  gymEnabled: boolean;
  taxiToEnabled: boolean;
  taxiFromEnabled: boolean;
  enterMessage: string;
  openTime: number;
  closeTime: number;
}

export const exampleRPRoom: RPRoom = {
  id: 0,
  roomName: '',
  bankEnabled: false,
  casinoEnabled: false,
  meleeEnabled: false,
  bombEnabled: false,
  hitEnabled: false,
  magicEnabled: false,
  robEnabled: false,
  daylightEnabled: false,
  turfEnabled: false,
  hospitalEnabled: false,
  safezoneEnabled: false,
  gymEnabled: false,
  taxiToEnabled: false,
  taxiFromEnabled: false,
  enterMessage: '',
  openTime: 0,
  closeTime: 0,
};
