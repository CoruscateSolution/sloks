interface King{
    attributes: Array<String>
    actions: Array<String>
}
class Lion implements King{
    attributes: Array<String>
    actions: Array<String>
}

interface Moral{
    virtues: Number
    efforts: Number
    position(): boolean
}
class Person implements Moral{
    virtues
    efforts

    other: Person

    position(){
        if(this.virtues > other.virtues && this.efforts > other.efforts){
            return true
        }
        else{
            return false
        }
    }
}


