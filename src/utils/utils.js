export default {
    get_screen_height(){
        if(screen.height > 1000) return '600px'

        return '100vh'
    }
}