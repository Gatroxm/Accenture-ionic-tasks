import { Injectable } from '@angular/core';
import {
  RemoteConfig,
  fetchAndActivate,
  getValue
} from '@angular/fire/remote-config';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {

  constructor(private remoteConfig: RemoteConfig) {}

  async isCategoriesEnabled(): Promise<boolean> {
    try {
      await fetchAndActivate(this.remoteConfig);

      const value = getValue(
        this.remoteConfig,
        'enable_categories'
      );

      return value.asBoolean();

    } catch (error) {
      console.error('Remote Config error:', error);

      // fallback seguro
      return true;
    }
  }
}