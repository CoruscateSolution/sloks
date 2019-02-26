interface Person{
    name
    gentleness
    behaviour
    work

    job()
    suggestion()
    getBehaviour()
}

class People implements Person{
    name: String
    gentleness: Boolean
    behaviour: String
    work: String

    getBehaviour(){
        return this.gentleness ? "ideal" : "material"
    }

    suggestion(){
        this.work = "others"
        this.gentleness = true
        this.behaviour = this.getBehaviour()
    }

    job(){
        this.work = "own"
        this.gentleness = false
        this.behaviour = this.getBehaviour()
    }
}


