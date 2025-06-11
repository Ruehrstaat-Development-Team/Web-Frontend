import type { NitroFetchRequest, $Fetch } from "nitropack";

export const carrierRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async getCarrier(): Promise<Carrier[]> {
    return fetch<Carrier[]>("public/carrier/", {
      method: "GET",
    });
  },

  async getCarrierGrouped(): Promise<CarrierGrouped[]> {
    return fetch<CarrierGrouped[]>("public/carrier/bycategory", {
      method: "GET",
    });
  },

  async getPrivateCarrier(): Promise<Carrier[] | null> {
    return fetch<Carrier[]>("carrier/", {
      method: "GET",
    });
  },

  async getCarrierById(id: string): Promise<Carrier | null> {
    return fetch<Carrier>(`public/carrier/${id}?full=true`, {
      method: "GET",
    });
  },

  async getPrivateCarrierById(id: string): Promise<Carrier | null> {
    return fetch<Carrier>(`carrier/${id}?full=true`, {
      method: "GET",
    });
  },

  async getAllCarrierServices(): Promise<CarrierService[]> {
    return fetch<CarrierService[]>("carrier/service", {
      method: "GET",
    });
  }
});
