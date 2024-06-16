export function loadState<T>(key: string): T | undefined {
  try {
    const jsonState = localStorage.getItem(key);

    if (!jsonState) return undefined

    return JSON.parse(jsonState);
  } catch (err) {
    console.log(err);
    
    return undefined;
  }
}

export function saveState<T>(state: T, key: string | null) {
  const stringState = JSON.stringify(state);

  if (key === null) {
    console.error("Key cannot be null");
    return;
  }
  
  localStorage.setItem(key, stringState);
}