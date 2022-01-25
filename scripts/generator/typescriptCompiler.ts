import {
  Project,
  StatementStructures,
  StructureKind,
  VariableDeclarationKind,
} from 'ts-morph';
import { DISABLE_ESLINT_COMMENT } from '../../constants';
import { ConstantMember, GenerateFileWithConstantsParams } from '../../types';

const project = new Project({
  tsConfigFilePath: 'tsconfig.json',
});

export const generateFileWithConstants = (params: GenerateFileWithConstantsParams) => {
  const {
    pathFileName, members, overwrite = false,
  } = params;

  const file = project.createSourceFile(pathFileName, {
    statements: members,
  }, {
    overwrite,
  });

  return file;
};

export const saveProjectChanges = async () => project.save();

export const disableEslintOnFile = (pathFileName: string) => {
  const file = project.getSourceFile(pathFileName);
  file?.insertStatements(0, DISABLE_ESLINT_COMMENT);
};

export const generateConstantsStructures = (
  members: ConstantMember[],
): StatementStructures[] => members.map(
  ({ key: name, value, docs }) => ({
    name,
    value,
    docs,
    kind: StructureKind.VariableStatement,
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
    declarations: [{
      name,
      initializer: value.toString(),
    }],
  }),
);
