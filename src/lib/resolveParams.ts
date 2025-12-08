/**
 * Resolve `params` which may be either a value or a Promise.
 * Returns a Promise that resolves to the concrete params value.
 */
export async function resolveParams<T>(params: T | Promise<T>): Promise<T> {
  return await params;
}

export default resolveParams;
