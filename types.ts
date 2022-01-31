/* eslint-disable no-unused-vars */
import { StatementStructures } from 'ts-morph';

export interface StatusCodeObj {
  code: number;
  description: string;
  key: string;
  jsdoc: {
    reference?: string;
    documentation: string;
    isDeprecated?: boolean;
  };
  isExperimental?: boolean;
  origin: string;
}

export enum ConstantMemberType {
  STRING = 'string',
  NUMBER = 'number',
}
export interface ConstantMember {
  key: string,
  value: any,
  docs?: any,
  type?: ConstantMemberType,
}

export interface GenerateFileWithConstantsParams {
  pathFileName: string,
  members: StatementStructures[],
  overwrite?: boolean,
}

export interface StatusCodeClassObj {
  code: string;
  key: string;
  jsdoc: {
    documentation: string;
  };
}
