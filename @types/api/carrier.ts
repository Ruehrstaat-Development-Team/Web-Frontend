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
        id: string;
        marketId: string;
        name: string;
        services: CarrierService[];
    };
    type CarrierService = {
        label: string;
        name: string;
        odyssey: boolean;
    };
}