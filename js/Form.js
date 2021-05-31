class Form{
    constructor(){
        this.input=createInput("Name")
        this.button=createButton("Start")
        this.greeting=createElement('h3')
    }
    hide() {
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display() {
        var title=createElement('h2')
        title.html("Car Racer Game")
        title.position(450,100)
        this.input.position(450,260)
        this.button.position(580,320)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount+=1
            player.index=playerCount
            player.updateCount(playerCount)
            player.update()
            this.greeting.html("Hello " + player.name)
            this.greeting.position(450,250)
        })
    }
}