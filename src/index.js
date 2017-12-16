/** @flow */

/*
 * Copyright (c) (2017)
 *
 *  Written by Aikar <aikar@aikar.co>
 *
 *  @license MIT
 *
 */

import {ObjectCreator} from "./creators";
import {JsonObject, JsonObjectBase} from "./json-object";

export type MappingEntry = (Class<any> | Function) & $Shape<{name: string, ObjectCreator: ObjectCreator}>;
export type Config = {
  mappings?: {[key: string]: MappingEntry},
  creators?: {[key: string]: ObjectCreator},
  errorLogger?: Function,
  typeKey?: string,
  errorOnUnknownType?: boolean
}

export interface IJsonObject {
  _deferDeserializing?: boolean;
  deserializeObject: () => Promise<any>;
  rawData: () => any;
}

export {JsonObject, JsonObjectBase, ObjectCreator};
export default JsonObject;

export type DataParameter = {[key: string]: any};
export type DataParameterArray = Array<DataParameter | any>
