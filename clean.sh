
#!/bin/bash

# Remove specified files and directories
git rm -r --cached .gradle
git rm -r --cached build/
git rm -r --cached --ignore-unmatch gradle/wrapper/gradle-wrapper.jar
git rm -r --cached --ignore-unmatch **/src/main/**/build/
git rm -r --cached --ignore-unmatch **/src/test/**/build/

# Remove IntelliJ IDEA files
git rm -r --cached .idea
git rm -r --cached /untitled/.idea
git rm -r --cached /untitled/.gitignore
git rm -r --cached --ignore-unmatch .idea/modules.xml
git rm -r --cached --ignore-unmatch .idea/jarRepositories.xml
git rm -r --cached --ignore-unmatch .idea/compiler.xml
git rm -r --cached --ignore-unmatch .idea/libraries/
git rm -r --cached --ignore-unmatch *.iws
git rm -r --cached --ignore-unmatch *.iml
git rm -r --cached --ignore-unmatch *.ipr
git rm -r --cached --ignore-unmatch out/
git rm -r --cached --ignore-unmatch -- **/src/main/**/out/
git rm -r --cached --ignore-unmatch -- **/src/test/**/out/

# Remove Eclipse files
git rm -r --cached --ignore-unmatch .apt_generated
git rm -r --cached --ignore-unmatch .classpath
git rm -r --cached --ignore-unmatch .factorypath
git rm -r --cached --ignore-unmatch .project
git rm -r --cached --ignore-unmatch .settings
git rm -r --cached --ignore-unmatch .springBeans
git rm -r --cached --ignore-unmatch .sts4-cache
git rm -r --cached --ignore-unmatch bin/
git rm -r --cached --ignore-unmatch -- **/src/main/**/bin/
git rm -r --cached --ignore-unmatch -- **/src/test/**/bin/

# Remove NetBeans files
git rm -r --cached --ignore-unmatch nbproject/private/
git rm -r --cached --ignore-unmatch nbbuild/
git rm -r --cached --ignore-unmatch dist/
git rm -r --cached --ignore-unmatch nbdist/
git rm -r --cached --ignore-unmatch .nb-gradle/

# Remove VS Code files
git rm -r --cached --ignore-unmatch .vscode/

# Remove Mac OS files
git rm -r --cached --ignore-unmatch .DS_Store

# Remove other specified files
git rm -r --cached --ignore-unmatch node_modules/
git rm -r --cached --ignore-unmatch .pnp
git rm -r --cached --ignore-unmatch .pnp.js
git rm -r --cached --ignore-unmatch coverage/
git rm -r --cached --ignore-unmatch build/
git rm -r --cached --ignore-unmatch .DS_Store
git rm -r --cached --ignore-unmatch .env.local
git rm -r --cached --ignore-unmatch .env.development.local
git rm -r --cached --ignore-unmatch .env.test.local
git rm -r --cached --ignore-unmatch .env.production.local
git rm -r --cached --ignore-unmatch npm-debug.log*
git rm -r --cached --ignore-unmatch yarn-debug.log*
git rm -r --cached --ignore-unmatch yarn-error.log*

# Commit the changes
git commit -m "Remove unnecessary files"

# Push the changes to the remote repositorgit push origin <branch-name>
