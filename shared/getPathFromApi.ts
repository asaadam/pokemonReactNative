export function getPathFromApi(fullUrl: string) {
  return fullUrl.split('/pokemon/')[1];
}
