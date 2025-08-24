import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";

export default async function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  // `searchParams` is a Promise in this environment, so await it before
  // accessing properties like `state` otherwise TypeScript reports that
  // `state` doesn't exist on the Promise object.
  const params = await searchParams;
  const slices = getSlices(params.state);

  return (
    <SliceSimulator background="bg-[#070815]">
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  );
}
