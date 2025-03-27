type StorageKey = "preferred_language";

const getStoredValue = <T>(
  key: StorageKey,
  defaultValue: T,
  validator?: (value: any) => boolean
): T => {
  if (typeof window === "undefined") return defaultValue;

  try {
    const item = localStorage.getItem(key);
    if (!item) return defaultValue;

    const parsedItem = JSON.parse(item);

    if (validator && !validator(parsedItem)) {
      return defaultValue;
    }

    return parsedItem;
  } catch {
    return defaultValue;
  }
};

const setStoredValue = <T>(key: StorageKey, value: T): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
};

export const storage = {
  get: getStoredValue,
  set: setStoredValue,
};
