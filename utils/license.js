const licenseList = [
     {
          key: "GPL",
          text: "This license can be called one of the most popular. It is classic for those who make free software. One of the main requirements of this document is that it allows third parties to freely modify the program , but at the same time they have the right to distribute the result only under the same license. This license may have different versions. The latest is the third. The GPL was used by developers of such programs as the Drupal web content management system, the MariaDB database management system, the vector graphics editor InkSkape, and several others. It is interesting to note that SQL uses not only the GPL but also a commercial license."
     },
     {
          key: "LGPL",
          text: "This title translates to GNU Lesser General Public License GPL. For some developers, the GPL is not suitable, as it creates an obligation for them to distribute modified products under the same license. The peculiarities of using this option can be illustrated by how the process of licensing the use of libraries created by a programmer occurs. In this case, it is customary to consider the following three options: When a library provides new functions, and no commercial libraries can perform a similar task, then the use of the GPL is optimal. The developer in the free library has already implemented the existing standard. In this area, there are commercial options with similar functions. In this case, it will be convenient to choose LGPL. When it comes to a new standard that actually competes with a commercial one, the Apache license is appropriate. This standard allows commercial use of the libraries . If modifications are made, the same terms and conditions must be used for distribution. However, simple code usage allows conditions to change."
     },
     {
          key: "Eclipse Public License",
          text: "This document permits distribution under other licenses, including commercial ones . The main condition is that in the modified works, the innovations will be placed in a separate module. This license has gained popularity in the development of Java products. An example is the Clojure programming language, a framework for testing java applications."
     },
     {
          key: "Mozilla Public License",
          text: "Some see this document as a compromise between the GPL and commercial licenses. It is a requirement of the MPL to have public access to certain files . The software product may contain some files under this license, and others without it. After the modification, it is allowed to put the license that is needed (for example, it can be a commercial one), but this is possible only on condition that access to the files released under the MPL is still open. In this case, the end user should be provided with information about the authors of the original software. LibreOffice office, Mozilla browser and other software products were released in accordance with this document."
     },
     {
          key: "Apache License Github",
          text: "AL is called a liberal free license. This feature is due to the fact that there is no requirement to release a derivative product under the same conditions as before . This document is actively used by the Apache Software Foundation. When using it, the following is allowed: The software product is allowed to continue to be used for commercial purposes. Modifications to applications are allowed. Subsequent redistributions must include the name of the original author. When creating a new variant, licensees have no obligation to provide the original product code. This license has gained significant popularity. This can be demonstrated by listing the well-known software products that are released under this type of license: the Android operating system, the framework with which to create enterprise applications in Java, the Apache web server. "
     },
     {
          key: "MIT License",
          text: `MIT License\n\n` + `Copyright (c) 2023 Readme-Bot\n\n` + `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\n` + 'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n' + `THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
     }
];

module.exports = licenseList;