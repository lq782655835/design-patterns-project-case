class Folder {
    constructor(name) {
        this.name = name
        this.parent = null // 引用父元素
        this.files = []
    }

    add(file) {
        file.parent = this
        this.files.push(file)
    }

    scan() {
        console.log(name, 'scan')
        for (let file of this.files) {
            file.scan()
        }
    }

    remove() {
        if (this.parent) {
            let parentFiles = this.parent.files
            parentFiles.splice(parentFiles.findIndex(item => item === this), 1)
        }
    }
}

class File {
    constructor(name) {
        this.name = name
        this.parent = null
    }

    add(file) {
        throw new Error('not add file')
    }

    scan() {
        console.log(name, 'scan')
    }

    remove() {
        if (this.parent) {
            let parentFiles = this.parent.files
            parentFiles.splice(parentFiles.findIndex(item => item === this), 1)
        }
    }
}

let languageFolder = new Folder('language')

let jsFolder = new Folder('js')
jsFolder.add(new File('vue'))
jsFolder.add(new File('React'))

// 对象通过add形成上下级关系
languageFolder.add(jsFolder)
languageFolder.add(javaFolder)
...
// 拥有相同的接口
// scan执行的是深度遍历
languageFolder.scan()