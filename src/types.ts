/*!
 * dz-wilayas-core
 * (c) 2025 ThaBugMaker
 * Released under the MIT License.
 * https://github.com/ThaBugMaker/dz-wilayas-core
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
