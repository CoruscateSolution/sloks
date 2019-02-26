interface Person{
    name: String
    knowledge: Boolean
    performance: Boolean
}

class People implements Person{
    name: String
    knowledge: Boolean
    performance: Boolean
    constructor(knowledge: Boolean){
        this.knowledge = knowledge
    }
    private humility(){
        return this.knowledge ? true : false
    }
    private worthiness(){
        return this.humility() ? true : false
    }
    private wealth(){
        return this.worthiness() ? true : false
    }
    private duties(){
        this.performance = this.wealth()
        return this.performance ? true : false
    }
    public happiness(){
        return this.duties() ? true : false
    }
}
