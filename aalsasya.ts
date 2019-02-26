interface Person{
    name: String
    laziness: Boolean

    knowledge()
    wealth()
    goodFriends()
    happiness()
}

class People implements Person{
    constructor(laziness: Boolean){
        this.laziness = laziness
    }

    knowledge(){
        return !this.laziness ? true : false
    }

    wealth(){
        return !this.knowledge() ? true : false
    }

    goodFriends(){
        return !this.wealth() ? true : false
    }

    happiness(){
        return !this.goodFriends() ? true : false
    }
}