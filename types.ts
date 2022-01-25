import { StatementStructures } from 'ts-morph';

export interface StatusCodeObj {
  code: number;
  description: string;
  key: string;
  jsdoc: {
    reference?: string;
    documentation: string;
  };
  isExperimental?: boolean;
  origin: string;
}

export interface ConstantMember {
  key: string,
  value: any,
  docs?: any,
}

export interface GenerateFileWithConstantsParams {
  pathFileName: string,
  members: StatementStructures[],
  overwrite?: boolean,
}
