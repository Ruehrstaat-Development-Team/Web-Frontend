import { z } from "zod";

export const useCarrierIdForm = () => {
  return toTypedSchema(
    z.object({
      availableBalance: z.number().nullable(),
      balance: z.number().nullable(),
      callsign: z.string().nonempty(),
      cargoSpace: z.number().nullable(),
      cargoUsed: z.number().nullable(),
      category: z.string().nonempty("validation.required"),
      currentLocation: z.string().nonempty("validation.required"),
      dockingAccess: z.string().nonempty("validation.required"),
      fuelLevel: z.number().nullable(),
      marketId: z.string().nonempty("validation.required"),
      name: z.string().nonempty("validation.required"),
      owner: z.string().nonempty("validation.required"),
      ownerId: z.string().nonempty("validation.required"),
      reserveBalance: z.number().nullable(),
      services: z
        .array(
          z.object({
            label: z.string().nonempty(),
            name: z.string().nonempty(),
            odyssey: z.boolean(),
          })
        )
        .optional()
        .default([]),
    })
  );
};
