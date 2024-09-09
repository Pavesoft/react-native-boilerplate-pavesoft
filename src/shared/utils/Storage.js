import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

const SECURE_STORAGE_KEYS = {
  TOKEN: "TOKEN",
};

const ASYNC_STORAGE_KEYS = {
  USER_ID: "USER_ID",
  IS_LOGGED_IN: "IS_LOGGED_IN",
};

const STORAGE_KEYS = {
  ...SECURE_STORAGE_KEYS,
  ...ASYNC_STORAGE_KEYS,
};

const SecureStorage = {
  get: async (key) => SecureStore.getItemAsync(key),
  set: async (key, value) => {
    SecureStore.setItemAsync(
      key,
      typeof value === "string" ? value : JSON.stringify(value)
    );
  },
  remove: async (key) => SecureStore.deleteItemAsync(key),
  clear: async () => {},
};

const Storage = {
  get: (key) => {
    if (key in SECURE_STORAGE_KEYS) {
      return SecureStorage.get(key);
    }
    return AsyncStorage.getItem(key);
  },
  set: (key, value) => {
    if (key in SECURE_STORAGE_KEYS) {
      return SecureStorage.set(key, value);
    }
    return AsyncStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key) => {
    if (key in SECURE_STORAGE_KEYS) {
      return SecureStorage.remove(key);
    }
    return AsyncStorage.removeItem(key);
  },
  clear: () => {
    return Promise.all([SecureStorage.clear(), AsyncStorage.clear()]);
  },
  KEYS: STORAGE_KEYS,
};

export default Storage;
