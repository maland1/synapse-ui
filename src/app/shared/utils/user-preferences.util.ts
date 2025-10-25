interface UserPreferences {
  theme: 'light' | 'dark';
  showTooltips?: boolean;
}

const STORAGE_KEY = 'userPrefs';

export function getUserPreferences(): UserPreferences {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }

  return { theme: 'light' };
}

function saveUserPreferences(preferences: UserPreferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
}

export function updateUserPreference<K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) {
  const prefs = getUserPreferences();
  prefs[key] = value;
  saveUserPreferences(prefs);
}