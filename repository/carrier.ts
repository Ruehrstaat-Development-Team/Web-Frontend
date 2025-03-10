import type { NitroFetchRequest, $Fetch } from "nitropack";

export const carrierRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async getCarrier(): Promise<Carrier[]> {
      return await fetch<Carrier[]>('public/carrier/', {
        method: 'GET',
      });
  },

  async getCarrierById(id: string): Promise<Carrier> {
      return fetch<Carrier>(`public/carrier/${id}`, {
        method: 'GET',
      });
  },
});
