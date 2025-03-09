import type { NitroFetchRequest, $Fetch } from "nitropack";

export const carrierRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async getCarrier(): Promise<Carrier[]> {
      return await fetch<Carrier[]>('http://localhost:8000/v1/public/carrier/', {
        method: 'GET',
      });
  },

  async getCarrierById(id: string): Promise<Carrier> {
      return fetch<Carrier>(`http://localhost:8000/v1/public/carrier/${id}`, {
        method: 'GET',
      });
  },
});
