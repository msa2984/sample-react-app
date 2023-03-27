export function checkForNullJson(json: string): boolean {
  if (json) {
    try {
      JSON.parse(json);
    } catch (e) {
      console.error(e);
      console.error("Input prop was not JSON! Cannot parse the ingredient.");
      return false;
    }
  }
  else {
    console.error("The ingredient prop was an empty string! Cannot parse the ingredient.")
    return false;
  }
  return true;
}