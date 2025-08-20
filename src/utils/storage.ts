export const getStorageItem = (key: string): string | null => {
  try {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return null;
  }
};

export const setStorageItem = (key: string, value: string): void => {
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  } catch (error) {
    console.error("Error setting localStorage item:", error);
  }
};

export const removeStorageItem = (key: string): void => {
  try {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  } catch (error) {
    console.error("Error removing localStorage item:", error);
  }
};
