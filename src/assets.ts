const assets = import.meta.glob<any>("/src/assets/**");

export function getAsset(pPath: string) {
  const path = "/src/assets/" + pPath;
  
  if (!assets[path]) throw new Error(`${path} does not exist in assets`);
  return assets[path]();
}