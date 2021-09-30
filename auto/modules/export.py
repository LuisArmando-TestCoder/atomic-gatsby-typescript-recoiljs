import os
import fnmatch
import re

def getIndexExportContent(directories, additional, aType):
    importPrefix = ''
    exportSuffix = f'export {aType}' + '{\n'

    for directory in directories:
        importPrefix += f'import {additional} {directory} from \'./{directory}\'\n'
        exportSuffix += f'   {directory},\n'

    exportSuffix += '}\n'

    content = f'{importPrefix}\n{exportSuffix}'

    return content

def createIndexExportFile(folderPath, additional, aType):
    for _, directories, _ in os.walk(folderPath):
        if len(directories) > 0:

            file = open(f'{folderPath}/index.ts',"w+")

            file.write(getIndexExportContent(directories, additional, aType))

            file.close()
        break

def setFolderExports(folderNames, additional = '', aType = ''):
    print('Automatic export defaults: ', folderNames)

    for folderName in folderNames:
        folderPath = f'../src/{folderName}'

        createIndexExportFile(folderPath, additional, aType)

setFolderExports([
    'utils',
    'state',
    'components/strings',
    'components/quarks',
    'components/atoms',
    'components/molecules',
    'components/compounds',
])

setFolderExports([
    'components',
    'types',
], '* as')

setFolderExports([
    'types/strings',
    'types/quarks',
    'types/atoms',
    'types/molecules',
], '', 'type ')