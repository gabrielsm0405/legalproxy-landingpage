export default {
    get_screen_height(){
        if(screen.height > 1000) return '950'

        else return screen.height.toString()
    }
}