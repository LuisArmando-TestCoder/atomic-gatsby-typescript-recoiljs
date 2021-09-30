import os
import sys

def executeConditionalPath(path, callback):
    if not os.path.exists(path):
        print("Creating: ", path)

        callback(path)

def createFile(path, contents):
    file = open(path, "w")
    file.write(contents)
    file.close()

arguments = list(sys.argv)
componentScope = arguments[1]
componentName = arguments[2]
folderPath = f"../src/components/{componentScope}/{componentName}"

executeConditionalPath(
    folderPath,
    lambda path: os.makedirs(path)
)

executeConditionalPath(
    f"{folderPath}/index.tsx",
    lambda path: createFile(
        path,
        "import React from 'react'\n" +
        "import './styles.scss'\n" +
        "\n" +
        "export default ({\n" +
        "\tclassName = '',\n" +
        "\tchildren\n" +
        "}) => {\n" +
        "\treturn (\n" +
        "\t\t<div className={`" + componentName.lower() + " ${className}`}>\n" +
        "\t\t\t{children}\n" +
        "\t\t</div>\n" +
        "\t)\n" +
        "}"
    )
)

executeConditionalPath(
    f"{folderPath}/styles.scss",
    lambda path: createFile(
        path,
        "." + componentName.lower() + " {\n" +
        "\t\n" +
        "}"
    )
)

import modules.export
