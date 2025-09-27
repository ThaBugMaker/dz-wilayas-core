/*!
 * dz-wilayas-core v1.0.3
 * (c) 2025 ThaBugMaker
 * Released under the MIT License.
 * https://github.com/ThaBugMaker/dz-wilayas-core
 */

import { Wilaya, Baladiya } from "./types";
import wilayasData from "./data/wilayat-slim.json";
import baladiyatData from "./data/baladiyat-slim.json";

/**
 * Store for Algeria's wilayas and baladiyat data.
 */
export class WilayasStore {
  /** Array of all wilayas */
  private wilayas: Wilaya[];

  /** Array of all baladiyat */
  private baladiyat: Baladiya[];

  /**
   * Initialize the store with data
   */
  constructor() {
    this.wilayas = wilayasData;
    this.baladiyat = baladiyatData;
  }

  /**
   * Get all wilayas
   * @returns {Wilaya[]} Array of all wilayas
   */
  public getAllWilayas(): Wilaya[] {
    return this.wilayas;
  }

  /**
   * Get a wilaya by its code
   * @param code {string} The wilaya code (e.g., '01')
   * @returns {Wilaya | undefined} The matching wilaya or undefined if not found
   */
  public getWilayaByCode(code: string): Wilaya | undefined {
    return this.wilayas.find((w) => w.code === code);
  }

  /**
   * Search wilayas by name
   * @param name {string} Name (or part of name) to search
   * @returns {Wilaya[]} Array of matching wilayas
   */
  public searchWilayaByName(name: string): Wilaya[] {
    return this.wilayas.filter((w) =>
      w.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  /**
   * Get all baladiyat for a given wilaya code
   * @param code {string} Wilaya code
   * @returns {Baladiya[]} Array of matching baladiyat
   */
  public getBaladiyatByWilayaCode(code: string): Baladiya[] {
    return this.baladiyat.filter((b) => b.wilaya_id === code);
  }
}
