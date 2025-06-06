declare global {
  type Carrier = {
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
  };
  type CarrierService = {
    label: string;
    name: string;
    odyssey: boolean;
  };
  type CarrierGrouped = {
    category: string;
    carriers: Carrier[];
  };
}
