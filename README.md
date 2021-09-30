# Atomic Gatsby TypeScript Recoil.js

## 🚀 Quick start

0.  **Get the Gatsby CLI.**
    ```shell
    # install the gatsby command in your environment
    npm i -g gatsby-cli
    ```

1.  **Create a Gatsby site.**
    ```shell
    # create a new project using the atomic-gatsby-react-typescript-recoiljs
    gatsby new my-project-name https://github.com/LuisArmando-TestCoder/atomic-gatsby-typescript-recoiljs
    ```

2. **Create component**
    ```shell
    # The component scopes are: strings, quarks, atoms, molecules, compounds
    cd auto

    # py component.py componentScope componentName
    py component.py strings MyComponent
    ```

    If more scopes are needed they can be added at auto/modules/export.py

3. **Set all exports**
    Use this command whenever creating new folders in:
        - utils
        - state
        - components
        - types

    If more folders are needed they can be added at auto/modules/export.py

    ```shell
    cd auto

    py .\modules\export.py
    ```
