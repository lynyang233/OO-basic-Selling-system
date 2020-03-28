/*有一个网吧类，只有10台电脑。
定义一个网管类，其中有上机和下机方法，
负责顾客的上机和下机，并且如果没有位置，
则不允许上机。目前有3个网管。模拟顾客上网流程*/
class Bar {
    static num = 10
}
class BarAdministrator {
    constructor(name) {
        this.name = name
    }
    load() {
        if (Bar.num > 0) {
            console.info("成功上机！剩余：" + (--Bar.num) + "台机")
        } else {
            console.info("对不起！没有机子了！下次早点来！")
        }

    }
    dep() {
        if (Bar.num < 10) {
            console.info("成功下机！剩余：" + (++Bar.num) + "台机")
        } else {
            console.info("没人上机啊！10台机子都空着呢！")
        }

    }
}
var adm1 = new BarAdministrator("adm1")
var adm2 = new BarAdministrator("adm2")
var adm3 = new BarAdministrator("adm3")
adm3.dep()
adm1.load()
adm2.load()
adm3.load()
adm3.load()
adm3.load()
adm3.load()
adm3.load()
adm3.load()
adm3.load()
adm3.load()
adm3.load()
adm3.load()
adm1.dep()
adm2.dep()
adm3.dep()