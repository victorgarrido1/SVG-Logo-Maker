//this will be where the text appears
class Text {
    constructor() {
        this.textElement = "";
    }
    render(){
        return `${this.textElement}`
    }
    setText(message,color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }
}

module.exports = { Text };