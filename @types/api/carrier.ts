declare global {
    type Carrier = {
        callsign: string;
        category: string;
        currentLocation: string;
        dockingAccess: string;
        id: string;
        marketId: string;
        name: string;
        owner: string;
        services: CarrierService[];
    };
    type CarrierService = {
        label: string;
        name: string;
        odyssey: boolean;
    };
}