export class Carrier {
  availableBalance: number;
  balance: number;
  callsign: string;
  cargoSpace: number;
  cargoUsed: number;
  category: string;
  currentLocation: string;
  dockingAccess: string;
  fuelLevel: number;
  id: string;
  marketId: string;
  name: string;
  owner: string;
  ownerId: string;
  reserveBalance: number;
  services: CarrierService[];
  constructor() {
    this.availableBalance = 0;
    this.balance = 0;
    this.callsign = "";
    this.cargoSpace = 0;
    this.cargoUsed = 0;
    this.category = "";
    this.currentLocation = "";
    this.dockingAccess = "";
    this.fuelLevel = 0;
    this.id = "";
    this.marketId = "";
    this.name = "";
    this.owner = "";
    this.ownerId = "";
    this.reserveBalance = 0;
    this.services = [];
  }
}
export class CarrierService {
  label: string;
  name: string;
  odyssey: boolean;
  constructor() {
    this.label = "";
    this.name = "";
    this.odyssey = false;
  }
}
export class CarrierGrouped {
  category: string;
  carriers: Carrier[];
  constructor() {
    this.category = "";
    this.carriers = [];
  }
}
