class SaleTicket {
    static num = 5
    constructor() {

    }
    sale() {
        if (SaleTicket.num > 0) {
            console.info("恭喜您，抢到一张票，还剩余：" + (--SaleTicket.num) + "张")
                // SaleTicket.num--
                //这里再--，就减去两次啦，
                //或者可以在上面写SaleTicket.num-1，就需要加上SaleTicket.num--
                //在console中一定是前缀--
        } else {
            console.info("没票了！下次早点来")
        }
    }
}
var mySale1 = new SaleTicket()
mySale1.sale()
mySale1.sale()
var mySale2 = new SaleTicket()
mySale2.sale()
mySale2.sale()