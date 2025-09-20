/*!
 * dz-wilayas-core v1.0.0
 * (c) 2025 ThaBugMaker
 * Released under the MIT License.
 * https://github.com/YourUsername/dz-wilayas-core
 */

export interface Wilaya {
  id: string;
  code: string;
  name: string;
  ar_name: string;
}

export interface Baladiya {
  id: string;
  wilaya_id: string;
  name: string;
  ar_name: string;
}
