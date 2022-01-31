/* eslint-disable no-console */
import { STATUS_CODES_CLASSES } from '../../constants';
import { ConstantMemberType, StatusCodeClassObj } from '../../types';
import {
  disableEslintOnFile, generateConstantsStructures, generateFileWithConstants, saveProjectChanges,
} from '../typescriptCompiler';

const PATH_FILENAME = 'src/StatusCodesClasses.ts';

export const generateStatusCodesClasses = async () => {
  try {
    const classes = STATUS_CODES_CLASSES.map(
      ({
        code, key, jsdoc,
      }: StatusCodeClassObj) => ({
        key, value: code, docs: [jsdoc.documentation], type: ConstantMemberType.STRING,
      }),
    );

    const statusCodesClassesMembers = generateConstantsStructures(classes);

    generateFileWithConstants({
      pathFileName: PATH_FILENAME,
      overwrite: true,
      members: statusCodesClassesMembers,
    });

    disableEslintOnFile(PATH_FILENAME);

    await saveProjectChanges();

    console.log(`Successfully updated ${PATH_FILENAME}`);
  } catch (error) {
    console.log(`Error updating ${PATH_FILENAME}`);
  }
};
