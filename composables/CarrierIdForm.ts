import { z } from 'zod';

export const useCarrierIdForm = () => {
  return toTypedSchema(
    z.object({
      availableBalance: z.number().nullable(),
      balance: z.number().nullable(),
      callsign: z.string().nonempty(),
      cargoSpace: z.number().nullable(),
      cargoUsed: z.number().nullable(),
      category: z.string().nonempty(),
      currentLocation: z.string().nonempty(),
      dockingAccess: z.string().nonempty(),
      fuelLevel: z.number().nullable(),
      marketId: z.string().nonempty(),
      name: z.string().nonempty(),
      owner: z.string().nonempty(),
      ownerId: z.string().nonempty(),
      reserveBalance: z.number().nullable(),
      services: z.array(
        z.object({
          label: z.string().nonempty(),
          name: z.string().nonempty(),
          odyssey: z.boolean(),
        })
      ).optional().default([]),
    })
  )
}
